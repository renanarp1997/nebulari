"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  LogIn,
  UserPlus,
  Package,
  Heart,
  Truck,
  LogOut,
  ChevronDown,
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";

const MENU_LINKS = [
  { label: "Meus pedidos", href: "#", icon: Package },
  { label: "Favoritos", href: "#", icon: Heart },
  { label: "Rastrear pedido", href: "#", icon: Truck },
] as const;

export function UserAccountMenu() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const { user, openLogin, openRegister, logout } = useAuth();

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onEscape);
    };
  }, [open]);

  const closeAnd = (fn: () => void) => {
    setOpen(false);
    fn();
  };

  return (
    <div ref={wrapRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Minha conta"
        aria-expanded={open}
        aria-haspopup="menu"
        className={`relative flex h-11 min-h-[44px] w-11 min-w-[44px] items-center justify-center gap-0.5 text-foreground transition hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
          open ? "text-accent" : ""
        }`}
      >
        <User className="h-[18px] w-[18px]" strokeWidth={1.5} />
        {user && (
          <span className="absolute bottom-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
        )}
        <ChevronDown
          className={`absolute -bottom-0.5 right-1 hidden h-2.5 w-2.5 opacity-60 sm:block transition ${open ? "rotate-180" : ""}`}
          strokeWidth={2}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="menu"
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="account-dropdown"
          >
            {user ? (
              <>
                <div className="account-dropdown-header">
                  <p className="account-dropdown-hello">Olá,</p>
                  <p className="account-dropdown-name">{user.name}</p>
                  <p className="account-dropdown-email">{user.email}</p>
                </div>
                <div className="account-dropdown-divider" />
                {MENU_LINKS.map(({ label, href, icon: Icon }) => (
                  <Link
                    key={label}
                    href={href}
                    role="menuitem"
                    onClick={() => setOpen(false)}
                    className="account-dropdown-item"
                  >
                    <Icon className="h-4 w-4 shrink-0 opacity-70" strokeWidth={1.5} />
                    {label}
                  </Link>
                ))}
                <div className="account-dropdown-divider" />
                <button
                  type="button"
                  role="menuitem"
                  onClick={() => closeAnd(logout)}
                  className="account-dropdown-item w-full text-left"
                >
                  <LogOut className="h-4 w-4 shrink-0 opacity-70" strokeWidth={1.5} />
                  Sair
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  role="menuitem"
                  onClick={() => closeAnd(openLogin)}
                  className="account-dropdown-item w-full text-left font-semibold"
                >
                  <LogIn className="h-4 w-4 shrink-0" strokeWidth={1.5} />
                  Entrar
                </button>
                <button
                  type="button"
                  role="menuitem"
                  onClick={() => closeAnd(openRegister)}
                  className="account-dropdown-item w-full text-left"
                >
                  <UserPlus className="h-4 w-4 shrink-0" strokeWidth={1.5} />
                  Criar conta
                </button>
                <div className="account-dropdown-divider" />
                {MENU_LINKS.map(({ label, href, icon: Icon }) => (
                  <Link
                    key={label}
                    href={href}
                    role="menuitem"
                    onClick={() => setOpen(false)}
                    className="account-dropdown-item"
                  >
                    <Icon className="h-4 w-4 shrink-0 opacity-70" strokeWidth={1.5} />
                    {label}
                  </Link>
                ))}
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
