"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export function LazyWhenVisible({
  children,
  minHeight = 320,
  rootMargin = "280px 0px",
  className = "",
}: {
  children: ReactNode;
  minHeight?: number;
  rootMargin?: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || visible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold: 0.01 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [visible, rootMargin]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ minHeight: visible ? undefined : minHeight }}
    >
      {visible ? children : null}
    </div>
  );
}
