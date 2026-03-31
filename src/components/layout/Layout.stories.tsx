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
				logo={<span className="kui:font-bold">KESLER</span>}
				navItems={navItems}
				logoHref="/"
			/>
		),
		footer: (
			<Footer links={footerLinks} socials={socials} copyright={copyright} />
		),
		children: (
			<main className="kui:container kui:mx-auto kui:px-6 kui:py-12 kui:flex kui:flex-col kui:items-center kui:justify-center kui:min-h-[60vh] kui:text-center">
				<h2 className="kui:text-4xl kui:md:text-6xl kui:font-bold kui:mb-6">
					Welcome to KUI
				</h2>
				<p className="kui:text-lg kui:md:text-xl kui:text-muted-foreground kui:max-w-2xl">
					This is a demonstration of the Layout component, which brings together
					the Header, Footer, and page content into a cohesive structure.
				</p>
				<div className="kui:mt-8 kui:grid kui:grid-cols-1 kui:md:grid-cols-3 kui:gap-6 kui:w-full">
					{[1, 2, 3].map((i) => (
						<div
							key={i}
							className="kui:p-8 kui:rounded-xl kui:border kui:border-border/50 kui:bg-card kui:hover:border-primary/50 kui:transition-colors"
						>
							<h3 className="kui:text-xl kui:font-bold kui:mb-2">
								Feature {i}
							</h3>
							<p className="kui:text-muted-foreground kui:text-sm">
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
