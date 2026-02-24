import logo from "@/assets/logo.png";

const ShareYourStorySection = () => {
  return (
    <section className="py-16 md:py-24 bg-pink" aria-labelledby="share-story-heading">
      <div className="container-narrow">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Side - Phone Mockup with Story */}
          <div className="w-full lg:w-3/5 flex justify-center">
            <div className="relative w-[260px] md:w-[300px]">
              <div className="relative bg-foreground/10 rounded-[3rem] p-3 shadow-hover border border-foreground/20">
                <div className="relative bg-foreground/5 rounded-[2.5rem] overflow-hidden">
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-10" />
                  
                  {/* Screen content - realistic story image */}
                  <div 
                    className="relative overflow-hidden aspect-[9/16] flex flex-col items-center"
                    style={{
                      background: 'radial-gradient(ellipse at center, #2d1b26 0%, #12090e 100%)'
                    }}
                  >
                    {/* Bokeh spots */}
                    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                      <div className="absolute w-32 h-32 rounded-full top-[8%] left-[-10%] opacity-[0.18]" style={{ background: 'radial-gradient(circle, #e84a5f 0%, transparent 70%)', filter: 'blur(30px)' }} />
                      <div className="absolute w-24 h-24 rounded-full top-[55%] right-[-8%] opacity-[0.14]" style={{ background: 'radial-gradient(circle, #c2185b 0%, transparent 70%)', filter: 'blur(28px)' }} />
                      <div className="absolute w-20 h-20 rounded-full bottom-[15%] left-[5%] opacity-[0.16]" style={{ background: 'radial-gradient(circle, #e84a5f 0%, transparent 70%)', filter: 'blur(25px)' }} />
                      <div className="absolute w-16 h-16 rounded-full top-[30%] right-[10%] opacity-[0.12]" style={{ background: 'radial-gradient(circle, #d4456a 0%, transparent 70%)', filter: 'blur(22px)' }} />
                      <div className="absolute w-28 h-28 rounded-full bottom-[40%] left-[50%] -translate-x-1/2 opacity-[0.1]" style={{ background: 'radial-gradient(circle, #e84a5f 0%, transparent 70%)', filter: 'blur(35px)' }} />
                    </div>

                    {/* Top - Logo & Brand */}
                    <div className="pt-10 pb-1 flex flex-col items-center z-10">
                      <img src={logo} alt="LoveCount" className="h-5 w-auto opacity-90 mb-1.5" />
                      <p className="text-[10px] tracking-[0.25em] uppercase" style={{ fontFamily: "'Playfair Display', serif", color: '#d4a0a0' }}>
                        LoveCount
                      </p>
                      <div className="w-16 h-[1px] mt-2" style={{ background: 'linear-gradient(90deg, transparent, #e84a5f, transparent)' }} />
                    </div>

                    {/* Names */}
                    <div className="text-center px-4 pt-5 pb-1 z-10">
                      <h3 className="text-[22px] font-bold" style={{ fontFamily: "'Playfair Display', serif", background: 'linear-gradient(135deg, #d4a0a0, #e84a5f)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                        Sarah
                      </h3>
                      <span className="text-coral text-lg leading-none block my-0.5">♥</span>
                      <h3 className="text-[22px] font-bold" style={{ fontFamily: "'Playfair Display', serif", background: 'linear-gradient(135deg, #d4a0a0, #e84a5f)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                        James
                      </h3>
                    </div>

                    {/* Day Counter Card */}
                    <div className="mx-4 mt-4 px-4 py-3 rounded-xl z-10" style={{ background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.08)' }}>
                      <div className="flex items-baseline justify-center gap-1.5 text-center">
                        <div className="flex flex-col items-center">
                          <span className="text-coral text-base font-bold">3</span>
                          <span className="text-white/50 text-[7px] uppercase tracking-wider">years</span>
                        </div>
                        <span className="text-white/30 text-xs">,</span>
                        <div className="flex flex-col items-center">
                          <span className="text-coral text-base font-bold">8</span>
                          <span className="text-white/50 text-[7px] uppercase tracking-wider">months</span>
                        </div>
                        <span className="text-white/30 text-xs">,</span>
                        <div className="flex flex-col items-center">
                          <span className="text-coral text-base font-bold">24</span>
                          <span className="text-white/50 text-[7px] uppercase tracking-wider">days</span>
                        </div>
                      </div>
                      <p className="text-white/40 text-[6px] tracking-[0.2em] uppercase text-center mt-2">
                        1,344 Days Together
                      </p>
                    </div>

                    {/* Quote Card */}
                    <div className="mx-4 mt-3 px-4 py-3 rounded-xl z-10" style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.06)' }}>
                      <p className="text-white/75 text-[9px] text-center italic leading-relaxed" style={{ fontFamily: "'Playfair Display', serif" }}>
                        "Every day with you is my favourite day"
                      </p>
                    </div>

                    {/* Bottom - Since date */}
                    <div className="mt-auto pb-6 z-10">
                      <p className="text-white/35 text-[7px] tracking-[0.2em] uppercase text-center">
                        Since 14th March, 2020
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Text Content */}
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
