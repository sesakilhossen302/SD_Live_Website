"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Download, Sparkles, Play, Shield, Star, Users, Zap } from "lucide-react";
import PhoneMockup from "./PhoneMockup";

export default function Hero() {
  return (
    <section className="relative pt-32 sm:pt-36 lg:pt-44 pb-20 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 text-center lg:text-left space-y-6 sm:space-y-8"
          >
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel-glow text-xs sm:text-sm font-semibold text-pink-200 border border-[#D4AF37]/40"
            >
              <Sparkles className="w-4 h-4 text-[#D4AF37] animate-spin" style={{ animationDuration: "6s" }} />
              <span>Next-Gen Live Streaming & Creator Economy</span>
              <span className="px-2 py-0.5 rounded-full bg-[#D4AF37] text-white text-[10px] uppercase font-bold tracking-wider">
                v2.4
              </span>
            </motion.div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight leading-[1.08]">
                <span className="block text-white">Go Live.</span>
                <span className="block text-gradient">Connect.</span>
                <span className="block text-gradient-gold">Earn.</span>
              </h1>
            </div>

            {/* Subheadline */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Experience the next generation live streaming platform with beautiful video quality, interactive live rooms, virtual gifts and premium entertainment.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/download"
                className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-base text-white btn-gradient flex items-center justify-center gap-3 group relative overflow-hidden"
              >
                <Download className="w-5 h-5 transform group-hover:-translate-y-0.5 transition-transform" />
                <span>Download App</span>
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </Link>

              <Link
                href="/#features"
                className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-base text-gray-200 glass-panel hover:bg-white/[0.08] hover:text-white border border-white/15 flex items-center justify-center gap-3 transition-all duration-300"
              >
                <Play className="w-5 h-5 text-[#D4AF37] fill-[#D4AF37]" />
                <span>Learn More</span>
              </Link>
            </div>

            {/* Social Proof Trust Badges */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-8 text-gray-400 text-xs sm:text-sm">
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
                <span>100% Encrypted & Safe</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Ultra-low Latency HD</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <PhoneMockup />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
