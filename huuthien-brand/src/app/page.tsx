// Nếu có dòng 'use client' ở đầu file thì xóa đi, giữ lại export default async function Home() như hiện tại.

import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import PortfolioSection from "../components/PortfolioSection";
import ContactSection from "../components/ContactSection";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 1200)); // delay 1.2s
  return (
    <>
      {/* Particle background: fixed, z-0, không ảnh hưởng layout */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>
      {/* Các section nằm trực tiếp trong flow layout */}
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
    </>
  );
}
