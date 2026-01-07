const ReviewsSection = () => {
  const reviews = [
    {
      stars: 5,
      text: "She taps it every morning to see our counter go up. It's become a little ritual. So sweet.",
      author: "James M.",
      meta: "Bought for 2nd anniversary",
    },
    {
      stars: 5,
      text: "Way better than flowers. This actually means something. The look on his face was priceless.",
      author: "Sophie L.",
      meta: "Valentine's Day gift",
    },
    {
      stars: 5,
      text: "The page looks beautiful. Our photos, our message, our days together. Worth every penny.",
      author: "Mark & Anna",
      meta: "5 year anniversary",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="section-label">Customer love</p>
          <h2 className="section-title">What couples are saying</h2>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-subtle card-hover border border-foreground/10"
            >
              {/* Stars */}
              <div className="flex gap-0.5 text-coral mb-4">
                {[...Array(review.stars)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground mb-6 leading-relaxed">"{review.text}"</p>

              {/* Author */}
              <div className="border-t border-foreground/10 pt-4">
                <p className="font-semibold text-foreground">{review.author}</p>
                <p className="text-sm text-foreground/60">{review.meta}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
