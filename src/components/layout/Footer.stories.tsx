// src/components/Footer.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from "./Footer";

// React-icons for social examples
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

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

const links = [
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
    href: "#contact",
    onClick: () => console.log("→ Contact clicked"),
  },
  {
    label: "BLOG",
    href: "/blog",
    onClick: () => console.log("→ Blog clicked"),
  },
];

const socials = [
  {
    icon: FaGithub,
    href: "https://github.com/keslertechnologies",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/company/keslertechnologies",
    label: "LinkedIn",
  },
  {
    icon: FaTwitter,
    href: "https://twitter.com/keslertech",
    label: "Twitter",
  },
];

export const Empty: Story = {
  args: {},
};

export const StandardUsage: Story = {
  args: {
    links,
    socials,
  },
  parameters: {
    docs: {
      description: "Standard usage with navigation links and social icons",
    },
  },
};

export const LinksOnly: Story = {
  args: {
    links,
  },
};

export const SocialsOnly: Story = {
  args: {
    socials,
  },
};
