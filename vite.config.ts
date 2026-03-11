/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwind from "@tailwindcss/vite";
import dts from "vite-plugin-dts";
import { resolve } from "path";

// https://vite.dev/config/
import path from "node:path";
import { fileURLToPath } from "node:url";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import { playwright } from "@vitest/browser-playwright";
const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(dirname, "src"),
    },
  },
  plugins: [
    react(),
    tailwind(),
    dts({
      // Generates clean .d.ts files in dist/
      rollupTypes: true,
      // Merges types into fewer files (nicer DX)
      include: ["src/**/*"],
      // Skip test/story files if you add any later
      exclude: ["**/*.test.tsx", "**/*.stories.tsx"],
    }),
  ],
  build: {
    lib: {
      // Entry point = your barrel file that exports everything public
      entry: resolve(__dirname, "src/index.ts"),
      // Global name (for UMD builds — mostly for legacy compat)
      name: "KeslersUI",
      // Output file names (no version/hash by default)
      fileName: "keslers-ui",
      // Output both ESM (modern) + UMD (broader compat)
      formats: ["es", "umd"],
    },
    rollupOptions: {
      // Don't bundle these — consumer provides them
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "jsxRuntime",
        },
      },
    },
    // Important for Tailwind: one CSS file instead of many small ones
    cssCodeSplit: false,
    // Sourcemaps help debugging in consuming apps
    sourcemap: true,
    // Clean dist/ before each build
    emptyOutDir: true,
  },
  test: {
    projects: [
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          storybookTest({
            configDir: path.join(dirname, ".storybook"),
          }),
        ],
        test: {
          name: "storybook",
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [
              {
                browser: "chromium",
              },
            ],
          },
          setupFiles: [".storybook/vitest.setup.ts"],
        },
      },
    ],
  },
});
