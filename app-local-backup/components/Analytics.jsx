"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Analytics({ gaId }) {
  const pathname = usePathname();

  useEffect(() => {
    if (!gaId) return;
    if (typeof window === "undefined") return;
    if (!window.gtag) return;

    window.gtag('config', gaId, {
      page_path: pathname,
    });
  }, [gaId, pathname]);

  return null;
}
