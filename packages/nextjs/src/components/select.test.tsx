import userEvent from "@testing-library/user-event";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { Select } from "./select";

const options = [
  { label: "Personal", value: "personal" },
  { label: "Team", value: "team" }
];

describe("Select", () => {
  beforeEach(() => {
    window.innerWidth = 1280;
    window.dispatchEvent(new Event("resize"));
  });

  it("clears a controlled value when it becomes null", () => {
    const { rerender } = render(<Select options={options} value={options[0]} placeholder="Choose" />);
    rerender(<Select options={options} value={null} placeholder="Choose" />);
    expect(screen.getByText("Choose")).toBeInTheDocument();
    expect(screen.queryByText("Personal")).not.toBeInTheDocument();
  });

  it("creates a new option using the shared API", () => {
    const onChange = vi.fn();
    render(<Select isCreatable options={options} onChange={onChange} />);
    fireEvent.change(screen.getByRole("combobox"), { target: { value: "New tag" } });
    fireEvent.click(screen.getByText('Create "New tag"'));
    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({ label: "New tag", value: "New tag" }),
      expect.objectContaining({ action: "create-option" })
    );
  });

  it("combines asynchronous search and creation", async () => {
    const onCreateOption = vi.fn();
    const loadOptions = vi.fn(async () => options);
    render(<Select isCreatable loadOptions={loadOptions} onCreateOption={onCreateOption} />);
    fireEvent.change(screen.getByRole("combobox"), { target: { value: "New tag" } });
    await waitFor(() => expect(screen.getByText("Personal")).toBeInTheDocument());
    fireEvent.click(await screen.findByText('Create "New tag"'));
    expect(loadOptions).toHaveBeenCalledWith("New tag", expect.any(Function));
    expect(onCreateOption).toHaveBeenCalledWith("New tag");
  });

  it("creates options inside the mobile sheet", async () => {
    window.innerWidth = 375;
    const onChange = vi.fn();
    render(<Select isCreatable options={options} onChange={onChange} mobileSheetTitle="Tags" />);
    const user = userEvent.setup();
    await user.click(screen.getByRole("combobox"));
    await user.type(await screen.findByRole("textbox", { name: "Search Tags" }), "New tag");
    fireEvent.click(screen.getByRole("button", { name: 'Create "New tag"' }));
    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({ value: "New tag" }), expect.objectContaining({ action: "create-option" })
    );
  });

  it("loads callback options when searching in the mobile sheet", async () => {
    window.innerWidth = 375;
    render(<Select mobileSheetTitle="Tags" loadOptions={(query, callback) => {
      callback(options.filter(option => option.label.includes(query)));
    }} />);
    fireEvent.mouseDown(screen.getByRole("combobox"));
    fireEvent.change(await screen.findByRole("textbox", { name: "Search Tags" }), {
      target: { value: "Team" }
    });
    expect(await screen.findByRole("button", { name: "Team" })).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Personal" })).not.toBeInTheDocument();
  });

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
      <Select
        isCreatable
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
      <Select
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
