import { Button } from "@/components/ui/button";

const FinalCTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container-narrow text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Start Counting Today
        </h2>
        <p className="text-pink text-lg mb-8 max-w-md mx-auto">
          Get your LoveCount and celebrate every moment together
        </p>
        <Button variant="cta" size="xl">
          Get yours
        </Button>
      </div>
    </section>
  );
};

export default FinalCTASection;
