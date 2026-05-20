"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { useCart } from "@/context/CartContext";
import { UserAccountMenu } from "@/components/account/UserAccountMenu";
import { useScrollLock } from "@/hooks/useScrollLock";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { count } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useScrollLock(mobileOpen);

  useEffect(() => {
    if (!mobileOpen) return;
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onEscape);
    return () => document.removeEventListener("keydown", onEscape);
  }, [mobileOpen]);

  return (
    <header
      className={`site-header sticky z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/80 bg-background-elevated/95 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center gap-3 px-5 sm:h-[4.5rem] sm:gap-4 sm:px-8">
        <Link
          href="#inicio"
          className="shrink-0 font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl"
        >
          Nebulari
        </Link>

        <Link
          href="#catalogo"
          className="header-search hidden min-w-0 flex-1 md:flex"
          aria-label="Buscar no catálogo"
        >
          <Search className="h-[18px] w-[18px] shrink-0 text-muted" strokeWidth={1.5} />
          <span className="truncate text-sm text-muted">Buscar produtos, coleções, marcas…</span>
        </Link>

        <nav className="hidden shrink-0 items-center gap-6 lg:flex xl:gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted transition hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-0.5">
          <Link
            href="#catalogo"
            aria-label="Buscar"
            className="relative flex h-11 w-11 items-center justify-center text-foreground transition hover:text-accent md:hidden"
          >
            <Search className="h-[18px] w-[18px]" strokeWidth={1.5} />
          </Link>
          <UserAccountMenu />
          <button
            type="button"
            aria-label="Carrinho"
            className="relative flex h-11 w-11 items-center justify-center text-foreground transition hover:text-accent"
          >
            <ShoppingBag className="h-[18px] w-[18px]" strokeWidth={1.5} />
            {count > 0 && (
              <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center bg-accent px-1 text-[9px] font-bold text-white">
                {count > 9 ? "9+" : count}
              </span>
            )}
          </button>
          <button
            type="button"
            aria-label="Menu"
            className="flex h-11 w-11 items-center justify-center lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-border bg-background-elevated lg:hidden"
          >
            <nav className="flex flex-col px-5 py-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="border-b border-border py-4 text-sm font-medium uppercase tracking-widest text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
