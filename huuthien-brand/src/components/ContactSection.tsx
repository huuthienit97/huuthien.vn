'use client';

import { Facebook, Linkedin, Mail } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

const ContactSection = () => {
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
    <section ref={sectionRef} id="contact" className="w-full py-24 px-4 sm:px-8 bg-transparent">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className={`text-3xl md:text-4xl font-bold text-white mb-4 glow-text transition-all duration-1000 transform ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-20'
        }`}>Liên hệ</h2>
        <p className={`text-lg text-slate-200 transition-all duration-1000 transform delay-300 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-20'
        }`}>
          Kết nối với tôi để hợp tác, tư vấn hoặc trao đổi ý tưởng mới!
        </p>
      </div>
      <div className={`flex flex-col md:flex-row gap-12 max-w-3xl mx-auto transition-all duration-1000 transform delay-500 ${
        isVisible ? 'animate-slide-in-up' : 'opacity-0 translate-y-20'
      }`}>
        {/* Thông tin liên hệ */}
        <div className="flex-1 flex flex-col items-center md:items-start justify-center gap-4">
          <div className="flex items-center gap-3 text-cyan-400 font-medium hover:drop-shadow-[0_0_12px_#38bdf8] hover:scale-105 transition-all duration-300 group">
            <Mail className="w-5 h-5 animate-float-slow group-hover:rotate-12" />
            <span>huuthienit.2018@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 text-cyan-400 font-medium hover:drop-shadow-[0_0_8px_#38bdf8] transition-all duration-300">
            <span className="font-bold">ĐT:</span>
            <span>0901 234 567</span>
          </div>
          <div className="flex gap-3 mt-2">
            <a href="#" className="p-2 rounded-full bg-cyan-700/30 hover:bg-cyan-500 text-cyan-200 hover:text-white shadow hover:drop-shadow-[0_0_16px_#38bdf8] hover:scale-110 transition-all duration-300 group" aria-label="Facebook">
              <Facebook className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            </a>
            <a href="#" className="p-2 rounded-full bg-cyan-700/30 hover:bg-cyan-500 text-cyan-200 hover:text-white shadow hover:drop-shadow-[0_0_16px_#38bdf8] hover:scale-110 transition-all duration-300 group" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            </a>
          </div>
        </div>
        
        {/* Form liên hệ với hiệu ứng tâm linh */}
        <form className="relative flex-1 bg-gradient-to-br from-neutral-900/90 via-blue-950/80 to-slate-900/90 rounded-3xl shadow-2xl border border-cyan-500/30 p-8 flex flex-col gap-4 group hover:shadow-cyan-500/50 hover:border-cyan-400 transition-all duration-500">
          {/* Crystal SVG động ở góc form */}
          <svg width="16" height="16" className="absolute top-4 right-4 opacity-60 animate-float-slow" viewBox="0 0 16 16" fill="none">
            <polygon points="8,1 15,8 8,15 1,8" stroke="#38bdf8" strokeWidth="1" fill="#38bdf8" fillOpacity="0.15" />
          </svg>
          
          {/* Sóng nước SVG nhỏ ở góc dưới */}
          <svg width="40" height="12" className="absolute bottom-4 left-4 opacity-50 animate-float-slow2" viewBox="0 0 40 12" fill="none">
            <path d="M2 6C6 10 10 2 14 6C18 10 22 2 26 6C30 10 34 2 38 6" stroke="#a5b4fc" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          </svg>
          
          {/* Halo sáng phía sau form */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-24 bg-cyan-400/5 blur-3xl rounded-full z-0 group-hover:bg-cyan-400/15 group-hover:scale-125 transition-all duration-500" />
          
          {/* Hiệu ứng glow border khi hover */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400/0 via-cyan-400/20 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
          
          <input
            type="text"
            placeholder="Họ và tên"
            className="relative z-10 px-4 py-3 rounded-lg border border-cyan-500/50 bg-transparent text-white placeholder:text-slate-400 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 focus:drop-shadow-[0_0_16px_#38bdf8] focus:scale-105 outline-none transition-all duration-300"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="relative z-10 px-4 py-3 rounded-lg border border-cyan-500/50 bg-transparent text-white placeholder:text-slate-400 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 focus:drop-shadow-[0_0_16px_#38bdf8] focus:scale-105 outline-none transition-all duration-300"
            required
          />
          <textarea
            placeholder="Nội dung liên hệ..."
            rows={4}
            className="relative z-10 px-4 py-3 rounded-lg border border-cyan-500/50 bg-transparent text-white placeholder:text-slate-400 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 focus:drop-shadow-[0_0_16px_#38bdf8] focus:scale-105 outline-none transition-all duration-300"
            required
          />
          <button
            type="submit"
            className="relative z-10 mt-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-sky-500 text-white font-semibold shadow-lg hover:from-cyan-400 hover:via-blue-500 hover:to-sky-400 hover:drop-shadow-[0_0_20px_#38bdf8] hover:scale-105 transition-all duration-300 group-hover:scale-105"
          >
            Gửi liên hệ
          </button>
        </form>
      </div>
      
      {/* CSS animation */}
      <style jsx>{`
        .glow-text {
          text-shadow: 0 0 12px #38bdf8, 0 0 24px #6366f1;
        }
        .animate-float-slow {
          animation: float-slow 7s ease-in-out infinite alternate;
        }
        @keyframes float-slow {
          0% { transform: translateY(0) rotate(0deg); }
          100% { transform: translateY(8px) rotate(180deg); }
        }
        .animate-float-slow2 {
          animation: float-slow2 9s ease-in-out infinite alternate;
        }
        @keyframes float-slow2 {
          0% { transform: translateY(0) rotate(0deg); }
          100% { transform: translateY(-6px) rotate(-180deg); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
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
      `}</style>
    </section>
  );
};

export default ContactSection; 