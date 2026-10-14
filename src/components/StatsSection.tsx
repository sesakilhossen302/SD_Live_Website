"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Download, Users, MessageSquare, Activity, Award } from "lucide-react";

interface StatItemProps {
  icon: any;
  targetNumber: number;
  suffix: string;
  label: string;
  sublabel: string;
  delay?: number;
}

function StatCounter({ icon: Icon, targetNumber, suffix, label, sublabel, delay = 0 }: StatItemProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepTime = duration / steps;
    const increment = targetNumber / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetNumber) {
        setCount(targetNumber);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, targetNumber]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="relative p-8 rounded-3xl glass-panel-glow border border-[#D4AF37]/30 text-center group hover:scale-[1.03] transition-transform duration-300"
    >
      <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-tr from-[#D4AF37] to-[#8A7322] p-[1px] shadow-lg shadow-[#D4AF37]/30 group-hover:shadow-[#D4AF37]/60 transition-all">
        <div className="w-full h-full bg-[#0f1126] rounded-[15px] flex items-center justify-center text-white">
          <Icon className="w-7 h-7 text-[#D4AF37] group-hover:scale-110 transition-transform" />
        </div>
      </div>

      <div className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-2 flex items-center justify-center font-poppins">
        <span>{count.toLocaleString()}</span>
        <span className="text-[#D4AF37] font-black">{suffix}</span>
      </div>

      <h3 className="text-lg font-bold text-gray-100 mb-1">{label}</h3>
      <p className="text-xs text-gray-300 font-medium">{sublabel}</p>
    </motion.div>
  );
}

export default function StatsSection() {
  return (
    <section className="py-20 relative z-10 my-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl glass-panel p-8 sm:p-12 border border-white/10 overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/10 via-[#B5952F]/10 to-[#8A7322]/10 pointer-events-none" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
            <StatCounter
              icon={Download}
              targetNumber={100}
              suffix="K+"
              label="Downloads"
              sublabel="Active mobile installs globally"
              delay={0.1}
            />
            <StatCounter
              icon={Users}
              targetNumber={10}
              suffix="K+"
              label="Daily Users"
              sublabel="Active streams & broadcasters"
              delay={0.2}
            />
            <StatCounter
              icon={MessageSquare}
              targetNumber={5}
              suffix="M+"
              label="Messages"
              sublabel="Sent in real-time rooms daily"
              delay={0.3}
            />
            <StatCounter
              icon={Activity}
              targetNumber={99.9}
              suffix="%"
              label="Uptime"
              sublabel="Ultra-reliable global CDN infrastructure"
              delay={0.4}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
