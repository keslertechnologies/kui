// src/components/layout/Header.tsx

"use client";

import { Menu, X } from "lucide-react";
import { type ReactNode, useState } from "react";
import { Button } from "@/components/custom/button";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "@/components/custom/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/custom/sheet";
import { cn } from "@/lib/utils";

interface NavItem {
	label: ReactNode;
	href?: string;
	onClick?: () => void;
}

interface HeaderProps {
	navItems?: NavItem[];
	logoHref?: string;
	onLogoClick?: () => void;
	logo: ReactNode;
	secondaryLogo?: ReactNode;
}

export function Header({
	navItems = [],
	logoHref = "/",
	onLogoClick = () => {},
	logo,
	secondaryLogo,
}: HeaderProps) {
	const [open, setOpen] = useState(false);

	const NavLinks = () => (
		<NavigationMenu>
			<NavigationMenuList className="kui:gap-2 kui:md:gap-6">
				{navItems.map((item, index) => (
					<NavigationMenuItem
						key={
							item.href || (typeof item.label === "string" ? item.label : index)
						}
					>
						<NavigationMenuLink
							className={cn(
								navigationMenuTriggerStyle(),
								typeof item.label !== "string" &&
									"kui:h-12 kui:w-12 kui:p-0 kui:bg-transparent kui:hover:bg-muted/50 kui:flex kui:items-center kui:justify-center kui:rounded-full",
							)}
							href={item.href}
							onClick={item.onClick}
						>
							{typeof item.label === "string" ? (
								<span className="kui:font-ddin kui:text-1xl">{item.label}</span>
							) : (
								item.label
							)}
						</NavigationMenuLink>
					</NavigationMenuItem>
				))}
			</NavigationMenuList>
		</NavigationMenu>
	);

	return (
		<header
			className="kui:sticky kui:top-0 kui:z-60 kui:w-full kui:border-b kui:border-border/20 kui:bg-background/95 kui:backdrop-blur kui:supports-backdrop-filter:bg-background/60 kui:pointer-events-auto kui:uppercase"
			style={{ pointerEvents: "auto" }}
		>
			<div className="kui:container kui:flex kui:h-16 kui:items-center kui:justify-between kui:px-4 kui:md:px-6">
				{/* Logo / Brand */}
				<a
					href={logoHref}
					className="kui:flex kui:items-center kui:gap-1 kui:cursor-pointer kui:group"
					onClick={() => {
						onLogoClick();
						setOpen(false);
					}}
				>
					<h1 className="kui:font-ddin kui:text-1xl kui:md:text-2xl kui:tracking-tight">
						{logo}
					</h1>
					{secondaryLogo && (
						<span className="kui:font-ddin kui:text-1xl kui:md:text-2xl kui:tracking-tight kui:text-muted-foreground">
							{secondaryLogo}
						</span>
					)}
				</a>

				{/* Desktop Navigation */}
				<div className="kui:hidden kui:md:flex kui:items-center kui:gap-6">
					<NavLinks />
				</div>

				{/* Mobile Menu Trigger + Sheet */}
				<Sheet open={open} onOpenChange={setOpen}>
					<SheetTrigger asChild className="kui:md:hidden">
						<Button variant="ghost" size="icon" aria-label="Toggle menu">
							{open ? (
								<X className="kui:h-6 kui:w-6" />
							) : (
								<Menu className="kui:h-6 kui:w-6" />
							)}
						</Button>
					</SheetTrigger>
					<SheetContent
						side="right"
						className="kui:w-100 kui:border-l kui:border-border/30 kui:mt-16"
					>
						<div className="kui:flex kui:min-h-[calc(100vh-5rem)] kui:flex-col kui:justify-center kui:px-8 kui:py-12 kui:bg-background">
							<nav className="kui:flex kui:flex-col kui:gap-12 kui:md:gap-16">
								{navItems.map((item, index) => (
									<a
										key={
											item.href ||
											(typeof item.label === "string" ? item.label : index)
										}
										href={item.href}
										onClick={() => {
											if (item.onClick) item.onClick();
											setOpen(false);
										}}
										className="
                      kui:w-full kui:text-left
                      kui:text-3xl kui:md:text-4xl 
                      kui:font-ddin kui:font-medium kui:tracking-wider
                      kui:text-foreground kui:hover:text-primary
                      kui:transition-colors kui:duration-300
                      kui:py-4 kui:px-4 kui:rounded-lg
                      kui:hover:bg-muted/30 kui:focus:outline-none kui:focus:ring-2 kui:focus:ring-ring
                      kui:block
                    "
									>
										{typeof item.label === "string" ? (
											<span className="kui:font-ddin">{item.label}</span>
										) : (
											item.label
										)}
									</a>
								))}
							</nav>
						</div>
					</SheetContent>
				</Sheet>
			</div>
		</header>
	);
}
