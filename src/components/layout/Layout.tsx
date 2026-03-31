// src/components/layout/Layout.tsx
"use client";

import type { ReactNode } from "react";

interface LayoutProps {
	header?: ReactNode;
	footer?: ReactNode;
	children: ReactNode;
}

export function Layout({ header, footer, children }: LayoutProps) {
	return (
		<div className="kui:min-h-screen kui:bg-background kui:text-foreground kui:font-ddin kui:flex kui:flex-col">
			{header}
			<div className="kui:flex-1">{children}</div>
			{footer}
		</div>
	);
}
