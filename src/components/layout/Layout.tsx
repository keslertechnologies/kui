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
    <div className="min-h-screen bg-background text-foreground font-ddin flex flex-col">
      {header}
      <div className="flex-1">{children}</div>
      {footer}
    </div>
  );
}
