"use client";

import Link from "next/link";
import { Truck, Sparkles } from "lucide-react";
import { ANNOUNCEMENT } from "@/lib/constants";

export function AnnouncementBar() {
  return (
    <div
      id="announcement-bar"
      className="announcement-bar sticky top-0 z-[60] border-b border-white/10 bg-foreground text-white"
    >
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-center gap-x-2 gap-y-1 px-4 py-2 text-center sm:h-10 sm:flex-nowrap sm:gap-2 sm:px-8 sm:py-0">
        <Truck className="hidden h-3.5 w-3.5 shrink-0 text-white/70 sm:block" strokeWidth={1.5} />
        <p className="text-[10px] font-medium leading-snug tracking-wide sm:text-[11px]">
          <span className="text-white/70">{ANNOUNCEMENT.prefix}</span>{" "}
          <strong className="font-semibold text-white">{ANNOUNCEMENT.highlight}</strong>
          <span className="hidden text-white/70 sm:inline"> · {ANNOUNCEMENT.secondary}</span>
        </p>
        <Link
          href={ANNOUNCEMENT.href}
          className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/90 underline-offset-2 sm:ml-1"
        >
          <Sparkles className="h-3 w-3 shrink-0" strokeWidth={1.5} />
          <span className="hidden sm:inline">{ANNOUNCEMENT.cta}</span>
          <span className="sm:hidden">Comprar</span>
        </Link>
      </div>
    </div>
  );
}
