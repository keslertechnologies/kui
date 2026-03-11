import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      // Generates clean .d.ts files in dist/
      rollupTypes: true, // Merges types into fewer files (nicer DX)
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
});
