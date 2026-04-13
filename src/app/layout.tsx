import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cafetaria De Fest | De Lekkerste Friet van Nijmegen",
  description: "De favoriete snackbar van Brakkenstein. Versgebakken friet, premium pizza's en de beste snacks in Nijmegen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-body bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
