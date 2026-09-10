import tailwindcss from "@tailwindcss/vite";
import type { StorybookConfig } from "@storybook/react-vite";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import { createRequire } from "node:module";

const webRequire = createRequire(new URL("../../packages/nextjs/package.json", import.meta.url));

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  docs: {
    autodocs: "tag"
  },
  async viteFinal(viteConfig) {
    viteConfig.plugins = viteConfig.plugins ?? [];
    viteConfig.plugins.push(tailwindcss());
    viteConfig.resolve = viteConfig.resolve ?? {};
    // Use the same React runtime as the web components, including JSX subpaths.
    viteConfig.resolve.dedupe = [...(viteConfig.resolve.dedupe ?? []), "react", "react-dom"];
    const existingAliases = viteConfig.resolve.alias ?? [];
    viteConfig.resolve.alias = [
      { find: /^react(?=\/|$)/, replacement: dirname(webRequire.resolve("react/package.json")) },
      { find: /^react-dom(?=\/|$)/, replacement: dirname(webRequire.resolve("react-dom/package.json")) },
      { find: "@kivora/nextjs", replacement: fileURLToPath(new URL("../../packages/nextjs/src/index.ts", import.meta.url)) },
      { find: "@kivora/theme", replacement: fileURLToPath(new URL("../../packages/theme/src/index.ts", import.meta.url)) },
      ...(Array.isArray(existingAliases) ? existingAliases : Object.entries(existingAliases).map(([find, replacement]) => ({ find, replacement }))),
    ];
    return viteConfig;
  }
};

export default config;
