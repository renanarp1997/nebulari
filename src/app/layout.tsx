import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { StoreProvider } from "@/components/providers/StoreProvider";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

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
    <html lang="pt-BR" className={`${cormorant.variable} ${inter.variable} scroll-smooth`}>
      <body className="texture-studio min-h-screen antialiased">
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
