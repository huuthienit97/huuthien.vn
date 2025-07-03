'use client';

import { Code, Sparkles, BookOpen } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

const services = [
  {
    icon: <Code className="w-8 h-8 text-cyan-400" />,
    title: 'Thiết kế Website',
    desc: 'Tư vấn, thiết kế và phát triển website hiện đại, chuẩn SEO, tối ưu trải nghiệm người dùng.',
  },
  {
    icon: <Sparkles className="w-8 h-8 text-cyan-400" />,
    title: 'Tư vấn Tâm linh',
    desc: 'Kết nối giá trị tâm linh, phong thủy, thiền định giúp cân bằng cuộc sống và công việc.',
  },
  {
    icon: <BookOpen className="w-8 h-8 text-cyan-400" />,
    title: 'Giáo dục Sáng tạo',
    desc: 'Đào tạo kỹ năng sáng tạo, tư duy đổi mới, phát triển cá nhân và tổ chức.',
  },
];

const ServicesSection = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('[data-index]');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="w-full py-24 px-4 sm:px-8 bg-transparent">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 glow-text animate-fade-in-up">Dịch vụ</h2>
        <p className="text-lg text-slate-200 animate-fade-in-up-delayed">
          Mang đến giải pháp toàn diện, kết nối công nghệ, tâm linh và giáo dục sáng tạo.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {services.map((service, idx) => (
          <div
            key={idx}
            data-index={idx}
            className={`relative flex flex-col items-center bg-gradient-to-br from-neutral-900/90 via-blue-950/80 to-slate-900/90 rounded-3xl border border-cyan-500/30 shadow-2xl p-8 gap-4 transition-all duration-700 hover:shadow-cyan-500/50 hover:border-cyan-400 hover:scale-105 group overflow-hidden transform ${
              visibleCards.includes(idx) ? 'animate-slide-in-up' : 'opacity-0 translate-y-20'
            }`}
            style={{ animationDelay: `${idx * 200}ms` }}
          >
            {/* Crystal SVG động ở góc card */}
            <svg width="16" height="16" className="absolute top-4 right-4 opacity-60 animate-float-slow" viewBox="0 0 16 16" fill="none">
              <polygon points="8,1 15,8 8,15 1,8" stroke="#38bdf8" strokeWidth="1" fill="#38bdf8" fillOpacity="0.15" />
            </svg>
            
            {/* Halo sáng phía sau icon */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-20 h-20 bg-cyan-400/10 blur-2xl rounded-full z-0 group-hover:bg-cyan-400/30 group-hover:scale-150 transition-all duration-500" />
            
            {/* Hiệu ứng glow border khi hover */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400/0 via-cyan-400/20 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
            
            <div className="relative z-10 mb-4 group-hover:scale-110 transition-transform duration-500">
              <div className="drop-shadow-[0_0_12px_#38bdf8] group-hover:drop-shadow-[0_0_24px_#38bdf8] transition-all duration-500 group-hover:rotate-12">
                {service.icon}
              </div>
            </div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-2 glow-text group-hover:text-cyan-300 transition-colors duration-300">{service.title}</h3>
            <p className="text-slate-200 text-base text-center group-hover:text-slate-100 transition-colors duration-300">{service.desc}</p>
            
            {/* Ngôi sao nhỏ ở góc dưới */}
            <svg width="10" height="10" className="absolute bottom-4 left-4 opacity-70 animate-twinkle" viewBox="0 0 10 10" fill="none">
              <circle cx="5" cy="5" r="1" fill="#fef9c3" />
              <circle cx="5" cy="5" r="4" stroke="#fef9c3" strokeOpacity="0.3" strokeWidth="0.5" />
            </svg>

            {/* Hiệu ứng particle khi hover */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-cyan-400/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-particle-float"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + i * 10}%`,
                    animationDelay: `${i * 100}ms`,
                    animationDuration: `${2 + i * 0.5}s`
                  }}
                />
              ))}
            </div>
          </div>
        ))}
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
        .animate-twinkle {
          animation: twinkle 2.5s infinite alternate;
        }
        @keyframes twinkle {
          0% { opacity: 0.5; }
          100% { opacity: 1; }
        }
        .animate-slide-in-up {
          animation: slideInUp 0.8s ease-out forwards;
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
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }
        .animate-fade-in-up-delayed {
          animation: fadeInUp 1s ease-out 0.3s both;
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
        .animate-particle-float {
          animation: particleFloat 3s ease-out infinite;
        }
        @keyframes particleFloat {
          0% {
            transform: translateY(0) scale(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(-30px) scale(1);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesSection; 