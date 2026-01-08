import { Button } from "@/components/ui/button";
import { Check, Gift, Heart, Zap } from "lucide-react";

const PricingSection = () => {
  const features = [
    "Premium silicone NFC keychain",
    "Your personalised love page",
    "Real-time day counter",
    "Photo gallery (up to 15 photos)",
    "Instagram Story image",
    "Free UK delivery",
  ];

  const upsells = [
    { icon: <Gift className="w-4 h-4" aria-hidden="true" />, text: "Gift wrap", price: "+£3.99" },
    { icon: <Heart className="w-4 h-4" aria-hidden="true" />, text: "2nd keychain", price: "+£14.99" },
    { icon: <Zap className="w-4 h-4" aria-hidden="true" />, text: "Express", price: "+£3" },
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-pink scroll-mt-20" aria-labelledby="pricing-heading">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-coral mb-3">The perfect Valentine's gift for him or her</p>
          <h2 id="pricing-heading" className="text-3xl md:text-4xl font-bold text-navy mb-6">Everything Included</h2>
        </div>

        {/* Pricing Card */}
        <div className="max-w-md mx-auto">
          <article className="relative bg-white rounded-3xl shadow-card overflow-hidden">
            <div className="p-8">
              {/* Title */}
              <h3 className="text-2xl font-bold text-navy text-center mb-2">
                LoveCount Keychain
              </h3>
              <p className="text-navy/60 text-center mb-6">
                The complete love package
              </p>

              {/* Price */}
              <div className="text-center mb-2">
                <span className="text-5xl font-bold text-navy">£34.99</span>
              </div>
              <p className="text-sm text-navy/60 text-center mb-8">
                Then £9.99/year to keep your page active
              </p>

              {/* Features List */}
              <ul className="space-y-3 mb-8" aria-label="Included features">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-pink/50 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-coral" aria-hidden="true" />
                    </div>
                    <span className="text-navy">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button 
                variant="ctaLarge" 
                size="xl" 
                className="w-full"
                aria-label="Start your LoveCount and order now"
              >
                Start Your LoveCount
              </Button>
            </div>
          </article>

          {/* Upsells */}
          <div className="flex flex-wrap justify-center gap-4 mt-6" role="list" aria-label="Optional add-ons">
            {upsells.map((upsell, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-white/50 rounded-full text-sm"
                role="listitem"
              >
                <span className="text-coral">{upsell.icon}</span>
                <span className="text-navy">{upsell.text}</span>
                <span className="text-navy/60">{upsell.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;