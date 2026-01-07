import { Button } from "@/components/ui/button";

const FinalCTASection = () => {
  return (
    <section className="py-16 md:py-24 gradient-navy">
      <div className="container-narrow text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-background mb-4">
          Start counting today
        </h2>
        <p className="text-pink text-lg mb-8 max-w-md mx-auto">
          Create your LoveCount and celebrate every moment together
        </p>
        <Button variant="ctaWhite" size="xl">
          Create yours — £34.99
        </Button>
      </div>
    </section>
  );
};

export default FinalCTASection;
