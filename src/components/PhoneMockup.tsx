import { useState, useEffect } from "react";
import logo from "@/assets/logo.svg";
import keychainLogo from "@/assets/keychain-logo.png";

const PhoneMockup = () => {
  const [days, setDays] = useState(1247);
  const [hours, setHours] = useState(14);
  const [minutes, setMinutes] = useState(32);
  const [seconds, setSeconds] = useState(0);

  // Update the counter every second
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev === 59) {
          setMinutes((m) => {
            if (m === 59) {
              setHours((h) => {
                if (h === 23) {
                  setDays((d) => d + 1);
                  return 0;
                }
                return h + 1;
              });
              return 0;
            }
            return m + 1;
          });
          return 0;
        }
        return prev + 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Couple photo placeholders with gradients
  const photos = [
    "linear-gradient(135deg, hsl(352 77% 60%) 0%, hsl(353 62% 83%) 100%)",
    "linear-gradient(135deg, hsl(240 28% 14%) 0%, hsl(240 28% 30%) 100%)",
    "linear-gradient(135deg, hsl(353 62% 83%) 0%, hsl(352 77% 70%) 100%)",
    "linear-gradient(135deg, hsl(352 77% 55%) 0%, hsl(240 28% 25%) 100%)",
    "linear-gradient(135deg, hsl(240 28% 20%) 0%, hsl(353 62% 83%) 100%)",
  ];

  return (
    <div className="relative">
      {/* iPhone Frame */}
      <div className="relative w-[280px] md:w-[320px] mx-auto">
        {/* Phone outer frame */}
        <div className="relative bg-foreground/10 rounded-[3rem] p-3 shadow-hover border border-foreground/20">
          {/* Phone screen bezel */}
          <div className="relative bg-foreground/5 rounded-[2.5rem] overflow-hidden">
            {/* Dynamic Island / Notch */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-10" />
            
            {/* Screen content */}
            <div className="relative bg-navy rounded-[2.25rem] overflow-hidden aspect-[9/19.5] flex flex-col">
              {/* App Header */}
              <div className="pt-10 pb-4 px-5">
                <div className="flex items-center justify-center gap-2">
                  <img src={logo} alt="LoveCount" className="h-6 w-auto" />
                </div>
              </div>

              {/* Names */}
              <div className="text-center py-4 px-4">
                <p className="text-lg font-semibold text-white">Sarah & James</p>
                <p className="text-xs text-white/60 mt-1">Together since June 15, 2021</p>
              </div>

              {/* Counter Display */}
              <div className="text-center px-4 py-2">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl md:text-6xl font-bold text-coral tabular-nums">
                    {days.toLocaleString()}
                  </span>
                  <span className="text-lg font-medium text-white/60">days</span>
                </div>
                
                {/* Detailed time */}
                <div className="flex justify-center gap-4 mt-3 text-xs text-white/60">
                  <div className="flex flex-col items-center">
                    <span className="text-sm font-semibold text-white tabular-nums">{hours.toString().padStart(2, '0')}</span>
                    <span>hours</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-sm font-semibold text-white tabular-nums">{minutes.toString().padStart(2, '0')}</span>
                    <span>mins</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-sm font-semibold text-coral tabular-nums animate-pulse-soft">{seconds.toString().padStart(2, '0')}</span>
                    <span>secs</span>
                  </div>
                </div>
              </div>

              {/* Photo Carousel */}
              <div className="flex-1 px-4 py-4 overflow-hidden">
                <div className="relative h-full rounded-xl overflow-hidden">
                  <div className="flex gap-3 animate-carousel-slide h-full">
                    {[...photos, ...photos].map((gradient, i) => (
                      <div
                        key={i}
                        className="flex-shrink-0 w-24 h-full rounded-lg flex items-center justify-center"
                        style={{ background: gradient }}
                      >
                        <span className="text-3xl opacity-50">💑</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Personal Message */}
              <div className="px-5 pb-6 pt-2">
                <p className="text-center text-xs italic text-white/70">
                  "Every day with you is my favourite day"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Keychain */}
        <div className="absolute -bottom-4 -right-4 md:-right-8 animate-float">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-navy border-2 border-pink/30 shadow-card flex items-center justify-center transform rotate-12 overflow-hidden">
            <img src={keychainLogo} alt="LoveCount" width={80} height={80} loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-coral border-2 border-background" />
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;
