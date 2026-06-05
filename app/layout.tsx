import type { Metadata } from "next";
import { Raleway, Geist_Mono } from "next/font/google";
import "./globals.css";

// Raleway — elegant sans for the brand.
// latin-ext covers Serbian Latin diacritics (č ć š ž đ).
const raleway = Raleway({
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Learn English Bre! — Nauči engleski online",
  description:
    "Online platforma za učenje engleskog jezika za govornike srpskog. Kursevi, materijali i praćenje napretka na jednom mestu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr-Latn">
      <body
        className={`${raleway.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
