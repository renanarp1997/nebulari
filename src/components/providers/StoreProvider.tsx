"use client";

import type { ReactNode } from "react";
import { CartProvider } from "@/context/CartContext";
import { AuthProvider } from "@/context/AuthContext";
import { CartToast } from "@/components/ui/CartToast";
import { AuthModal } from "@/components/account/AuthModal";

export function StoreProvider({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <CartProvider>
        {children}
        <CartToast />
        <AuthModal />
      </CartProvider>
    </AuthProvider>
  );
}
