import { ArrowRight } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    { number: 1, title: "Order", description: "Get yours today" },
    { number: 2, title: "Personalise", description: "Add your photos & date" },
    { number: 3, title: "Receive", description: "Arrives in 3-5 days" },
    { number: 4, title: "Gift", description: "Watch them smile" },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 scroll-mt-20" aria-labelledby="how-it-works-heading">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-pink mb-3">
            How it works
          </p>
          <h2 id="how-it-works-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready In Minutes, Lasts Forever
          </h2>
        </div>

        {/* Steps */}
        <ol className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4" aria-label="Steps to get your LoveCount">
          {steps.map((step, index) => (
            <li key={index} className="flex items-center gap-4 md:gap-2">
              {/* Step Content */}
              <div className="flex flex-col items-center text-center min-w-[120px]">
                <div className="step-number mb-3" aria-hidden="true">{step.number}</div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-foreground/70">{step.description}</p>
              </div>

              {/* Arrow (not after last item) */}
              {index < steps.length - 1 && (
                <ArrowRight className="hidden md:block w-6 h-6 text-pink mx-2 flex-shrink-0" aria-hidden="true" />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default HowItWorksSection;