import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollHandler() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    // 1. No hash → scroll to top instantly (no animation flicker)
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      return;
    }

    // 2. Hash present → try to find & scroll smoothly
    const id = hash.replace(/^#/, "");
    const element = document.getElementById(id);

    if (element) {
      // Usually already exists at this point in static apps
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // Very rare fallback in static case — but safe
      // (might happen if hash changes extremely fast or on direct deep link)
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    }
  }, [pathname, hash]);

  return null;
}
