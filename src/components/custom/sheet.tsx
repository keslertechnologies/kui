// src/components/custom/sheet.tsx

import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const Sheet = SheetPrimitive.Root;

const SheetTrigger = SheetPrimitive.Trigger;

const SheetClose = SheetPrimitive.Close;

const SheetPortal = SheetPrimitive.Portal;

const SheetOverlay = React.forwardRef<
	React.ElementRef<typeof SheetPrimitive.Overlay>,
	React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
	<SheetPrimitive.Overlay
		className={cn(
			"kui:fixed kui:inset-0 kui:z-50 kui:data-[state=open]:animate-in kui:data-[state=closed]:animate-out kui:data-[state=closed]:fade-out-0 kui:data-[state=open]:fade-in-0",
			className,
		)}
		{...props}
		ref={ref}
	/>
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

const sheetVariants = cva(
	"kui:fixed kui:z-50 kui:gap-4 kui:shadow-lg kui:transition kui:ease-in-out kui:data-[state=closed]:duration-300 kui:data-[state=open]:duration-500 kui:data-[state=open]:animate-in kui:data-[state=closed]:animate-out",
	{
		variants: {
			side: {
				top: "kui:inset-x-0 kui:top-0 kui:border-b kui:data-[state=closed]:slide-out-to-top kui:data-[state=open]:slide-in-from-top",
				bottom:
					"kui:inset-x-0 kui:bottom-0 kui:border-t kui:data-[state=closed]:slide-out-to-bottom kui:data-[state=open]:slide-in-from-bottom",
				left: "kui:inset-y-0 kui:left-0 kui:h-full kui:w-3/4 kui:border-r kui:data-[state=closed]:slide-out-to-left kui:data-[state=open]:slide-in-from-left kui:sm:max-w-sm",
				right:
					"kui:inset-y-0 kui:right-0 kui:h-full kui:w-3/4 kui:border-l kui:data-[state=closed]:slide-out-to-right kui:data-[state=open]:slide-in-from-right kui:sm:max-w-sm",
			},
		},
		defaultVariants: {
			side: "right",
		},
	},
);

interface SheetContentProps
	extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
		VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<
	React.ElementRef<typeof SheetPrimitive.Content>,
	SheetContentProps
>(({ side = "right", className, children, ...props }, ref) => (
	<SheetPortal>
		<SheetOverlay />
		<SheetPrimitive.Content
			ref={ref}
			className={cn(sheetVariants({ side }), className)}
			{...props}
		>
			{children}
		</SheetPrimitive.Content>
	</SheetPortal>
));
SheetContent.displayName = SheetPrimitive.Content.displayName;

const SheetHeader = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div
		className={cn(
			"kui:flex kui:flex-col kui:space-y-2 kui:text-center kui:sm:text-left",
			className,
		)}
		{...props}
	/>
);
SheetHeader.displayName = "SheetHeader";

const SheetFooter = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div
		className={cn(
			"kui:flex kui:flex-col-reverse kui:sm:flex-row kui:sm:justify-end kui:sm:space-x-2",
			className,
		)}
		{...props}
	/>
);
SheetFooter.displayName = "SheetFooter";

const SheetTitle = React.forwardRef<
	React.ElementRef<typeof SheetPrimitive.Title>,
	React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
	<SheetPrimitive.Title
		ref={ref}
		className={cn(
			"kui:text-lg kui:font-semibold kui:text-foreground",
			className,
		)}
		{...props}
	/>
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;

const SheetDescription = React.forwardRef<
	React.ElementRef<typeof SheetPrimitive.Description>,
	React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
	<SheetPrimitive.Description
		ref={ref}
		className={cn("kui:text-sm kui:text-muted-foreground", className)}
		{...props}
	/>
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

export {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetOverlay,
	SheetPortal,
	SheetTitle,
	SheetTrigger,
};
