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

interface CopyrightItem {
  companyName: string;
  companyUrl: string;
}

interface FooterProps {
  links?: LinkItem[];
  socials?: SocialItem[];
  copyright?: CopyrightItem;
}

export function Footer({
  links = [],
  socials = [],
  copyright,
  ...props
}: FooterProps) {
  return (
    <footer
      className={
        "kui:bg-background kui:pt-12 kui:pb-8 kui:w-full kui:font-ddin kui:uppercase kui:text-[10px] kui:sm:text-xs"
      }
      {...props}
    >
      <div className="kui:container kui:mx-auto kui:px-6 kui:max-w-[1400px]">
        <div className="kui:flex kui:flex-col kui:md:flex-row kui:items-center kui:justify-between kui:gap-6 kui:md:gap-4 kui:text-muted-foreground">
          {/* Social Icons */}
          <div className="kui:flex kui:items-center kui:gap-6 kui:order-3 kui:md:order-1">
            {socials.map((social) => {
              const IconComp = social.icon;
              return (
                <a
                  key={social.href}
                  href={social.href}
                  className="kui:hover:text-foreground kui:transition-colors"
                  target={"_blank"}
                  rel={"noopener noreferrer"}
                  aria-label={social.label ?? "Social link"}
                >
                  <IconComp className="kui:w-4 kui:h-4" />
                </a>
              );
            })}
          </div>

          {/* Navigation Links */}
          <ul className="kui:flex kui:flex-wrap kui:justify-center kui:items-center kui:gap-6 kui:md:gap-10 kui:order-1 kui:md:order-2 kui:font-medium kui:tracking-widest kui:text-foreground">
            {links.map((link) => {
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={link.onClick}
                    target={link.isExternal ? "_blank" : undefined}
                    rel={link.isExternal ? "noopener noreferrer" : undefined}
                    className="kui:inline-flex kui:items-center kui:gap-1.5 kui:hover:text-muted-foreground kui:transition-colors"
                  >
                    <span>{link.label}</span>
                    {link.isExternal && (
                      <FiExternalLink
                        className="kui:inline-block kui:h-3.5 kui:w-3.5 kui:text-muted-foreground/60"
                        aria-hidden="true"
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Copyright */}
          {copyright && (
            <div className="kui:order-2 kui:md:order-3 kui:font-medium kui:tracking-widest kui:whitespace-nowrap">
              <a
                href={copyright?.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="kui:focus-visible:underline kui:outline-none"
              >
                © {new Date().getFullYear()} {copyright?.companyName}
              </a>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
