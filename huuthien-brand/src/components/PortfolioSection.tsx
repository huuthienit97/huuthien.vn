'use client';

import { useEffect, useState, useRef } from 'react';

const projects = [
  {
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    title: "Website Doanh nghiệp",
    desc: "Thiết kế website chuyên nghiệp cho doanh nghiệp vừa và nhỏ, tối ưu chuyển đổi.",
    link: "https://huuthien.com",
  },
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    title: "Ứng dụng Tâm linh",
    desc: "Xây dựng app tra cứu phong thủy, thiền định, kết nối cộng đồng tâm linh.",
    link: "#",
  },
  {
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
    title: "Nền tảng Giáo dục",
    desc: "Phát triển nền tảng học trực tuyến sáng tạo, cá nhân hóa trải nghiệm học tập.",
    link: "#",
  },
];

const PortfolioSection = () => {
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
    <section ref={sectionRef} id="portfolio" className="w-full py-24 px-4 sm:px-8 bg-transparent">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 glow-text animate-fade-in-up">Portfolio</h2>
        <p className="text-lg text-slate-200 animate-fade-in-up-delayed">
          Một số dự án tiêu biểu đã thực hiện trong các lĩnh vực công nghệ, tâm linh và giáo dục.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {projects.map((project, idx) => (
          <div
            key={idx}
            data-index={idx}
            className={`relative bg-gradient-to-br from-neutral-900/90 via-blue-950/80 to-slate-900/90 rounded-3xl border border-cyan-500/30 shadow-2xl overflow-hidden flex flex-col hover:shadow-cyan-500/50 hover:border-cyan-400 hover:scale-105 group transition-all duration-700 transform ${
              visibleCards.includes(idx) ? 'animate-slide-in-up' : 'opacity-0 translate-y-20'
            }`}
            style={{ animationDelay: `${idx * 200}ms` }}
          >
            {/* Crystal SVG động ở góc trên */}
            <svg width="16" height="16" className="absolute top-4 right-4 opacity-60 animate-float-slow z-20" viewBox="0 0 16 16" fill="none">
              <polygon points="8,1 15,8 8,15 1,8" stroke="#38bdf8" strokeWidth="1" fill="#38bdf8" fillOpacity="0.15" />
            </svg>
            
            {/* Hiệu ứng glow border khi hover */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400/0 via-cyan-400/20 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
            
            <div className="relative w-full h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
              />
              {/* Overlay gradient với hiệu ứng glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-cyan-400/30 group-hover:via-cyan-400/10 group-hover:to-transparent transition-all duration-500" />
              
              {/* Ngôi sao nhỏ ở góc ảnh */}
              <svg width="12" height="12" className="absolute top-3 left-3 opacity-70 animate-twinkle" viewBox="0 0 12 12" fill="none">
                <circle cx="6" cy="6" r="1.5" fill="#fef9c3" />
                <circle cx="6" cy="6" r="5" stroke="#fef9c3" strokeOpacity="0.3" strokeWidth="0.5" />
              </svg>
            </div>
            
            <div className="p-6 flex flex-col flex-1 relative">
              {/* Halo sáng phía sau nội dung */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-16 bg-cyan-400/5 blur-2xl rounded-full z-0 group-hover:bg-cyan-400/20 group-hover:scale-150 transition-all duration-500" />
              
              <h3 className="text-xl font-semibold text-cyan-400 mb-2 glow-text relative z-10 group-hover:text-cyan-300 transition-colors duration-300">{project.title}</h3>
              <p className="text-slate-200 text-base mb-4 flex-1 relative z-10 group-hover:text-slate-100 transition-colors duration-300">{project.desc}</p>
              
              <a
                href={project.link}
                className="inline-block mt-auto px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-sky-500 text-white font-semibold shadow-lg hover:from-cyan-400 hover:via-blue-500 hover:to-sky-400 transition-all duration-300 relative z-10 group-hover:drop-shadow-[0_0_16px_#38bdf8] group-hover:scale-105"
              >
                Xem chi tiết
              </a>
            </div>

            {/* Hiệu ứng particle khi hover */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-cyan-400/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-particle-float"
                  style={{
                    left: `${30 + i * 20}%`,
                    top: `${20 + i * 15}%`,
                    animationDelay: `${i * 150}ms`,
                    animationDuration: `${2.5 + i * 0.3}s`
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
            transform: translateY(-25px) scale(1);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default PortfolioSection; 