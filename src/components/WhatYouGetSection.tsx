import { Smartphone } from "lucide-react";

const WhatYouGetSection = () => {
  return (
    <section className="py-16 md:py-24 bg-navy">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-pink mb-3">
            What You Get
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Everything In The Box
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1: The Keychain */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center shadow-card">
            {/* Keychain Mockup */}
            <div className="mb-6 flex justify-center">
              <div className="w-24 h-24 rounded-2xl bg-pink flex items-center justify-center transform rotate-12 shadow-lg">
                <span className="text-4xl">💝</span>
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-coral border-2 border-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Premium NFC Keychain
            </h3>
            <p className="text-white/70 leading-relaxed">
              Soft silicone, waterproof, tap to open your page instantly
            </p>
          </div>

          {/* Card 2: Your Love Page */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center shadow-card">
            {/* Phone Mockup */}
            <div className="mb-6 flex justify-center">
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
          </div>

          {/* Card 3: Story Image */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center shadow-card">
            {/* Instagram Story Mockup */}
            <div className="mb-6 flex justify-center">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGetSection;
