// src/components/layout/Header.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";

const meta: Meta<typeof Header> = {
  title: "Layout/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

// Example nav items (realistic onClick handlers)
const navItems = [
  { label: "SERVICES", onClick: () => console.log("→ Services clicked") },
  { label: "PORTFOLIO", onClick: () => console.log("→ Portfolio clicked") },
  { label: "CONTACT", onClick: () => console.log("→ Contact clicked") },
];

const onLogoClick = () => console.log("→ Logo clicked (hero scroll)");

export const Empty: Story = {
  args: {},
};

export const Populated: Story = {
  args: {
    logo: "KESLER",
    navItems,
    onLogoClick,
  },
  parameters: {
    docs: {
      description: "Standard usage with navigation items",
    },
  },
};
