import { defineConfig } from "tsup";

export default defineConfig([
  {
    clean: true,
    entry: ["src/index.ts"],
    format: ["esm", "cjs"],
    sourcemap: true,
  },
  {
    clean: false,
    entry: ["src/index.ts"],
    format: ["esm"],
    minify: true,
    outExtension: () => ({ js: ".min.js" }),
    platform: "browser",
  },
]);
