import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kangsoe.vercel.app"),
  title: "Kang Hendar — Web & Digital Systems Builder",
  description:
    "Membangun website & sistem digital untuk personal brand, bisnis, sekolah, pesantren, dan lembaga. Next.js & AI-assisted workflow.",
  verification: { other: { "p:domain_verify": "868f791312e74fe5e519ccf1490467e9" } },
  openGraph: {
    title: "Kang Hendar — Web & Digital Systems Builder",
    description:
      "Membangun website & sistem digital untuk personal brand, bisnis, sekolah, pesantren, dan lembaga. Next.js & AI-assisted workflow.",
    url: "https://kangsoe.vercel.app",
    siteName: "Kang Hendar",
    images: [
      {
        url: "/og-image-kangsoe.png",
        alt: "Kang Hendar digital business card",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kang Hendar — Web & Digital Systems Builder",
    description:
      "Membangun website & sistem digital untuk personal brand, bisnis, sekolah, pesantren, dan lembaga. Next.js & AI-assisted workflow.",
    images: ["/og-image-kangsoe.png"],
  },
};

import { ThemeProvider } from "next-themes";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}
