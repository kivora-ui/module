"use client";

import * as React from "react";
import SlickSlider, { type Settings } from "react-slick";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import { cn } from "@kivora/theme";
import { Button } from "./button";

export type CarouselApi = SlickSlider | null;
export type CarouselSettings = Settings;

type CarouselOrientation = "horizontal" | "vertical";

interface CarouselContextValue {
  orientation: CarouselOrientation;
  sliderRef: React.RefObject<SlickSlider | null>;
}

const CarouselContext = React.createContext<CarouselContextValue | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("Carousel controls must be used within a Carousel");
  }
  return context;
}

function isCarouselControl(child: React.ReactNode) {
  return (
    React.isValidElement(child) &&
    typeof child.type !== "string" &&
    ["CarouselControls", "CarouselPrevious", "CarouselNext", "CarouselPlay", "CarouselPause"].includes(
      (child.type as { displayName?: string }).displayName ?? ""
    )
  );
}

function collectCarouselSlides(children: React.ReactNode): React.ReactNode[] {
  return React.Children.toArray(children).flatMap((child) => {
    if (!React.isValidElement(child)) {
      return child;
    }

    if (child.type === React.Fragment) {
      return collectCarouselSlides((child.props as { children?: React.ReactNode }).children);
    }

    if (
      typeof child.type !== "string" &&
      (child.type as { displayName?: string }).displayName === "CarouselContent"
    ) {
      return collectCarouselSlides((child.props as { children?: React.ReactNode }).children);
    }

    return child;
  });
}

export interface CarouselProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  opts?: CarouselSettings;
  orientation?: CarouselOrientation;
  settings?: CarouselSettings;
  setApi?: (api: CarouselApi) => void;
}

export const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  ({ children, className, opts, orientation = "horizontal", settings, setApi, ...props }, ref) => {
    const sliderRef = React.useRef<SlickSlider | null>(null);
    const childArray = React.Children.toArray(children);
    const controls = childArray.filter(isCarouselControl);
    const slides = collectCarouselSlides(childArray.filter((child) => !isCarouselControl(child)));

    React.useEffect(() => {
      setApi?.(sliderRef.current);
    }, [setApi]);

    const slickSettings = React.useMemo<CarouselSettings>(
      () => ({
        accessibility: true,
        adaptiveHeight: false,
        arrows: false,
        dots: true,
        draggable: true,
        infinite: true,
        pauseOnFocus: true,
        pauseOnHover: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        speed: 500,
        swipe: true,
        swipeToSlide: false,
        touchMove: true,
        useCSS: true,
        useTransform: true,
        vertical: orientation === "vertical",
        verticalSwiping: orientation === "vertical",
        ...opts,
        ...settings
      }),
      [opts, orientation, settings]
    );

    return (
      <CarouselContext.Provider value={{ orientation, sliderRef }}>
        <div
          ref={ref}
          className={cn("kv-carousel relative", orientation === "vertical" && "kv-carousel-vertical", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          <SlickSlider ref={sliderRef} {...slickSettings}>
            {slides}
          </SlickSlider>
          {controls}
        </div>
      </CarouselContext.Provider>
    );
  }
);
Carousel.displayName = "Carousel";

export interface CarouselContentProps {
  children?: React.ReactNode;
  className?: string;
}

export function CarouselContent({ children }: CarouselContentProps) {
  return <>{children}</>;
}
CarouselContent.displayName = "CarouselContent";

export interface CarouselItemProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CarouselItem = React.forwardRef<HTMLDivElement, CarouselItemProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("h-full px-2 outline-none", className)}
      role="group"
      aria-roledescription="slide"
      {...props}
    />
  )
);
CarouselItem.displayName = "CarouselItem";

export type CarouselButtonProps = React.ComponentPropsWithoutRef<typeof Button>;

export interface CarouselControlsProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CarouselControls = React.forwardRef<HTMLDivElement, CarouselControlsProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center justify-center gap-2", className)} {...props} />
  )
);
CarouselControls.displayName = "CarouselControls";

export const CarouselPrevious = React.forwardRef<HTMLButtonElement, CarouselButtonProps>(
  ({ className, variant = "outline", size = "icon", onClick, ...props }, ref) => {
    const { orientation, sliderRef } = useCarousel();

    return (
      <Button
        ref={ref}
        className={cn(
          "absolute z-10 h-9 w-9 rounded-full border-border/70 bg-background/95 shadow-md backdrop-blur",
          orientation === "horizontal"
            ? "-left-4 top-1/2 -translate-y-1/2 sm:-left-11"
            : "left-1/2 -top-11 -translate-x-1/2 rotate-90",
          className
        )}
        onClick={(event) => {
          onClick?.(event);
          if (!event.defaultPrevented) sliderRef.current?.slickPrev();
        }}
        size={size}
        type="button"
        variant={variant}
        {...props}
      >
        <ArrowLeft className="h-4 w-4" />
        <span className="sr-only">Previous slide</span>
      </Button>
    );
  }
);
CarouselPrevious.displayName = "CarouselPrevious";

export const CarouselNext = React.forwardRef<HTMLButtonElement, CarouselButtonProps>(
  ({ className, variant = "outline", size = "icon", onClick, ...props }, ref) => {
    const { orientation, sliderRef } = useCarousel();

    return (
      <Button
        ref={ref}
        className={cn(
          "absolute z-10 h-9 w-9 rounded-full border-border/70 bg-background/95 shadow-md backdrop-blur",
          orientation === "horizontal"
            ? "-right-4 top-1/2 -translate-y-1/2 sm:-right-11"
            : "bottom-[-2.75rem] left-1/2 -translate-x-1/2 rotate-90",
          className
        )}
        onClick={(event) => {
          onClick?.(event);
          if (!event.defaultPrevented) sliderRef.current?.slickNext();
        }}
        size={size}
        type="button"
        variant={variant}
        {...props}
      >
        <ArrowRight className="h-4 w-4" />
        <span className="sr-only">Next slide</span>
      </Button>
    );
  }
);
CarouselNext.displayName = "CarouselNext";

export const CarouselPlay = React.forwardRef<HTMLButtonElement, CarouselButtonProps>(
  ({ className, variant = "outline", size = "icon", onClick, ...props }, ref) => {
    const { sliderRef } = useCarousel();

    return (
      <Button
        ref={ref}
        className={cn("h-9 w-9 rounded-full border-border/70", className)}
        onClick={(event) => {
          onClick?.(event);
          if (!event.defaultPrevented) sliderRef.current?.slickPlay();
        }}
        size={size}
        type="button"
        variant={variant}
        {...props}
      >
        <Play className="h-4 w-4" />
        <span className="sr-only">Play carousel</span>
      </Button>
    );
  }
);
CarouselPlay.displayName = "CarouselPlay";

export const CarouselPause = React.forwardRef<HTMLButtonElement, CarouselButtonProps>(
  ({ className, variant = "outline", size = "icon", onClick, ...props }, ref) => {
    const { sliderRef } = useCarousel();

    return (
      <Button
        ref={ref}
        className={cn("h-9 w-9 rounded-full border-border/70", className)}
        onClick={(event) => {
          onClick?.(event);
          if (!event.defaultPrevented) sliderRef.current?.slickPause();
        }}
        size={size}
        type="button"
        variant={variant}
        {...props}
      >
        <Pause className="h-4 w-4" />
        <span className="sr-only">Pause carousel</span>
      </Button>
    );
  }
);
CarouselPause.displayName = "CarouselPause";
