'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  MapPin,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Sparkles,
  Building2,
  Bed,
  CheckCircle2,
} from 'lucide-react';
import { hospitalList, Hospital } from '@/lib/hospitalData';
import { useCaseModal } from '@/context/case-modal-context';

function HospitalCardImageCarousel({
  images,
  hospitalName,
  autoPlayDelay = 4000,
}: {
  images: string[];
  hospitalName: string;
  autoPlayDelay?: number;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoPlayDelay);

    return () => clearInterval(interval);
  }, [isPaused, images.length, autoPlayDelay]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div
      className="relative w-full h-56 sm:h-60 overflow-hidden bg-slate-900 group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Images */}
      {images.map((imgSrc, idx) => (
        <div
          key={imgSrc}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            idx === currentIndex ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'
          }`}
        >
          <Image
            src={imgSrc}
            alt={`${hospitalName} - Photo ${idx + 1}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            priority={idx === 0}
          />
          {/* Subtle gradient vignette for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        </div>
      ))}

      {/* Navigation Arrows (visible on hover) */}
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous image"
            className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next image"
            className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110 cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </>
      )}

      {/* Carousel Dots Indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-0 right-0 z-20 flex justify-center items-center gap-1.5 px-3">
          {images.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(idx);
              }}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentIndex
                  ? 'w-6 bg-accent-400 shadow-sm'
                  : 'w-1.5 bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      )}

      {/* Photo count indicator */}
      <div className="absolute top-3 right-3 z-20 px-2 py-0.5 rounded-full bg-black/50 backdrop-blur-md text-[11px] font-medium text-white/90 border border-white/10">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}

const filterCategories = [
  'All',
  'Cardiac',
  'Transplant',
  'Cancer',
  'Robotic Surgery',
  'Neurology',
  'Paediatrics / IVF',
];

