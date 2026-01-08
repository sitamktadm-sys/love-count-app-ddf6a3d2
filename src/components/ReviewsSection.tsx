import { useState } from "react";

const ReviewsSection = () => {
  const reviews = [
    {
      stars: 5,
      text: "This is such a special gift. My wife loved it.",
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
    {
      stars: 5,
      text: "I'm not great with romantic gestures. This did the work for me — she loved it and I didn't have to write a poem.",
      author: "Tom H.",
      meta: "1st Anniversary",
    },
    {
      stars: 5,
      text: "We've got 847 days and counting. It's weirdly satisfying to watch the number go up together.",
      author: "Rachel & Dan",
      meta: "Dating Anniversary",
    },
    {
      stars: 5,
      text: "Got one for my parents' 30th. My mum keeps showing it to everyone who visits. Dad pretends to be embarrassed but he loves it.",
      author: "Priya K.",
      meta: "Parents' Anniversary",
    },
  ];

  const [isPaused, setIsPaused] = useState(false);

  // Duplicate reviews for seamless loop
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section className="py-16 md:py-24 bg-background overflow-hidden" aria-labelledby="reviews-heading">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="section-label">Customer love</p>
          <h2 id="reviews-heading" className="section-title">What Couples Are Saying</h2>
        </div>
      </div>

      {/* Reviews Carousel - CSS animation instead of JS for better performance */}
      <div
        className="flex gap-6 overflow-x-hidden px-6"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        role="region"
        aria-label="Customer reviews carousel"
      >
        <div 
          className={`flex gap-6 animate-carousel-slide ${isPaused ? '[animation-play-state:paused]' : ''}`}
          style={{ width: 'max-content' }}
        >
          {duplicatedReviews.map((review, index) => (
          <article
            key={index}
            className="bg-card rounded-2xl p-6 shadow-subtle border border-foreground/10 flex flex-col flex-shrink-0 w-[320px] md:w-[360px]"
          >
            {/* Stars */}
            <div className="flex gap-0.5 text-coral mb-4" aria-label={`${review.stars} out of 5 stars`}>
              {[...Array(review.stars)].map((_, i) => (
                <span key={i} aria-hidden="true">★</span>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-foreground leading-relaxed flex-1">"{review.text}"</blockquote>

            {/* Author */}
            <footer className="border-t border-foreground/10 pt-4 mt-6">
              <p className="font-semibold text-foreground">{review.author}</p>
              <p className="text-sm text-foreground/60">{review.meta}</p>
            </footer>
          </article>
        ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;