import { Button } from "@/components/ui/button";

const FinalCTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-background" aria-labelledby="final-cta-heading">
      <div className="container-narrow text-center">
        <h2 id="final-cta-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Start Counting Today
        </h2>
        <p className="text-pink text-lg mb-8 max-w-md mx-auto">
          Get your LoveCount and celebrate every moment together
        </p>
        <a
          href="https://buy.stripe.com/5kQbJ3fF1alfceU0WycbC02"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button 
            variant="cta" 
            size="xl"
            aria-label="Get your LoveCount keychain now"
          >
            Get yours
          </Button>
        </a>
      </div>
    </section>
  );
};

export default FinalCTASection;