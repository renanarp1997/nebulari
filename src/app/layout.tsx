import type { Metadata } from "next";
import { Cormorant_Garamond, Sora } from "next/font/google";
import { StoreProvider } from "@/components/providers/StoreProvider";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Nebulari | Chaveiros Metálicos Premium",
  description:
    "Chaveiros personalizados e colecionáveis em metal premium. Acabamento artesanal, design exclusivo e embalagem de presente. Envio para todo o Brasil.",
  openGraph: {
    title: "Nebulari | Chaveiros Metálicos Premium",
    description: "Pequenos detalhes. Grandes conexões.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${sora.variable} max-md:scroll-auto scroll-smooth`}>
      <body className="texture-studio mobile-lite min-h-screen font-sans antialiased">
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
