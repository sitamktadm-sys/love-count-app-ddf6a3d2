import { Smartphone, Heart, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Smartphone className="w-6 h-6 text-coral" />,
      emoji: "📱",
      title: "Tap to relive memories",
      description:
        "Just tap the keychain on any phone. Your page opens instantly — no app, no QR codes, pure magic.",
    },
    {
      icon: <Heart className="w-6 h-6 text-coral" />,
      emoji: "💝",
      title: "Watch your love grow",
      description:
        "The counter updates every single day. 1,247 days... 1,248 days... Your love story keeps counting.",
    },
    {
      icon: <Camera className="w-6 h-6 text-coral" />,
      emoji: "📸",
      title: "Share your story",
      description:
        "Get a beautiful Instagram Story image ready to post on your anniversary or Valentine's Day.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-pink">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-coral mb-3">Why couples love it</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">A gift that means more every day</h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm card-hover"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-full bg-coral/20 flex items-center justify-center text-xl mx-auto mb-5">
                <span className="text-2xl">{benefit.emoji}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-navy mb-3">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-navy/70 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Demo Button */}
        <div className="text-center mt-12">
          <Button className="bg-navy hover:bg-navy/90 text-white px-8 py-3">
            Check a demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
