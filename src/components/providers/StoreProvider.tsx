"use client";

import type { ReactNode } from "react";
import dynamic from "next/dynamic";
import { CartProvider } from "@/context/CartContext";
import { AuthProvider } from "@/context/AuthContext";
import { ScrollLockRecovery } from "@/components/providers/ScrollLockRecovery";

const CartToast = dynamic(
  () => import("@/components/ui/CartToast").then((m) => m.CartToast),
  { ssr: false }
);

const AuthModal = dynamic(
  () => import("@/components/account/AuthModal").then((m) => m.AuthModal),
  { ssr: false }
);

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
