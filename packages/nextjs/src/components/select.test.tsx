import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { AsyncSelect, CreatableSelect, Select } from "./select";

const options = [
  { label: "Personal", value: "personal" },
  { label: "Team", value: "team" }
];

describe("Select", () => {
  it("shows a selected value", () => {
    render(<Select aria-label="Workspace" options={options} value={options[1]} />);

    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(screen.getByText("Team")).toBeInTheDocument();
  });

  it("shows a placeholder without a value", () => {
    render(<Select aria-label="Workspace" options={options} placeholder="Choose workspace" />);

    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(screen.getByText("Choose workspace")).toBeInTheDocument();
  });

  it("opens options in a bottom sheet on mobile", async () => {
    window.innerWidth = 375;
    window.dispatchEvent(new Event("resize"));

    render(
      <Select
        aria-label="Workspace"
        mobileSheetTitle="Choose workspace"
        options={options}
        placeholder="Choose workspace"
      />
    );

    fireEvent.mouseDown(screen.getByRole("combobox"));

    await waitFor(() => {
      expect(screen.getByRole("dialog", { name: "Choose workspace" })).toBeInTheDocument();
    });
    expect(screen.getByRole("button", { name: "Personal" })).toBeInTheDocument();
  });

  it("opens creatable options in a bottom sheet on mobile", async () => {
    window.innerWidth = 375;
    window.dispatchEvent(new Event("resize"));

    render(
      <CreatableSelect
        aria-label="Tag"
        mobileSheetTitle="Choose tag"
        options={options}
        placeholder="Choose tag"
      />
    );

    fireEvent.mouseDown(screen.getByRole("combobox"));

    await waitFor(() => {
      expect(screen.getByRole("dialog", { name: "Choose tag" })).toBeInTheDocument();
    });
    expect(screen.getByRole("button", { name: "Personal" })).toBeInTheDocument();
  });

  it("loads async options in a bottom sheet on mobile", async () => {
    window.innerWidth = 375;
    window.dispatchEvent(new Event("resize"));

    render(
      <AsyncSelect
        aria-label="Repository"
        defaultOptions
        loadOptions={() => Promise.resolve(options)}
        mobileSheetTitle="Choose repository"
        placeholder="Choose repository"
      />
    );

    fireEvent.mouseDown(screen.getByRole("combobox"));

    await waitFor(() => {
      expect(screen.getByRole("dialog", { name: "Choose repository" })).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByRole("button", { name: "Personal" })).toBeInTheDocument();
    });
  });

  it("locks body scroll while the mobile bottom sheet is open", async () => {
    window.innerWidth = 375;
    window.dispatchEvent(new Event("resize"));
    document.body.style.overflow = "auto";

    render(
      <Select
        aria-label="Workspace"
        mobileSheetTitle="Choose workspace"
        options={options}
        placeholder="Choose workspace"
      />
    );

    fireEvent.mouseDown(screen.getByRole("combobox"));

    await waitFor(() => {
      expect(document.body.style.overflow).toBe("hidden");
    });

    fireEvent.click(screen.getByRole("button", { name: "Close" }));

    await waitFor(() => {
      expect(document.body.style.overflow).toBe("auto");
    });
    document.body.style.overflow = "";
  });
});
