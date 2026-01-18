import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";
import couplePhoto1 from "@/assets/couple-photo-1.png";
import couplePhoto2 from "@/assets/couple-photo-2.png";
import couplePhoto3 from "@/assets/couple-photo-3.png";
import couplePhoto4 from "@/assets/couple-photo-4.png";
import couplePhoto5 from "@/assets/couple-photo-5.png";
import couplePhoto6 from "@/assets/couple-photo-6.png";

const ShareYourStorySection = () => {
  const [days, setDays] = useState(1344);

  // Simulate counter updating
  useEffect(() => {
    const interval = setInterval(() => {
      setDays((prev) => prev + 1);
    }, 86400000); // Update daily
    return () => clearInterval(interval);
  }, []);

  const photos = [
    couplePhoto1,
    couplePhoto2,
    couplePhoto3,
    couplePhoto4,
    couplePhoto5,
    couplePhoto6,
  ];

  return (
    <section className="py-16 md:py-24 bg-pink" aria-labelledby="share-story-heading">
      <div className="container-narrow">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Side - Phone Mockup with Story (60% width on desktop) */}
          <div className="w-full lg:w-3/5 flex justify-center">
            {/* iPhone Frame - matching hero section style */}
            <div className="relative w-[260px] md:w-[300px]">
              {/* Phone outer frame */}
              <div className="relative bg-foreground/10 rounded-[3rem] p-3 shadow-hover border border-foreground/20">
                {/* Phone screen bezel */}
                <div className="relative bg-foreground/5 rounded-[2.5rem] overflow-hidden">
                  {/* Dynamic Island / Notch */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-10" />
                  
                  {/* Screen content - 9:16 aspect ratio story */}
                  <div 
                    className="relative overflow-hidden aspect-[9/16] flex flex-col"
                    style={{
                      background: 'linear-gradient(180deg, hsl(280 30% 12%) 0%, hsl(260 25% 10%) 50%, hsl(240 28% 8%) 100%)'
                    }}
                  >
                    {/* Top - Logo/Branding */}
                    <div className="pt-8 pb-2 px-4 flex justify-center">
                      <img 
                        src={logo} 
                        alt="LoveCount" 
                        className="h-6 w-auto opacity-90"
                      />
                    </div>

                    {/* Couple Names */}
                    <div className="text-center px-4 pb-2">
                      <h3 className="text-lg font-serif font-bold text-white/90">
                        Sarah <span className="text-coral">❤️</span> James
                      </h3>
                    </div>

                    {/* Day Counter - Large coral text */}
                    <div className="text-center px-4 py-4">
                      <p className="text-3xl md:text-4xl font-bold text-coral counter-glow">
                        {days.toLocaleString()}
                      </p>
                      <p className="text-white/70 text-sm mt-1">days together</p>
                    </div>

                    {/* Photo Grid - 3x2 */}
                    <div className="flex-1 px-3 pb-3">
                      <div className="grid grid-cols-3 gap-[2px] h-full rounded-lg overflow-hidden border border-coral/30">
                        {photos.map((photo, index) => (
                          <div 
                            key={index} 
                            className="relative overflow-hidden"
                            style={{
                              borderRight: index % 3 !== 2 ? '1px solid rgba(232, 74, 95, 0.3)' : 'none',
                              borderBottom: index < 3 ? '1px solid rgba(232, 74, 95, 0.3)' : 'none',
                            }}
                          >
                            <img
                              src={photo}
                              alt={`Couple moment ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom - Username */}
                    <div className="pb-4 text-center">
                      <p className="text-white/50 text-xs">@lovecount.uk</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Text Content (40% width on desktop) */}
          <div className="w-full lg:w-2/5 text-center lg:text-left">
            <p className="text-xs font-semibold uppercase tracking-widest text-coral mb-3">
              Share Your Moments
            </p>
            <h2 
              id="share-story-heading" 
              className="text-3xl md:text-4xl font-bold text-navy mb-4"
            >
              Share Your Love Story
            </h2>
            <p className="text-navy/80 text-lg mb-4 leading-relaxed">
              Download your personalized story image anytime and share your journey on your socials
            </p>
            <p className="text-navy/60 text-sm">
              Always updated with current day count
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShareYourStorySection;
