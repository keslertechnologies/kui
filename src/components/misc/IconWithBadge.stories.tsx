import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconWithBadge } from "./IconWithBadge";
import { Bell, Mail } from "lucide-react";

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
    children: <Bell className="h-7 w-7" />,
  },
};

export const CustomIconMail: Story = {
  args: {
    itemCount: 12,
    children: <Mail className="h-7 w-7" />,
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
    <div className="bg-background p-8 border border-border flex items-center justify-center">
      <IconWithBadge {...args} />
    </div>
  ),
  args: {
    variant: "cart",
    itemCount: 5,
  },
};
