"use client";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-[#0a0f1c] via-[#1e2746] to-[#2e1a47]">
      <span className="flex items-center justify-center w-28 h-28 rounded-full bg-gradient-to-br from-cyan-500 via-blue-500 to-sky-500 text-white text-5xl font-extrabold shadow-2xl border-4 border-cyan-400 ring-4 ring-cyan-400/30 animate-pulse drop-shadow-[0_0_32px_#38bdf8]">
        HT
      </span>
      <div className="mt-8 text-cyan-200 text-xl font-semibold animate-pulse">
        Đang tải...
      </div>
    </div>
  );
} 