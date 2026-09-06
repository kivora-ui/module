import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: {
      "@kivora/theme": fileURLToPath(new URL("../theme/src/index.ts", import.meta.url))
    }
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"]
  }
});
