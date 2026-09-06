import { test, expect, type Page } from "@playwright/test";
import { readdirSync } from "node:fs";
import { resolve } from "node:path";

const storageKey = "kivora-pharmacy-v1";

test("calendar, date modes and responsive range selection", async ({
  page,
}) => {
  await visit(page, "/componentes");
  await page.getByLabel("Buscar componentes").fill("DatePicker");
  const example = page.locator("#date-picker");
  await example.getByRole("button", { name: "Año", exact: true }).click();
  const year = String(new Date().getFullYear());
  await page
    .getByRole("dialog")
    .getByRole("button", { name: year, exact: true })
    .click();
  await expect(
    example.getByRole("button", { name: year, exact: true }),
  ).toBeVisible();
  await example.getByRole("button", { name: "Mes", exact: true }).click();
  await page
    .getByRole("dialog")
    .getByRole("button", { name: "ene", exact: true })
    .click();
  await expect(
    example.getByRole("button", { name: new RegExp(`enero.*${year}`) }),
  ).toBeVisible();
  await example.getByRole("button", { name: "Fecha de recepción" }).click();
  await page
    .getByRole("dialog")
    .locator(".rdp-day:not(.rdp-outside) button")
    .first()
    .click();
  await expect(example.getByRole("button").first()).not.toHaveText(
    "Fecha de recepción",
  );
  await example.getByRole("button", { name: "Periodo de ventas" }).click();
  const dialog = page.getByRole("dialog");
  await expect
    .poll(async () => {
      const box = await dialog.boundingBox();
      return (
        !!box &&
        box.x >= 0 &&
        box.x + box.width <= page.viewportSize()!.width + 1
      );
    })
    .toBe(true);
  await expect
    .poll(() =>
      page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth + 1,
      ),
    )
    .toBe(true);
  await dialog.locator(".rdp-day:not(.rdp-outside) button").nth(0).click();
  await dialog.locator(".rdp-day:not(.rdp-outside) button").nth(5).click();
  await dialog.getByRole("button", { name: "Apply", exact: true }).click();
  await expect(example.getByRole("button").nth(1)).toContainText("->");
  await expect
    .poll(() =>
      page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth + 1,
      ),
    )
    .toBe(true);
});

