import type { Meta, StoryObj } from "@storybook/react";
import {
  Badge,
  Button,
  Carousel,
  CarouselControls,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPause,
  CarouselPlay,
  CarouselPrevious
} from "@kivora/nextjs";

const meta = {
  title: "Components/Carousel",
  component: Carousel,
  parameters: { layout: "centered" }
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

const slides = [
  { title: "Analytics", tone: "bg-sky-100 text-sky-950", stat: "42k" },
  { title: "Revenue", tone: "bg-emerald-100 text-emerald-950", stat: "$128k" },
  { title: "Retention", tone: "bg-violet-100 text-violet-950", stat: "91%" },
  { title: "Latency", tone: "bg-amber-100 text-amber-950", stat: "124ms" },
  { title: "Pipeline", tone: "bg-rose-100 text-rose-950", stat: "18" },
  { title: "Quality", tone: "bg-cyan-100 text-cyan-950", stat: "A+" }
];

function getSlide(index: number) {
  return slides[index % slides.length] ?? { title: "Metric", tone: "bg-muted text-foreground", stat: "0" };
}

function MetricSlide({ index }: { index: number }) {
  const slide = getSlide(index);

  return (
    <div className={`flex aspect-video flex-col justify-between rounded-md border border-border/60 p-5 shadow-sm ${slide.tone}`}>
      <Badge className="w-fit bg-background/80 text-foreground" variant="outline">
        Slide {index + 1}
      </Badge>
      <div>
        <p className="text-sm font-medium opacity-70">{slide.title}</p>
        <p className="mt-1 text-3xl font-semibold">{slide.stat}</p>
      </div>
    </div>
  );
}

export const Default: Story = {
  render: () => (
    <Carousel className="w-[min(88vw,420px)]">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <MetricSlide index={index} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
};

export const Responsive: Story = {
  render: () => (
    <Carousel
      className="w-[min(92vw,860px)]"
      settings={{
        dots: true,
        infinite: true,
        responsive: [
          { breakpoint: 768, settings: { slidesToShow: 1 } },
          { breakpoint: 1024, settings: { slidesToShow: 2 } }
        ],
        slidesToScroll: 1,
        slidesToShow: 3
      }}
    >
      <CarouselContent>
        {Array.from({ length: 6 }).map((_, index) => (
          <CarouselItem key={index}>
            <MetricSlide index={index} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
};

export const Autoplay: Story = {
  render: () => (
    <div className="space-y-4">
      <Carousel
        className="w-[min(88vw,460px)]"
        settings={{
          autoplay: true,
          autoplaySpeed: 1800,
          infinite: true,
          pauseOnHover: true
        }}
      >
        <CarouselContent>
          {Array.from({ length: 4 }).map((_, index) => (
            <CarouselItem key={index}>
              <MetricSlide index={index} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        <CarouselControls className="mt-3">
          <CarouselPlay />
          <CarouselPause />
        </CarouselControls>
      </Carousel>
    </div>
  )
};

export const Fade: Story = {
  render: () => (
    <Carousel
      className="w-[min(88vw,460px)]"
      settings={{
        fade: true,
        infinite: true,
        speed: 420
      }}
    >
      <CarouselContent>
        {Array.from({ length: 4 }).map((_, index) => (
          <CarouselItem key={index}>
            <MetricSlide index={index} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
};

export const CenterMode: Story = {
  render: () => (
    <Carousel
      className="w-[min(94vw,760px)]"
      settings={{
        centerMode: true,
        centerPadding: "72px",
        dots: true,
        focusOnSelect: true,
        infinite: true,
        responsive: [{ breakpoint: 640, settings: { centerPadding: "32px" } }],
        slidesToShow: 1
      }}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <MetricSlide index={index} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
};

export const Vertical: Story = {
  render: () => (
    <div className="flex min-h-[440px] items-center">
      <Carousel
        className="w-[min(88vw,420px)]"
        orientation="vertical"
        settings={{
          dots: false,
          infinite: true,
          slidesToShow: 2,
          speed: 300
        }}
      >
        <CarouselContent>
          {Array.from({ length: 6 }).map((_, index) => (
            <CarouselItem key={index}>
              <Button className="h-28 w-full justify-start rounded-md" variant="outline">
                <span className="text-lg font-semibold">{getSlide(index).title}</span>
                <span className="ml-auto text-muted-foreground">{getSlide(index).stat}</span>
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
};
