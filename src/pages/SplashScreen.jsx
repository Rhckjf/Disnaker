// src/components/SplashScreen.jsx
import { useEffect, useState } from "react";

export default function SplashScreen({ minDuration = 1200, onDone }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const tick = setInterval(() => {
      const t = Date.now() - start;
      const raw = Math.min(1, t / minDuration);
      const eased = 1 - Math.pow(1 - raw, 3);
      setProgress(Math.floor(eased * 99));
    }, 16);

    const done = setTimeout(() => {
      setProgress(100);
      onDone?.();
    }, minDuration + 180);

    return () => {
      clearInterval(tick);
      clearTimeout(done);
    };
  }, [minDuration, onDone]);

  return (
    <div
      className="
        fixed inset-0 z-[9999] grid place-items-center
        text-[#0f172a] dark:text-white
        bg-gradient-to-br from-[#f7f8fb] via-[#eef2f7] to-[#e9edf5]
        dark:from-[#0a0f18] dark:via-[#0b121d] dark:to-[#0e1726]
      "
      role="status"
      aria-live="polite"
      aria-label="Memuat halaman"
    >
      <div className="pointer-events-none absolute -z-10 h-[520px] w-[520px] rounded-full blur-3xl opacity-30
                      bg-[#18446C]/30 dark:bg-[#18446C]/25" />

      <div className="flex flex-col items-center gap-6 px-8">
        {/* --- area animasi swap-swap --- */}
        <div className="relative w-[160px] h-[100px]">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[140px] h-[46px] rounded-full
                          bg-white/40 dark:bg-white/5 backdrop-blur-sm border border-white/40 dark:border-white/10" />
          <div
            className="
              absolute top-1/2 -translate-y-1/2 h-[38px] w-[38px] rounded-full shadow
              bg-gradient-to-br from-[#18446C] to-[#2d5d86]
              dark:from-white dark:to-white/70
              animate-[swapX_1200ms_infinite_ease-in-out]
            "
            style={{ left: "10px" }}
          />
          <div
            className="
              absolute top-1/2 -translate-y-1/2 h-[38px] w-[38px] rounded-full shadow
              bg-gradient-to-br from-[#2d5d86] to-[#18446C]
              dark:from-white/80 dark:to-white
              animate-[swapXrev_1200ms_infinite_ease-in-out]
            "
            style={{ right: "10px" }}
          />
        </div>

        <div className="text-center -mt-2">
          <h2 className="text-[15px] font-semibold tracking-wide">Memuat konten</h2>
          <p className="text-[12.5px] text-slate-600 dark:text-slate-400 mt-1">
            {progress}%
          </p>
        </div>

        <div className="w-[260px] h-1.5 rounded-full overflow-hidden bg-slate-200/70 dark:bg-white/10">
          <div
            className="h-full rounded-full bg-[#18446C] dark:bg-white transition-[width] duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <style>{`
        @keyframes swapX {
          0%   { transform: translateY(-50%) translateX(0); }
          50%  { transform: translateY(-50%) translateX(80px) scale(1.05); }
          100% { transform: translateY(-50%) translateX(0); }
        }
        @keyframes swapXrev {
          0%   { transform: translateY(-50%) translateX(0); }
          50%  { transform: translateY(-50%) translateX(-80px) scale(1.05); }
          100% { transform: translateY(-50%) translateX(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-[swapX_1200ms_infinite_ease-in-out],
          .animate-[swapXrev_1200ms_infinite_ease-in-out] { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
