// src/components/layout/Sidebar.stories.tsx

import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from "./Sidebar";

const meta: Meta<typeof Sidebar> = {
	title: "Layout/Sidebar",
	component: Sidebar,
	tags: ["autodocs"],
	parameters: {
		layout: "fullscreen",
	},
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

const wikiSections = [
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
];

export const Default: Story = {
	args: {
		sections: wikiSections,
		className: "kui:h-screen kui:w-72 kui:border-r kui:border-border",
	},
};

export const Minimal: Story = {
	args: {
		sections: [
			{
				links: [
					{ label: "Dashboard", href: "#", isActive: true },
					{ label: "Profile", href: "#" },
					{ label: "Settings", href: "#" },
				],
			},
		],
		className: "kui:h-96 kui:w-64 kui:border kui:border-border",
	},
};
