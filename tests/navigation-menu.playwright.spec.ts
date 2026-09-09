import { expect, test } from "@playwright/test";

const docsUrl = process.env.DOCS_URL ?? "http://localhost:3000";

for (const width of [1280, 390]) {
  test(`NavigationMenu keeps its panel centered and readable at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(`${docsUrl}/docs/componentes/navigation-menu`);
    const preview = page.getByTestId("live-preview");
    const menu = preview.getByRole("navigation");
    const trigger = menu.getByRole("button", { name: "Explorar" });
    await trigger.focus();
    await trigger.press("Enter");
    const link = menu.getByRole("link", { name: "Button →" });
    await expect(link).toBeVisible();

    await expect.poll(async () => {
      const menuBox = await menu.boundingBox();
      const panelBox = await link.boundingBox();
      return Math.abs(panelBox!.x + panelBox!.width / 2 - (menuBox!.x + menuBox!.width / 2));
    }).toBeLessThan(2);
    const panelBox = (await link.boundingBox())!;
    const triggerBox = (await trigger.boundingBox())!;
    expect(panelBox.y).toBeGreaterThanOrEqual(triggerBox.y + triggerBox.height);
    expect(panelBox.y - triggerBox.y - triggerBox.height).toBeLessThan(12);
    expect(panelBox.x).toBeGreaterThanOrEqual(0);
    expect(panelBox.x + panelBox.width).toBeLessThanOrEqual(width);
    // The padded text must stay on one line rather than collapsing to min-content.
    expect(panelBox.height).toBeLessThan(80);

    await trigger.press("ArrowDown");
    await expect(link).toBeFocused();
    await link.press("Escape");
    await expect(trigger).toBeFocused();
    await expect(link).not.toBeVisible();
  });
}

test("NavigationMenu allows panels wider than a compact navigation bar", async ({ page }) => {
  await page.goto(`${docsUrl}/docs/componentes/navigation-menu`);
  await page.getByRole("textbox", { name: "Código editable de NavigationMenu" }).fill(
    '<NavigationMenu style={{flex:"none",width:"max-content"}}><NavigationMenuList><NavigationMenuItem><NavigationMenuTrigger>Products</NavigationMenuTrigger><NavigationMenuContent><div style={{width:420,padding:24}}>A wide navigation panel</div></NavigationMenuContent></NavigationMenuItem></NavigationMenuList></NavigationMenu>'
  );
  const menu = page.getByTestId("live-preview").getByRole("navigation");
  await menu.getByRole("button", { name: "Products" }).click();
  const content = menu.getByText("A wide navigation panel");
  await expect(content).toBeVisible();
  await expect.poll(() => content.evaluate(element => {
    const viewport = element.closest('.overflow-hidden')!;
    return viewport.getBoundingClientRect().width;
  })).toBeGreaterThanOrEqual(420);
});
