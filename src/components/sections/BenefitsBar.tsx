"use client";

import Image from "next/image";
import { Truck, Shield, Gift, BadgeCheck } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { BENEFITS } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

const iconMap = {
  truck: Truck,
  shield: Shield,
  gift: Gift,
  badge: BadgeCheck,
} as const;

export function BenefitsBar() {
  return (
    <section id="beneficios" className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0">
        <Image
          src={IMAGES.packaging}
          alt=""
          fill
          sizes="100vw"
          quality={60}
          loading="lazy"
          className="editorial-photo object-cover opacity-[0.05]"
          aria-hidden
        />
      </div>
      <div className="relative site-container px-4 py-8 sm:px-8 sm:py-14">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
          {BENEFITS.map((benefit, index) => {
            const Icon = iconMap[benefit.icon];
            return (
              <Reveal
                key={benefit.title}
                delayMs={index * 50}
                className="benefit-card flex flex-col gap-4 border border-border/80 bg-background-elevated p-5 sm:flex-row sm:items-start sm:gap-5 sm:p-6"
              >
                <div className="benefit-icon-wrap shrink-0">
                  <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="text-[13px] font-semibold tracking-wide text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted sm:text-sm">
                    {benefit.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
