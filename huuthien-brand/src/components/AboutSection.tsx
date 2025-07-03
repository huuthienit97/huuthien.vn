'use client';
import { Sparkles } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="w-full flex flex-col items-center justify-center py-24 px-4 sm:px-8 bg-transparent">
      <div className={`relative max-w-4xl w-full mx-auto flex flex-col md:flex-row items-center md:items-stretch text-center md:text-left rounded-3xl bg-gradient-to-br from-[#0a0f1c]/90 via-[#1e2746]/80 to-[#2e1a47]/90 shadow-2xl border-2 border-transparent bg-clip-padding p-0 overflow-hidden group transition-all duration-1000 transform ${
        isVisible ? 'animate-slide-in-up' : 'opacity-0 translate-y-20'
      }`}>
        {/* Border gradient ngoài cùng */}
        <div className="absolute inset-0 rounded-3xl pointer-events-none border-2 border-transparent bg-gradient-to-br from-cyan-400/40 via-blue-600/30 to-fuchsia-500/30 blur-[2px] z-0 group-hover:blur-[4px] transition-all duration-500" />
        {/* Aurora/nebula động phía sau */}
        <svg className="absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-[300px] opacity-30 blur-2xl animate-pulse-slow z-0" viewBox="0 0 700 300" fill="none"><ellipse cx="350" cy="150" rx="320" ry="90" fill="url(#aurora2)" /><defs><radialGradient id="aurora2" cx="0" cy="0" r="1" gradientTransform="translate(350 150) scale(320 90)" gradientUnits="userSpaceOnUse"><stop stopColor="#38bdf8" stopOpacity="0.7" /><stop offset="0.5" stopColor="#6366f1" stopOpacity="0.5" /><stop offset="1" stopColor="#0a0f1c" stopOpacity="0" /></radialGradient></defs></svg>
        {/* Cột trái: Avatar nổi khối, crystal, halo */}
        <div className="relative flex flex-col items-center justify-center md:w-1/2 py-12 px-6 z-10">
          {/* Halo sáng phía sau avatar */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-cyan-400/20 blur-3xl rounded-full z-0 animate-pulse-slow group-hover:scale-125 transition-transform duration-700" />
          {/* Crystal SVG động */}
          <svg width="32" height="32" className="absolute -left-4 top-8 opacity-70 animate-float-slow" viewBox="0 0 32 32" fill="none"><polygon points="16,2 30,16 16,30 2,16" stroke="#38bdf8" strokeWidth="2" fill="#38bdf8" fillOpacity="0.15" /></svg>
          <svg width="18" height="18" className="absolute right-6 bottom-8 opacity-60 animate-float-slow2" viewBox="0 0 18 18" fill="none"><polygon points="9,2 16,9 9,16 2,9" stroke="#a5b4fc" strokeWidth="1.5" fill="#a5b4fc" fillOpacity="0.12" /></svg>
          {/* Avatar nổi khối */}
          <div className="relative z-10 mb-4 group-hover:scale-105 transition-transform duration-500">
            <span className="w-40 h-40 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-700 via-cyan-500 to-sky-500 text-white font-bold text-6xl shadow-2xl border-4 border-cyan-400 ring-2 ring-cyan-400/40 glow-logo group-hover:border-cyan-300 transition-all duration-500">
              HT
            </span>
            {/* Ngôi sao nhỏ quanh avatar */}
            <svg width="16" height="16" className="absolute -top-2 -right-2 opacity-80 animate-twinkle" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="2" fill="#fef9c3" /><circle cx="8" cy="8" r="7" stroke="#fef9c3" strokeOpacity="0.3" strokeWidth="1" /></svg>
          </div>
          {/* Icon crystal nhỏ */}
          <Sparkles className="w-8 h-8 text-cyan-400 mx-auto mb-2 z-10 animate-float-slow drop-shadow-[0_0_12px_#38bdf8] group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" />
        </div>
        {/* Cột phải: Nội dung */}
        <div className="relative flex flex-col justify-center md:w-1/2 py-12 px-6 z-10 gap-6 items-center md:items-start">
          {/* Slogan lớn gradient/glow */}
          <h2 className="led-text text-3xl md:text-5xl font-extrabold mb-2 text-center md:text-left group-hover:scale-105 transition-transform duration-500">
            Khám phá bản thân
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-400 rounded-full mb-2 group-hover:w-32 transition-all duration-500" />
          <p className="text-lg md:text-2xl text-slate-200 font-medium mb-2 text-center md:text-left group-hover:text-slate-100 transition-colors duration-300">
            Kết nối giá trị – Sáng tạo tương lai
          </p>
          <p className="text-base md:text-lg text-slate-300 mb-2 max-w-lg text-center md:text-left group-hover:text-slate-200 transition-colors duration-300">
            Đam mê kết nối tri thức, phát triển công nghệ, lan tỏa giá trị tâm linh và giáo dục sáng tạo. Hành trình không ngừng học hỏi, đổi mới và truyền cảm hứng.
          </p>
        </div>
        {/* CSS animation */}
        <style jsx>{`
          .glow-avatar {
            box-shadow: 0 0 32px rgba(56, 189, 248, 0.5), 0 0 64px rgba(56, 189, 248, 0.2);
          }
          .glow-logo {
            box-shadow: 0 0 32px rgba(56, 189, 248, 0.4), 0 0 64px rgba(56, 189, 248, 0.2);
          }
          .glow-text {
            text-shadow: 0 0 24px #38bdf8, 0 0 48px #6366f1;
          }
          .animate-pulse-slow {
            animation: pulse-slow 6s infinite alternate;
          }
          @keyframes pulse-slow {
            0% { opacity: 0.2; }
            100% { opacity: 0.5; }
          }
          .animate-float-slow {
            animation: float-slow 7s ease-in-out infinite alternate;
          }
          @keyframes float-slow {
            0% { transform: translateY(0) rotate(0deg); }
            100% { transform: translateY(16px) rotate(180deg); }
          }
          .animate-float-slow2 {
            animation: float-slow2 9s ease-in-out infinite alternate;
          }
          @keyframes float-slow2 {
            0% { transform: translateY(0) rotate(0deg); }
            100% { transform: translateY(-12px) rotate(-180deg); }
          }
          .animate-twinkle {
            animation: twinkle 2.5s infinite alternate;
          }
          @keyframes twinkle {
            0% { opacity: 0.6; }
            100% { opacity: 1; }
          }
          .animate-slide-in-up {
            animation: slideInUp 1s ease-out forwards;
          }
          @keyframes slideInUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .led-text {
            color: #fff;
            text-shadow:
              0 0 8px #38bdf8,
              0 0 16px #38bdf8,
              0 0 32px #38bdf8,
              0 0 48px #38bdf8;
            font-weight: bold;
            letter-spacing: 0.5px;
          }
        `}</style>
      </div>
    </section>
  );
};

export default AboutSection; 