// src/components/layout/Sidebar.tsx

"use client";

import { cn } from "@/lib/utils";

export interface SidebarLink {
	label: string;
	href: string;
	onClick?: () => void;
	isActive?: boolean;
}

export interface SidebarSection {
	title?: string;
	links: SidebarLink[];
}

export interface SidebarProps {
	/**
	 * Navigation sections with titles and links
	 */
	sections?: SidebarSection[];
	/**
	 * Additional CSS classes for the root container
	 */
	className?: string;
}

export function Sidebar({ sections = [], className }: SidebarProps) {
	return (
		<div className={cn("kui:p-4 kui:flex kui:flex-col kui:h-full", className)}>
			{/* Scrollable nav area */}
			<div className="kui:flex-1 kui:overflow-y-auto kui:space-y-8">
				{sections.map((section) => (
					<div key={section.title}>
						<h3 className="kui:text-xs kui:font-medium kui:tracking-widest kui:text-muted-foreground kui:mb-2 kui:uppercase">
							{section.title}
						</h3>
						<nav className="kui:flex kui:flex-col kui:gap-1">
							{section.links.map((link) => (
								<a
									key={link.label}
									href={link.href}
									onClick={(e) => {
										if (link.onClick) {
											e.preventDefault();
											link.onClick();
										}
									}}
									className={cn(
										"kui:flex kui:items-center kui:gap-2 kui:px-3 kui:py-2 kui:rounded-lg kui:text-sm kui:font-medium kui:hover:bg-accent kui:hover:text-accent-foreground kui:transition-colors",
										link.isActive
											? "kui:bg-accent kui:text-accent-foreground"
											: "kui:text-foreground/70",
									)}
								>
									{link.label}
								</a>
							))}
						</nav>
					</div>
				))}
			</div>
		</div>
	);
}
