// src/components/Footer.tsx
import { forwardRef, type ComponentPropsWithoutRef, type FC } from "react";
import { Link } from "react-router-dom"; // peer/dev dep – consuming app or Storybook provides
import { cn } from "@/lib/utils";

// Assuming Lucide icons – adjust if you ever switch libraries
import type { LucideIcon } from "lucide-react";

interface LinkItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

interface SocialItem {
  /**
   * Lucide icon component (e.g. Gitlab, Linkedin, Twitter)
   */
  icon: LucideIcon;
  href: string;
  /**
   * Optional override for aria-label (defaults to icon display name if available)
   */
  label?: string;
}

interface FooterProps extends ComponentPropsWithoutRef<"footer"> {
  links?: LinkItem[];
  socials?: SocialItem[];
}

export const Footer = forwardRef<HTMLElement, FooterProps>(
  ({ className, links, socials, ...props }, ref) => {
    return (
      <footer
        ref={ref}
        className={cn(
          "bg-background pt-12 pb-8 w-full font-ddin uppercase text-[10px] sm:text-xs",
          className,
        )}
        {...props}
      >
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 text-muted-foreground">
            {/* Social Icons */}
            <div className="flex items-center gap-6 order-3 md:order-1">
              {socials?.map((social) => {
                const IconComp = social.icon;
                return (
                  <a
                    key={social.href}
                    href={social.href}
                    className="hover:text-foreground transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label ?? "Social link"}
                  >
                    <IconComp className="w-4 h-4" />
                  </a>
                );
              })}
            </div>

            {/* Navigation Links */}
            <ul className="flex flex-wrap justify-center items-center gap-6 md:gap-10 order-1 md:order-2 font-medium tracking-widest text-foreground">
              {links?.map((link) => {
                const isExternal =
                  link.isExternal ||
                  link.href.startsWith("http") ||
                  link.href.startsWith("#");

                if (isExternal) {
                  return (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="hover:text-muted-foreground transition-colors"
                        target={
                          link.isExternal || link.href.startsWith("http")
                            ? "_blank"
                            : undefined
                        }
                        rel={
                          link.isExternal || link.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                }

                return (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="hover:text-muted-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Copyright */}
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
