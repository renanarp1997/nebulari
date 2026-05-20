"use client";

import { ShoppingBag, Check } from "lucide-react";
import { useState, type MouseEvent } from "react";
import { useCart } from "@/context/CartContext";

export function AddToCartButton({
  productId,
  productName,
  variant = "card",
}: {
  productId: string;
  productName: string;
  variant?: "card" | "compact" | "slim";
}) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(productId, productName);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1200);
  };

  if (variant === "slim") {
    return (
      <button
        type="button"
        onClick={handleClick}
        className="ecom-add-slim flex w-full items-center justify-center gap-1 bg-foreground py-1.5 text-[9px] font-bold uppercase tracking-wider text-white transition hover:bg-accent"
      >
        {added ? <Check className="h-3 w-3" /> : <ShoppingBag className="h-3 w-3" strokeWidth={2} />}
        {added ? "Ok" : "Adicionar"}
      </button>
    );
  }

  if (variant === "compact") {
    return (
      <button
        type="button"
        onClick={handleClick}
        aria-label={`Adicionar ${productName} ao carrinho`}
        className="ecom-quick-add flex h-9 w-9 items-center justify-center border border-border bg-background-elevated text-foreground transition hover:border-foreground/30 hover:bg-foreground hover:text-white"
      >
        {added ? (
          <Check className="h-4 w-4" strokeWidth={2} />
        ) : (
          <ShoppingBag className="h-4 w-4" strokeWidth={1.5} />
        )}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="ecom-add-btn group/btn flex w-full items-center justify-center gap-2 border border-foreground/15 bg-foreground px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-accent"
    >
      {added ? (
        <>
          <Check className="h-3.5 w-3.5" />
          Adicionado
        </>
      ) : (
        <>
          <ShoppingBag className="h-3.5 w-3.5 transition group-hover/btn:scale-105" strokeWidth={1.5} />
          Adicionar
        </>
      )}
    </button>
  );
}
