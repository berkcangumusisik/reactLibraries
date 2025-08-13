import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "🚀 React Kütüphaneleri - En İyi Component ve UI Framework'ler",
  description: "React ekosistemindeki en iyi component, UI framework ve kütüphaneleri keşfedin. Kategorilere göre düzenlenmiş, detaylı açıklamalar ve linkler ile.",
  keywords: "React, React Native, UI Components, UI Framework, JavaScript, TypeScript, Frontend, Web Development",
  authors: [{ name: "React Libraries Team" }],
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: "🚀 React Kütüphaneleri",
    description: "React ekosistemindeki en iyi component, UI framework ve kütüphaneleri keşfedin.",
    type: "website",
    locale: "tr_TR",
  },
};

const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${inter.className} antialiased selection:bg-sky-700/40 selection:text-white`}>{children}</body>
    </html>
  );
}
