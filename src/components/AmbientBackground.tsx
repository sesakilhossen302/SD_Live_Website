"use client";

import { memo } from "react";

const AmbientBackground = memo(function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#0f1126]">
      {/* Deep gradient background base */}
      <div 
        className="absolute inset-0 opacity-80"
        style={{
          background: "radial-gradient(circle at 50% 0%, #2C2513 0%, #0f1126 70%)"
        }}
      />

      {/* Blob 1 - Top Left Magenta Pink */}
      <div
        className="absolute -top-32 -left-32 w-[450px] sm:w-[550px] h-[450px] sm:h-[550px] rounded-full blur-[100px] sm:blur-[140px] opacity-40 mix-blend-screen animate-ambient-float-1 gpu-smooth"
        style={{ background: "#D4AF37" }}
      />

      {/* Blob 2 - Center Right Deep Magenta */}
      <div
        className="absolute top-[35%] -right-32 w-[500px] sm:w-[600px] h-[500px] sm:h-[600px] rounded-full blur-[110px] sm:blur-[160px] opacity-35 mix-blend-screen animate-ambient-float-2 gpu-smooth"
        style={{ background: "#B5952F" }}
      />

      {/* Blob 3 - Bottom Left Rich Purple */}
      <div
        className="absolute top-[65%] -left-32 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] rounded-full blur-[100px] sm:blur-[150px] opacity-30 mix-blend-screen animate-ambient-float-3 gpu-smooth"
        style={{ background: "#8A7322" }}
      />

      {/* Blob 4 - Hero Glow Accent */}
      <div
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[300px] sm:h-[400px] rounded-full blur-[120px] sm:blur-[180px] opacity-30 pointer-events-none animate-pulse-slow gpu-smooth"
        style={{ background: "radial-gradient(ellipse, #D4AF37 0%, #5E4D17 60%, transparent 100%)" }}
      />

      {/* Grid overlay lines pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px)`,
          backgroundSize: '36px 36px'
        }}
      />
    </div>
  );
});

export default AmbientBackground;