test("select variants, slider, carousel, questionnaire and DataTable", async ({
  page,
}, info) => {
  await visit(page, "/componentes");
  await page.getByLabel("Buscar componentes").fill("Select");
  await page.getByRole("combobox", { name: "Categoría de prueba" }).click();
  if (info.project.name === "mobile")
    await page
      .getByRole("dialog")
      .getByRole("button", { name: "Higiene", exact: true })
      .click();
  else await page.getByRole("option", { name: "Higiene", exact: true }).click();
  await expect(page.locator("#select")).toContainText("Higiene");
  await page
    .getByRole("combobox", { name: "Buscar categoría", exact: true })
    .click();
  if (info.project.name === "mobile")
    await page
      .getByRole("dialog")
      .getByRole("button", { name: "Bienestar", exact: true })
      .click();
  else
    await page.getByRole("option", { name: "Bienestar", exact: true }).click();
  await expect(page.locator("#select")).toContainText("Bienestar");
  await page.getByLabel("Buscar componentes").fill("Slider");
  const slider = page.getByRole("slider");
  await slider.focus();
  await slider.press("ArrowRight");
  await expect(slider).toHaveAttribute("aria-valuenow", "31");
  await page.getByLabel("Buscar componentes").fill("Carousel");
  await page.getByRole("button", { name: "Next slide" }).click();
  await expect(page.locator("#carousel .slick-current")).toContainText(
    "Bienestar diario",
  );
  await page.getByLabel("Buscar componentes").fill("Questionnaire");
  await page.getByRole("radio", { name: "Mañana" }).click();
  await page.getByRole("button", { name: "Continue", exact: true }).click();
  await expect(
    page.getByText("Notas del turno", { exact: true }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Finish", exact: true }).click();
  await expect(
    page.getByText("Cuestionario completado", { exact: true }),
  ).toBeVisible();
  await page.getByLabel("Buscar componentes").fill("DataTable");
  const table = page.locator("#table");
  await table.getByRole("button", { name: "Next", exact: true }).click();
  await expect(
    table.getByRole("cell", { name: "Apósitos", exact: true }),
  ).toBeVisible();
  await table.getByPlaceholder("Search...").fill("Gel");
  await expect(
    table.getByRole("cell", { name: "Gel de manos", exact: true }),
  ).toBeVisible();
  await table
    .getByRole("checkbox", { name: "Select row", exact: true })
    .check();
  await expect(table).toContainText("1 of 1 selected");
});

test("invalid persisted data recovers and unknown routes return 404", async ({
  page,
}) => {
  await page.addInitScript(
    (key) => localStorage.setItem(key, '{"products":[]}'),
    storageKey,
  );
  await visit(page, "/tpv");
  await expect(
    page.getByRole("button", {
      name: "Añadir Protector solar SPF 50+",
      exact: true,
    }),
  ).toBeEnabled();
  // A 404 is expected for this navigation, rather than an application error.
  const response = await page.request.get("/pagina-inexistente");
  expect(response.status()).toBe(404);
});
async function visit(page: Page, route: string) {
  await page.goto(route);
  // App Router may retain hidden streamed content while revealing the route.
  // Assert the accessible heading rather than intermediate hidden DOM nodes.
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
}
async function state(page: Page) {
  return page.evaluate(
    (key) => JSON.parse(localStorage.getItem(key) ?? "null"),
    storageKey,
  );
}

test.beforeEach(async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  (page as Page & { appErrors: string[] }).appErrors = errors;
});
test.afterEach(async ({ page }) => {
  expect(
    (page as Page & { appErrors: string[] }).appErrors,
    "No runtime or hydration errors",
  ).toEqual([]);
});

test("all routes render without hydration errors or horizontal page overflow", async ({
  page,
}, info) => {
  for (const route of [
    "/",
    "/tpv",
    "/inventario",
    "/ventas",
    "/clientes",
    "/ajustes",
    "/componentes",
  ]) {
    await visit(page, route);
    await expect
      .poll(
        () =>
          page.evaluate(
            () => document.documentElement.scrollWidth <= innerWidth + 1,
          ),
        { message: `Responsive layout at ${route}` },
      )
      .toBe(true);
  }
  await visit(page, "/");
  await page.screenshot({
    path: info.outputPath("dashboard.png"),
    fullPage: true,
    animations: "disabled",
  });
  if (info.project.name === "mobile") {
    await page.getByRole("button", { name: "Abrir navegación" }).click();
    await page
      .getByRole("dialog")
      .getByRole("link", { name: "Inventario" })
      .click();
  } else
    await page
      .getByRole("navigation", { name: "Navegación principal" })
      .getByRole("link", { name: "Inventario" })
      .click();
  await expect(page).toHaveURL(/inventario/);
});

test("card sale updates inventory and persists the receipt after reload", async ({
  page,
}) => {
  await visit(page, "/tpv");
  await page
    .getByRole("button", {
      name: "Añadir Protector solar SPF 50+",
      exact: true,
    })
    .click();
  await page
    .getByRole("button", {
      name: "Añadir Protector solar SPF 50+",
      exact: true,
    })
    .click();
  await expect(page.getByTestId("cart-total")).toContainText("43,80");
  await page.getByRole("button", { name: /Cobrar/ }).click();
  await page.getByRole("button", { name: "Confirmar cobro" }).click();
  await expect(
    page.getByRole("heading", { name: "Venta completada" }),
  ).toBeVisible();
  const saved = await state(page);
  expect(
    saved.products.find((p: { id: string }) => p.id === "847001").stock,
  ).toBe(40);
  expect(saved.sales[0].total).toBe(4380);
  expect(saved.sales).toHaveLength(19);
  await visit(page, "/ventas");
  await page
    .getByRole("button", { name: saved.sales[0].id, exact: true })
    .click();
  await expect(page.getByRole("dialog")).toContainText("43,80");
  await page.reload();
  await expect(
    page.getByRole("button", { name: saved.sales[0].id, exact: true }),
  ).toBeVisible();
});

test("cash validation, stock limits and ticket cancellation", async ({
  page,
}) => {
  await visit(page, "/tpv");
  await expect(
    page.getByRole("button", {
      name: "Añadir Termómetro digital",
      exact: true,
    }),
  ).toBeDisabled();
  const vitamin = page.getByRole("button", {
    name: "Añadir Vitamina C · 30 cápsulas",
    exact: true,
  });
  for (let i = 0; i < 6; i++) await vitamin.click();
  await expect(vitamin).toBeDisabled();
  await page.getByRole("button", { name: "Vaciar ticket" }).click();
  await expect(page.getByRole("button", { name: /Cobrar/ })).toBeDisabled();
  await page
    .getByRole("button", { name: "Añadir Gel de manos · 250 ml", exact: true })
    .click();
  await page.getByRole("button", { name: /Cobrar/ }).click();
  await page.getByRole("radio", { name: "Efectivo" }).click();
  await page.getByLabel("Efectivo recibido (€)").fill("2");
  await expect(
    page.getByRole("button", { name: "Confirmar cobro" }),
  ).toBeDisabled();
  await page.getByLabel("Efectivo recibido (€)").fill("10");
  await expect(page.getByRole("dialog")).toContainText("4,10");
  await page.getByRole("button", { name: "Confirmar cobro" }).click();
  await expect(
    page.getByRole("heading", { name: "Venta completada" }),
  ).toBeVisible();
  expect((await state(page)).sales[0].method).toBe("Efectivo");
});

test("restocking removes an item from low-stock results and survives reload", async ({
  page,
}) => {
  await visit(page, "/inventario");
  await page.getByRole("tab", { name: "Stock bajo" }).click();
  await page
    .getByRole("button", { name: "Reponer Vitamina C · 30 cápsulas" })
    .click();
  await page.getByLabel("Unidades recibidas").fill("20");
  await page
    .getByRole("button", { name: "Registrar entrada", exact: true })
    .click();
  await expect(
    page.getByRole("button", { name: "Reponer Vitamina C · 30 cápsulas" }),
  ).toHaveCount(0);
  await page.reload();
  await expect
    .poll(
      async () =>
        (await state(page))?.products.find(
          (p: { id: string }) => p.id === "847003",
        ).stock,
    )
    .toBe(26);
});

test("customer creation, theme settings and CSV export", async ({ page }) => {
  await visit(page, "/clientes");
  await page.getByRole("button", { name: "Nuevo cliente" }).click();
  await page.getByLabel("Nombre completo").fill("Marta Demo");
  await page.getByLabel("Correo electrónico").fill("marta@example.com");
  await page.getByRole("button", { name: "Guardar cliente" }).click();
  await expect(page.getByText("Marta Demo", { exact: true })).toBeVisible();
  await visit(page, "/ajustes");
  await page.getByRole("tab", { name: "Preferencias" }).click();
  await page.getByRole("switch", { name: "Modo oscuro" }).click();
  await page.getByRole("button", { name: "Guardar cambios" }).click();
  await expect(page.locator("html")).toHaveClass(/dark/);
  await page.reload();
  await expect(page.locator("html")).toHaveClass(/dark/);
  await visit(page, "/ventas");
  const download = page.waitForEvent("download");
  await page.getByRole("button", { name: "Exportar ventas" }).click();
  expect((await download).suggestedFilename()).toBe("ventas-oliva.csv");
});

test("the lab mounts every public component family", async ({ page }) => {
  await visit(page, "/componentes");
  const families = readdirSync(
    resolve(process.cwd(), "../../packages/nextjs/src/components"),
  )
    .filter((file) => file.endsWith(".tsx") && !file.endsWith(".test.tsx"))
    .map((file) => file.replace(".tsx", ""))
    .sort();
  const mounted = await page.locator("[data-component]").evaluateAll((nodes) =>
    nodes
      .map((node) => node.getAttribute("data-component"))
      .filter((name) => name !== "provider")
      .sort(),
  );
  expect(mounted).toEqual(families);
  await page.getByLabel("Buscar componentes").fill("DatePicker");
  await expect(page.locator("[data-component=date-picker]")).toBeVisible();
  await expect(page.locator(".lab-grid [data-component]")).toHaveCount(1);
});

test("lab dialogs, tabs, accordion, forms, menus and notifications are interactive", async ({
  page,
}) => {
  await visit(page, "/componentes");
  await page
    .locator("#accordion")
    .getByRole("button", { name: "¿Cómo registro una entrada?" })
    .click();
  await expect(
    page.getByText("Abre Inventario y pulsa Reponer en el producto."),
  ).toBeVisible();
  await page.locator("#tabs").getByRole("tab", { name: "Stock" }).click();
  await expect(page.locator("#tabs")).toContainText("42 unidades disponibles");
  await page.getByRole("button", { name: "Abrir diálogo" }).click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.getByRole("button", { name: "Entendido" }).click();
  await page.getByRole("button", { name: "Abrir drawer" }).click();
  await expect(
    page.getByRole("heading", { name: "Resumen de caja" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Cerrar resumen" }).click();
  await page.getByRole("button", { name: "Abrir ficha" }).click();
  await expect(
    page.getByRole("heading", { name: "Ficha del proveedor" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Cerrar ficha" }).click();
  await page.locator("#checkbox").getByRole("checkbox").uncheck();
  await expect(
    page.locator("#checkbox").getByRole("checkbox"),
  ).not.toBeChecked();
  await page.locator("#switch").getByRole("switch").click();
  await expect(page.locator("#switch").getByRole("switch")).not.toBeChecked();
  await page.getByRole("button", { name: "Acciones del producto" }).click();
  await page.getByRole("menuitem", { name: "Duplicar ficha" }).click();
  await expect(
    page.getByText("Acción de prueba completada", { exact: true }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Ver horario" }).click();
  await expect(page.getByText("Lunes a sábado · 09:00–21:00")).toBeVisible();
  await page.getByRole("button", { name: "Cerrar horario" }).click();
  await page
    .locator("#pagination")
    .getByRole("button", { name: "2", exact: true })
    .click();
  await expect(page.locator("#pagination")).toContainText("Página 2 de 3");
  await page.locator("#toggle").getByRole("button").click();
  await expect(page.locator("#toggle").getByRole("button")).toHaveAttribute(
    "aria-pressed",
    "true",
  );
  await expect(page.locator("#toggle").getByRole("button")).toHaveText("En favoritos");
  await page.locator("#toggle").getByRole("button").click();
  await expect(page.locator("#toggle").getByRole("button")).toHaveText("Favorito");
  await page.getByLabel("Código de verificación").fill("1234");
  await expect(page.getByLabel("Código de verificación")).toHaveValue("1234");
});
