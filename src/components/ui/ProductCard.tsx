"use client";

import { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Truck } from "lucide-react";
import type { Product } from "@/lib/products";
import { getAtmosphere, ATMOSPHERE_META } from "@/lib/atmosphere";
import { ProductBadge } from "@/components/ui/ProductBadge";
import { StarRating } from "@/components/ui/StarRating";
import { ProductPrice } from "@/components/ui/ProductPrice";
import { AddToCartButton } from "@/components/ui/AddToCartButton";
import { getDiscountPercent } from "@/lib/product-utils";

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
  const isMarketplace = size === "standard" || isCarousel;
  const atmosphere = getAtmosphere(product.collectionId);
  const stageClass = ATMOSPHERE_META[atmosphere].stageClass;
  const discount = getDiscountPercent(product.priceLabel, product.compareAtPrice);
  const hasFreeShipping = product.shipping.toLowerCase().includes("grátis");

  const widthClass = isCarousel
    ? "w-[132px] shrink-0 min-[380px]:w-[148px] sm:w-[168px]"
    : "h-auto w-full";

  const aspectClass = isMarketplace ? "aspect-square" : "aspect-square";
  const imagePadding = isCompact ? "p-3 sm:p-4" : isCarousel ? "p-3" : "p-4 sm:p-5";
  const bodyPadding = isCompact ? "p-3.5 sm:p-4" : isCarousel ? "p-3" : "p-3.5 sm:p-4";

  return (
    <article
      className={`ecom-card-${size} ecom-marketplace-card luxury-product-card ecom-product-card group relative flex flex-col overflow-hidden bg-background-elevated ${widthClass}`}
    >
      <Link href={product.href} className="relative block overflow-hidden bg-[var(--studio-highlight)]">
        <div
          className={`product-stage ${stageClass} relative ${aspectClass} isolate overflow-hidden`}
        >
          {!isCompact && (
            <div
              className={`pointer-events-none absolute inset-0 z-[1] max-md:hidden ${ATMOSPHERE_META[atmosphere].glowClass} opacity-40`}
              aria-hidden
            />
          )}
          <Image
            src={product.image}
            alt={product.alt}
            fill
            priority={priorityImage}
            quality={priorityImage ? 72 : 58}
            loading={priorityImage ? undefined : "lazy"}
            sizes={
              isCarousel
                ? "168px"
                : isCompact
                  ? "(max-width: 640px) 45vw, 200px"
                  : "(max-width: 640px) 45vw, 280px"
            }
            className={`absolute inset-0 z-[2] object-contain object-center ${imagePadding} editorial-photo-soft max-md:transition-none sm:transition sm:duration-300 sm:ease-out sm:group-hover:scale-[1.03]`}
          />
          {(discount !== null && discount > 0) || product.badge ? (
            <div className="ecom-card-badges">
              {discount !== null && discount > 0 && (
                <span className="ecom-discount-pill">-{discount}%</span>
              )}
              {product.badge && (
                <ProductBadge variant={product.badge} overlay />
              )}
            </div>
          ) : null}
        </div>
      </Link>

      <div className={`flex flex-col gap-2 ${bodyPadding}`}>
        <Link href={product.href} className="block">
          <h3
            className={`line-clamp-2 font-medium leading-snug text-foreground transition hover:text-accent ${
              isCompact
                ? "text-[15px] sm:text-base"
                : isCarousel
                  ? "text-sm sm:text-base"
                  : "text-sm leading-[1.35]"
            }`}
          >
            {product.name}
          </h3>

          <div className="mt-1">
            <StarRating
              rating={product.rating}
              reviewCount={product.reviewCount}
              marketplace={isMarketplace}
              dense={isCompact}
            />
          </div>

          <div className="mt-1.5">
            <ProductPrice
              priceLabel={product.priceLabel}
              compareAtPrice={product.compareAtPrice}
              size={isCompact ? "compact" : isCarousel ? "carousel" : "standard"}
            />
          </div>

          {hasFreeShipping ? (
            <span className="ecom-shipping-pill mt-1.5 inline-flex items-center gap-1">
              <Truck className="h-3 w-3 shrink-0" strokeWidth={2} />
              Frete grátis
            </span>
          ) : (
            isMarketplace && (
              <p className="mt-1.5 line-clamp-1 text-[11px] text-muted">{product.shipping}</p>
            )
          )}
        </Link>

        <div className="shrink-0 pt-0.5">
          <AddToCartButton
            productId={product.id}
            productName={product.name}
            variant={isCompact ? "slim" : "card"}
          />
        </div>
      </div>
    </article>
  );
}

export const ProductCard = memo(ProductCardInner);
