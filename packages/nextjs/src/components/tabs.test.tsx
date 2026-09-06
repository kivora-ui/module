// @vitest-environment jsdom
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";

describe("Tabs", () => {
  it("renders the default active tab", () => {
    render(
      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">Cuenta</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">Contenido de cuenta</TabsContent>
        <TabsContent value="password">Contenido de password</TabsContent>
      </Tabs>
    );

    expect(screen.getByRole("tab", { name: "Cuenta" })).toHaveAttribute("aria-selected", "true");
    expect(screen.getByText("Contenido de cuenta")).toBeInTheDocument();
  });

  it("switches content when another tab is selected", async () => {
    render(
      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">Cuenta</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">Contenido de cuenta</TabsContent>
        <TabsContent value="password">Contenido de password</TabsContent>
      </Tabs>
    );

    await userEvent.click(screen.getByRole("tab", { name: "Password" }));

    expect(screen.getByRole("tab", { name: "Password" })).toHaveAttribute("aria-selected", "true");
    expect(screen.getByText("Contenido de password")).toBeInTheDocument();
  });

  it("supports list and trigger variants", () => {
    render(
      <Tabs defaultValue="overview">
        <TabsList fullWidth variant="underline" size="lg">
          <TabsTrigger value="overview" variant="underline" size="lg">
            Overview
          </TabsTrigger>
          <TabsTrigger value="activity" variant="underline" size="lg" disabled>
            Activity
          </TabsTrigger>
        </TabsList>
      </Tabs>
    );

    expect(screen.getByRole("tablist")).toHaveAttribute("data-variant", "underline");
    expect(screen.getByRole("tablist")).toHaveClass("mb-3");
    expect(screen.getByRole("tablist")).toHaveClass("w-full");
    expect(screen.getByRole("tab", { name: "Overview" })).toHaveAttribute("data-size", "lg");
    expect(screen.getByRole("tab", { name: "Activity" })).toBeDisabled();
  });

  it("supports vertical orientation", () => {
    render(
      <Tabs defaultValue="profile" orientation="vertical">
        <TabsList variant="underline">
          <TabsTrigger value="profile" variant="underline">
            Profile
          </TabsTrigger>
          <TabsTrigger value="security" variant="underline">
            Security
          </TabsTrigger>
        </TabsList>
        <TabsContent value="profile">Profile settings</TabsContent>
      </Tabs>
    );

    expect(screen.getByRole("tablist")).toHaveAttribute("aria-orientation", "vertical");
    expect(screen.getByRole("tablist")).toHaveClass("data-[orientation=vertical]:flex-col");
    expect(screen.getByRole("tablist")).toHaveClass("data-[orientation=vertical]:border-r");
    expect(screen.getByRole("tab", { name: "Profile" })).toHaveAttribute("data-orientation", "vertical");
    expect(screen.getByRole("tab", { name: "Profile" })).toHaveClass("data-[orientation=vertical]:w-[calc(100%+2px)]");
  });
});
