"use client";

import Image from "next/image";
import { EditorialTreatment } from "@/components/ui/EditorialTreatment";

interface ProductImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  aspect?: "square" | "portrait" | "landscape" | "hero";
  overlay?: "dark" | "light" | "studio" | "none";
  showReflection?: boolean;
}

const aspectMap = {
  square: "aspect-square",
  portrait: "aspect-[4/5]",
  landscape: "aspect-[16/10]",
  hero: "aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5]",
};

const overlayMap = {
  none: "",
  dark: "bg-gradient-to-t from-black/50 via-black/10 to-transparent",
  light: "bg-gradient-to-t from-white/40 via-transparent to-white/10",
  studio:
    "bg-gradient-to-br from-black/20 via-transparent to-white/15 mix-blend-overlay",
};

export function ProductImage({
  src,
  alt,
  priority = false,
  className = "",
  aspect = "landscape",
  overlay = "studio",
  showReflection = false,
}: ProductImageProps) {
  return (
    <div className={`group relative overflow-hidden ${className}`}>
      <div
        className={`editorial-bg relative ${aspectMap[aspect]} overflow-hidden`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          quality={priority ? 72 : 58}
          loading={priority ? undefined : "lazy"}
          sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 400px"
          className="editorial-photo object-cover max-md:transition-none sm:transition sm:duration-500 sm:ease-out sm:group-hover:scale-[1.03]"
        />
        {overlay !== "none" && (
          <div
            className={`pointer-events-none absolute inset-0 ${overlayMap[overlay]}`}
          />
        )}
        <EditorialTreatment variant="product" />
      </div>

      {showReflection && (
        <div className="relative -mt-1 hidden h-16 overflow-hidden opacity-30 sm:block sm:h-20">
          <div className="product-reflection absolute inset-0 scale-y-[-1]">
            <Image
              src={src}
              alt=""
              fill
              className="editorial-photo object-cover object-top"
              aria-hidden
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] to-transparent" />
        </div>
      )}
    </div>
  );
}
