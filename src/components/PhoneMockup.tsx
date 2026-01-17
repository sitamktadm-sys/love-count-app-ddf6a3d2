import { useState, useEffect } from "react";
import logo from "@/assets/logo.svg";
import keychainLogo from "@/assets/keychain-logo.png";
import couplePhoto1 from "@/assets/couple-photo-1.png";
import couplePhoto2 from "@/assets/couple-photo-2.png";
import couplePhoto3 from "@/assets/couple-photo-3.png";
import couplePhoto4 from "@/assets/couple-photo-4.png";
import couplePhoto5 from "@/assets/couple-photo-5.png";
import couplePhoto6 from "@/assets/couple-photo-6.png";
import couplePhoto7 from "@/assets/couple-photo-7.png";
import couplePhoto8 from "@/assets/couple-photo-8.png";
import couplePhoto9 from "@/assets/couple-photo-9.png";

const PhoneMockup = () => {
  const [days, setDays] = useState(1247);
  const [hours, setHours] = useState(14);
  const [minutes, setMinutes] = useState(32);
  const [seconds, setSeconds] = useState(0);
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const photos = [couplePhoto1, couplePhoto2, couplePhoto3, couplePhoto4, couplePhoto5, couplePhoto6, couplePhoto7, couplePhoto8, couplePhoto9];

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

  // Auto-scroll photos every 3 seconds
  useEffect(() => {
    const photoInterval = setInterval(() => {
      setCurrentPhoto((prev) => (prev + 1) % photos.length);
    }, 3000);
    return () => clearInterval(photoInterval);
  }, [photos.length]);

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
                  <img src={logo} alt="Personalised anniversary gift showing days together counter for couples" width={24} height={24} className="h-6 w-auto" />
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
                  {photos.map((photo, i) => (
                    <img
                      key={i}
                      src={photo}
                      alt={`Couple memory photo ${i + 1}`}
                      className={`absolute inset-0 w-full h-full object-cover rounded-lg transition-opacity duration-700 ease-in-out ${
                        i === currentPhoto ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  ))}
                  {/* Carousel dots */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                    {photos.map((_, i) => (
                      <div
                        key={i}
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                          i === currentPhoto ? 'bg-coral w-3' : 'bg-white/50'
                        }`}
                      />
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
            <img 
              src={keychainLogo} 
              alt="NFC keychain personalised Valentine gift for boyfriend girlfriend UK" 
              width={80} 
              height={80} 
              loading="lazy" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-coral border-2 border-background" />
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;