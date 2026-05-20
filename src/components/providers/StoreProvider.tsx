"use client";

import type { ReactNode } from "react";
import { CartProvider } from "@/context/CartContext";
import { AuthProvider } from "@/context/AuthContext";
import { CartToast } from "@/components/ui/CartToast";
import { AuthModal } from "@/components/account/AuthModal";
import { ScrollLockRecovery } from "@/components/providers/ScrollLockRecovery";

export function StoreProvider({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <CartProvider>
        <ScrollLockRecovery />
        {children}
        <CartToast />
        <AuthModal />
      </CartProvider>
    </AuthProvider>
  );
}
