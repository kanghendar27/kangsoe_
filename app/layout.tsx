import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kangsoe.vercel.app"),
  title: "Kang Hendar — Web & Digital Systems Builder",
  description:
    "Kartu nama digital Kang Hendar, Web & Digital Systems Builder yang membangun website dan sistem berbasis web untuk personal brand, bisnis, sekolah, pesantren, dan lembaga.",
  openGraph: {
    title: "Kang Hendar — Web & Digital Systems Builder",
    description:
      "Kartu nama digital Kang Hendar, berisi profil, project, dan link untuk terhubung.",
    url: "https://kangsoe.vercel.app",
    siteName: "Kang Hendar",
    images: [
      {
        url: "/og-image.png",
        alt: "Kang Hendar digital business card",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kang Hendar — Web & Digital Systems Builder",
    description:
      "Kartu nama digital Kang Hendar, Web & Digital Systems Builder.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
