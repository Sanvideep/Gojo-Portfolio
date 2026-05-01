import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import CursorDot from "@/components/CursorDot";

const sans = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sanvi Deep (Gojo) :: Gojo Portfolio",
  description:
    "Sanvi Deep aka Gojo. Biotech Engineer @ DTU 2026. CEO of Raechal AI. Full stack dev, ML/DL, video editor, dancer, Naruto fan.",
  metadataBase: new URL("https://gojo.codes"),
  openGraph: {
    title: "Sanvi Deep (Gojo) :: Gojo Portfolio",
    description:
      "CEO @ Raechal AI. Biotech grad turned founder. Code, ML/DL, AfterEffects, hip-hop. Part-time yapper, full-time introvert.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} ${display.variable}`}>
      <body className="noise">
        <CursorDot />
        {children}
      </body>
    </html>
  );
}
