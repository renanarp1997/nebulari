"use client";

import { useEffect } from "react";
import { resetBodyScroll } from "@/lib/scroll-lock";

/** Garante scroll liberado ao carregar / voltar à aba / restaurar do bfcache */
export function ScrollLockRecovery() {
  useEffect(() => {
    resetBodyScroll();

    const recover = () => resetBodyScroll();
    window.addEventListener("pageshow", recover);
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") recover();
    });

    return () => {
      window.removeEventListener("pageshow", recover);
    };
  }, []);

  return null;
}
