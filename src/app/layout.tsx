import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Orbitron, Outfit } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin", "latin-ext"],
  variable: "--font-outfit",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Zscript Cloud — Her cihazdan, anında oyna",
    template: "%s | Zscript Cloud",
  },
  description:
    "Zscript Cloud gaming. Oyunları indirmeden tarayıcıdan oyna. 4K, düşük gecikme, her cihaz.",
  metadataBase: new URL("https://zscript.cloud"),
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Zscript Cloud — Her cihazdan, anında oyna",
    description:
      "Oyunları indirmeden tarayıcıdan oyna. 4K, düşük gecikme, her cihaz.",
    locale: "tr_TR",
    type: "website",
    siteName: "Zscript Cloud",
  },
};

export const viewport: Viewport = {
  themeColor: "#030304",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="tr"
      className={`${outfit.variable} ${jetbrains.variable} ${orbitron.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-canvas font-sans text-ink">
        <div className="grain" aria-hidden="true" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
