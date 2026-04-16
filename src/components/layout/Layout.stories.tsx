// src/components/layout/Layout.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Layout } from "./Layout";

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

import React from "react";
import { Sidebar } from "./Sidebar";

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

// NEW STORY – demonstrates the wiki layout with sidebar
export const WithSidebar: Story = {
	args: {
		header: (
			<Header
				logo={<span className="kui:font-bold">KESLER</span>}
				navItems={navItems}
				logoHref="/"
			/>
		),
		sidebar: (
			<Sidebar
				sections={[
					{
						title: "DEVELOPMENT",
						links: [
							{ label: "Development Machines", href: "#" },
							{ label: "Tips and Tricks", href: "#" },
							{ label: "Web Client Applications", href: "#", isActive: true },
							{ label: "React + TypeScript (Vite)", href: "#" },
							{ label: "Component Library (MUI)", href: "#" },
							{ label: "Storybook Setup", href: "#" },
							{ label: "Prettier Configuration", href: "#" },
							{ label: "ESLint Rules", href: "#" },
							{ label: "Tailwind Integration", href: "#" },
							{ label: "GitLab CI/CD Pipeline", href: "#" },
							{ label: "Docker Development Environment", href: "#" },
							{ label: "Localhost Port Mapping", href: "#" },
							{ label: "Environment Variables", href: "#" },
							{ label: "Vite Config Deep Dive", href: "#" },
							{ label: "TypeScript Strict Mode", href: "#" },
						],
					},
					{
						title: "DESIGN SYSTEM",
						links: [
							{ label: "KUI Component Library", href: "#" },
							{ label: "Button Variants", href: "#" },
							{ label: "Typography Scale", href: "#" },
							{ label: "Color Palette", href: "#" },
							{ label: "Spacing System", href: "#" },
							{ label: "Icon Library", href: "#" },
							{ label: "Form Components", href: "#" },
							{ label: "Modal System", href: "#" },
							{ label: "Toast Notifications", href: "#" },
							{ label: "Dark Mode Support", href: "#" },
							{ label: "Accessibility Guidelines", href: "#" },
							{ label: "Responsive Breakpoints", href: "#" },
							{ label: "Animation Tokens", href: "#" },
							{ label: "Layout Primitives", href: "#" },
							{ label: "Card Components", href: "#" },
						],
					},
				]}
			/>
		),
		footer: (
			<Footer links={footerLinks} socials={socials} copyright={copyright} />
		),
		children: (
			<div className="kui:container kui:mx-auto kui:px-8 kui:py-10">
				<h1 className="kui:text-3xl kui:font-bold kui:mb-2">
					Web Client Applications
				</h1>
				<p className="kui:text-muted-foreground kui:mb-8">
					This document outlines the technologies and processes used to develop,
					deploy, and manage Web Client Applications at Kesler Technologies.
				</p>

				<div className="kui:prose kui:prose-invert kui:max-w-none">
					<h2>Tech Stack</h2>
					<p>React + TypeScript (Vite), MUI, Storybook, Prettier...</p>

					<h2>Project Initialization</h2>
					<pre className="kui:bg-card kui:p-4 kui:rounded-xl kui:text-sm kui:overflow-auto">
						npm create vite@latest NAME -- --template react-ts
					</pre>

					{/* Scrollable content so you can see the footer at the bottom */}
					<div>
						{Array.from({ length: 16 }, () => {
							const id = React.useId();
							return (
								<div key={id}>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Phasellus id feugiat orci. Pellentesque placerat facilisis
									finibus. Praesent in ligula et augue venenatis tempus et vel
									ex. Fusce aliquam neque quam, consectetur mollis nibh cursus
									ut. Phasellus interdum enim tellus, a vestibulum lectus
									viverra quis. In pharetra, leo quis dignissim convallis, leo
									nulla euismod justo, at tempor odio metus a augue.
									Pellentesque velit lectus, scelerisque ac commodo quis,
									feugiat vitae lacus. Etiam tempor neque a pharetra tristique.
									Vivamus felis ligula, lacinia a feugiat id, luctus vel tellus.
									Nunc malesuada nisi in dui lobortis, eu iaculis tortor
									venenatis. Integer pharetra urna nec ex suscipit, quis varius
									diam facilisis. Nunc quis mollis ex, quis volutpat lectus.
								</div>
							);
						})}
					</div>
				</div>
			</div>
		),
	},
};
