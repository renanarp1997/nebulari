import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

export function SectionActionLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link href={href} className="ecom-section-link group inline-flex items-center gap-1">
      <span>{children}</span>
      <ChevronRight
        className="h-3.5 w-3.5 transition group-hover:translate-x-0.5"
        strokeWidth={2}
      />
    </Link>
  );
}
