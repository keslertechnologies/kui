import type { Meta, StoryObj } from "@storybook/react-vite";
import { Bell, Mail } from "lucide-react";
import { IconWithBadge } from "./IconWithBadge";

const meta: Meta<typeof IconWithBadge> = {
	title: "Misc/IconWithBadge",
	component: IconWithBadge,
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: { type: "select" },
			options: ["cart", "none"],
			description: "Default icon variant",
		},
		itemCount: {
			control: { type: "number" },
			description: "Number of items to show in the badge",
		},
		onClick: { action: "clicked" },
	},
};

export default meta;
type Story = StoryObj<typeof IconWithBadge>;

export const CartVariant: Story = {
	args: {
		variant: "cart",
		itemCount: 3,
	},
};

export const CustomIconBell: Story = {
	args: {
		itemCount: 5,
		children: <Bell className="kui:h-7 kui:w-7" />,
	},
};

export const CustomIconMail: Story = {
	args: {
		itemCount: 12,
		children: <Mail className="kui:h-7 kui:w-7" />,
	},
};

export const LargeBadge: Story = {
	args: {
		variant: "cart",
		itemCount: 150,
	},
};

export const HeaderContext: Story = {
	render: (args) => (
		<div className="kui:bg-background kui:p-8 kui:border kui:border-border kui:flex kui:items-center kui:justify-center">
			<IconWithBadge {...args} />
		</div>
	),
	args: {
		variant: "cart",
		itemCount: 5,
	},
};
