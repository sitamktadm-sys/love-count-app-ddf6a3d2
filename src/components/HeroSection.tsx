import { Button } from "@/components/ui/button";
import PhoneMockup from "./PhoneMockup";
import { Clock, Truck, Smartphone, Heart, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

// Trust badge configuration
const trustBadges: { icon: LucideIcon; text: string }[] = [
  { icon: Clock, text: "1 year hosting included" },
  { icon: Smartphone, text: "No app needed" },
  { icon: Truck, text: "Ships in 2-3 days" },
];

const HeroSection = () => {
  // Floating hearts configuration
  const floatingHearts = [
    { size: 16, top: "15%", left: "8%", delay: 0, duration: 4, opacity: 0.15 },
    { size: 12, top: "25%", right: "12%", delay: 1, duration: 5, opacity: 0.1 },
    { size: 20, top: "60%", left: "5%", delay: 2, duration: 4.5, opacity: 0.12 },
    { size: 14, top: "45%", right: "8%", delay: 0.5, duration: 5.5, opacity: 0.08 },
    { size: 10, top: "75%", left: "15%", delay: 1.5, duration: 4, opacity: 0.1 },
    { size: 18, top: "35%", left: "3%", delay: 2.5, duration: 5, opacity: 0.15 },
  ];

  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden" aria-labelledby="hero-heading">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-pink/10 to-transparent rounded-full blur-3xl -z-10" aria-hidden="true" />
      
      {/* Floating Hearts Background */}
      {floatingHearts.map((heart, index) => (
        <motion.div
          key={index}
          className="absolute -z-10 text-coral pointer-events-none"
          style={{
            top: heart.top,
            left: heart.left,
            right: heart.right,
            opacity: heart.opacity,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          aria-hidden="true"
        >
          <Heart size={heart.size} fill="currentColor" />
        </motion.div>
      ))}
      
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            {/* Tag with glowing effect */}
            <motion.p 
              className="inline-block text-sm text-coral font-medium mb-4 px-4 py-1.5 rounded-full bg-coral/10 shadow-[0_0_20px_rgba(232,74,95,0.3)]"
              animate={{
                boxShadow: [
                  "0 0 15px rgba(232,74,95,0.2)",
                  "0 0 25px rgba(232,74,95,0.4)",
                  "0 0 15px rgba(232,74,95,0.2)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              🎁 The ultimate Valentine's gift
            </motion.p>

            {/* Headline */}
            <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              The Perfect Anniversary Gift That Counts Every Day Together
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-xl mx-auto lg:mx-0">
              Looking for a unique anniversary or Valentine's gift? Your personalised love page — counting every day you've been together.
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <a
                href="https://buy.stripe.com/5kQbJ3fF1alfceU0WycbC02"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.02, 1],
                    boxShadow: [
                      "0 4px 20px rgba(232,74,95,0.4)",
                      "0 6px 30px rgba(232,74,95,0.6)",
                      "0 4px 20px rgba(232,74,95,0.4)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="rounded-xl"
                >
                  <Button 
                    variant="ctaLarge" 
                    size="xl"
                    aria-label="Get your LoveCount keychain for £39.99"
                  >
                    Get yours →
                  </Button>
                </motion.div>
              </a>
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-2xl font-bold text-foreground">£34.99</span>
                <span className="text-sm text-foreground/60">Free UK delivery</span>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 md:gap-4">
              {trustBadges.map((badge, index) => {
                const IconComponent = badge.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-coral/10 border border-coral/20 text-sm text-foreground/80 cursor-default transition-all duration-300 hover:scale-105 hover:bg-coral/15 hover:border-coral/30"
                    whileHover={{ y: -2 }}
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 3, -3, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.3,
                      }}
                    >
                      <IconComponent className="w-4 h-4 text-coral" aria-hidden="true" />
                    </motion.div>
                    <span>{badge.text}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Phone Mockup with floating animation */}
          <div className="relative flex justify-center lg:justify-end">
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <PhoneMockup />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
