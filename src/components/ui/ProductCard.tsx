"use client";

import { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Truck } from "lucide-react";
import type { Product } from "@/lib/products";
import { getAtmosphere, ATMOSPHERE_META } from "@/lib/atmosphere";
import { ProductBadge } from "@/components/ui/ProductBadge";
import { StarRating } from "@/components/ui/StarRating";
import { AddToCartButton } from "@/components/ui/AddToCartButton";

export type ProductCardSize = "compact" | "standard" | "carousel";

function ProductCardInner({
  product,
  size = "standard",
  priorityImage = false,
}: {
  product: Product;
  size?: ProductCardSize;
  priorityImage?: boolean;
}) {
  const isCompact = size === "compact";
  const isCarousel = size === "carousel";
  const atmosphere = getAtmosphere(product.collectionId);
  const stageClass = ATMOSPHERE_META[atmosphere].stageClass;

  const widthClass = isCarousel
    ? "w-[132px] shrink-0 min-[380px]:w-[148px] sm:w-[168px]"
    : isCompact
      ? "h-full"
      : "h-full";

  const aspectClass = isCompact || isCarousel ? "aspect-square" : "aspect-[4/5]";
  const imagePadding = isCompact ? "p-3 sm:p-4" : isCarousel ? "p-3" : "p-5";
  const bodyPadding = isCompact ? "p-3.5 sm:p-4" : isCarousel ? "p-2.5" : "p-4 sm:p-5";

  return (
    <article
      className={`ecom-card-${size} luxury-product-card ecom-product-card group relative flex flex-col overflow-hidden border border-border/70 bg-background-elevated ${widthClass}`}
    >
      <Link href={product.href} className="relative block overflow-hidden">
        <div className={`product-stage ${stageClass} relative ${aspectClass}`}>
          <div className="product-stage-shadow scale-90" aria-hidden />
          {!isCompact && (
            <div
              className={`absolute inset-0 z-[1] ${ATMOSPHERE_META[atmosphere].glowClass} opacity-50`}
              aria-hidden
            />
          )}
          {product.badge && (
            <div className={`absolute z-10 ${isCompact ? "left-2 top-2 sm:left-2.5 sm:top-2.5" : "left-2 top-2 sm:left-3 sm:top-3"}`}>
              <ProductBadge variant={product.badge} />
            </div>
          )}
          <Image
            src={product.image}
            alt={product.alt}
            fill
            priority={priorityImage}
            loading={priorityImage ? undefined : "lazy"}
            sizes={
              isCarousel
                ? "300px"
                : isCompact
                  ? "(max-width: 640px) 50vw, 22vw"
                  : "(max-width: 640px) 50vw, 280px"
            }
            className={`relative z-[2] object-contain object-center ${imagePadding} editorial-photo-soft transition duration-300 ease-out group-hover:scale-[1.04]`}
          />
          <div className="product-shine" aria-hidden />
          <div className="absolute inset-0 z-[3] bg-foreground/0 transition duration-300 group-hover:bg-foreground/[0.03]" />
          {!isCompact && (
            <div className="absolute right-2 top-2 z-10 opacity-0 transition duration-300 group-hover:opacity-100 sm:right-3 sm:top-3">
              <AddToCartButton
                productId={product.id}
                productName={product.name}
                variant="compact"
              />
            </div>
          )}
        </div>
      </Link>

      <div className={`flex flex-1 flex-col border-t border-border/40 ${bodyPadding}`}>
        {!isCompact && (
          <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-muted line-clamp-1">
            {product.category}
          </p>
        )}
        <Link href={product.href}>
          <h3
            className={`font-semibold leading-snug text-foreground transition duration-300 hover:text-accent ${
              isCompact
                ? "mt-0 line-clamp-2 font-display text-[15px] sm:text-base"
                : isCarousel
                  ? "mt-0 line-clamp-2 font-display text-base"
                  : "mt-1 font-display text-lg sm:text-xl"
            }`}
          >
            {product.name}
          </h3>
        </Link>

        <div className={isCompact ? "mt-1.5" : "mt-2"}>
          <StarRating
            rating={product.rating}
            reviewCount={product.reviewCount}
            size="sm"
            dense={isCompact}
          />
        </div>

        <div className={`flex flex-wrap items-baseline gap-1.5 ${isCompact ? "mt-1.5" : "mt-2"}`}>
          <span
            className={`font-semibold text-foreground ${isCompact ? "font-display text-base sm:text-lg" : "font-display text-xl"}`}
          >
            {product.priceLabel}
          </span>
          {product.compareAtPrice && (
            <span className={`text-muted line-through ${isCompact ? "text-xs" : "text-sm"}`}>
              {product.compareAtPrice}
            </span>
          )}
        </div>

        {!isCompact && !isCarousel && (
          <p className="mt-2 flex items-center gap-1 text-[11px] text-muted line-clamp-1">
            <Truck className="h-3 w-3 shrink-0" strokeWidth={1.5} />
            {product.shipping}
          </p>
        )}

        {isCarousel && (
          <p className="mt-1 text-[10px] text-muted line-clamp-1">{product.shipping}</p>
        )}

        {!isCompact && (
          <div className={isCarousel ? "mt-2" : "mt-3"}>
            <AddToCartButton productId={product.id} productName={product.name} />
          </div>
        )}

        {isCompact && (
          <div className="mt-3">
            <AddToCartButton
              productId={product.id}
              productName={product.name}
              variant="slim"
            />
          </div>
        )}
      </div>
    </article>
  );
}

export const ProductCard = memo(ProductCardInner);
