import { useState, useEffect } from "react";
import logo from "@/assets/logo.svg";
import keychainLogo from "@/assets/keychain-logo.png";

// Placeholder Photos (Lightweight Unsplash URLs to prevent bundle errors)
const photos = [
  "https://images.unsplash.com/photo-1516589174184-c68526674fd6?w=800",
  "https://images.unsplash.com/photo-1522673607200-1648832cee98?w=800",
  "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?w=800",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800",
];

const PhoneMockup = () => {
  const [days, setDays] = useState(1247);
  const [hours, setHours] = useState(14);
  const [minutes, setMinutes] = useState(32);
  const [seconds, setSeconds] = useState(0);
  const [currentPhoto, setCurrentPhoto] = useState(0);

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
  }, []);

  return (
    <div className="relative">
      <div className="relative w-[280px] md:w-[320px] mx-auto">
        <div className="relative bg-foreground/10 rounded-[3rem] p-3 shadow-hover border border-foreground/20">
          <div className="relative bg-foreground/5 rounded-[2.5rem] overflow-hidden">
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-10" />

            <div
              className="relative rounded-[2.25rem] overflow-hidden aspect-[9/19.5] flex flex-col"
              style={{
                background: "linear-gradient(180deg, hsl(280 30% 12%) 0%, hsl(260 25% 10%) 50%, hsl(240 28% 8%) 100%)",
              }}
            >
              <div className="pt-10 pb-4 px-5">
                <div className="flex items-center justify-center gap-2">
                  <img src={logo} alt="LoveCount Logo" width={24} height={24} className="h-6 w-auto" />
                </div>
              </div>

              <div className="text-center py-4 px-4">
                <p className="text-lg font-semibold text-white">Sarah & James</p>
                <p className="text-xs text-white/60 mt-1">Together since June 15, 2021</p>
              </div>

              <div className="text-center px-4 py-2">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl md:text-6xl font-bold text-coral tabular-nums">
                    {days.toLocaleString()}
                  </span>
                  <span className="text-lg font-medium text-white/60">days</span>
                </div>

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

              <div className="flex-1 px-4 py-4 overflow-hidden">
                <div className="relative h-full rounded-xl overflow-hidden">
                  {photos.map((photo, i) => (
                    <img
                      key={i}
                      src={photo}
                      alt={`Couple memory photo ${i + 1}`}
                      className={`absolute inset-0 w-full h-full object-cover rounded-lg transition-opacity duration-700 ease-in-out ${
                        i === currentPhoto ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  ))}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                    {photos.map((_, i) => (
                      <div
                        key={i}
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                          i === currentPhoto ? "bg-coral w-3" : "bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-5 pb-6 pt-2">
                <p className="text-center text-xs italic text-white/70">"Every day with you is my favourite day"</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-4 -right-4 md:-right-8 animate-float">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-navy border-2 border-pink/30 shadow-card flex items-center justify-center transform rotate-12 overflow-hidden">
            <img
              src={keychainLogo}
              alt="LoveCount Keychain"
              width={80}
              height={80}
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
