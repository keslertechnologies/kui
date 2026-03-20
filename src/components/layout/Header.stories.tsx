// src/components/layout/Header.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Header } from "./Header";
import { ShoppingCart } from "lucide-react";

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
    secondaryLogo: "STUDIO",
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

export const WithSecondaryLogo: Story = {
  args: {
    logo: "KESLER",
    secondaryLogo: "KUI",
    navItems,
    logoHref,
    onLogoClick,
  },
  parameters: {
    docs: {
      description: "Header with secondary logo text",
    },
  },
};

export const WithComponentNavItem: Story = {
  args: {
    logo: "KESLER",
    navItems: [
      ...navItems,
      {
        label: (
          <div className="relative inline-flex items-center">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
              3
            </span>
          </div>
        ),
        href: "/cart",
      },
    ],
    logoHref,
    onLogoClick,
  },
  parameters: {
    docs: {
      description: "Header with a cart icon and badge as a navigation item",
    },
  },
};
