import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Longevity+ | Your Health Trajectory, Tracked",
  description:
    "Evidence-based preventative health monitoring delivered to your home. Join our early access program.",
  keywords: [
    "longevity",
    "preventative health",
    "health monitoring",
    "wellness",
    "health tracking",
  ],
  authors: [{ name: "Longevity+" }],
  creator: "Longevity+",
  publisher: "Longevity+",
  metadataBase: new URL("https://longevity-plus.com"),
  openGraph: {
    title: "Longevity+ | Your Health Trajectory, Tracked",
    description:
      "Evidence-based preventative health monitoring delivered to your home.",
    url: "https://longevity-plus.com",
    siteName: "Longevity+",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Longevity+ - Preventative Health Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Longevity+ | Your Health Trajectory, Tracked",
    description:
      "Evidence-based preventative health monitoring delivered to your home.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
