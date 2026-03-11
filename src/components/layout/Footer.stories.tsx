import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from "./Footer";

const meta: Meta<typeof Footer> = {
  title: "Layout/Footer",
  component: Footer,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {};

export const CustomLinks: Story = {
  args: {
    links: [
      { label: "Home", href: "/" },
      { label: "Blog", href: "/blog" },
      {
        label: "GitHub",
        href: "https://github.com/keslertechnologies",
        isExternal: true,
      },
    ],
  },
};
