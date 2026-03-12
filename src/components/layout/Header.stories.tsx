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

/* Example nav items — mix of hash targets (scroll) and real routes (react-router Link) */
const scrollNavItems = [
  { label: "SERVICES", href: "#services" },
  { label: "PORTFOLIO", href: "#portfolio" },
  { label: "CONTACT", href: "#contact" },
];

const pathNavItems = [
  { label: "BLOG", href: "/blog" }, // ← demonstrates real react-router path
  { label: "ABOUT", href: "/about" },
];

export const Default: Story = {
  // Empty navItems → shows only logo + mobile trigger (useful for testing minimal state)
};

export const StandardUsage: Story = {
  args: {
    navItems: [...scrollNavItems, ...pathNavItems],
  },
};

export const ScrollTargetsOnly: Story = {
  args: {
    navItems: [...scrollNavItems],
  },
};

export const PathRoutesOnly: Story = {
  args: {
    navItems: [...pathNavItems],
  },
};
