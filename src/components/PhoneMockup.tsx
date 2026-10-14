"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LiveBadge, GiftsBadge, ChatBadge, PremiumBadge, EarningsBadge } from "./FloatingBadges";

const mockScreenshots = [
  {
    src: "/screenshots/1.png",
    name: "Home Feed & Live Rooms",
  },
  {
    src: "/assets/Feed Screen.png",
    name: "Interactive Community Feed",
  }
];

export default function PhoneMockup() {
  const [currentScreenIndex, setCurrentScreenIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentScreenIndex((prev) => (prev + 1) % mockScreenshots.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[400px] aspect-[9/19] my-4 gpu-smooth">
      {/* Soft Ambient Background Glow */}
      <div className="absolute inset-0 rounded-[55px] bg-gradient-to-b from-[#D4AF37] via-[#B5952F] to-[#8A7322] blur-[50px] opacity-45 scale-105 animate-pulse-glow pointer-events-none" />

      {/* Outer Smartphone Frame */}
      <div className="relative w-full h-full rounded-[46px] bg-gradient-to-b from-[#3D1E2E] via-[#2C2513] to-[#0f1126] p-[8px] sm:p-[10px] shadow-2xl shadow-black/90 border border-white/20">
        
        {/* Inner Bevel Screen Container */}
        <div className="relative w-full h-full rounded-[38px] bg-[#1a0c16] overflow-hidden border border-white/10 flex flex-col">
          
          {/* Dynamic Island / Notch Speaker */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 z-30 w-24 h-4 bg-black rounded-full flex items-center justify-between px-2.5 shadow-md">
            <div className="w-2 h-2 rounded-full bg-[#1e1319] border border-white/10" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#0a0508] border border-white/20 flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-[#D4AF37]" />
            </div>
          </div>

          {/* Screen Content - Native Mobile App Slide Transition (No Dark Fade) */}
          <div className="relative w-full h-full overflow-hidden bg-[#1d0d18]">
            <AnimatePresence initial={false} mode="sync">
              <motion.div
                key={currentScreenIndex}
                initial={{ x: "100%", opacity: 1 }}
                animate={{ x: "0%", opacity: 1 }}
                exit={{ x: "-100%", opacity: 1 }}
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 32 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute inset-0 w-full h-full gpu-smooth"
              >
                <img
                  src={mockScreenshots[currentScreenIndex].src}
                  alt={mockScreenshots[currentScreenIndex].name}
                  className="w-full h-full object-cover object-top"
                />
              </motion.div>
            </AnimatePresence>

            {/* Subtle Screen Glare Reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent pointer-events-none z-10" />
          </div>

          {/* Bottom Slide Indicators & Home Bar */}
          <div className="w-full py-2 bg-[#12070E] flex flex-col items-center justify-center gap-1.5 z-20">
            <div className="flex items-center gap-1.5">
              {mockScreenshots.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentScreenIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ease-out ${
                    currentScreenIndex === idx
                      ? "w-6 bg-[#D4AF37]"
                      : "w-1.5 bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <div className="w-24 h-1 bg-white/30 rounded-full" />
          </div>
        </div>
      </div>

      {/* Floating Badges Around Mockup */}
      <LiveBadge />
      <GiftsBadge />
      <ChatBadge />
      <PremiumBadge />
      <EarningsBadge />
    </div>
  );
}
