"use client";

import { ShoppingBag, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

export function CartToast() {
  const { lastAdded, clearToast, count } = useCart();

  if (!lastAdded) return null;

  return (
    <div className="ecom-toast ecom-toast-enter fixed bottom-6 left-1/2 z-[70] flex w-[calc(100%-2.5rem)] max-w-md -translate-x-1/2 items-center gap-4 border border-border bg-background-elevated px-4 py-3 shadow-product-hover sm:left-auto sm:right-8 sm:translate-x-0">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-foreground text-white">
        <ShoppingBag className="h-4 w-4" strokeWidth={1.5} />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-foreground">{lastAdded}</p>
        <p className="text-xs text-muted">
          Adicionado ao carrinho · {count} {count === 1 ? "item" : "itens"}
        </p>
      </div>
      <button
        type="button"
        onClick={clearToast}
        aria-label="Fechar"
        className="shrink-0 text-muted transition hover:text-foreground"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
