"use client";

import { motion } from "framer-motion";
import { Video, Lock, MessageCircle, Gift, DollarSign, Zap, ShieldCheck, Crown, Sparkles, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Video,
    title: "HD Live Streaming",
    description: "Broadcast in stunning 1080p 60fps HD with zero latency. Adaptive bitrate streaming ensures smooth video on any cellular or Wi-Fi network.",
    color: "from-[#D2056E] to-[#990C57]",
    borderColor: "border-[#D2056E]/30",
    badge: "1080p 60fps",
  },
  {
    icon: Lock,
    title: "Private Rooms",
    description: "Host invite-only private streaming rooms for exclusive fan hangouts, VIP performances, and 1-on-1 fan interactions with passcode protection.",
    color: "from-[#990C57] to-[#711345]",
    borderColor: "border-[#990C57]/30",
    badge: "VIP Exclusive",
  },
  {
    icon: MessageCircle,
    title: "Real-time Chat",
    description: "Interactive instant chat with animated emojis, custom stickers, user badges, real-time translations, and automated moderation filters.",
    color: "from-cyan-500 to-blue-600",
    borderColor: "border-cyan-500/30",
    badge: "Sub-10ms",
  },
  {
    icon: Gift,
    title: "Virtual Gifts",
    description: "Send 3D animated gifts, diamonds, luxury sports cars, dragons, and fireworks that trigger full-screen AR visual effects in real time.",
    color: "from-amber-400 to-orange-600",
    borderColor: "border-amber-500/30",
    badge: "3D AR Effects",
  },
  {
    icon: DollarSign,
    title: "Creator Earnings",
    description: "Industry-leading creator revenue split. Instant daily payouts directly to your local bank account, PayPal, or Crypto wallet with transparent analytics.",
    color: "from-emerald-400 to-teal-600",
    borderColor: "border-emerald-500/30",
    badge: "Instant Payouts",
  },
  {
    icon: Zap,
    title: "Fast Performance",
    description: "Engineered on custom global edge CDN nodes for lightning-fast room joining under 100 milliseconds and ultra-light memory usage.",
    color: "from-purple-500 to-indigo-600",
    borderColor: "border-purple-500/30",
    badge: "Global Edge",
  },
  {
    icon: ShieldCheck,
    title: "Safe Platform",
    description: "AI-powered real-time content moderation, strict community safety standards, end-to-end user privacy controls, and 24/7 moderation team.",
    color: "from-blue-500 to-indigo-600",
    borderColor: "border-blue-500/30",
    badge: "AI Moderation",
  },
  {
    icon: Crown,
    title: "Premium Experience",
    description: "Clean dark luxury aesthetic, custom profile customization, verified creator crowns, animated frames, and exclusive sound FX.",
    color: "from-[#D2056E] to-amber-500",
    borderColor: "border-amber-500/30",
    badge: "Luxury UI",
  },
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel-glow text-xs font-bold text-[#D2056E] border border-[#D2056E]/30 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Power & Elegance</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Built for <span className="text-gradient">Creators & Fans</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            Everything you need to broadcast, connect with global audiences, and build a lucrative digital career in live streaming.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`group relative p-6 sm:p-8 rounded-3xl glass-panel border ${feature.borderColor} hover:border-[#D2056E]/60 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl`}
              >
                {/* Background Card Radial Glow on Hover */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 rounded-full bg-[#D2056E]/10 group-hover:bg-[#D2056E]/25 blur-2xl transition-all duration-500 pointer-events-none" />

                <div>
                  {/* Top Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${feature.color} p-[1px] shadow-lg shadow-[#D2056E]/20 group-hover:shadow-[#D2056E]/40 transition-all duration-300`}>
                      <div className="w-full h-full bg-[#170B13] rounded-[15px] flex items-center justify-center text-white">
                        <Icon className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-white/[0.06] text-[10px] font-bold text-gray-300 uppercase tracking-wider border border-white/10">
                      {feature.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-extrabold text-white mb-3 group-hover:text-pink-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed font-normal">
                    {feature.description}
                  </p>
                </div>

                {/* Card Bottom Accent Line */}
                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-[#D2056E] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Explore feature</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
