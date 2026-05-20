"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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
      className={`site-header sticky z-50 w-full border-b border-border bg-background-elevated transition-shadow duration-300 ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="site-container site-header-inner chrome-header-row">
        <Link
          href="#inicio"
          className="site-header-logo shrink-0 font-display font-semibold tracking-tight text-foreground"
        >
          Nebulari
        </Link>

        <Link
          href="#catalogo"
          className="header-search hidden min-w-0 min-[1280px]:flex"
          aria-label="Buscar no catálogo"
        >
          <Search strokeWidth={1.5} />
          <span className="header-search-placeholder truncate text-muted">
            Buscar produtos, coleções, marcas…
          </span>
        </Link>

        <nav className="site-header-nav hidden shrink-0 min-[1280px]:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="uppercase text-muted transition hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="site-header-actions ml-auto shrink-0">
          <Link
            href="#catalogo"
            aria-label="Buscar"
            className="header-icon-btn min-[1280px]:hidden"
          >
            <Search strokeWidth={1.5} />
          </Link>
          <UserAccountMenu />
          <button type="button" aria-label="Carrinho" className="header-icon-btn relative">
            <ShoppingBag strokeWidth={1.5} />
            {count > 0 && (
              <span className="absolute right-1.5 top-1.5 flex h-4 min-w-4 items-center justify-center bg-accent px-1 text-[9px] font-bold text-white">
                {count > 9 ? "9+" : count}
              </span>
            )}
          </button>
          <button
            type="button"
            aria-label="Menu"
            className="header-icon-btn header-menu-btn min-[1280px]:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X strokeWidth={1.5} /> : <Menu strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      <div
        className={`grid overflow-hidden border-t border-border bg-background-elevated transition-[grid-template-rows] duration-300 ease-out min-[1280px]:hidden ${
          mobileOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <nav className="site-container flex min-h-0 flex-col overflow-hidden py-2">
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
      </div>
    </header>
  );
}
