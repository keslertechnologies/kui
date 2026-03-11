// src/components/Footer.tsx  (or wherever it lives; adjust import paths as needed)

import { Gitlab } from "lucide-react";
import {
  type ComponentPropsWithoutRef,
  forwardRef,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils"; // adjust to your cn location (clsx + tailwind-merge)

// Optional: if you want to support active link highlighting later
// interface LinkItem {
//   label: string;
//   href: string;
//   isExternal?: boolean;
// }

interface FooterProps extends ComponentPropsWithoutRef<"footer"> {
  /**
   * Custom component to use for internal links (e.g. react-router-dom Link).
   * Falls back to plain <a> if not provided.
   */
  LinkComponent?: React.ComponentType<{
    to: string;
    children: ReactNode;
    className?: string;
  }>;

  /**
   * Override default links (useful for dynamic or app-specific routes)
   */
  links?: Array<{
    label: string;
    href: string;
    isExternal?: boolean;
  }>;
}

const defaultLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "#services", isExternal: false }, // # = same-page scroll
  { label: "Portfolio", href: "#portfolio", isExternal: false },
  { label: "Contact", href: "#contact", isExternal: false },
  { label: "Privacy Policy", href: "/privacy" },
];

export const Footer = forwardRef<HTMLElement, FooterProps>(
  (
    {
      className,
      LinkComponent = ({ to, children, className }: any) => (
        <a href={to} className={className}>
          {children}
        </a>
      ),
      links = defaultLinks,
      ...props
    },
    ref,
  ) => {
    return (
      <footer
        ref={ref}
        className={cn(
          "bg-background pt-12 pb-8 relative z-10 w-full font-ddin uppercase text-[10px] sm:text-xs",
          className,
        )}
        {...props}
      >
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 text-muted-foreground">
            {/* Social Icons - Left (or Center on mobile) */}
            <div className="flex items-center gap-6 order-3 md:order-1">
              <a
                href="https://gitlab.com/keslertechnologies"
                className="hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitLab"
              >
                <Gitlab className="w-4 h-4" />
              </a>
            </div>

            {/* Core Navigation - Center */}
            <ul className="flex flex-wrap justify-center items-center gap-6 md:gap-10 order-1 md:order-2 font-medium tracking-widest text-foreground">
              {links.map((link) => (
                <li key={link.href}>
                  {link.isExternal || link.href.startsWith("#") ? (
                    <a
                      href={link.href}
                      className="hover:text-muted-foreground transition-colors"
                      target={link.isExternal ? "_blank" : undefined}
                      rel={link.isExternal ? "noopener noreferrer" : undefined}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <LinkComponent
                      to={link.href}
                      className="hover:text-muted-foreground transition-colors"
                    >
                      {link.label}
                    </LinkComponent>
                  )}
                </li>
              ))}
            </ul>

            {/* Copyright - Right (or Bottom on mobile) */}
            <div className="order-2 md:order-3 font-medium tracking-widest whitespace-nowrap">
              © {new Date().getFullYear()} KESLER TECHNOLOGIES
            </div>
          </div>
        </div>
      </footer>
    );
  },
);

Footer.displayName = "Footer";
