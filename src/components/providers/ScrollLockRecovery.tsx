"use client";

import { useEffect } from "react";
import { resetBodyScroll } from "@/lib/scroll-lock";

/** Garante scroll liberado ao carregar / voltar à aba */
export function ScrollLockRecovery() {
  useEffect(() => {
    resetBodyScroll();
  }, []);

  return null;
}
