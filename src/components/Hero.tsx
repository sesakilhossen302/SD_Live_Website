"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Download, Sparkles, Shield, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-36 sm:pt-40 lg:pt-48 pb-20 lg:pb-32 overflow-hidden text-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6 sm:space-y-8 flex flex-col items-center"
        >
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-panel-glow text-xs sm:text-sm font-semibold text-pink-200 border border-[#D4AF37]/40 shadow-lg shadow-[#D4AF37]/10"
          >
            <Sparkles className="w-4 h-4 text-[#D4AF37] animate-spin" style={{ animationDuration: "6s" }} />
            <span>Next-Gen Live Streaming &amp; Creator Economy</span>
            <span className="px-2 py-0.5 rounded-full bg-[#D4AF37] text-white text-[10px] uppercase font-bold tracking-wider">
              v2.4
            </span>
          </motion.div>

          {/* Headline */}
          <div className="space-y-3 max-w-4xl">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.06]">
              <span className="block text-white">Go Live.</span>
              <span className="block text-gradient">Connect.</span>
              <span className="block text-gradient-gold">Earn.</span>
            </h1>
          </div>

          {/* Subheadline */}
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Experience the next generation live streaming platform with crystal-clear audio rooms, interactive live broadcasts, virtual gifts, and instant creator monetization.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto">
            <Link
              href="/download"
              className="w-full sm:w-auto px-9 py-4 rounded-full font-bold text-base text-white btn-gradient flex items-center justify-center gap-3 group relative overflow-hidden shadow-2xl shadow-pink-500/30 hover:shadow-pink-500/50 transition-all duration-300"
            >
              <Download className="w-5 h-5 transform group-hover:-translate-y-0.5 transition-transform" />
              <span>Download App</span>
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </Link>

            <Link
              href="/#features"
              className="w-full sm:w-auto px-9 py-4 rounded-full font-semibold text-base text-gray-200 glass-panel hover:bg-white/[0.08] hover:text-white border border-white/15 flex items-center justify-center gap-3 transition-all duration-300"
            >
              <Sparkles className="w-5 h-5 text-[#D4AF37]" />
              <span>Explore Features</span>
            </Link>
          </div>

          {/* Social Proof Trust Badges */}
          <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-gray-400 text-xs sm:text-sm mt-4">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="w-7 h-7 rounded-full bg-[#D4AF37] border-2 border-[#2C2513] flex items-center justify-center text-white text-[10px] font-bold">★</div>
                <div className="w-7 h-7 rounded-full bg-[#B5952F] border-2 border-[#2C2513] flex items-center justify-center text-white text-[10px] font-bold">★</div>
                <div className="w-7 h-7 rounded-full bg-[#8A7322] border-2 border-[#2C2513] flex items-center justify-center text-white text-[10px] font-bold">★</div>
              </div>
              <span className="font-medium text-gray-300">4.9/5 Rating (50K+ Reviews)</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span>100% Encrypted &amp; Safe</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Ultra-low Latency</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
