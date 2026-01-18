import keychainLogo from "@/assets/keychain-logo.png";

const WhatYouGetSection = () => {
  return (
    <section className="py-16 md:py-24" aria-labelledby="what-you-get-heading">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-pink mb-3">
            Your Personalised Couple Gift
          </p>
          <h2 id="what-you-get-heading" className="text-3xl md:text-4xl font-bold text-white mb-6">
            Everything In The Box
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1: The Keychain */}
          <article className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center shadow-card flex flex-col">
            {/* Keychain Mockup */}
            <div className="h-36 flex items-center justify-center mb-6">
              <div className="w-24 h-24 rounded-2xl bg-navy border-2 border-pink/30 flex items-center justify-center transform rotate-12 shadow-lg relative overflow-hidden">
                <img 
                  src={keychainLogo} 
                  alt="NFC keychain personalised Valentine gift for boyfriend girlfriend UK" 
                  width={96} 
                  height={96} 
                  loading="lazy" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-coral border-2 border-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Premium NFC Keychain
            </h3>
            <p className="text-white/70 leading-relaxed">
              Soft silicone, waterproof, tap to open your page instantly
            </p>
          </article>

          {/* Card 2: Your Love Page */}
          <article className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center shadow-card flex flex-col">
            {/* Phone Mockup */}
            <div className="h-36 flex items-center justify-center mb-6" role="img" aria-label="Personalised couple page with day counter showing 1,247 days">
              <div className="w-20 h-36 bg-navy border-4 border-white/30 rounded-2xl flex flex-col items-center justify-center p-2 shadow-lg">
                <div className="w-full h-2 bg-white/20 rounded mb-2" />
                <span className="text-coral text-xl font-bold">1,247</span>
                <span className="text-white/60 text-[8px]">days</span>
                <div className="flex gap-1 mt-2">
                  <div className="w-3 h-3 rounded bg-pink/50" />
                  <div className="w-3 h-3 rounded bg-coral/50" />
                  <div className="w-3 h-3 rounded bg-pink/50" />
                </div>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Your Personal Page
            </h3>
            <p className="text-white/70 leading-relaxed">
              Real-time counter, photos, your message — always updating
            </p>
          </article>

          {/* Card 3: Story Image */}
          <article className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center shadow-card flex flex-col">
            {/* Instagram Story Mockup */}
            <div className="h-36 flex items-center justify-center mb-6" role="img" aria-label="Instagram Story image for couples showing Sarah & James with 1,247 days together">
              <div className="w-16 h-28 bg-gradient-to-b from-pink to-coral rounded-xl flex flex-col items-center justify-center p-2 shadow-lg border-2 border-white/20">
                <span className="text-white text-[8px] font-semibold mb-1">Sarah & James</span>
                <span className="text-white text-lg font-bold">1,247</span>
                <span className="text-white/80 text-[6px]">days together</span>
                <div className="mt-2 flex gap-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                </div>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Ready-to-Share Story
            </h3>
            <p className="text-white/70 leading-relaxed">
              Download anytime with updated numbers — perfect for anniversaries
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGetSection;