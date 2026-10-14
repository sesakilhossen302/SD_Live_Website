"use client";

import { motion } from "framer-motion";
import { Heart, Gift, MessageSquare, Crown, DollarSign, Radio } from "lucide-react";

export function LiveBadge() {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-8 -left-8 sm:-left-12 z-20 glass-panel-glow px-4 py-2.5 rounded-2xl flex items-center gap-2.5 border border-[#D4AF37]/40 shadow-xl shadow-[#D4AF37]/20"
    >
      <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#D4AF37] to-[#B5952F] flex items-center justify-center text-white shadow-md">
        <Heart className="w-4 h-4 fill-white animate-pulse" />
      </div>
      <div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
          <span className="text-xs font-bold text-white uppercase tracking-wider">LIVE</span>
        </div>
        <p className="text-[11px] text-gray-300 font-medium">12.4K Watching</p>
      </div>
    </motion.div>
  );
}

export function GiftsBadge() {
  return (
    <motion.div
      animate={{ y: [0, 12, 0] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      className="absolute top-1/3 -right-6 sm:-right-10 z-20 glass-panel-glow px-4 py-2.5 rounded-2xl flex items-center gap-2.5 border border-amber-500/30 shadow-xl shadow-amber-500/10"
    >
      <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-600 flex items-center justify-center text-white shadow-md">
        <Gift className="w-4 h-4" />
      </div>
      <div>
        <p className="text-xs font-bold text-amber-300">Virtual Gifts 🎁</p>
        <p className="text-[11px] text-gray-300 font-medium">+1,500 Diamonds</p>
      </div>
    </motion.div>
  );
}

export function ChatBadge() {
  return (
    <motion.div
      animate={{ y: [0, -14, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      className="absolute bottom-1/3 -left-6 sm:-left-10 z-20 glass-panel-glow px-4 py-2.5 rounded-2xl flex items-center gap-2.5 border border-blue-500/30 shadow-xl shadow-blue-500/10"
    >
      <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-md">
        <MessageSquare className="w-4 h-4" />
      </div>
      <div>
        <p className="text-xs font-bold text-cyan-300">Real-time Chat 💬</p>
        <p className="text-[11px] text-gray-300 font-medium">Instant Reactions</p>
      </div>
    </motion.div>
  );
}

export function PremiumBadge() {
  return (
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      className="absolute bottom-20 -right-6 sm:-right-8 z-20 glass-panel-glow px-4 py-2.5 rounded-2xl flex items-center gap-2.5 border border-purple-500/40 shadow-xl shadow-purple-500/20"
    >
      <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-purple-600 to-[#D4AF37] flex items-center justify-center text-white shadow-md">
        <Crown className="w-4 h-4 text-amber-300" />
      </div>
      <div>
        <p className="text-xs font-bold text-purple-200">👑 Premium Room</p>
        <p className="text-[11px] text-purple-300/80 font-medium">VIP Exclusive</p>
      </div>
    </motion.div>
  );
}

export function EarningsBadge() {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-20 glass-panel-glow px-5 py-2.5 rounded-2xl flex items-center gap-3 border border-emerald-500/40 shadow-2xl shadow-emerald-500/20"
    >
      <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-md">
        <DollarSign className="w-4 h-4" />
      </div>
      <div>
        <p className="text-xs font-bold text-emerald-300">Creator Earnings 💰</p>
        <p className="text-[11px] text-gray-200 font-medium">$4,850.00 Paid Today</p>
      </div>
    </motion.div>
  );
}
