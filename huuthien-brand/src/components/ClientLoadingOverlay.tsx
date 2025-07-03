"use client";
import { useEffect, useState } from "react";

const particles = Array.from({ length: 18 });

export default function ClientLoadingOverlay() {
  const [showLoading, setShowLoading] = useState(true);
  const [typing, setTyping] = useState(0);
  const text = "Đang tải...";

  useEffect(() => {
    const timer = setTimeout(() => setShowLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showLoading && typing < text.length) {
      const t = setTimeout(() => setTyping(typing + 1), 60);
      return () => clearTimeout(t);
    }
  }, [typing, showLoading]);

  if (!showLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-[#0a0f1c] via-[#1e2746] to-[#2e1a47] overflow-hidden">
      {/* Particle động xung quanh logo */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {particles.map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/40 rounded-full animate-float-particle"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
              filter: 'blur(1px)'
            }}
          />
        ))}
      </div>
      {/* Logo HT phát sáng, xoay, pulse */}
      <span className="relative flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-cyan-500 via-blue-500 to-sky-500 text-white text-6xl font-extrabold shadow-2xl border-4 border-cyan-400 ring-4 ring-cyan-400/30 animate-spin-slow animate-pulse drop-shadow-[0_0_48px_#38bdf8]">
        HT
        <span className="absolute -top-4 -right-4 w-6 h-6 bg-cyan-300/60 rounded-full blur-xl animate-pulse" />
        <span className="absolute -bottom-4 -left-4 w-4 h-4 bg-blue-400/40 rounded-full blur-lg animate-pulse" />
      </span>
      {/* Text Đang tải... hiệu ứng typing + glow */}
      <div className="mt-10 text-cyan-200 text-2xl font-semibold glow-text animate-fade-in-up">
        <span>{text.slice(0, typing)}</span>
        <span className="inline-block w-2 h-6 bg-cyan-300 ml-1 align-middle animate-blink rounded" />
      </div>
      <style jsx>{`
        .animate-spin-slow {
          animation: spin 2.8s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .glow-text {
          text-shadow: 0 0 16px #38bdf8, 0 0 32px #6366f1;
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-blink {
          animation: blink 1s steps(2, start) infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-float-particle {
          animation: floatParticle 2.5s ease-in-out infinite alternate;
        }
        @keyframes floatParticle {
          0% { transform: translateY(0) scale(1); opacity: 0.5; }
          50% { transform: translateY(-16px) scale(1.2); opacity: 1; }
          100% { transform: translateY(0) scale(1); opacity: 0.5; }
        }
      `}</style>
    </div>
  );
} 