export default function PartnerHospitals() {
  const { openCaseModal } = useCaseModal();
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredHospitals = hospitalList.filter((hospital) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Cardiac') {
      return hospital.tags.some((t) => /cardiac/i.test(t));
    }
    if (activeFilter === 'Transplant') {
      return hospital.tags.some((t) => /transplant|bmt/i.test(t));
    }
    if (activeFilter === 'Cancer') {
      return hospital.tags.some((t) => /cancer|oncology/i.test(t));
    }
    if (activeFilter === 'Robotic Surgery') {
      return hospital.tags.some((t) => /robotic/i.test(t));
    }
    if (activeFilter === 'Neurology') {
      return hospital.tags.some((t) => /neuro/i.test(t));
    }
    if (activeFilter === 'Paediatrics / IVF') {
      return hospital.tags.some((t) => /paediatrics|ivf|fertility/i.test(t));
    }
    return true;
  });

  return (
    <section id="hospitals" className="pt-6 pb-20 lg:pt-8 lg:pb-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-xs font-semibold mb-4">
            <ShieldCheck className="w-4 h-4 text-accent-500" />
            <span>JCI & NABH Accredited Quaternary Hospitals</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Partner Hospitals in India
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Medibeeglobal connects Cambodian patients directly with India&apos;s leading accredited multi-specialty hospitals. Browse our trusted hospital network, review specialized clinical programs, and submit your case for a free doctor opinion.
          </p>

          {/* Quick Statistics Banner */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-8 max-w-2xl mx-auto p-4 rounded-2xl bg-white border border-gray-200/80 shadow-soft">
            <div className="text-center">
              <span className="block text-2xl sm:text-3xl font-black text-primary-700">10</span>
              <span className="text-xs text-gray-500 font-medium">Premier Network Hubs</span>
            </div>
            <div className="text-center border-x border-gray-100 px-2">
              <span className="block text-2xl sm:text-3xl font-black text-accent-500">100%</span>
              <span className="text-xs text-gray-500 font-medium">JCI & NABH Certified</span>
            </div>
            <div className="text-center">
              <span className="block text-2xl sm:text-3xl font-black text-primary-700">24h</span>
              <span className="text-xs text-gray-500 font-medium">Estimate & Review</span>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filterCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeFilter === category
                  ? 'bg-primary-900 text-white shadow-md scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200/80'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Hospitals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredHospitals.map((hospital, idx) => {
            // Stagger carousel intervals slightly so adjacent cards do not flip simultaneously
            const autoPlayDelay = 3600 + (idx % 3) * 600;

            return (
              <div
                key={hospital.id}
                className="group flex flex-col bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-soft hover:shadow-xl hover:border-primary-300 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Slideshow Image Carousel */}
                <HospitalCardImageCarousel
                  images={hospital.images}
                  hospitalName={hospital.name}
                  autoPlayDelay={autoPlayDelay}
                />

                {/* Card Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Location & Bed count badges */}
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <div className="inline-flex items-center gap-1.5 text-gray-500 text-xs font-medium">
                        <MapPin className="w-3.5 h-3.5 text-accent-500 flex-shrink-0" />
                        <span>{hospital.location}</span>
                      </div>
                      {hospital.beds && (
                        <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-md">
                          <Bed className="w-3 h-3 text-gray-400" />
                          <span>{hospital.beds}</span>
                        </div>
                      )}
                    </div>

                    {/* Hospital Name */}
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-primary-700 transition-colors mb-2 line-clamp-2">
                      {hospital.name}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3 mb-4">
                      {hospital.description}
                    </p>

                    {/* Tags / Key Specialties */}
                    <div className="mb-4">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                        Key Specialties
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {hospital.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-lg bg-primary-50 text-primary-700 border border-primary-100/60"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Clinical Highlights */}
                    {hospital.highlights && hospital.highlights.length > 0 && (
                      <div className="space-y-1 mb-4 pt-2 border-t border-gray-100">
                        {hospital.highlights.slice(0, 2).map((h, hIdx) => (
                          <div key={hIdx} className="flex items-center gap-1.5 text-xs text-gray-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                            <span className="line-clamp-1">{h}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Card Footer: Accreditations & Consultation Action */}
                  <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
                    {/* Accreditation Badges */}
                    <div className="flex flex-wrap items-center gap-1.5">
                      {hospital.accreditations.map((acc) => (
                        <span
                          key={acc}
                          className="inline-flex items-center gap-1 text-[11px] font-semibold bg-accent-50 text-accent-700 px-2 py-0.5 rounded-full border border-accent-200/60"
                        >
                          <ShieldCheck className="w-3 h-3 text-accent-500" />
                          <span>{acc}</span>
                        </span>
                      ))}
                    </div>

                    {/* Submit Case CTA Button */}
                    <button
                      type="button"
                      onClick={() => openCaseModal()}
                      className="w-full inline-flex items-center justify-center gap-2 bg-primary-900 hover:bg-primary-800 text-white font-bold px-4 py-2.5 rounded-xl transition-all duration-200 group/btn shadow-sm hover:shadow-md text-xs sm:text-sm cursor-pointer"
                    >
                      <span>Submit Case for this Hospital</span>
                      <ArrowRight className="w-4 h-4 text-accent-400 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Assistance Bottom Strip */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-primary-950 via-[#071426] to-primary-900 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-white/10">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-400/20 text-accent-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full Cross-Border Coordination</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">
              Need Help Choosing the Best Hospital for Your Condition?
            </h3>
            <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
              Our medical coordination team provides free case assessments, compares doctor recommendations, and arranges medical visa letters directly from accredited hospital directors.
            </p>
          </div>

          <div className="flex-shrink-0">
            <button
              type="button"
              onClick={() => openCaseModal()}
              className="inline-flex items-center gap-2 bg-accent-400 hover:bg-accent-300 text-primary-950 font-bold px-6 py-3.5 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg shadow-accent-400/20 text-sm cursor-pointer"
            >
              <span>Get Free Hospital Comparison</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
