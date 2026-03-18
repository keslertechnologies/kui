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
  {
    label: "SERVICES",
    href: "#services",
    onClick: () => console.log("→ Services clicked"),
  },
  {
    label: "PORTFOLIO",
    href: "#portfolio",
    onClick: () => console.log("→ Portfolio clicked"),
  },
  {
    label: "CONTACT",
    href: "/contact",
    onClick: () => console.log("→ Contact clicked"),
  },
];

const onLogoClick = () => console.log("→ Logo clicked (hero scroll)");
const logoHref = "/";

export const Empty: Story = {
  args: {},
};

export const Populated: Story = {
  args: {
    logo: "KESLER",
    navItems,
    logoHref,
    onLogoClick,
  },
  parameters: {
    docs: {
      description: "Standard usage with navigation items",
    },
  },
};
