'use client';
import { Facebook, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative w-full py-10 px-4 bg-gradient-to-t from-blue-950 via-neutral-950 to-slate-900 border-t border-cyan-500/20 mt-12 overflow-hidden">
      {/* Crystal SVG động ở góc footer */}
      <svg width="20" height="20" className="absolute top-4 left-4 opacity-60 animate-float-slow" viewBox="0 0 20 20" fill="none">
        <polygon points="10,2 18,10 10,18 2,10" stroke="#38bdf8" strokeWidth="1.5" fill="#38bdf8" fillOpacity="0.15" />
      </svg>
      <svg width="16" height="16" className="absolute bottom-4 right-4 opacity-50 animate-float-slow2" viewBox="0 0 16 16" fill="none">
        <polygon points="8,1 15,8 8,15 1,8" stroke="#a5b4fc" strokeWidth="1" fill="#a5b4fc" fillOpacity="0.1" />
      </svg>
      
      {/* Ngôi sao nhỏ ở giữa */}
      <svg width="12" height="12" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-70 animate-twinkle" viewBox="0 0 12 12" fill="none">
        <circle cx="6" cy="6" r="1.5" fill="#fef9c3" />
        <circle cx="6" cy="6" r="5" stroke="#fef9c3" strokeOpacity="0.3" strokeWidth="0.5" />
      </svg>
      
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        <div className="text-slate-300 text-center md:text-left text-base">
          © {new Date().getFullYear()} <span className="font-bold text-cyan-400 glow-text">HuuThien.vn</span>
          <span className="block md:inline ml-2 text-xs text-slate-400 glow-text-small">"Lan tỏa tri thức – Kết nối giá trị – Sáng tạo tương lai"</span>
        </div>
        <nav className="flex gap-6 text-cyan-400 font-medium">
          <a href="#home" className="hover:text-white hover:drop-shadow-[0_0_8px_#38bdf8] transition-all duration-300">Trang chủ</a>
          <a href="#about" className="hover:text-white hover:drop-shadow-[0_0_8px_#38bdf8] transition-all duration-300">Về tôi</a>
          <a href="#services" className="hover:text-white hover:drop-shadow-[0_0_8px_#38bdf8] transition-all duration-300">Dịch vụ</a>
          <a href="#portfolio" className="hover:text-white hover:drop-shadow-[0_0_8px_#38bdf8] transition-all duration-300">Portfolio</a>
          <a href="#contact" className="hover:text-white hover:drop-shadow-[0_0_8px_#38bdf8] transition-all duration-300">Liên hệ</a>
        </nav>
        <div className="flex gap-3">
          <a href="#" className="p-2 rounded-full bg-cyan-700/30 hover:bg-cyan-500 text-cyan-200 hover:text-white shadow hover:drop-shadow-[0_0_12px_#38bdf8] transition-all duration-300 group" aria-label="Facebook">
            <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
          </a>
          <a href="#" className="p-2 rounded-full bg-cyan-700/30 hover:bg-cyan-500 text-cyan-200 hover:text-white shadow hover:drop-shadow-[0_0_12px_#38bdf8] transition-all duration-300 group" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
          </a>
          <a href="#" className="p-2 rounded-full bg-cyan-700/30 hover:bg-cyan-500 text-cyan-200 hover:text-white shadow hover:drop-shadow-[0_0_12px_#38bdf8] transition-all duration-300 group" aria-label="Email">
            <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
          </a>
        </div>
      </div>
      
      {/* CSS animation */}
      <style jsx>{`
        .glow-text {
          text-shadow: 0 0 12px #38bdf8, 0 0 24px #6366f1;
        }
        .glow-text-small {
          text-shadow: 0 0 8px #38bdf8, 0 0 16px #6366f1;
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
        .animate-twinkle {
          animation: twinkle 2.5s infinite alternate;
        }
        @keyframes twinkle {
          0% { opacity: 0.5; }
          100% { opacity: 1; }
        }
      `}</style>
    </footer>
  );
};

export default Footer; 