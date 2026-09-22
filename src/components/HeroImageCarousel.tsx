'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface CarouselSlide {
  url: string;
  alt: string;
}

const MEDICAL_SLIDES: CarouselSlide[] = [
  {
    url: '/Asset/gleneagles-3.jpg',
    alt: 'Modern high-tech hospital operating theatre and surgical suite',
  },
  {
    url: '/Asset/artemis-3.jpg',
    alt: 'Modern private hospital inpatient recovery room with care bed',
  },
  {
    url: '/Asset/fortis-3.jpg',
    alt: 'Clean and bright hospital inpatient recovery ward',
  },
  {
    url: '/Asset/apollo-3.jpg',
    alt: 'Advanced medical examination and procedural clinic suite',
  },
  {
    url: '/Asset/gleneagles-2.jpg',
    alt: 'Specialized hospital surgical theatre with modern medical equipment',
  },
];

interface HeroImageCarouselProps {
  autoPlayInterval?: number;
}

export default function HeroImageCarousel({ autoPlayInterval = 4500 }: HeroImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % MEDICAL_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + MEDICAL_SLIDES.length) % MEDICAL_SLIDES.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play timer
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, autoPlayInterval, nextSlide]);

  return (
    <div
      className="relative w-full group select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-roledescription="carousel"
      aria-label="Medical Facilities and Care Carousel"
    >
      {/* Outer Card Container with Glow & Gradient Border */}
      <div className="relative rounded-2xl sm:rounded-3xl p-1.5 sm:p-2 bg-gradient-to-tr from-white/25 via-white/15 to-accent-400/25 shadow-2xl backdrop-blur-md border border-white/20">
        <div className="relative rounded-xl sm:rounded-[22px] overflow-hidden h-[300px] sm:h-[400px] md:h-[460px] lg:h-[500px] xl:h-[540px] bg-primary-950">
          {/* Slides */}
          {MEDICAL_SLIDES.map((slide, index) => {
            const isActive = index === currentIndex;
            return (
              <div
                key={slide.url}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  isActive
                    ? 'opacity-100 z-10'
                    : 'opacity-0 pointer-events-none z-0'
                }`}
                aria-hidden={!isActive}
              >
                {/* Image - completely clear and unobstructed */}
                <img
                  src={slide.url}
                  alt={slide.alt}
                  className="w-full h-full object-cover object-center"
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              </div>
            );
          })}

          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md border border-white/25 flex items-center justify-center transition-all opacity-80 sm:opacity-0 sm:group-hover:opacity-100 hover:scale-110 cursor-pointer shadow-lg"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next Slide"
            className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md border border-white/25 flex items-center justify-center transition-all opacity-80 sm:opacity-0 sm:group-hover:opacity-100 hover:scale-110 cursor-pointer shadow-lg"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Minimal Bottom Indicator Dots */}
          <div className="absolute bottom-4 inset-x-0 z-20 flex items-center justify-center">
            <div className="inline-flex items-center gap-2 bg-black/35 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 shadow-md">
              {MEDICAL_SLIDES.map((_, dotIndex) => (
                <button
                  key={dotIndex}
                  type="button"
                  onClick={() => goToSlide(dotIndex)}
                  aria-label={`Go to slide ${dotIndex + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    dotIndex === currentIndex
                      ? 'w-7 bg-accent-400'
                      : 'w-2 bg-white/50 hover:bg-white/90'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
