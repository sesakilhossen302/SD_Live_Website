import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import BackToTop from "@/components/BackToTop";
import MobileFloatingDownload from "@/components/MobileFloatingDownload";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-poppins",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "SB Live - Premium Live Streaming & Creator Platform",
  description:
    "Experience the next generation live streaming platform with HD video, interactive live rooms, virtual gifts, and instant creator monetization.",
  keywords: [
    "SB Live",
    "SB Live App",
    "Live Streaming App",
    "Virtual Gifts",
    "Creator Earnings",
    "Private Live Rooms",
    "HD Broadcast",
  ],
  authors: [{ name: "SB Live Team" }],
  metadataBase: new URL("https://pigobdlive.app"),
  openGraph: {
    title: "SB Live - Go Live. Connect. Earn.",
    description:
      "Join 100K+ broadcasers on SB Live. Stream in 1080p, chat in real-time, send 3D gifts, and monetize your content.",
    url: "https://pigobdlive.app",
    siteName: "SB Live",
    images: [
      {
        url: "/screenshots/3.png",
        width: 1200,
        height: 630,
        alt: "SB Live Platform Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SB Live - Go Live. Connect. Earn.",
    description:
      "Experience the next-gen live streaming mobile app with virtual gifts and instant payouts.",
    images: ["/screenshots/3.png"],
    creator: "@sblive",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/SB Live.png?v=3",
    shortcut: "/SB Live.png?v=3",
    apple: "/SB Live.png?v=3",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased bg-[#0f1126] text-white selection:bg-[#D4AF37] selection:text-white">

        <Navbar />
        <main className="relative z-10 min-h-screen">{children}</main>
        <Footer />
        <BackToTop />
        <MobileFloatingDownload />
      </body>
    </html>
  );
}
