// @vitest-environment jsdom

import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Questionnaire } from "./questionnaire";

const questions = [
  {
    id: "direction",
    title: "What should we build?",
    options: [{ label: "Dashboard", value: "dashboard" }]
  }
];

describe("Questionnaire", () => {
  it("collects an answer and completes", () => {
    const onComplete = vi.fn();

    const { container } = render(<Questionnaire questions={questions} onComplete={onComplete} />);

    expect(container.firstChild).toHaveClass("sm:w-[32rem]");
    fireEvent.click(screen.getByText("Dashboard"));
    fireEvent.click(screen.getByRole("button", { name: "Finish" }));

    expect(onComplete).toHaveBeenCalledWith({ direction: "dashboard" });
  });
});
