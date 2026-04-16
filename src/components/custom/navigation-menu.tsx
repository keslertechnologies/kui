import { cva } from "class-variance-authority";
import { ChevronDownIcon } from "lucide-react";
import { NavigationMenu as NavigationMenuPrimitive } from "radix-ui";
import type * as React from "react";
import { cn } from "@/lib/utils";

function NavigationMenu({
	className,
	children,
	viewport = true,
	...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Root> & {
	viewport?: boolean;
}) {
	return (
		<NavigationMenuPrimitive.Root
			data-slot="navigation-menu"
			data-viewport={viewport}
			className={cn(
				"kui:group/navigation-menu kui:relative kui:flex kui:max-w-max kui:flex-1 kui:items-center kui:justify-center",
				className,
			)}
			{...props}
		>
			{children}
			{viewport && <NavigationMenuViewport />}
		</NavigationMenuPrimitive.Root>
	);
}

function NavigationMenuList({
	className,
	...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.List>) {
	return (
		<NavigationMenuPrimitive.List
			data-slot="navigation-menu-list"
			className={cn(
				"kui:group kui:flex kui:flex-1 kui:list-none kui:items-center kui:justify-center kui:gap-0",
				className,
			)}
			{...props}
		/>
	);
}

function NavigationMenuItem({
	className,
	...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Item>) {
	return (
		<NavigationMenuPrimitive.Item
			data-slot="navigation-menu-item"
			className={cn("kui:relative", className)}
			{...props}
		/>
	);
}

const navigationMenuTriggerStyle = cva(
	"kui:group/navigation-menu-trigger kui:inline-flex kui:h-9 kui:w-max kui:items-center kui:justify-center kui:rounded-lg kui:bg-background kui:px-2.5 kui:py-1.5 kui:text-sm kui:font-medium kui:transition-all kui:outline-none kui:hover:bg-muted kui:focus:bg-muted kui:focus-visible:ring-3 kui:focus-visible:ring-ring/50 kui:focus-visible:outline-1 kui:disabled:pointer-events-none kui:disabled:opacity-50 kui:data-popup-open:bg-muted/50 kui:data-popup-open:hover:bg-muted kui:data-open:bg-muted/50 kui:data-open:hover:bg-muted kui:data-open:focus:bg-muted",
);

function NavigationMenuTrigger({
	className,
	children,
	...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>) {
	return (
		<NavigationMenuPrimitive.Trigger
			data-slot="navigation-menu-trigger"
			className={cn(navigationMenuTriggerStyle(), "kui:group", className)}
			{...props}
		>
			{children}{" "}
			<ChevronDownIcon
				className="kui:relative kui:top-px kui:ml-1 kui:size-3 kui:transition kui:duration-300 kui:group-data-popup-open/navigation-menu-trigger:rotate-180 kui:group-data-open/navigation-menu-trigger:rotate-180"
				aria-hidden="true"
			/>
		</NavigationMenuPrimitive.Trigger>
	);
}

function NavigationMenuContent({
	className,
	...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Content>) {
	return (
		<NavigationMenuPrimitive.Content
			data-slot="navigation-menu-content"
			className={cn(
				"kui:top-0 kui:left-0 kui:w-full kui:p-1 kui:ease-[cubic-bezier(0.22,1,0.36,1)] kui:group-data-[viewport=false]/navigation-menu:top-full kui:group-data-[viewport=false]/navigation-menu:mt-1.5 kui:group-data-[viewport=false]/navigation-menu:overflow-hidden kui:group-data-[viewport=false]/navigation-menu:rounded-lg kui:group-data-[viewport=false]/navigation-menu:bg-popover kui:group-data-[viewport=false]/navigation-menu:text-popover-foreground kui:group-data-[viewport=false]/navigation-menu:shadow kui:group-data-[viewport=false]/navigation-menu:ring-1 kui:group-data-[viewport=false]/navigation-menu:ring-foreground/10 kui:group-data-[viewport=false]/navigation-menu:duration-300 kui:data-[motion=from-end]:slide-in-from-right-52 kui:data-[motion=from-start]:slide-in-from-left-52 kui:data-[motion=to-end]:slide-out-to-right-52 kui:data-[motion=to-start]:slide-out-to-left-52 kui:data-[motion^=from-]:animate-in kui:data-[motion^=from-]:fade-in kui:data-[motion^=to-]:animate-out kui:data-[motion^=to-]:fade-out kui:**:data-[slot=navigation-menu-link]:focus:ring-0 kui:**:data-[slot=navigation-menu-link]:focus:outline-none kui:md:absolute kui:md:w-auto kui:group-data-[viewport=false]/navigation-menu:data-open:animate-in kui:group-data-[viewport=false]/navigation-menu:data-open:fade-in-0 kui:group-data-[viewport=false]/navigation-menu:data-open:zoom-in-95 kui:group-data-[viewport=false]/navigation-menu:data-closed:animate-out kui:group-data-[viewport=false]/navigation-menu:data-closed:fade-out-0 kui:group-data-[viewport=false]/navigation-menu:data-closed:zoom-out-95",
				className,
			)}
			{...props}
		/>
	);
}

function NavigationMenuViewport({
	className,
	...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Viewport>) {
	return (
		<div
			className={cn(
				"kui:absolute kui:top-full kui:left-0 kui:isolate kui:z-50 kui:flex kui:justify-center",
			)}
		>
			<NavigationMenuPrimitive.Viewport
				data-slot="navigation-menu-viewport"
				className={cn(
					"kui:origin-top-center kui:relative kui:mt-1.5 kui:h-(--radix-navigation-menu-viewport-height) kui:w-full kui:overflow-hidden kui:rounded-lg kui:bg-popover kui:text-popover-foreground kui:shadow kui:ring-1 kui:ring-foreground/10 kui:duration-100 kui:md:w-(--radix-navigation-menu-viewport-width) kui:data-open:animate-in kui:data-open:zoom-in-90 kui:data-closed:animate-out kui:data-closed:zoom-out-90",
					className,
				)}
				{...props}
			/>
		</div>
	);
}

function NavigationMenuLink({
	className,
	...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Link>) {
	return (
		<NavigationMenuPrimitive.Link
			data-slot="navigation-menu-link"
			className={cn(
				"kui:flex kui:items-center kui:gap-2 kui:rounded-lg kui:p-2 kui:text-sm kui:transition-all kui:outline-none kui:hover:bg-muted kui:focus:bg-muted kui:focus-visible:ring-3 kui:focus-visible:ring-ring/50 kui:focus-visible:outline-1 kui:in-data-[slot=navigation-menu-content]:rounded-md kui:data-active:bg-muted/50 kui:data-active:hover:bg-muted kui:data-active:focus:bg-muted kui:[&_svg:not([class*='size-']):not([class*='h-']):not([class*='w-'])]:size-4",
				className,
			)}
			{...props}
		/>
	);
}

function NavigationMenuIndicator({
	className,
	...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Indicator>) {
	return (
		<NavigationMenuPrimitive.Indicator
			data-slot="navigation-menu-indicator"
			className={cn(
				"kui:top-full kui:z-1 kui:flex kui:h-1.5 kui:items-end kui:justify-center kui:overflow-hidden kui:data-[state=hidden]:animate-out kui:data-[state=hidden]:fade-out kui:data-[state=visible]:animate-in kui:data-[state=visible]:fade-in",
				className,
			)}
			{...props}
		>
			<div className="kui:relative kui:top-[60%] kui:h-2 kui:w-2 kui:rotate-45 kui:rounded-tl-sm kui:bg-border kui:shadow-md" />
		</NavigationMenuPrimitive.Indicator>
	);
}

export {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuViewport,
	navigationMenuTriggerStyle,
};
