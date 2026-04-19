// src/components/layout/Footer.stories.tsx

import type { Meta, StoryObj } from "@storybook/react";
// React-icons for social examples
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Footer } from "./Footer";

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

const copyright = {
	companyName: "KESLER TECHNOLOGIES",
	companyUrl: "https://keslertechnologies.com",
};

export const Default: Story = {
	args: {
		links,
		socials,
		copyright,
		version: "1.0.0",
	},
	parameters: {
		docs: {
			description:
				"Full footer with all standard props: navigation links, social icons, and copyright.",
		},
	},
};

export const Socials: Story = {
	args: {
		socials,
	},
	parameters: {
		docs: {
			description: "Footer focusing on social media icons.",
		},
	},
};

export const Navigation: Story = {
	args: {
		links,
	},
	parameters: {
		docs: {
			description: "Footer focusing on navigation links.",
		},
	},
};

export const Version: Story = {
	args: {
		version: "2.4.1",
	},
	parameters: {
		docs: {
			description: "Footer displaying a subtle version number.",
		},
	},
};

export const Copyright: Story = {
	args: {
		copyright,
	},
	parameters: {
		docs: {
			description: "Footer with copyright only.",
		},
	},
};
