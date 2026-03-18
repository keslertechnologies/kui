// src/components/layout/Layout.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Layout } from "./Layout";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const meta: Meta<typeof Layout> = {
  title: "Layout/Layout",
  component: Layout,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Layout>;

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

const footerLinks = [
  { label: "SERVICES", href: "#services" },
  { label: "PORTFOLIO", href: "#portfolio" },
  { label: "CONTACT", href: "#contact" },
  { label: "EXTERNAL", href: "https://google.com", isExternal: true },
];

const socials = [
  { icon: FaGithub, href: "https://github.com", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
];

const copyright = {
  companyName: "KESLER TECHNOLOGIES",
  companyUrl: "https://keslertechnologies.com",
};

export const Default: Story = {
  args: {
    header: (
      <Header
        logo={<span className="font-bold">KESLER</span>}
        navItems={navItems}
        logoHref="/"
      />
    ),
    footer: (
      <Footer links={footerLinks} socials={socials} copyright={copyright} />
    ),
    children: (
      <main className="container mx-auto px-6 py-12 flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">Welcome to KUI</h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
          This is a demonstration of the Layout component, which brings together
          the Header, Footer, and page content into a cohesive structure.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="p-8 rounded-xl border border-border/50 bg-card hover:border-primary/50 transition-colors"
            >
              <h3 className="text-xl font-bold mb-2">Feature {i}</h3>
              <p className="text-muted-foreground text-sm">
                A brief description of this amazing feature that makes our
                library stand out.
              </p>
            </div>
          ))}
        </div>
      </main>
    ),
  },
};
