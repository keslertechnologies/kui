// src/components/Footer.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from "./Footer";
import { Linkedin, Twitter, Instagram, Github } from "lucide-react";

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

export const CustomLinksAndSocials: Story = {
  args: {
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Blog", href: "/blog" },
      {
        label: "External GitHub",
        href: "https://github.com/keslertechnologies",
        isExternal: true,
      },
    ],
    socials: [
      {
        icon: Linkedin,
        href: "https://linkedin.com/company/keslertechnologies",
        label: "LinkedIn",
      },
      {
        icon: Twitter,
        href: "https://x.com/keslertech",
        label: "X / Twitter",
      },
      {
        icon: Instagram,
        href: "https://instagram.com/keslertech",
        label: "Instagram",
      },
      {
        icon: Github,
        href: "https://github.com/keslertechnologies",
        label: "GitHub",
      },
    ],
  },
};

export const MinimalNoSocials: Story = {
  args: {
    socials: [], // hide social icons entirely
    links: [
      { label: "Home", href: "/" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy", href: "/privacy" },
    ],
  },
};

export const OnlyExternalLinks: Story = {
  args: {
    links: [
      {
        label: "GitHub",
        href: "https://github.com/keslertechnologies",
        isExternal: true,
      },
      {
        label: "LinkedIn",
        href: "https://linkedin.com/company/keslertechnologies",
        isExternal: true,
      },
      {
        label: "Twitter",
        href: "https://x.com/keslertech",
        isExternal: true,
      },
    ],
  },
};
