// src/components/layout/Header.tsx
"use client";

import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/custom/sheet";
import { Menu, X } from "lucide-react";
import { cn, scrollToSection } from "@/lib/utils";
import { useUIConfig, type LinkComponent } from "@/providers/UIProvider";

interface NavItem {
  label: string;
  href: string;
  /** Optional — mostly useful if you later mix hash & path-based nav */
  isScrollTarget?: boolean;
}

interface HeaderProps {
  navItems?: NavItem[];
  /** Optional override for the Link component used for navigation */
  Link?: LinkComponent;
}

export function Header({ navItems = [], Link: LocalLink }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const { linkComponent: GlobalLink } = useUIConfig();
  const Link = LocalLink ?? GlobalLink;

  const NavLinks = ({ mobile = false }: { mobile?: boolean }) => {
    const linkClass = mobile
      ? cn(
          "w-full text-left justify-start", // Ensures content starts from left edge
          "text-3xl md:text-4xl",
          "font-ddin font-medium tracking-wider",
          "text-foreground hover:text-primary",
          "transition-colors duration-300",
          "py-4 px-4 rounded-lg",
          "hover:bg-muted/30",
          "focus:outline-none focus:ring-2 focus:ring-ring",
        )
      : cn(
          navigationMenuTriggerStyle(),
          "data-[active]:bg-muted/50 data-[active]:text-foreground",
        );

    const items = navItems.map((item) => {
      const isExternalLike =
        item.href.startsWith("http") || item.href.startsWith("mailto:");
      const isHash = item.href.startsWith("#");

      if (isExternalLike) {
        console.warn(
          `External-like href detected but not supported: ${item.href}`,
        );
      }

      const content = <span className="font-ddin text-1xl">{item.label}</span>;

      return (
        <NavigationMenuItem key={item.href} className="w-full">
          {" "}
          {/* Full width per item */}
          {isHash || item.isScrollTarget ? (
            <button
              type="button"
              onClick={() => {
                scrollToSection(item.href.slice(1));
                if (mobile) setOpen(false);
              }}
              className={linkClass}
            >
              {content}
            </button>
          ) : (
            <NavigationMenuLink asChild className={linkClass}>
              <Link href={item.href} onClick={() => mobile && setOpen(false)}>
                {content}
              </Link>
            </NavigationMenuLink>
          )}
        </NavigationMenuItem>
      );
    });

    // Mobile needs its own NavigationMenu wrapper to provide context for Radix primitives
    if (mobile) {
      return (
        <NavigationMenu orientation="vertical" className="w-full">
          <NavigationMenuList className="flex flex-col items-stretch gap-12 md:gap-16 w-full">
            {" "}
            {/* stretch + full width */}
            {items}
          </NavigationMenuList>
        </NavigationMenu>
      );
    }

    // Desktop is already wrapped higher in the tree
    return <>{items}</>;
  };

  return (
    <header
      className={
        "sticky top-0 z-[60] w-full border-b border-border/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      }
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo / Brand */}
        <div
          className="flex items-center gap-1 cursor-pointer group"
          onClick={() => {
            scrollToSection("hero");
            setOpen(false);
          }}
        >
          <h1 className="font-ddin text-1xl md:text-2xl tracking-tight">
            KESLER TECHNOLOGIES
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList className="gap-2 md:gap-6">
              <NavLinks />
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Toggle menu">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="w-full sm:w-100 border-l border-border/30 mt-16 p-0 h-[calc(100vh-4rem)]" // ← caps height to viewport minus offset
          >
            <div className="flex h-full flex-col bg-background">
              <div className="flex-1 overflow-y-auto px-8 py-12">
                <nav className="flex flex-col gap-12 md:gap-16">
                  <NavLinks mobile />
                </nav>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
