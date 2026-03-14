import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"], // single barrel export (keeps it simple & tree-shakable)
  format: ["esm", "cjs"], // both formats for maximum consumer compatibility
  dts: true, // generates perfect .d.ts files automatically
  clean: true, // wipes dist/ before every build (prevents stale files)
  sourcemap: true, // essential for debugging in consuming apps
  minify: true, // production-ready bundles (esbuild is lightning fast)
  external: ["react", "react-dom"], // critical: never bundle React
  splitting: false, // single-entry libraries perform better without splitting
  tsconfig: "./tsconfig.app.json", // ← tell tsup to use the full React config
});
