'use client';

import Link from 'next/link';
import { 
  Plane, 
  Hotel, 
  Car, 
  Wifi, 
  Utensils, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  PhoneCall, 
  ArrowRight, 
  Sparkles,
  HeartHandshake
} from 'lucide-react';
import { stayTiers, travelServicesList } from '@/lib/data';
import { useCaseModal } from '@/context/case-modal-context';
import CrossIcon from '@/components/CrossIcon';

export default function TravelAssistancePage() {
  const { openCaseModal } = useCaseModal();

  return (
    <div className="pt-20 lg:pt-24 min-h-screen bg-gray-50/50">
      {/* Hero Header */}
      <section className="bg-primary-500 text-white pt-12 pb-14 lg:pt-16 lg:pb-18 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-400/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-5">
            <CrossIcon size={16} />
            <span className="text-white/90 text-sm font-medium">Complete Travel &amp; Accommodation Coordination</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold mt-2 mb-4 leading-tight tracking-tight">
            Hotel &amp; Travel{' '}
            <span className="text-accent-400">Assistance</span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
            From the moment you land at the airport to your comfortable recovery stay near the hospital, we handle all ground transit, family lodging, and daily logistics.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto pt-4 border-t border-white/15 text-center">
            <div className="p-2">
              <p className="text-2xl sm:text-3xl font-extrabold text-accent-400">5–10 min</p>
              <p className="text-xs text-white/70">From Partner Hospitals</p>
            </div>
            <div className="p-2">
              <p className="text-2xl sm:text-3xl font-extrabold text-accent-400">24/7</p>
              <p className="text-xs text-white/70">Airport Meet &amp; Greet</p>
            </div>
            <div className="p-2">
              <p className="text-2xl sm:text-3xl font-extrabold text-accent-400">Khmer</p>
              <p className="text-xs text-white/70">On-Ground Coordinator</p>
            </div>
            <div className="p-2">
              <p className="text-2xl sm:text-3xl font-extrabold text-accent-400">30–50%</p>
              <p className="text-xs text-white/70">Corporate Hotel Discounts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent-500 font-bold text-xs sm:text-sm uppercase tracking-wider">
              Comprehensive Ground Care
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 mt-2 mb-3">
              Everything Arranged Before You Land
            </h2>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              Arrive with complete peace of mind. We remove every friction point from medical travel.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {travelServicesList.map((srv, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-gray-100 p-8 shadow-soft hover:shadow-card hover:border-primary-200 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center mb-6">
                    {idx === 0 && <Plane className="w-6 h-6" />}
                    {idx === 1 && <Car className="w-6 h-6" />}
                    {idx === 2 && <Wifi className="w-6 h-6" />}
                    {idx === 3 && <HeartHandshake className="w-6 h-6" />}
                    {idx === 4 && <PhoneCall className="w-6 h-6" />}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{srv.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{srv.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-50 flex items-center gap-1 text-xs font-semibold text-accent-600">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Verified Service Protocol</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodation Tiers */}
      <section className="py-14 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent-500 font-bold text-xs sm:text-sm uppercase tracking-wider">
              Curated Stays
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 mt-2 mb-3">
              Accommodation Options Tailored for Patients
            </h2>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              Every accommodation is sanitized, wheelchair-accessible, and located within 3 to 15 minutes of your hospital.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {stayTiers.map((tier, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-3xl border border-gray-100 p-8 shadow-soft hover:shadow-card hover:bg-white transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider bg-white text-primary-700 px-3 py-1 rounded-full border border-gray-200">
                      Tier 0{idx + 1}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center gap-1 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-accent-500" />
                      {tier.distance}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-gray-900 mb-1">{tier.type}</h3>
                  <p className="text-2xl font-extrabold text-primary-600 mb-4">{tier.priceRange}</p>

                  <div className="bg-white/80 p-3 rounded-xl border border-gray-200/50 mb-6 text-xs text-gray-700">
                    <strong className="text-gray-900">Best for:</strong> {tier.bestFor}
                  </div>

                  <ul className="space-y-2.5 text-xs text-gray-600">
                    {tier.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent-500 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-200/60">
                  <button
                    onClick={openCaseModal}
                    className="w-full bg-primary-500 hover:bg-primary-600 text-white text-xs sm:text-sm font-bold py-3 rounded-full transition-all shadow-soft cursor-pointer text-center"
                  >
                    Check Availability
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Khmer Cooking & Dietary Support */}
      <section className="py-14 lg:py-18 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary-950 to-primary-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-card">
            <div className="relative z-10 max-w-3xl">
              <span className="text-accent-400 font-bold text-xs uppercase tracking-wider">
                Home Comfort in India
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold mt-2 mb-4">
                Khmer Home Cooking &amp; Asian Dietary Assistance
              </h3>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6">
                We understand that recovering from surgery requires familiar nutrition. That&apos;s why our accommodations feature equipped kitchens, rice cookers upon request, and guidance to Asian produce markets where you can find jasmine rice, fresh fish, and familiar vegetables.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 text-xs">
                <div className="bg-white/10 rounded-2xl p-4 border border-white/10 backdrop-blur-sm">
                  <Utensils className="w-5 h-5 text-accent-400 mb-2" />
                  <p className="font-bold">Private Kitchens</p>
                  <p className="text-white/70 mt-1">Cook customized Khmer broth &amp; soft meals for patient recovery.</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-4 border border-white/10 backdrop-blur-sm">
                  <Car className="w-5 h-5 text-accent-400 mb-2" />
                  <p className="font-bold">Local Market Runs</p>
                  <p className="text-white/70 mt-1">Our coordinator assists with supermarket &amp; produce shopping.</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-4 border border-white/10 backdrop-blur-sm">
                  <ShieldCheck className="w-5 h-5 text-accent-400 mb-2" />
                  <p className="font-bold">Hygienic Standards</p>
                  <p className="text-white/70 mt-1">Filtered RO drinking water &amp; daily sanitization guaranteed.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-primary-950 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Want Us to Reserve Your Lodging &amp; Airport Pickup?
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8 text-sm sm:text-base leading-relaxed">
            Let our concierge team know your travel dates and hospital choice. We coordinate verified accommodations and seamless private transit.
          </p>
          <button
            onClick={openCaseModal}
            className="bg-accent-400 hover:bg-accent-500 text-primary-950 font-bold px-8 py-3.5 rounded-full transition-all hover:scale-105 shadow-soft cursor-pointer text-sm sm:text-base inline-flex items-center gap-2"
          >
            Request Travel Assistance
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
