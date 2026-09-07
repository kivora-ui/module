import type { NextConfig } from "next";

const config: NextConfig = {
  devIndicators: { position: "top-right" },
  transpilePackages: ["@kivora/nextjs", "@kivora/theme"],
};
export default config;
