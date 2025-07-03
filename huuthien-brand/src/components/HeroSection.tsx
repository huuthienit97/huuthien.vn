'use client';

import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [text, setText] = useState('');
  const fullText = 'Kết nối tri thức';
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <section id="home" className="relative flex flex-col items-center justify-center min-h-[80vh] py-28 px-4 sm:px-8 bg-gradient-to-br from-[#0a0f1c] via-[#1e2746] to-[#2e1a47] overflow-hidden">
      {/* Hiệu ứng nebula/aurora động bằng SVG */}
      <svg className="absolute left-1/2 top-0 -translate-x-1/2 w-[900px] h-[400px] opacity-40 blur-2xl animate-pulse-slow" viewBox="0 0 900 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="450" cy="200" rx="400" ry="120" fill="url(#aurora)" />
        <defs>
          <radialGradient id="aurora" cx="0" cy="0" r="1" gradientTransform="translate(450 200) scale(400 120)" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38bdf8" stopOpacity="0.7" />
            <stop offset="0.5" stopColor="#6366f1" stopOpacity="0.5" />
            <stop offset="1" stopColor="#0a0f1c" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
      {/* Halo sáng phía sau slogan */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[180px] bg-cyan-400/20 blur-3xl rounded-full z-0" />
      {/* Icon crystal, sóng nước, ngôi sao nhỏ quanh slogan */}
      <svg width="32" height="32" className="absolute left-10 top-24 opacity-70 animate-float-slow" viewBox="0 0 32 32" fill="none"><polygon points="16,2 30,16 16,30 2,16" stroke="#38bdf8" strokeWidth="2" fill="#38bdf8" fillOpacity="0.15" /></svg>
      <svg width="60" height="18" className="absolute right-10 top-36 opacity-60 animate-float-slow2" viewBox="0 0 60 18" fill="none"><path d="M2 9C7 15 13 3 18 9C23 15 29 3 34 9C39 15 45 3 50 9C53 13 58 13 58 13" stroke="#a5b4fc" strokeWidth="2" strokeLinecap="round" fill="none" /></svg>
      <svg width="18" height="18" className="absolute left-1/3 bottom-20 opacity-80 animate-twinkle" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="2" fill="#fef9c3" /><circle cx="9" cy="9" r="8" stroke="#fef9c3" strokeOpacity="0.3" strokeWidth="1" /></svg>
      {/* Nội dung chính */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto gap-8">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight text-white mb-2 drop-shadow-[0_0_32px_#38bdf8]">
          <span className="inline-block border-b-4 border-cyan-400 pb-2 glow-text">
            {text}<span className="animate-blink">|</span>
          </span>
          <br />
          <span className="inline-block text-cyan-400 glow-text animate-fade-in-delayed">Sáng tạo không giới hạn</span>
        </h1>
        <p className="text-lg md:text-2xl text-slate-200 font-medium mb-6 animate-fade-in-delayed-2">
          Đa lĩnh vực: <span className="font-semibold text-cyan-400">Công nghệ web</span>, <span className="font-semibold text-blue-400">Tâm linh</span>, <span className="font-semibold text-sky-400">Giáo dục sáng tạo</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delayed-3">
          <a
            href="#portfolio"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-sky-500 text-white font-semibold text-lg shadow-lg hover:bg-cyan-400 transition-all duration-300 flex items-center gap-2 ring-2 ring-cyan-400/30 relative overflow-hidden group hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50"
          >
            <span className="relative z-10">Khám phá Portfolio <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" /></span>
            {/* Hiệu ứng sóng lan tỏa khi hover */}
            <span className="absolute inset-0 bg-cyan-400/20 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-full animate-pulse-slow" />
            {/* Hiệu ứng ripple */}
            <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 group-hover:animate-ripple rounded-full" />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-full bg-white/10 text-cyan-200 font-semibold text-lg shadow border border-cyan-700 hover:bg-cyan-900/30 hover:border-cyan-400 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30"
          >
            Liên hệ ngay
          </a>
        </div>
      </div>
      {/* Sóng nước SVG rất nhẹ dưới cùng */}
      <svg className="absolute left-0 bottom-0 w-full h-32 opacity-10" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="url(#wave-gradient)" fillOpacity="1" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" />
        <defs>
          <linearGradient id="wave-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#0a0f1c" />
          </linearGradient>
        </defs>
      </svg>
      {/* CSS animation */}
      <style jsx>{`
        .glow-text {
          text-shadow: 0 0 16px #38bdf8, 0 0 32px #6366f1;
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s infinite alternate;
        }
        @keyframes pulse-slow {
          0% { opacity: 0.3; }
          100% { opacity: 0.7; }
        }
        .animate-float-slow {
          animation: float-slow 7s ease-in-out infinite alternate;
        }
        @keyframes float-slow {
          0% { transform: translateY(0); }
          100% { transform: translateY(24px); }
        }
        .animate-float-slow2 {
          animation: float-slow2 9s ease-in-out infinite alternate;
        }
        @keyframes float-slow2 {
          0% { transform: translateY(0); }
          100% { transform: translateY(-20px); }
        }
        .animate-twinkle {
          animation: twinkle 2.5s infinite alternate;
        }
        @keyframes twinkle {
          0% { opacity: 0.7; }
          100% { opacity: 1; }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        .animate-fade-in-delayed {
          animation: fadeIn 1s ease-out 2s both;
        }
        .animate-fade-in-delayed-2 {
          animation: fadeIn 1s ease-out 3s both;
        }
        .animate-fade-in-delayed-3 {
          animation: fadeIn 1s ease-out 4s both;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-ripple {
          animation: ripple 0.6s ease-out;
        }
        @keyframes ripple {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(4);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
