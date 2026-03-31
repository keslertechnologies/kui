// src/components/layout/Layout.tsx
"use client";

import type { ReactNode } from "react";

interface LayoutProps {
	header?: ReactNode;
	sidebar?: ReactNode;
	footer?: ReactNode;
	children: ReactNode;
}

export function Layout({ header, sidebar, footer, children }: LayoutProps) {
	return (
		<div className="kui:h-screen kui:flex kui:flex-col kui:overflow-hidden kui:bg-background kui:text-foreground kui:font-ddin">
			{/* Always-visible header */}
			{header}

			{/* Content area – forces independent scrolling */}
			<div className="kui:flex kui:flex-1 kui:overflow-hidden">
				{/* Sidebar – scrolls only when YOU scroll it */}
				{sidebar && (
					<aside className="kui:w-72 kui:shrink-0 kui:overflow-y-auto kui:border-r kui:border-border kui:bg-background kui:h-full">
						{sidebar}
					</aside>
				)}

				{/* Main content – your primary scrollbar */}
				<main className="kui:flex-1 kui:overflow-y-auto kui:flex kui:flex-col kui:h-full">
					{/* Page content grows and scrolls here */}
					<div className="kui:flex-1">{children}</div>

					{/* Footer stays at the bottom of the *page content* */}
					{footer}
				</main>
			</div>
		</div>
	);
}
