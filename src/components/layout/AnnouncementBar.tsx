"use client";

import Link from "next/link";
import { Truck, Sparkles } from "lucide-react";
import { ANNOUNCEMENT } from "@/lib/constants";

export function AnnouncementBar() {
  return (
    <div
      id="announcement-bar"
      className="announcement-bar sticky top-0 z-[60] border-b border-accent/30 bg-foreground text-white"
    >
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-center gap-x-3 gap-y-1.5 px-4 py-2.5 text-center sm:h-10 sm:flex-nowrap sm:justify-between sm:px-8 sm:py-0">
        <p className="flex flex-wrap items-center justify-center gap-x-1.5 text-[10px] font-medium sm:text-[11px]">
          <Truck className="h-3.5 w-3.5 shrink-0 text-accent" strokeWidth={1.75} />
          <span className="text-white/80">{ANNOUNCEMENT.prefix}</span>
          <strong className="font-bold text-white">{ANNOUNCEMENT.highlight}</strong>
          <span className="hidden text-white/65 sm:inline">· {ANNOUNCEMENT.secondary}</span>
        </p>
        <Link
          href={ANNOUNCEMENT.href}
          className="announcement-cta inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.1em]"
        >
          <Sparkles className="h-3 w-3 shrink-0" strokeWidth={1.75} />
          <span className="hidden sm:inline">{ANNOUNCEMENT.cta}</span>
          <span className="sm:hidden">Ver ofertas</span>
        </Link>
      </div>
    </div>
  );
}
