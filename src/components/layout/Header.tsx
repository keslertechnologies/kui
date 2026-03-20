// src/components/layout/Header.tsx

"use client";

import { useState, type ReactNode } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/custom/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/custom/sheet";
import { Menu, X } from "lucide-react";

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
      <NavigationMenuList className="gap-2 md:gap-6">
        {navItems.map((item, index) => (
          <NavigationMenuItem
            key={
              item.href || (typeof item.label === "string" ? item.label : index)
            }
          >
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              href={item.href}
              onClick={item.onClick}
            >
              {typeof item.label === "string" ? (
                <span className="font-ddin text-1xl">{item.label}</span>
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
      className="sticky top-0 z-60 w-full border-b border-border/20 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 pointer-events-auto uppercase"
      style={{ pointerEvents: "auto" }}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo / Brand */}
        <a
          href={logoHref}
          className="flex items-center gap-1 cursor-pointer group"
          onClick={() => {
            onLogoClick();
            setOpen(false);
          }}
        >
          <h1 className="font-ddin text-1xl md:text-2xl tracking-tight">
            {logo}
          </h1>
          {secondaryLogo && (
            <span className="font-ddin text-1xl md:text-2xl tracking-tight text-muted-foreground">
              {secondaryLogo}
            </span>
          )}
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <NavLinks />
        </div>

        {/* Mobile Menu Trigger + Sheet */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Toggle menu">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-100 border-l border-border/30 mt-16"
          >
            <div className="flex min-h-[calc(100vh-5rem)] flex-col justify-center px-8 py-12 bg-background">
              <nav className="flex flex-col gap-12 md:gap-16">
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
                      w-full text-left
                      text-3xl md:text-4xl 
                      font-ddin font-medium tracking-wider
                      text-foreground hover:text-primary
                      transition-colors duration-300
                      py-4 px-4 rounded-lg
                      hover:bg-muted/30 focus:outline-none focus:ring-2 focus:ring-ring
                      block
                    "
                  >
                    {typeof item.label === "string" ? (
                      <span className="font-ddin">{item.label}</span>
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
