const SocialProofBanner = () => {
  return (
    <section className="py-10 md:py-14 bg-pink">
      <div className="container-narrow">
        <div className="text-center max-w-2xl mx-auto">
          {/* Stars */}
          <div className="flex justify-center gap-1 text-coral text-xl mb-4">
            {[...Array(5)].map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>
          
          {/* Quote */}
          <blockquote className="text-lg md:text-xl text-navy font-medium mb-4 italic">
            "She cried when she tapped it and saw our page. Best anniversary gift
            I've ever given."
          </blockquote>
          
          {/* Author */}
          <p className="text-navy/70">
            — Rob T., London
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialProofBanner;
