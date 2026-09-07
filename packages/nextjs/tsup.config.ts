import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
  // esbuild (used internally by tsup) drops "use client" directives when it
  // bundles multiple client modules into a single output file: the directive
  // is only preserved as the literal first statement of each *source* file,
  // and gets merged away once several such files are concatenated. Since
  // every export of this package is a client component or a hook, the whole
  // bundle is client-only, so re-adding the directive as a banner on the
  // generated output is correct (not a workaround for a subset of files).
  banner: {
    js: '"use client";',
  },
});
