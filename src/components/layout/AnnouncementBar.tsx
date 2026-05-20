"use client";

import Link from "next/link";
import { Truck, Sparkles } from "lucide-react";
import { ANNOUNCEMENT } from "@/lib/constants";

export function AnnouncementBar() {
  return (
    <div
      id="announcement-bar"
      className="announcement-bar sticky top-0 z-[60] w-full border-b border-accent/30 bg-foreground text-white"
    >
      <div className="site-container announcement-bar-inner">
        <p className="announcement-bar-copy text-white">
          <Truck className="h-3.5 w-3.5 shrink-0 text-accent" strokeWidth={1.75} />
          <span className="text-white/80">{ANNOUNCEMENT.prefix}</span>
          <strong className="font-bold text-white">{ANNOUNCEMENT.highlight}</strong>
          <span className="hidden text-white/65 sm:inline">
            {" "}
            • {ANNOUNCEMENT.secondary}
          </span>
        </p>
        <Link href={ANNOUNCEMENT.href} className="announcement-cta">
          <Sparkles className="shrink-0" strokeWidth={1.75} />
          <span className="hidden sm:inline">{ANNOUNCEMENT.cta}</span>
          <span className="sm:hidden">Ver ofertas</span>
        </Link>
      </div>
    </div>
  );
}
