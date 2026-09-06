// @vitest-environment jsdom

import * as React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

const slickMocks = vi.hoisted(() => ({
  pause: vi.fn(),
  play: vi.fn(),
  next: vi.fn(),
  prev: vi.fn()
}));

vi.mock("react-slick", () => ({
  default: React.forwardRef(
    (
      props: {
        autoplay?: boolean;
        children?: React.ReactNode;
        dots?: boolean;
        slidesToShow?: number;
      },
      ref: React.ForwardedRef<unknown>
    ) => {
      React.useImperativeHandle(ref, () => ({
        slickGoTo: vi.fn(),
        slickNext: slickMocks.next,
        slickPause: slickMocks.pause,
        slickPlay: slickMocks.play,
        slickPrev: slickMocks.prev
      }));

      return (
        <div
          data-autoplay={String(props.autoplay)}
          data-dots={String(props.dots)}
          data-slide-count={React.Children.count(props.children)}
          data-slides-to-show={props.slidesToShow}
          data-testid="slick-slider"
        >
          {props.children}
        </div>
      );
    }
  )
}));

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPause,
  CarouselPlay,
  CarouselPrevious
} from "./carousel";

describe("Carousel", () => {
  it("renders slides and navigation", () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Slide 1</CarouselItem>
          <CarouselItem>Slide 2</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    );

    expect(screen.getByRole("region")).toHaveAttribute("aria-roledescription", "carousel");
    expect(screen.getByTestId("slick-slider")).toHaveAttribute("data-dots", "true");
    expect(screen.getByTestId("slick-slider")).toHaveAttribute("data-slide-count", "2");
    expect(screen.getByText("Slide 1")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Next slide" }));
    expect(slickMocks.next).toHaveBeenCalledTimes(1);
  });

  it("passes slick settings and exposes autoplay controls", () => {
    render(
      <Carousel settings={{ autoplay: true, dots: false, slidesToShow: 3 }}>
        <CarouselItem>Slide 1</CarouselItem>
        <CarouselPlay />
        <CarouselPause />
      </Carousel>
    );

    expect(screen.getByTestId("slick-slider")).toHaveAttribute("data-autoplay", "true");
    expect(screen.getByTestId("slick-slider")).toHaveAttribute("data-slides-to-show", "3");

    fireEvent.click(screen.getByRole("button", { name: "Play carousel" }));
    fireEvent.click(screen.getByRole("button", { name: "Pause carousel" }));

    expect(slickMocks.play).toHaveBeenCalledTimes(1);
    expect(slickMocks.pause).toHaveBeenCalledTimes(1);
  });
});
