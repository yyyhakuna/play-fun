import type { Metadata } from "next";
import { Anton, Figtree } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "play fun",
  description: "Moneda V",
};

export const anton = Anton({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-anton",
});

export const figtree = Figtree({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-figtree",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${anton.variable} ${figtree.variable}`}>
      <body className="">{children}</body>
    </html>
  );
}
