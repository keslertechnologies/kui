import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";

const meta: Meta<typeof Header> = {
  title: "Layout/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  render: () => (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="p-8">
        <section
          id="hero"
          className="h-[500px] border-2 border-dashed border-muted flex items-center justify-center mb-8"
        >
          Hero Section (id="hero")
        </section>
        <section
          id="services"
          className="h-[500px] border-2 border-dashed border-muted flex items-center justify-center mb-8"
        >
          Services Section (id="services")
        </section>
        <section
          id="portfolio"
          className="h-[500px] border-2 border-dashed border-muted flex items-center justify-center mb-8"
        >
          Portfolio Section (id="portfolio")
        </section>
        <section
          id="contact"
          className="h-[500px] border-2 border-dashed border-muted flex items-center justify-center mb-8"
        >
          Contact Section (id="contact")
        </section>
      </main>
    </div>
  ),
};
