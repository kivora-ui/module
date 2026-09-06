import tailwindcss from "@tailwindcss/vite";
import type { StorybookConfig } from "@storybook/react-vite";
import { fileURLToPath } from "node:url";

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
    viteConfig.resolve.alias = {
      ...(Array.isArray(viteConfig.resolve.alias) ? {} : viteConfig.resolve.alias),
      "@kivora/nextjs": fileURLToPath(new URL("../../packages/nextjs/src/index.ts", import.meta.url)),
      "@kivora/theme": fileURLToPath(new URL("../../packages/theme/src/index.ts", import.meta.url))
    };
    return viteConfig;
  }
};

export default config;
