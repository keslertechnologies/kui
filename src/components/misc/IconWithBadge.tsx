"use client";

import * as React from "react";
import { ShoppingCart } from "lucide-react";

export interface IconWithBadgeProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "cart" | "none";
	itemCount?: number;
	children?: React.ReactNode;
}

export const IconWithBadge = React.forwardRef<
	HTMLButtonElement,
	IconWithBadgeProps
>(({ variant = "none", itemCount = 0, children, ...props }, ref) => {
	const renderIcon = () => {
		if (variant === "cart") {
			return <ShoppingCart className="kui:text-foreground kui:h-7 kui:w-7" />;
		}
		return children;
	};

	return (
		<button
			ref={ref}
			className="kui:relative kui:flex kui:items-center kui:justify-center kui:rounded-full kui:transition-all kui:duration-200 kui:outline-none kui:focus-visible:ring-2 kui:focus-visible:ring-ring kui:focus-visible:ring-offset-2 kui:disabled:pointer-events-none kui:disabled:opacity-50 kui:hover:bg-muted/50 kui:active:scale-95 kui:h-12 kui:w-12 kui:p-0 kui:bg-transparent"
			{...props}
		>
			{renderIcon()}
			{itemCount > 0 && (
				<span className="kui:absolute kui:-top-1.5 kui:-right-1.5 kui:flex kui:items-center kui:justify-center kui:rounded-full kui:bg-primary kui:text-primary-foreground kui:text-[10px] kui:font-bold kui:px-1.5 kui:py-0.5 kui:min-w-[18px] kui:h-[18px] kui:shadow-sm kui:animate-in kui:zoom-in kui:duration-300">
					{itemCount > 99 ? "99+" : itemCount}
				</span>
			)}
		</button>
	);
});

IconWithBadge.displayName = "IconWithBadge";
