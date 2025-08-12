import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "🚀 React Kütüphaneleri - En İyi Component ve UI Framework'ler",
  description: "React ekosistemindeki en iyi component, UI framework ve kütüphaneleri keşfedin. Kategorilere göre düzenlenmiş, detaylı açıklamalar ve linkler ile.",
  keywords: "React, React Native, UI Components, UI Framework, JavaScript, TypeScript, Frontend, Web Development",
  authors: [{ name: "React Libraries Team" }],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: "🚀 React Kütüphaneleri",
    description: "React ekosistemindeki en iyi component, UI framework ve kütüphaneleri keşfedin.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@3.4.17/dist/tailwind.min.css" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
