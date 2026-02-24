import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PhotoCarouselProps {
  photos: string[];
}

export function PhotoCarousel({ photos }: PhotoCarouselProps) {
  const [current, setCurrent] = useState(0);
  const touchStart = useRef(0);
  const touchEnd = useRef(0);

  if (!photos.length) return null;

  const goTo = (i: number) => setCurrent(i);
  const prev = () => setCurrent((c) => (c - 1 + photos.length) % photos.length);
  const next = () => setCurrent((c) => (c + 1) % photos.length);

  const onTouchStart = (e: React.TouchEvent) => { touchStart.current = e.touches[0].clientX; };
  const onTouchMove = (e: React.TouchEvent) => { touchEnd.current = e.touches[0].clientX; };
  const onTouchEnd = () => {
    const diff = touchStart.current - touchEnd.current;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="glass-card p-3 sm:p-4">
        {/* Image area */}
        <div
          className="relative aspect-[4/5] overflow-hidden rounded-2xl"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {photos.map((photo, i) => (
            <img
              key={i}
              src={photo}
              alt={`Photo ${i + 1} of ${photos.length}`}
              draggable={false}
              className="absolute inset-0 w-full h-full object-cover rounded-2xl select-none"
              style={{
                opacity: i === current ? 1 : 0,
                transition: 'opacity 0.4s ease-in-out',
                zIndex: i === current ? 1 : 0,
              }}
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          ))}

          {/* Arrows */}
          {photos.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full flex items-center justify-center glass-card text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full flex items-center justify-center glass-card text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Next photo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>

        {/* Dots */}
        {photos.length > 1 && (
          <div className="flex justify-center gap-2 mt-4">
            {photos.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  width: i === current ? 24 : 8,
                  backgroundColor: i === current ? '#E84A5F' : 'rgba(255,255,255,0.3)',
                  boxShadow: i === current ? '0 0 10px rgba(232,74,95,0.5)' : 'none',
                }}
                aria-label={`Go to photo ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default PhotoCarousel;
