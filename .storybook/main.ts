import type { StorybookConfig } from "@storybook/react-vite";
import tsconfigPaths from "vite-tsconfig-paths"; // ← add this import

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [],
  framework: "@storybook/react-vite",
  async viteFinal(config) {
    return {
      ...config,
      plugins: [
        ...(config.plugins ?? []), // preserve existing plugins
        tsconfigPaths(), // ← this enables your tsconfig aliases
      ],
    };
  },
};

export default config;
