import { Button } from "@/components/ui/button";
import PhoneMockup from "./PhoneMockup";
import { Check, Truck, Smartphone, Clock } from "lucide-react";

const HeroSection = () => {
  const avatars = [
    { initials: "ET", bg: "bg-coral" },
    { initials: "JM", bg: "bg-navy" },
    { initials: "SL", bg: "bg-pink" },
    { initials: "MA", bg: "bg-coral/80" },
  ];

  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-pink/20 to-transparent rounded-full blur-3xl -z-10" />
      
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            {/* Social Proof */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <div className="flex -space-x-2">
                {avatars.map((avatar, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full ${avatar.bg} border-2 border-background flex items-center justify-center`}
                  >
                    <span className="text-xs font-medium text-background">
                      {avatar.initials}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1.5">
                <div className="flex text-coral">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  4.9 from 50+ couples
                </span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6 text-balance">
              Celebrate every day together
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Give them a gift that grows every day. An NFC keychain that opens
              your personal love page — counting every moment you've shared.
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <Button 
                variant="ctaLarge" 
                size="xl"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Create yours →
              </Button>
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-2xl font-bold text-navy">£34.99</span>
                <span className="text-sm text-muted-foreground">Free UK delivery</span>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-6">
              <div className="trust-badge">
                <Clock className="w-4 h-4 text-coral" />
                <span>1 year hosting included</span>
              </div>
              <div className="trust-badge">
                <Smartphone className="w-4 h-4 text-coral" />
                <span>No app needed</span>
              </div>
              <div className="trust-badge">
                <Truck className="w-4 h-4 text-coral" />
                <span>Ships in 2-3 days</span>
              </div>
            </div>
          </div>

          {/* Right Column - Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
