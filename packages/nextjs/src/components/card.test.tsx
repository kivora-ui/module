// @vitest-environment jsdom
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Card, CardContent, CardHeader, CardTitle } from "./card";

describe("Card", () => {
  it("renders its header and content", () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Título</CardTitle>
        </CardHeader>
        <CardContent>Contenido</CardContent>
      </Card>
    );
    expect(screen.getByText("Título")).toBeInTheDocument();
    expect(screen.getByText("Contenido")).toBeInTheDocument();
  });
});
