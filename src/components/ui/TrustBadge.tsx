import type { ReactNode } from "react";

export function TrustBadge({
  children,
  variant = "light",
}: {
  children: ReactNode;
  variant?: "light" | "dark";
}) {
  return (
    <span
      className={
        variant === "dark"
          ? "trust-badge-dark"
          : "trust-badge-light"
      }
    >
      {children}
    </span>
  );
}
