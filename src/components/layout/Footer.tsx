// src/components/Footer.tsx

"use client";

import { type IconType } from "react-icons";
import { FiExternalLink } from "react-icons/fi";

interface LinkItem {
  label: string;
  href: string;
  isExternal?: boolean;
  onClick?: () => void;
}

interface SocialItem {
  icon: IconType;
  href: string;
  label?: string;
}

interface FooterProps {
  links?: LinkItem[];
  socials?: SocialItem[];
}

export function Footer({ links = [], socials = [], ...props }: FooterProps) {
  return (
    <footer
      className={
        "bg-background pt-12 pb-8 w-full font-ddin uppercase text-[10px] sm:text-xs"
      }
      {...props}
    >
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 text-muted-foreground">
          {/* Social Icons */}
          <div className="flex items-center gap-6 order-3 md:order-1">
            {socials.map((social) => {
              const IconComp = social.icon;
              return (
                <a
                  key={social.href}
                  href={social.href}
                  className="hover:text-foreground transition-colors"
                  target={"_blank"}
                  rel={"noopener noreferrer"}
                  aria-label={social.label ?? "Social link"}
                >
                  <IconComp className="w-4 h-4" />
                </a>
              );
            })}
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-wrap justify-center items-center gap-6 md:gap-10 order-1 md:order-2 font-medium tracking-widest text-foreground">
            {links.map((link) => {
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={link.onClick}
                    target={link.isExternal ? "_blank" : undefined}
                    rel={link.isExternal ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-1.5 hover:text-muted-foreground transition-colors"
                  >
                    <span>{link.label}</span>
                    {link.isExternal && (
                      <FiExternalLink
                        className="inline-block h-3.5 w-3.5 text-muted-foreground/60"
                        aria-hidden="true"
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Copyright */}
          <div className="order-2 md:order-3 font-medium tracking-widest whitespace-nowrap">
            <a
              href="https://keslertechnologies.com"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-visible:underline outline-none"
            >
              © {new Date().getFullYear()} KESLER TECHNOLOGIES
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
