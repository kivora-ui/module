import { test, expect } from "@playwright/test";

test.use({ viewport: { width: 1024, height: 768 }, hasTouch: true });

test("tablet touch sale survives task switching and updates shared stock", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/tablet");
  await expect(
    page.getByRole("heading", { name: "¿Qué necesita tu cliente?" }),
  ).toBeVisible();
  await expect(page.locator(".sidebar")).toHaveCount(0);
  await page
    .getByRole("button", {
      name: "Añadir Protector solar SPF 50+",
      exact: true,
    })
    .tap();
  await page
    .getByRole("button", {
      name: "Añadir una unidad de Protector solar SPF 50+",
      exact: true,
    })
    .tap();
  await expect(page.getByTestId("cart-total")).toContainText("43,80");
  await page
    .getByRole("button", { name: "Consultar stock", exact: true })
    .tap();
  await page.getByLabel("Buscar existencias").fill("847001");
  await expect(page.locator(".tablet-stock-card")).toHaveCount(1);
  await expect(page.locator(".tablet-stock-summary")).toContainText("42");
  await page
    .getByRole("button", { name: "Últimos tickets", exact: true })
    .tap();
  await page.locator(".tablet-ticket-card").first().tap();
  await expect(
    page.getByRole("heading", { name: "Detalle del ticket" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Volver al mostrador" }).tap();
  await page.getByRole("button", { name: "Vender", exact: true }).tap();
  await expect(page.getByTestId("cart-total")).toContainText("43,80");
  await page.getByRole("button", { name: /Cobrar/ }).tap();
  await page.getByRole("button", { name: "Confirmar cobro" }).tap();
  await expect(
    page.getByRole("heading", { name: "Venta completada" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Nueva venta", exact: true }).tap();
  await expect(page.getByTestId("cart-total")).toContainText("0,00");
  await page
    .getByRole("button", { name: "Consultar stock", exact: true })
    .tap();
  await expect(page.locator(".tablet-stock-summary")).toContainText("40");
  await page.reload();
  await expect(
    page.getByRole("heading", { name: "¿Qué necesita tu cliente?" }),
  ).toBeVisible();
  const saved = await page.evaluate(() =>
    JSON.parse(localStorage.getItem("kivora-pharmacy-v1")!),
  );
  expect(saved.sales[0].total).toBe(4380);
  expect(
    saved.products.find((p: { id: string }) => p.id === "847001").stock,
  ).toBe(40);
  expect(errors).toEqual([]);
});

test("tablet layouts fit both orientations and controls have touch targets", async ({
  page,
}, info) => {
  await page.goto("/tablet");
  await page
    .getByRole("button", {
      name: "Añadir Protector solar SPF 50+",
      exact: true,
    })
    .tap();
  for (const viewport of [
    { width: 1024, height: 768 },
    { width: 768, height: 1024 },
  ]) {
    await page.setViewportSize(viewport);
    await page.evaluate(() => scrollTo(0, 0));
    const payButton = await page
      .getByRole("button", { name: /Cobrar/ })
      .boundingBox();
    expect(payButton!.y + payButton!.height).toBeLessThanOrEqual(
      viewport.height,
    );
    await expect
      .poll(() =>
        page.evaluate(() => document.documentElement.scrollWidth <= innerWidth),
      )
      .toBe(true);
    const ticket = await page.locator("#tablet-ticket").boundingBox();
    expect(ticket!.x + ticket!.width).toBeLessThanOrEqual(viewport.width);
    for (const name of [
      "Vender",
      "Consultar stock",
      "Últimos tickets",
      "Añadir una unidad de Protector solar SPF 50+",
    ]) {
      const box = await page
        .getByRole("button", { name, exact: true })
        .boundingBox();
      expect(box!.height).toBeGreaterThanOrEqual(44);
      expect(box!.width).toBeGreaterThanOrEqual(44);
    }
    await page.screenshot({
      path: info.outputPath(`tablet-${viewport.width}.png`),
      animations: "disabled",
      fullPage: true,
    });
  }
  await page.getByRole("button", { name: "Activar modo oscuro" }).tap();
  await expect(page.locator("html")).toHaveClass(/dark/);
  await page.reload();
  await expect(page.locator("html")).toHaveClass(/dark/);
});

test("tablet stock reception returns products to the available catalog", async ({
  page,
}) => {
  await page.goto("/tablet");
  await page.getByRole("button", { name: "Mostrar solo disponibles" }).tap();
  await expect(
    page.getByRole("button", {
      name: "Añadir Termómetro digital",
      exact: true,
    }),
  ).toHaveCount(0);
  await page
    .getByRole("button", { name: "Consultar stock", exact: true })
    .tap();
  await page.getByLabel("Buscar existencias").fill("Termómetro");
  await page.getByRole("button", { name: "Recibir Termómetro digital" }).tap();
  await page.getByLabel("Unidades recibidas").fill("6");
  await page
    .getByRole("button", { name: "Registrar entrada", exact: true })
    .tap();
  await expect(page.locator(".tablet-stock-summary")).toContainText("6");
  await page.getByRole("button", { name: "Vender", exact: true }).tap();
  await expect(
    page.getByRole("button", {
      name: "Añadir Termómetro digital",
      exact: true,
    }),
  ).toBeEnabled();
});
