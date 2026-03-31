// src/components/layout/Layout.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
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

// Example sidebar content (realistic wiki-style nav)
const ExampleSidebar = () => {
	// Generate ~52 realistic wiki-style links (more than 50 so the scrollbar is obvious)
	const sections = [
		{
			title: "DEVELOPMENT",
			links: [
				"Development Machines",
				"Tips and Tricks",
				"Web Client Applications",
				"React + TypeScript (Vite)",
				"Component Library (MUI)",
				"Storybook Setup",
				"Prettier Configuration",
				"ESLint Rules",
				"Tailwind Integration",
				"GitLab CI/CD Pipeline",
				"Docker Development Environment",
				"Localhost Port Mapping",
				"Environment Variables",
				"Vite Config Deep Dive",
				"TypeScript Strict Mode",
			],
		},
		{
			title: "DESIGN SYSTEM",
			links: [
				"KUI Component Library",
				"Button Variants",
				"Typography Scale",
				"Color Palette",
				"Spacing System",
				"Icon Library",
				"Form Components",
				"Modal System",
				"Toast Notifications",
				"Dark Mode Support",
				"Accessibility Guidelines",
				"Responsive Breakpoints",
				"Animation Tokens",
				"Layout Primitives",
				"Card Components",
			],
		},
		{
			title: "WEB CLIENT APPLICATIONS",
			links: [
				"Project Initialization",
				"Vite React Template",
				"MUI Installation",
				"Emotion Styled Setup",
				"Storybook Integration",
				"Routing with React Router",
				"State Management (Zustand)",
				"API Client Layer",
				"Error Boundary Patterns",
				"Performance Optimization",
				"Bundle Analysis",
				"Lazy Loading Strategies",
				"Testing with Vitest",
				"Cypress E2E Tests",
				"Deployment Checklist",
			],
		},
		{
			title: "TIPS & TRICKS",
			links: [
				"Hot Module Replacement Tricks",
				"Debugging with Chrome DevTools",
				"Console Logging Best Practices",
				"Keyboard Shortcuts for Devs",
				"Git Aliases You’ll Love",
				"VS Code Extensions",
				"Terminal Productivity",
				"Code Review Checklist",
				"Refactoring Patterns",
				"Security Headers in Vite",
				"Caching Strategies",
				"Offline Support (PWA)",
				"Internationalization (i18n)",
				"Analytics Integration",
				"Feature Flag System",
			],
		},
		{
			title: "DEPLOYMENT & OPS",
			links: [
				"Vercel Deployment",
				"GitLab Pages Setup",
				"Docker Compose for Services",
				"Nginx Reverse Proxy",
				"SSL Certificate Renewal",
				"Monitoring with Sentry",
				"Log Aggregation",
				"Backup Strategies",
				"Rollback Procedures",
				"Blue-Green Deployment",
				"Canary Releases",
				"Load Testing Guide",
				"Domain Configuration",
				"SEO Meta Tags",
				"Robots.txt Best Practices",
				"Sitemap Generation",
			],
		},
	];

	return (
		<div className="kui:p-4 kui:flex kui:flex-col kui:h-full">
			{/* Scrollable nav area */}
			<div className="kui:flex-1 kui:overflow-y-auto kui:space-y-8">
				{sections.map((section) => (
					<div key={section.title}>
						<h3 className="kui:text-xs kui:font-medium kui:tracking-widest kui:text-muted-foreground kui:mb-2">
							{section.title}
						</h3>
						<nav className="kui:flex kui:flex-col kui:gap-1">
							{section.links.map((label, i) => (
								<a
									key={i}
									href="#"
									className={`kui:flex kui:items-center kui:gap-2 kui:px-3 kui:py-2 kui:rounded-lg kui:text-sm kui:font-medium kui:hover:bg-accent kui:hover:text-accent-foreground ${
										i === 2 && section.title === "DEVELOPMENT"
											? "kui:bg-accent kui:text-accent-foreground"
											: ""
									}`}
								>
									{label}
								</a>
							))}
						</nav>
					</div>
				))}
			</div>

			{/* Pinned footer of the sidebar */}
			<div className="kui:mt-auto kui:pt-6 kui:border-t kui:border-border">
				<p className="kui:text-xs kui:text-muted-foreground">
					KUI Wiki • v1.0.0
				</p>
			</div>
		</div>
	);
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
		sidebar: <ExampleSidebar />, // ← this is what you’ll pass in real apps
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
						{Array.from({ length: 16 }, (_, i) => (
							<div key={i}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Phasellus id feugiat orci. Pellentesque placerat facilisis
								finibus. Praesent in ligula et augue venenatis tempus et vel ex.
								Fusce aliquam neque quam, consectetur mollis nibh cursus ut.
								Phasellus interdum enim tellus, a vestibulum lectus viverra
								quis. In pharetra, leo quis dignissim convallis, leo nulla
								euismod justo, at tempor odio metus a augue. Pellentesque velit
								lectus, scelerisque ac commodo quis, feugiat vitae lacus. Etiam
								tempor neque a pharetra tristique. Vivamus felis ligula, lacinia
								a feugiat id, luctus vel tellus. Nunc malesuada nisi in dui
								lobortis, eu iaculis tortor venenatis. Integer pharetra urna nec
								ex suscipit, quis varius diam facilisis. Nunc quis mollis ex,
								quis volutpat lectus.
							</div>
						))}
					</div>
				</div>
			</div>
		),
	},
};
