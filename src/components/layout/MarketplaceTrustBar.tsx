import { ShieldCheck, Truck, CreditCard, RotateCcw } from "lucide-react";

const ITEMS = [
  { icon: Truck, label: "Frete grátis", detail: "Acima de R$199" },
  { icon: ShieldCheck, label: "Compra segura", detail: "SSL + proteção" },
  { icon: CreditCard, label: "Pix e cartão", detail: "Até 6x sem juros" },
  { icon: RotateCcw, label: "Troca fácil", detail: "90 dias garantia" },
] as const;

export function MarketplaceTrustBar() {
  return (
    <div className="marketplace-trust-bar border-b border-border bg-background-elevated">
      <div className="mx-auto flex max-w-[1400px] gap-2 overflow-x-auto px-4 py-2.5 hide-scrollbar sm:justify-center sm:gap-3 sm:px-8">
        {ITEMS.map(({ icon: Icon, label, detail }) => (
          <div key={label} className="marketplace-trust-pill shrink-0">
            <Icon className="h-3.5 w-3.5 shrink-0 text-accent" strokeWidth={1.75} />
            <span className="text-[11px] font-semibold text-foreground">{label}</span>
            <span className="hidden text-[10px] text-muted sm:inline">· {detail}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
