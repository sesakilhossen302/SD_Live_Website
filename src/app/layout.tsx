import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AmbientBackground from "@/components/AmbientBackground";
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
  title: "VeloraLive - Premium Live Streaming & Creator Platform",
  description:
    "Experience the next generation live streaming platform with HD video, interactive live rooms, virtual gifts, and instant creator monetization.",
  keywords: [
    "VeloraLive",
    "Live Streaming App",
    "Virtual Gifts",
    "Creator Earnings",
    "Private Live Rooms",
    "HD Broadcast",
  ],
  authors: [{ name: "VeloraLive Team" }],
  metadataBase: new URL("https://veloralive.com"),
  openGraph: {
    title: "VeloraLive - Go Live. Connect. Earn.",
    description:
      "Join 100K+ broadcasers on VeloraLive. Stream in 1080p, chat in real-time, send 3D gifts, and monetize your content.",
    url: "https://veloralive.com",
    siteName: "VeloraLive",
    images: [
      {
        url: "/screenshots/3.png",
        width: 1200,
        height: 630,
        alt: "VeloraLive Platform Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VeloraLive - Go Live. Connect. Earn.",
    description:
      "Experience the next-gen live streaming mobile app with virtual gifts and instant payouts.",
    images: ["/screenshots/3.png"],
    creator: "@veloralive",
  },
  robots: {
    index: true,
    follow: true,
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
      <body className="antialiased bg-[#170B13] text-white selection:bg-[#D2056E] selection:text-white">
        <AmbientBackground />
        <Navbar />
        <main className="relative z-10 min-h-screen">{children}</main>
        <Footer />
        <BackToTop />
        <MobileFloatingDownload />
      </body>
    </html>
  );
}
