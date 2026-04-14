import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Finanční poradce | Pomohu vám od financí získat maximum",
  description:
    "Nezávislý finanční poradce. Osobní přístup, srozumitelná řešení a dlouhodobá hodnota pro vaše finance.",
  openGraph: {
    title: "Finanční poradce",
    description:
      "Pomohu vám od financí získat maximum – srozumitelně, férově, bez tlaku.",
    type: "website",
    locale: "cs_CZ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="cs" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
