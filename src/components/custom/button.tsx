import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"kui:group/button kui:shrink-0 kui:items-center kui:justify-center kui:rounded-lg kui:border kui:border-transparent kui:bg-clip-padding kui:text-sm kui:font-medium kui:whitespace-nowrap kui:transition-all kui:outline-none kui:select-none kui:focus-visible:border-ring kui:focus-visible:ring-3 kui:focus-visible:ring-ring/50 kui:active:translate-y-px kui:disabled:pointer-events-none kui:disabled:opacity-50 kui:aria-invalid:border-destructive kui:aria-invalid:ring-3 kui:aria-invalid:ring-destructive/20 kui:dark:aria-invalid:border-destructive/50 kui:dark:aria-invalid:ring-destructive/40 kui:[&_svg]:pointer-events-none kui:[&_svg]:shrink-0 kui:[&_svg:not([class*='size-'])]:size-4",
	{
		variants: {
			variant: {
				default:
					"kui:bg-primary kui:text-primary-foreground kui:[a]:hover:bg-primary/80",
				outline:
					"kui:border-border kui:bg-background kui:hover:bg-muted kui:hover:text-foreground kui:aria-expanded:bg-muted kui:aria-expanded:text-foreground kui:dark:border-input kui:dark:bg-input/30 kui:dark:hover:bg-input/50",
				secondary:
					"kui:bg-secondary kui:text-secondary-foreground kui:hover:bg-secondary/80 kui:aria-expanded:bg-secondary kui:aria-expanded:text-secondary-foreground",
				ghost:
					"kui:hover:bg-muted kui:hover:text-foreground kui:aria-expanded:bg-muted kui:aria-expanded:text-foreground kui:dark:hover:bg-muted/50",
				destructive:
					"kui:bg-destructive/10 kui:text-destructive kui:hover:bg-destructive/20 kui:focus-visible:border-destructive/40 kui:focus-visible:ring-destructive/20 kui:dark:bg-destructive/20 kui:dark:hover:bg-destructive/30 kui:dark:focus-visible:ring-destructive/40",
				link: "kui:text-primary kui:underline-offset-4 kui:hover:underline",
			},
			size: {
				default:
					"kui:h-8 kui:gap-1.5 kui:px-2.5 kui:has-data-[icon=inline-end]:pr-2 kui:has-data-[icon=inline-start]:pl-2",
				xs: "kui:h-6 kui:gap-1 kui:rounded-[min(var(--radius-md),10px)] kui:px-2 kui:text-xs kui:in-data-[slot=button-group]:rounded-lg kui:has-data-[icon=inline-end]:pr-1.5 kui:has-data-[icon=inline-start]:pl-1.5 kui:[&_svg:not([class*='size-'])]:size-3",
				sm: "kui:h-7 kui:gap-1 kui:rounded-[min(var(--radius-md),12px)] kui:px-2.5 kui:text-[0.8rem] kui:in-data-[slot=button-group]:rounded-lg kui:has-data-[icon=inline-end]:pr-1.5 kui:has-data-[icon=inline-start]:pl-1.5 kui:[&_svg:not([class*='size-'])]:size-3.5",
				lg: "kui:h-9 kui:gap-1.5 kui:px-2.5 kui:has-data-[icon=inline-end]:pr-3 kui:has-data-[icon=inline-start]:pl-3",
				icon: "kui:size-8",
				"icon-xs":
					"kui:size-6 kui:rounded-[min(var(--radius-md),10px)] kui:in-data-[slot=button-group]:rounded-lg kui:[&_svg:not([class*='size-'])]:size-3",
				"icon-sm":
					"kui:size-7 kui:rounded-[min(var(--radius-md),12px)] kui:in-data-[slot=button-group]:rounded-lg",
				"icon-lg": "kui:size-9",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

function Button({
	className,
	variant = "default",
	size = "default",
	asChild = false,
	...props
}: React.ComponentProps<"button"> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean;
	}) {
	const Comp = asChild ? Slot.Root : "button";

	return (
		<Comp
			data-slot="button"
			data-variant={variant}
			data-size={size}
			className={cn(buttonVariants({ variant, size, className }))}
			{...props}
		/>
	);
}

export { Button, buttonVariants };
