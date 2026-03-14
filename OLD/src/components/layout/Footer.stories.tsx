// src/components/Footer.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from "./Footer";
import { Facebook, Github, Gitlab, Twitter, Twitch } from "lucide-react";

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

const socials = [
  {
    icon: Twitch,
    href: "https://twitch.tv/keslertechnologies",
    label: "Twitch",
  },
  {
    icon: Gitlab,
    href: "https://gitlab.com/keslertechnologies",
    label: "GitLab",
  },
  {
    icon: Github,
    href: "https://github.com/keslertechnologies",
    label: "GitHub",
  },
  {
    icon: Twitter,
    href: "https://x.com/keslertechnologies",
    label: "X / Twitter",
  },
  {
    icon: Facebook,
    href: "https://facebook.com/keslertechnologies",
    label: "X / Twitter",
  },
];

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Contact", href: "/#contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "External Example", href: "example.com", isExternal: true },
];

export const Default: Story = {};

export const StandardUsage: Story = {
  args: {
    socials,
    links,
  },
};

export const OnlyLinks: Story = {
  args: {
    links,
  },
};

export const OnlySocials: Story = {
  args: {
    socials,
  },
};
