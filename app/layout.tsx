import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tejashvini-fairytale.rajs85137.workers.dev"),
  title: "A Little Fairytale for Tejashvini",
  description: "A little world made just to make your day feel magical.",
  applicationName: "A Little Fairytale",
  openGraph: {
    title: "A Little Fairytale for Tejashvini",
    description: "Step into a little kingdom made with care, filled with royal surprises and warm wishes.",
    siteName: "A Little Fairytale",
    type: "website",
    images: [
      {
        url: "/priness-castle-hero.png",
        width: 1200,
        height: 630,
        alt: "The enchanted castle welcoming Tejashvini to her little kingdom",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A Little Fairytale for Tejashvini",
    description: "A little world made just to make your day feel magical.",
    images: ["/priness-castle-hero.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#211052",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
