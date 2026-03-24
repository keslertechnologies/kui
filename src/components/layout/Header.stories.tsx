// src/components/layout/Header.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Header } from "./Header";
import { IconWithBadge } from "../misc/IconWithBadge";

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
const basicNavItems = [
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

const componentNavItem = {
  label: <IconWithBadge variant="cart" itemCount={3} />,
  href: "/cart",
  onClick: () => console.log("→ Cart clicked"),
};

const allNavItems = [...basicNavItems, componentNavItem];

const onLogoClick = () => console.log("→ Logo clicked (hero scroll)");
const logoHref = "/";

export const Default: Story = {
  args: {
    logo: "KESLER",
    secondaryLogo: "STUDIO",
    navItems: allNavItems,
    logoHref,
    onLogoClick,
  },
  parameters: {
    docs: {
      description:
        "Full header with all props: primary logo, secondary logo, and a mix of string and component navigation items.",
    },
  },
};

export const Minimal: Story = {
  args: {
    logo: "KESLER",
  },
  parameters: {
    docs: {
      description: "Header with only the required logo prop.",
    },
  },
};

export const Branding: Story = {
  args: {
    logo: "KESLER",
    secondaryLogo: "STUDIO",
    logoHref,
    onLogoClick,
  },
  parameters: {
    docs: {
      description:
        "Header focusing on the branding (primary and secondary logos).",
    },
  },
};

export const Navigation: Story = {
  args: {
    logo: "KESLER",
    navItems: basicNavItems,
  },
  parameters: {
    docs: {
      description: "Header with logo and standard text navigation items.",
    },
  },
};

export const CustomNavigation: Story = {
  args: {
    logo: "KESLER",
    navItems: [componentNavItem],
  },
  parameters: {
    docs: {
      description: "Header with a custom React component as a navigation item.",
    },
  },
};
