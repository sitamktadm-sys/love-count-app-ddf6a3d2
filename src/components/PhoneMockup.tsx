import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.svg";
import keychainLogo from "@/assets/keychain-logo.png";

// Optimized external links to prevent Internal Build Errors
const photos = [
  "https://i.postimg.cc/P5V9z3Vx/Chat-GPT-Image-Jan-17-2026-09-03-40-PM.png",
  "https://i.postimg.cc/25qJHQgS/Chat-GPT-Image-Jan-17-2026-09-05-08-PM.png",
  "https://i.postimg.cc/YS4VX6TS/Chat-GPT-Image-Jan-17-2026-09-09-07-PM.png",
  "https://i.postimg.cc/pd970f3X/Chat-GPT-Image-Jan-17-2026-09-19-53-PM.png",
  "https://i.postimg.cc/VNST7q2s/Chat-GPT-Image-Jan-17-2026-09-20-03-PM.png",
  "https://i.postimg.cc/YS4VX6TL/Chat-GPT-Image-Jan-17-2026-09-25-23-PM.png",
  "https://i.postimg.cc/GpBNMF6G/Chat-GPT-Image-Jan-17-2026-09-33-15-PM.png",
  "https://i.postimg.cc/6Q7SHrFr/Chat-GPT-Image-Jan-17-2026-09-36-30-PM.png",
  "https://i.postimg.cc/MGc4s7g0/Chat-GPT-Image-Jan-17-2026-09-40-39-PM.png",
];

const TARGET_DAYS = 1247;

const PhoneMockup = () => {
  const [displayDays, setDisplayDays] = useState(0);
  const [hours, setHours] = useState(14);
  const [minutes, setMinutes] = useState(32);
  const [seconds, setSeconds] = useState(0);
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [islandPulse, setIslandPulse] = useState(false);
  const hasAnimated = useRef(false);

  // Count-up animation for days on mount
  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = TARGET_DAYS / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      // Easing: slow down towards the end
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3); // cubic ease-out
      current = Math.round(eased * TARGET_DAYS);
      setDisplayDays(current);

      if (step >= steps) {
        setDisplayDays(TARGET_DAYS);
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  // Update the counter every second
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev === 59) {
          // Trigger Dynamic Island pulse when seconds reset
          setIslandPulse(true);
          setTimeout(() => setIslandPulse(false), 500);
          
          setMinutes((m) => {
            if (m === 59) {
              setHours((h) => {
                if (h === 23) {
                  setDisplayDays((d) => d + 1);
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

  // Auto-scroll photos every 3 seconds
  useEffect(() => {
    const photoInterval = setInterval(() => {
      setCurrentPhoto((prev) => (prev + 1) % photos.length);
    }, 3000);
    return () => clearInterval(photoInterval);
  }, []);

  return (
    <div className="relative">
      {/* iPhone Frame */}
      <div className="relative w-[280px] md:w-[320px] mx-auto">
        {/* Phone outer frame with enhanced glassmorphism */}
        <div 
          className="relative rounded-[3rem] p-3 shadow-hover border border-white/20"
          style={{
            background: "rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(20px)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
          }}
        >
          {/* Phone screen bezel */}
          <div className="relative bg-black/90 rounded-[2.5rem] overflow-hidden">
            {/* Dynamic Island / Notch - Interactive */}
            <motion.div 
              className="absolute top-2 left-1/2 -translate-x-1/2 bg-black rounded-full z-20"
              animate={{
                width: islandPulse ? 110 : 96,
                height: islandPulse ? 28 : 24,
                scale: islandPulse ? 1.05 : 1,
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{ boxShadow: islandPulse ? "0 0 15px rgba(232, 74, 95, 0.4)" : "none" }}
            />

            {/* Glass reflection overlay */}
            <div 
              className="absolute inset-0 z-10 pointer-events-none rounded-[2.5rem]"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 40%, transparent 60%, rgba(255,255,255,0.05) 100%)",
              }}
            />

            {/* Screen content */}
            <div
              className="relative rounded-[2.25rem] overflow-hidden aspect-[9/19.5] flex flex-col"
              style={{
                background: "linear-gradient(180deg, hsl(280 30% 12%) 0%, hsl(260 25% 10%) 50%, hsl(240 28% 8%) 100%)",
              }}
            >
              {/* App Header */}
              <div className="pt-10 pb-4 px-5">
                <div className="flex items-center justify-center gap-2">
                  <img src={logo} alt="LoveCount Logo" width={24} height={24} className="h-6 w-auto" />
                </div>
              </div>

              {/* Names */}
              <div className="text-center py-4 px-4">
                <p className="text-lg font-semibold text-white">Sarah & James</p>
                <p className="text-xs text-white/60 mt-1">Together since June 15, 2021</p>
              </div>

              {/* Counter Display with count-up animation */}
              <div className="text-center px-4 py-2">
                <div className="flex items-baseline justify-center gap-1">
                  <motion.span 
                    className="text-5xl md:text-6xl font-bold text-coral tabular-nums"
                    key={displayDays}
                  >
                    {displayDays.toLocaleString()}
                  </motion.span>
                  <span className="text-lg font-medium text-white/60">days</span>
                </div>

                {/* Detailed time */}
                <div className="flex justify-center gap-4 mt-3 text-xs text-white/60">
                  <div className="flex flex-col items-center">
                    <span className="text-sm font-semibold text-white tabular-nums">
                      {hours.toString().padStart(2, "0")}
                    </span>
                    <span>hours</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-sm font-semibold text-white tabular-nums">
                      {minutes.toString().padStart(2, "0")}
                    </span>
                    <span>mins</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-sm font-semibold text-coral tabular-nums animate-pulse-soft">
                      {seconds.toString().padStart(2, "0")}
                    </span>
                    <span>secs</span>
                  </div>
                </div>
              </div>

              {/* Photo Carousel with Framer Motion */}
              <div className="flex-1 px-4 py-4 overflow-hidden">
                <div className="relative h-full rounded-xl overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentPhoto}
                      src={photos[currentPhoto]}
                      alt={`Couple memory photo ${currentPhoto + 1}`}
                      className="absolute inset-0 w-full h-full object-cover rounded-lg"
                      initial={{ opacity: 0, scale: 1.1, x: 20 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.95, x: -20 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    />
                  </AnimatePresence>
                  {/* Carousel dots */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                    {photos.map((_, i) => (
                      <motion.div
                        key={i}
                        className="h-1.5 rounded-full bg-white/50"
                        animate={{
                          width: i === currentPhoto ? 12 : 6,
                          backgroundColor: i === currentPhoto ? "rgb(232, 74, 95)" : "rgba(255, 255, 255, 0.5)",
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Personal Message */}
              <div className="px-5 pb-6 pt-2">
                <p className="text-center text-xs italic text-white/70">"Every day with you is my favourite day"</p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Keychain with rotational sway */}
        <motion.div 
          className="absolute -bottom-4 -right-4 md:-right-8"
          animate={{
            y: [0, -8, 0],
            rotate: [12, 18, 12, 6, 12],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div 
            className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-navy border-2 border-pink/30 flex items-center justify-center overflow-hidden"
            style={{
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4), 0 0 20px rgba(232, 74, 95, 0.15)",
            }}
          >
            <img
              src={keychainLogo}
              alt="LoveCount Keychain"
              width={80}
              height={80}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-coral border-2 border-background" />
        </motion.div>
      </div>
    </div>
  );
};

export default PhoneMockup;
