import { ShieldCheck, Truck, CreditCard, RotateCcw } from "lucide-react";

const ITEMS = [
  { icon: Truck, label: "Frete grátis", detail: "Acima de R$199" },
  { icon: ShieldCheck, label: "Compra segura", detail: "SSL + proteção" },
  { icon: CreditCard, label: "Pix e cartão", detail: "Até 6x sem juros" },
  { icon: RotateCcw, label: "Troca fácil", detail: "90 dias garantia" },
] as const;

export function MarketplaceTrustBar() {
  return (
    <div className="marketplace-trust-bar w-full border-b border-border">
      <div className="site-container marketplace-trust-bar-inner">
        <div className="marketplace-trust-track hide-scrollbar">
          {ITEMS.map(({ icon: Icon, label, detail }) => (
            <div key={label} className="marketplace-trust-pill shrink-0">
              <Icon className="marketplace-trust-icon shrink-0 text-accent" strokeWidth={1.75} />
              <span className="marketplace-trust-label">{label}</span>
              <span className="marketplace-trust-detail">· {detail}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
