"use client";

import * as React from "react";
import { ShoppingCart } from "lucide-react";

export interface IconWithBadgeProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
      return <ShoppingCart className="text-foreground h-7 w-7" />;
    }
    return children;
  };

  return (
    <button
      ref={ref}
      className="relative flex items-center justify-center rounded-full transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-muted/50 active:scale-95 h-12 w-12 p-0 bg-transparent"
      {...props}
    >
      {renderIcon()}
      {itemCount > 0 && (
        <span className="absolute -top-1.5 -right-1.5 flex items-center justify-center rounded-full bg-primary text-primary-foreground text-[10px] font-bold px-1.5 py-0.5 min-w-[18px] h-[18px] shadow-sm animate-in zoom-in duration-300">
          {itemCount > 99 ? "99+" : itemCount}
        </span>
      )}
    </button>
  );
});

IconWithBadge.displayName = "IconWithBadge";
