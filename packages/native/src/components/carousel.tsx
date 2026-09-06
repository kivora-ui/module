import * as React from "react";
import {
  AppState,
  Pressable,
  Text,
  View,
  useWindowDimensions,
  type ViewProps,
} from "react-native";
import { ReduceMotion, useReducedMotion } from "react-native-reanimated";
import NativeCarousel, {
  type ICarouselInstance,
} from "react-native-reanimated-carousel";
import ArrowLeft from "lucide-react-native/icons/arrow-left";
import ArrowRight from "lucide-react-native/icons/arrow-right";
import ArrowUp from "lucide-react-native/icons/arrow-up";
import ArrowDown from "lucide-react-native/icons/arrow-down";
import Play from "lucide-react-native/icons/play";
import Pause from "lucide-react-native/icons/pause";
import { useKivoraTheme } from "../provider";
import { Button, type ButtonProps } from "./button";
import { styledView } from "../lib/primitives";

export interface CarouselSettings {
  autoplay?: boolean;
  autoplaySpeed?: number;
  infinite?: boolean;
  dots?: boolean;
  arrows?: boolean;
  initialSlide?: number;
  /** Visible slides, including fractions (e.g. 1.25 previews the next slide). */
  slidesToShow?: number;
  slidesToScroll?: number;
  speed?: number;
  swipe?: boolean;
  draggable?: boolean;
  touchMove?: boolean;
  vertical?: boolean;
  afterChange?: (index: number) => void;
  responsive?: {
    breakpoint: number;
    settings: Omit<CarouselSettings, "responsive">;
  }[];
}
function lastSlide(count: number, settings: CarouselSettings) {
  return Math.ceil(lastOffset(count, settings));
}
function visibleSlides(count: number, settings: CarouselSettings) {
  return Math.max(1, Math.min(count || 1, Number.isFinite(settings.slidesToShow) ? settings.slidesToShow! : 1));
}
function lastOffset(count: number, settings: CarouselSettings) {
  return Math.max(0, count - visibleSlides(count, settings));
}
export interface CarouselApi {
  scrollNext: () => void;
  scrollPrev: () => void;
  scrollTo: (index: number) => void;
  selectedScrollSnap: () => number;
  slickNext: () => void;
  slickPrev: () => void;
  slickGoTo: (index: number, dontAnimate?: boolean) => void;
  slickPlay: () => void;
  slickPause: () => void;
}
interface State {
  index: number;
  count: number;
  settings: CarouselSettings;
  vertical: boolean;
  playing: boolean;
  canPlay: boolean;
  play: (value: boolean) => void;
  go: (value: number, dontAnimate?: boolean) => void;
  setCount: (count: number) => void;
  settle: (index: number) => void;
  ref: React.RefObject<ICarouselInstance | null>;
  reducedMotion: boolean;
  moving: React.MutableRefObject<boolean>;
}
const Context = React.createContext<State | null>(null);
function useCarousel() {
  const context = React.useContext(Context);
  if (!context) throw new Error("Carousel controls require Carousel");
  return context;
}
export interface CarouselProps extends ViewProps {
  opts?: CarouselSettings;
  settings?: CarouselSettings;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
  onIndexChange?: (index: number) => void;
}
export function Carousel({
  settings,
  opts,
  orientation = "horizontal",
  setApi,
  onIndexChange,
  children,
  ...props
}: CarouselProps) {
  const { width } = useWindowDimensions();
  const reducedMotion = useReducedMotion();
  const config = React.useMemo(() => {
    const base = {
      infinite: true,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      ...opts,
      ...settings,
    };
    const responsive = [...(base.responsive ?? [])]
      .sort((a, b) => a.breakpoint - b.breakpoint)
      .find((item) => width <= item.breakpoint);
    return { ...base, ...responsive?.settings };
  }, [opts, settings, width]);
  const [index, setIndex] = React.useState(
    Math.max(0, Math.floor(config.initialSlide ?? 0)),
  );
  const [count, setCount] = React.useState(0);
  const [playing, play] = React.useState(config.autoplay ?? false);
  const [active, setActive] = React.useState(
    AppState.currentState === "active",
  );
  const ref = React.useRef<ICarouselInstance>(null);
  const moving = React.useRef(false);
  const latest = React.useRef({ index, count, config, onIndexChange });
  latest.current = { index, count, config, onIndexChange };
  React.useEffect(() => {
    play(config.autoplay ?? false);
  }, [config.autoplay]);
  React.useEffect(() => {
    const sub = AppState.addEventListener("change", (state) =>
      setActive(state === "active"),
    );
    return () => sub.remove();
  }, []);
  const settle = React.useCallback((next: number) => {
    const current = latest.current;
    if (next === current.index) return;
    latest.current = { ...current, index: next };
    setIndex(next);
    current.onIndexChange?.(next);
    current.config.afterChange?.(next);
  }, []);
  const go = React.useCallback(
    (next: number, dontAnimate = false) => {
      const current = latest.current;
      if (!current.count || !Number.isFinite(next)) return;
      const target = current.config.infinite
        ? ((Math.floor(next) % current.count) + current.count) % current.count
        : Math.max(
            0,
            Math.min(
              lastSlide(current.count, current.config),
              Math.floor(next),
            ),
          );
      ref.current?.scrollTo({
        index: current.config.infinite ? target : Math.min(target, lastOffset(current.count, current.config)),
        animated: !dontAnimate && !reducedMotion,
        onFinished: () => settle(target),
      });
    },
    [reducedMotion, settle],
  );
  const api = React.useMemo<CarouselApi>(() => {
    const next = () =>
      go(
        latest.current.index +
          Math.max(1, latest.current.config.slidesToScroll ?? 1),
      );
    const prev = () =>
      go(
        latest.current.index -
          Math.max(1, latest.current.config.slidesToScroll ?? 1),
      );
    return {
      scrollNext: next,
      scrollPrev: prev,
      scrollTo: go,
      selectedScrollSnap: () => latest.current.index,
      slickNext: next,
      slickPrev: prev,
      slickGoTo: go,
      slickPlay: () => play(true),
      slickPause: () => play(false),
    };
  }, [go]);
  React.useEffect(() => {
    setApi?.(api);
  }, [api, setApi]);
  const vertical = config.vertical ?? orientation === "vertical";
  const canPlay = !reducedMotion && active && count > 1;
  React.useEffect(() => {
    if (!playing || !canPlay) return;
    const timer = setInterval(
      () => {
        if (moving.current) return;
        if (!config.infinite && index >= lastSlide(count, config)) {
          play(false);
          return;
        }
        go(index + Math.max(1, config.slidesToScroll ?? 1));
      },
      Math.max(500, config.autoplaySpeed ?? 4000),
    );
    return () => clearInterval(timer);
  }, [
    playing,
    canPlay,
    index,
    count,
    config.infinite,
    config.slidesToShow,
    config.slidesToScroll,
    config.autoplaySpeed,
    go,
  ]);

  return (
    <Context.Provider
      value={{
        index,
        count,
        settings: config,
        vertical,
        playing,
        canPlay,
        play,
        go,
        settle,
        setCount,
        ref,
        reducedMotion,
        moving,
      }}
    >
      <View {...props}>
        {children}
        {config.arrows && (
          <CarouselControls>
            <CarouselPrevious />
            <CarouselNext />
          </CarouselControls>
        )}
      </View>
    </Context.Provider>
  );
}
export interface CarouselContentProps extends ViewProps {
  /** Viewport height; use enough room for the slide's largest text size. */
  height?: number;
}
function slides(children: React.ReactNode): React.ReactNode[] {
  return React.Children.toArray(children).flatMap((child) =>
    React.isValidElement<{ children?: React.ReactNode }>(child) &&
    child.type === React.Fragment
      ? slides(child.props.children)
      : [child],
  );
}
export function CarouselContent({
  children,
  height = 220,
  ...props
}: CarouselContentProps) {
  const c = useCarousel();
  const [width, setWidth] = React.useState(0);
  const position = React.useRef(0);
  const items = React.useMemo(() => slides(children), [children]);
  React.useLayoutEffect(() => {
    c.setCount(items.length);
    const last = c.settings.infinite
      ? Math.max(0, items.length - 1)
      : lastSlide(items.length, c.settings);
    if (c.index > last) c.settle(last);
  }, [
    c.setCount,
    c.settle,
    c.index,
    c.settings.infinite,
    c.settings.slidesToShow,
    items.length,
  ]);
  const show = visibleSlides(items.length, c.settings);

  return (
    <View
      {...props}
      onLayout={(event) => {
        setWidth(event.nativeEvent.layout.width);
        props.onLayout?.(event);
      }}
    >
      {width > 0 && items.length > 0 && (
        <NativeCarousel
          key={`${width}-${height}-${c.vertical}-${show}-${items.length}`}
          ref={c.ref}
          data={items}
          defaultIndex={Math.min(
            c.index,
            c.settings.infinite
              ? items.length - 1
              : lastOffset(items.length, c.settings),
          )}
          width={c.vertical ? width : width / show}
          height={c.vertical ? height / show : height}
          vertical={c.vertical}
          style={{ width, height }}
          loop={c.settings.infinite && items.length > show}
          autoFillData={false}
          enabled={
            items.length > show &&
            c.settings.swipe !== false &&
            c.settings.draggable !== false &&
            c.settings.touchMove !== false
          }
          autoPlay={false}
          scrollAnimationDuration={
            c.reducedMotion ? 0 : Math.max(0, c.settings.speed ?? 350)
          }
          withAnimation={{
            type: "timing",
            config: {
              duration: c.reducedMotion ? 0 : (c.settings.speed ?? 350),
              reduceMotion: ReduceMotion.System,
            },
          }}
          onConfigurePanGesture={(gesture) => {
            if (!c.vertical)
              gesture.activeOffsetX([-10, 10]).failOffsetY([-12, 12]);
          }}
          onScrollStart={() => {
            c.moving.current = true;
          }}
          onScrollEnd={() => {
            c.moving.current = false;
          }}
          onProgressChange={(_, progress) => { position.current = progress; }}
          onSnapToItem={(next) => c.settle(!c.settings.infinite && position.current >= lastOffset(items.length, c.settings) - 0.001
            ? lastSlide(items.length, c.settings) : next)}
          overscrollEnabled={false}
          renderItem={({ item, index }) => {
            const start = c.settings.infinite ? c.index : Math.min(c.index, lastOffset(items.length, c.settings));
            const visible = c.settings.infinite
              ? (index - c.index + items.length) % items.length < show
              : index + 1 > start && index < start + show;
            return (
              <View
                style={{ flex: 1 }}
                accessibilityElementsHidden={!visible}
                importantForAccessibility={
                  visible ? "auto" : "no-hide-descendants"
                }
              >
                {item}
              </View>
            );
          }}
        />
      )}
      {c.settings.dots && <CarouselDots />}
    </View>
  );
}
export const CarouselItem: ReturnType<typeof styledView> = styledView(
  "CarouselItem",
  "flex-1 px-1",
);
export type CarouselItemProps = ViewProps;
export const CarouselControls: ReturnType<typeof styledView> = styledView(
  "CarouselControls",
  "flex-row flex-wrap items-center justify-center gap-2 mt-3",
);
export type CarouselControlsProps = ViewProps;
export type CarouselButtonProps = ButtonProps;
export function CarouselDots(props: ViewProps) {
  const c = useCarousel();
  const { resolvedColorMode } = useKivoraTheme();
  return (
    <View {...props} className="flex-row flex-wrap justify-center mt-2">
      {Array.from(
        {
          length:
            c.count === 0
              ? 0
              : c.settings.infinite
                ? c.count
                : lastSlide(c.count, c.settings) + 1,
        },
        (_, index) => (
          <Pressable
            key={index}
            accessibilityRole="button"
            accessibilityLabel={`Ir a diapositiva ${index + 1}`}
            accessibilityState={{ selected: index === c.index }}
            onPress={() => c.go(index)}
            style={{
              width: 44,
              height: 44,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                height: 8,
                width: index === c.index ? 20 : 8,
                borderRadius: 4,
                backgroundColor:
                  resolvedColorMode === "dark" ? "#fafafa" : "#171717",
                opacity: index === c.index ? 1 : 0.35,
              }}
            />
          </Pressable>
        ),
      )}
    </View>
  );
}
function Control({
  action,
  ...props
}: CarouselButtonProps & { action: "next" | "prev" | "play" | "pause" }) {
  const c = useCarousel();
  const { resolvedColorMode } = useKivoraTheme();
  const Icon =
    action === "next"
      ? c.vertical
        ? ArrowDown
        : ArrowRight
      : action === "prev"
        ? c.vertical
          ? ArrowUp
          : ArrowLeft
        : action === "play"
          ? Play
          : Pause;
  const disabled =
    props.disabled ||
    (action === "play"
      ? c.playing || !c.canPlay
      : action === "pause"
        ? !c.playing
        : c.count < 2 ||
          (!c.settings.infinite &&
            (action === "prev"
              ? c.index <= 0
              : c.index >= lastSlide(c.count, c.settings))));
  const label = {
    next: "Siguiente diapositiva",
    prev: "Diapositiva anterior",
    play: "Reproducir carrusel",
    pause: "Pausar carrusel",
  }[action];
  return (
    <Button
      variant="outline"
      size="icon"
      style={{ width: 48, height: 48, borderRadius: 24 }}
      accessibilityLabel={label}
      {...props}
      disabled={disabled}
      onPress={(event) => {
        props.onPress?.(event);
        if (event.defaultPrevented) return;
        if (action === "play" || action === "pause") c.play(action === "play");
        else
          c.go(
            c.index +
              (action === "next" ? 1 : -1) *
                Math.max(1, c.settings.slidesToScroll ?? 1),
          );
      }}
    >
      {props.children ?? (
        <Icon
          size={20}
          color={resolvedColorMode === "dark" ? "#fafafa" : "#171717"}
        />
      )}
    </Button>
  );
}
export function CarouselNext(props: CarouselButtonProps) {
  return <Control action="next" {...props} />;
}
export function CarouselPrevious(props: CarouselButtonProps) {
  return <Control action="prev" {...props} />;
}
export function CarouselPlay(props: CarouselButtonProps) {
  return <Control action="play" {...props} />;
}
export function CarouselPause(props: CarouselButtonProps) {
  return <Control action="pause" {...props} />;
}
