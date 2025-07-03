'use client';

import { useState } from 'react';
import { Menu } from 'lucide-react';

const navLinks = [
  { href: "#home", label: "Trang chủ" },
  { href: "#about", label: "Về tôi" },
  { href: "#services", label: "Dịch vụ" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Liên hệ" },
];

function scrollToSection(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) {
  if (href.startsWith('#')) {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-neutral-950/90 via-slate-900/90 to-neutral-950/90 backdrop-blur-xl shadow-2xl border-b-0">
      {/* Aurora/nebula động phía sau menu */}
      <svg className="absolute left-1/2 top-0 -translate-x-1/2 w-[900px] h-[120px] opacity-40 blur-2xl animate-pulse-slow z-0 pointer-events-none" viewBox="0 0 900 120" fill="none"><ellipse cx="450" cy="60" rx="400" ry="60" fill="url(#auroraHeader)" /><defs><radialGradient id="auroraHeader" cx="0" cy="0" r="1" gradientTransform="translate(450 60) scale(400 60)" gradientUnits="userSpaceOnUse"><stop stopColor="#38bdf8" stopOpacity="0.7" /><stop offset="0.5" stopColor="#6366f1" stopOpacity="0.5" /><stop offset="1" stopColor="#0a0f1c" stopOpacity="0" /></radialGradient></defs></svg>
      {/* Border gradient dưới menu */}
      <div className="absolute left-0 right-0 bottom-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-400 opacity-60 blur-[1px] z-10" />
      <div className="relative max-w-6xl mx-auto flex items-center justify-between py-3 px-4 sm:px-8 z-20">
        {/* Logo nổi bật hơn */}
        <a
          href="/"
          className="flex items-center gap-3 relative group"
        >
          {/* Crystal SVG lớn hơn quanh logo */}
          <svg width="24" height="24" className="absolute -left-3 -top-3 opacity-80 animate-float-slow" viewBox="0 0 24 24" fill="none">
            <polygon points="12,2 22,12 12,22 2,12" stroke="#38bdf8" strokeWidth="1.5" fill="#38bdf8" fillOpacity="0.18" />
          </svg>
          <svg width="18" height="18" className="absolute -right-2 -bottom-2 opacity-70 animate-float-slow2" viewBox="0 0 18 18" fill="none">
            <polygon points="9,2 16,9 9,16 2,9" stroke="#a5b4fc" strokeWidth="1" fill="#a5b4fc" fillOpacity="0.12" />
          </svg>
          <span className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-700 via-cyan-500 to-sky-500 text-white font-bold text-2xl shadow-2xl border-2 border-white/20 ring-2 ring-cyan-400/40 group-hover:ring-cyan-400/70 transition-all duration-300 glow-logo">
            HT
          </span>
        </a>
        {/* Menu desktop nổi bật hơn */}
        <nav className="hidden md:flex gap-2 lg:gap-6 items-center ml-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={e => scrollToSection(e, link.href)}
              className="led-text relative px-5 py-2 font-semibold rounded-xl transition-all duration-200 bg-clip-text text-white after:absolute after:left-1/2 after:-bottom-2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-cyan-400 after:via-blue-400 after:to-fuchsia-400 after:rounded-full after:transition-all after:duration-300 hover:after:w-4/5 focus:after:w-4/5 after:-translate-x-1/2"
            >
              <span className="relative z-10">{link.label}</span>
            </a>
          ))}
        </nav>
        {/* Mobile menu button với hiệu ứng glow */}
        <button
          className="md:hidden p-2 rounded-lg bg-blue-900/40 hover:bg-cyan-800/60 text-cyan-300 hover:drop-shadow-[0_0_12px_#38bdf8] transition-all duration-300"
          onClick={() => setOpen((v) => !v)}
          aria-label="Mở menu"
        >
          <Menu className="w-7 h-7" />
        </button>
      </div>
      {/* Mobile menu với nền aurora */}
      {open && (
        <nav className="md:hidden bg-gradient-to-b from-neutral-950/95 via-slate-900/95 to-neutral-950/95 backdrop-blur-xl shadow-2xl rounded-b-2xl px-6 py-4 flex flex-col gap-2 animate-fade-in-down border-t border-cyan-500/20 relative z-20">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={e => { scrollToSection(e, link.href); setOpen(false); }}
              className="led-text px-4 py-3 font-semibold rounded-xl bg-clip-text text-white transition-all duration-200"
            >
              <span className="relative z-10">{link.label}</span>
            </a>
          ))}
        </nav>
      )}
      {/* CSS animation */}
      <style jsx>{`
        .glow-logo {
          box-shadow: 0 0 32px rgba(56, 189, 248, 0.4), 0 0 64px rgba(56, 189, 248, 0.2);
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
      `}</style>
    </header>
  );
};

export default Header; 