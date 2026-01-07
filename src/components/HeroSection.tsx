import { Button } from "@/components/ui/button";
import PhoneMockup from "./PhoneMockup";
import { Clock, Truck, Smartphone } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-pink/10 to-transparent rounded-full blur-3xl -z-10" />
      
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            {/* Tag */}
            <p className="text-sm text-coral font-medium mb-4">
              🎁 The perfect gift to your other half
            </p>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Celebrate Every Day Together
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-xl mx-auto lg:mx-0">
              Give them a gift that grows every day. One tap opens your personal love page — counting every second you've shared.
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <Button 
                variant="ctaLarge" 
                size="xl"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get yours →
              </Button>
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-2xl font-bold text-foreground">£34.99</span>
                <span className="text-sm text-foreground/60">Free UK delivery</span>
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
