'use client';

import { useState, useEffect, useMemo } from 'react';
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
  Search,
} from 'lucide-react';
import { hospitalList, Hospital } from '@/lib/hospitalData';
import { useCaseModal } from '@/context/case-modal-context';
import CrossIcon from '@/components/CrossIcon';

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
      className="relative w-full h-56 sm:h-60 overflow-hidden bg-primary-950 group"
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
          {/* Subtle gradient vignette for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
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
      <div className="absolute top-3 right-3 z-20 px-2.5 py-0.5 rounded-full bg-black/55 backdrop-blur-md text-[11px] font-semibold text-white/90 border border-white/10 tracking-wide">
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
  const [searchQuery, setSearchQuery] = useState('');

  const filteredHospitals = useMemo(() => {
    return hospitalList.filter((hospital) => {
      // Specialty Filter
      let matchesFilter = true;
      if (activeFilter === 'Cardiac') {
        matchesFilter = hospital.tags.some((t) => /cardiac/i.test(t));
      } else if (activeFilter === 'Transplant') {
        matchesFilter = hospital.tags.some((t) => /transplant|bmt/i.test(t));
      } else if (activeFilter === 'Cancer') {
        matchesFilter = hospital.tags.some((t) => /cancer|oncology/i.test(t));
      } else if (activeFilter === 'Robotic Surgery') {
        matchesFilter = hospital.tags.some((t) => /robotic/i.test(t));
      } else if (activeFilter === 'Neurology') {
        matchesFilter = hospital.tags.some((t) => /neuro/i.test(t));
      } else if (activeFilter === 'Paediatrics / IVF') {
        matchesFilter = hospital.tags.some((t) => /paediatrics|ivf|fertility/i.test(t));
      }

      // Search Query Filter
      const q = searchQuery.trim().toLowerCase();
      let matchesSearch = true;
      if (q) {
        matchesSearch =
          hospital.name.toLowerCase().includes(q) ||
          hospital.city.toLowerCase().includes(q) ||
          hospital.location.toLowerCase().includes(q) ||
          hospital.tags.some((t) => t.toLowerCase().includes(q)) ||
          hospital.description.toLowerCase().includes(q) ||
          hospital.accreditations.some((a) => a.toLowerCase().includes(q));
      }

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  return (
    <div className="w-full">
      {/* =========================================================================
          FULL-WIDTH HERO SECTION (Matching Existing Brand Theme)
          ========================================================================= */}
      <section className="w-full bg-primary-500 text-white pt-12 pb-14 lg:pt-16 lg:pb-18 relative overflow-hidden">
        {/* Theme decorative ambient glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-5 text-xs sm:text-sm font-medium text-white/90">
            <CrossIcon size={16} />
            <span>Accredited Network • 10 Quaternary Center Partners</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold mt-2 mb-4 leading-tight tracking-tight text-white">
            Partner Hospitals in <span className="text-accent-400">India</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
            Medibeeglobal connects Cambodian patients directly with India&apos;s leading JCI &amp; NABH accredited multi-specialty hospitals. Explore specialized clinical centers, robotic surgical suites, and premier living-donor transplant programs.
          </p>

          {/* Full-Width Stats & Trust Bar */}
          <div className="w-full max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-card">
            <div className="p-3 text-center">
              <span className="block text-2xl sm:text-3xl font-black text-white">10</span>
              <span className="text-xs text-white/80 font-medium">Flagship Hubs</span>
            </div>
            <div className="p-3 text-center border-l border-white/20">
              <span className="block text-2xl sm:text-3xl font-black text-accent-400">100%</span>
              <span className="text-xs text-white/80 font-medium">JCI &amp; NABH Certified</span>
            </div>
            <div className="p-3 text-center border-l-0 md:border-l border-t md:border-t-0 border-white/20">
              <span className="block text-2xl sm:text-3xl font-black text-white">20,000+</span>
              <span className="text-xs text-white/80 font-medium">Surgeries Coordinated</span>
            </div>
            <div className="p-3 text-center border-l border-t md:border-t-0 border-white/20">
              <span className="block text-2xl sm:text-3xl font-black text-accent-400">24 Hours</span>
              <span className="text-xs text-white/80 font-medium">Doctor Case Review</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FULL-WIDTH CONTROLS BAR (Sticky Specialty Filters & Search)
          ========================================================================= */}
      <div className="w-full bg-white border-b border-gray-100 shadow-sm sticky top-16 lg:top-20 z-30 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col md:flex-row items-center justify-between gap-3.5">
          {/* Specialty Filter Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
            {filterCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  activeFilter === category
                    ? 'bg-primary-500 text-white shadow-sm'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72 flex-shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search hospital or specialty..."
              className="w-full pl-9 pr-4 py-2 rounded-full bg-gray-100 border border-transparent focus:border-primary-500 focus:bg-white text-xs sm:text-sm text-gray-900 placeholder:text-gray-400 outline-none transition-all"
            />
          </div>
        </div>
      </div>

      {/* =========================================================================
          HOSPITALS CARDS DIRECTORY
          ========================================================================= */}
      <section className="w-full py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Summary Counter */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-xs sm:text-sm font-semibold text-gray-500">
              Showing <span className="text-gray-900 font-bold">{filteredHospitals.length}</span> of {hospitalList.length} Partner Hospitals
            </p>
            {activeFilter !== 'All' && (
              <button
                type="button"
                onClick={() => setActiveFilter('All')}
                className="text-xs text-primary-600 hover:text-primary-700 font-semibold cursor-pointer underline"
              >
                Reset Filter
              </button>
            )}
          </div>

          {/* Hospitals Grid */}
          {filteredHospitals.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-gray-100 shadow-soft p-8 max-w-md mx-auto">
              <Building2 className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <h3 className="text-base font-bold text-gray-800 mb-1">No Hospitals Found</h3>
              <p className="text-xs text-gray-500 mb-4">
                No hospitals match your search term or selected specialty filter.
              </p>
              <button
                type="button"
                onClick={() => {
                  setActiveFilter('All');
                  setSearchQuery('');
                }}
                className="px-5 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-full text-xs font-semibold cursor-pointer transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredHospitals.map((hospital, idx) => {
                // Stagger carousel intervals slightly so adjacent cards do not flip simultaneously
                const autoPlayDelay = 3600 + (idx % 3) * 600;

                return (
                  <div
                    key={hospital.id}
                    className="group flex flex-col bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-soft hover:shadow-card hover:border-primary-200 transition-all duration-300 hover:-translate-y-1"
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
                          <div className="inline-flex items-center gap-1.5 text-gray-500 text-xs font-medium truncate">
                            <MapPin className="w-3.5 h-3.5 text-accent-500 flex-shrink-0" />
                            <span className="truncate">{hospital.location}</span>
                          </div>
                          {hospital.beds && (
                            <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-gray-600 bg-gray-100 px-2 py-0.5 rounded-md flex-shrink-0">
                              <Bed className="w-3 h-3 text-gray-400" />
                              <span>{hospital.beds}</span>
                            </div>
                          )}
                        </div>

                        {/* Hospital Name */}
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors mb-2 line-clamp-2">
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
                                className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-lg bg-primary-50 text-primary-700 border border-primary-100"
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
                              className="inline-flex items-center gap-1 text-[11px] font-semibold bg-accent-50 text-accent-700 px-2 py-0.5 rounded-full border border-accent-200"
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
                          className="w-full inline-flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-bold px-4 py-2.5 rounded-xl transition-all duration-200 group/btn shadow-sm hover:shadow-card text-xs sm:text-sm cursor-pointer"
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
          )}

          {/* =========================================================================
              GLOBAL ASSISTANCE BOTTOM STRIP
              ========================================================================= */}
          <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-primary-900 via-primary-800 to-primary-950 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-card border border-primary-700/40">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-400/20 text-accent-400 text-xs font-bold uppercase tracking-wider mb-2.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Full Cross-Border Coordination</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2">
                Need Help Choosing the Best Hospital for Your Condition?
              </h3>
              <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                Our medical coordination team provides free case assessments, compares doctor recommendations across our network, and arranges stamped medical visa letters directly from hospital directors.
              </p>
            </div>

            <div className="flex-shrink-0">
              <button
                type="button"
                onClick={() => openCaseModal()}
                className="inline-flex items-center gap-2 bg-accent-400 hover:bg-accent-500 text-primary-950 font-bold px-7 py-3.5 rounded-full transition-all duration-200 hover:scale-105 shadow-md text-sm cursor-pointer"
              >
                <span>Get Free Hospital Comparison</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
