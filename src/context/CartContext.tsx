"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

interface CartContextValue {
  count: number;
  lastAdded: string | null;
  addToCart: (productId: string, productName: string) => void;
  clearToast: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Record<string, number>>({});
  const [lastAdded, setLastAdded] = useState<string | null>(null);

  const addToCart = useCallback((productId: string, productName: string) => {
    setItems((prev) => ({
      ...prev,
      [productId]: (prev[productId] ?? 0) + 1,
    }));
    setLastAdded(productName);
    window.setTimeout(() => setLastAdded(null), 2800);
  }, []);

  const clearToast = useCallback(() => setLastAdded(null), []);

  const count = useMemo(
    () => Object.values(items).reduce((sum, n) => sum + n, 0),
    [items]
  );

  const value = useMemo(
    () => ({ count, lastAdded, addToCart, clearToast }),
    [count, lastAdded, addToCart, clearToast]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
