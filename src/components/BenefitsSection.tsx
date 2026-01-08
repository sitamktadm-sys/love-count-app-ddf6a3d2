import { Button } from "@/components/ui/button";

const BenefitsSection = () => {
  const benefits = [
    {
      emoji: "📱",
      title: "Tap to relive memories",
      description:
        "Just tap this unique relationship gift on any phone. Your page opens instantly — no app, no QR codes, pure magic.",
      ariaLabel: "Tap phone to relive memories icon",
    },
    {
      emoji: "💝",
      title: "Watch your love grow",
      description:
        "The counter updates every single day. 1,247 days... 1,248 days... The perfect anniversary present that keeps counting your love story.",
      ariaLabel: "Heart growing love counter icon",
    },
    {
      emoji: "📸",
      title: "Share your story",
      description:
        "Get a beautiful Instagram Story image ready to post on your anniversary or Valentine's Day.",
      ariaLabel: "Share story on Instagram icon",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-pink" aria-labelledby="benefits-heading">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-coral mb-3">Why couples love this unique relationship gift</p>
          <h2 id="benefits-heading" className="text-3xl md:text-4xl font-bold text-navy mb-6">A Gift That Means More Every Day</h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <article
              key={index}
              className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm card-hover"
            >
              {/* Icon */}
              <div 
                className="w-12 h-12 rounded-full bg-coral/20 flex items-center justify-center text-xl mx-auto mb-5"
                role="img"
                aria-label={benefit.ariaLabel}
              >
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
            </article>
          ))}
        </div>

        {/* Demo Button */}
        <div className="text-center mt-12">
          <Button 
            variant="ctaLarge" 
            size="xl" 
            className="bg-navy hover:bg-navy/90"
            aria-label="Check a demo of the LoveCount page"
          >
            Check A Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;