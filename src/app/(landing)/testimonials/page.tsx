'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Star, 
  Quote, 
  MapPin, 
  Building2, 
  CheckCircle2, 
  Play, 
  Heart, 
  ArrowRight, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { testimonials, Testimonial } from '@/lib/data';
import { useCaseModal } from '@/context/case-modal-context';
import CrossIcon from '@/components/CrossIcon';

const extendedTestimonials = [
  ...testimonials,
  {
    name: "Vireak Meas",
    city: "Siem Reap",
    treatment: "Robotic Liver Resection & Oncology",
    quote:
      "When my father was diagnosed with a complex liver lesion, local clinics gave us little hope. Medibeeglobal arranged a direct consultation with the chief transplant surgeon at Apollo Delhi within 24 hours. The surgery was completely robotic and successful. He is back home in Siem Reap enjoying life with his grandchildren.",
    photo: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    hospital: "Apollo Hospital, Delhi",
    timeline: "Full recovery in 8 weeks",
    rating: 5,
  },
  {
    name: "Kolap Seng",
    city: "Phnom Penh",
    treatment: "Bilateral Robotic Knee Replacement",
    quote:
      "I suffered from severe osteoarthritis for over five years and could barely walk across my living room. In Bangalore, Dr. Rajesh Mehta performed bilateral robotic knee replacement. I was up on my feet with a walker the very next morning! The Khmer interpreter stayed with me during all nurse checks.",
    photo: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    hospital: "Manipal Hospital, Bengaluru",
    timeline: "Walking unassisted by Week 3",
    rating: 5,
  },
  {
    name: "Chanthy Roeun",
    city: "Kampong Cham",
    treatment: "Pediatric Cardiac Surgery (VSD Closure)",
    quote:
      "Our 4-year-old daughter was born with a ventricular septal defect. Medibeeglobal handled our medical visa, arranged an ambulance straight from Delhi airport, and got us admitted to the specialized pediatric cardiac ICU. The nurses were compassionate and our daughter is now running, playing, and healthy.",
    photo: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    hospital: "Fortis Escorts Heart Institute, Delhi",
    timeline: "Healthy and thriving",
    rating: 5,
  },
];

const categories = ['All Stories', 'Cardiac', 'Orthopedics', 'Fertility (IVF)', 'Oncology & Transplant'];

export default function TestimonialsPage() {
  const { openCaseModal } = useCaseModal();
  const [selectedCat, setSelectedCat] = useState('All Stories');

  const filteredStories = extendedTestimonials.filter((item) => {
    if (selectedCat === 'All Stories') return true;
    if (selectedCat === 'Cardiac') return item.treatment.includes('Cardiac') || item.treatment.includes('CABG');
    if (selectedCat === 'Orthopedics') return item.treatment.includes('Knee') || item.treatment.includes('Replacement');
    if (selectedCat === 'Fertility (IVF)') return item.treatment.includes('Fertility') || item.treatment.includes('IVF');
    if (selectedCat === 'Oncology & Transplant') return item.treatment.includes('Oncology') || item.treatment.includes('Liver');
    return true;
  });

  return (
    <div className="pt-20 lg:pt-24 min-h-screen bg-gray-50/50">
      {/* Hero Header */}
      <section className="bg-primary-500 text-white pt-12 pb-14 lg:pt-16 lg:pb-18 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-400/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-5">
            <CrossIcon size={16} />
            <span className="text-white/90 text-sm font-medium">Genuine Patient Experiences</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold mt-2 mb-4 leading-tight tracking-tight">
            Real Stories,{' '}
            <span className="text-accent-400">Restored Lives</span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
            Read heartfelt experiences from Cambodian families who placed their trust in Medibeeglobal for life-saving surgeries and specialized care in India.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto pt-4 border-t border-white/15 text-center">
            <div className="p-2">
              <p className="text-2xl sm:text-3xl font-extrabold text-accent-400">500+</p>
              <p className="text-xs text-white/70">Cambodian Patients Assisted</p>
            </div>
            <div className="p-2">
              <p className="text-2xl sm:text-3xl font-extrabold text-accent-400">98%</p>
              <p className="text-xs text-white/70">Patient Satisfaction Rate</p>
            </div>
            <div className="p-2">
              <p className="text-2xl sm:text-3xl font-extrabold text-accent-400">60–80%</p>
              <p className="text-xs text-white/70">Savings vs Regional Hubs</p>
            </div>
            <div className="p-2">
              <p className="text-2xl sm:text-3xl font-extrabold text-accent-400">0</p>
              <p className="text-xs text-white/70">Hidden Middleman Fees</p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="bg-white border-b border-gray-200 py-4 shadow-sm sticky top-20 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => {
              const isActive = selectedCat === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCat(cat)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-primary-500 text-white shadow-soft'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-gray-100 p-8 shadow-soft hover:shadow-card hover:border-primary-200 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Quote className="w-8 h-8 text-primary-200" />
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, sIdx) => (
                        <Star key={sIdx} className="w-4 h-4 fill-accent-400 text-accent-400" />
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-700 text-sm leading-relaxed mb-6 italic">
                    "{item.quote}"
                  </p>
                </div>

                <div className="space-y-4 pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-4">
                    <img
                      src={item.photo}
                      alt={item.name}
                      className="w-13 h-13 rounded-full object-cover shadow-sm"
                    />
                    <div>
                      <p className="font-extrabold text-gray-900 text-sm">{item.name}</p>
                      <p className="text-xs text-gray-400 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-accent-500" />
                        {item.city}, Cambodia
                      </p>
                      <p className="text-xs text-primary-600 font-semibold mt-0.5">
                        {item.treatment}
                      </p>
                    </div>
                  </div>

                  {(item as any).timeline && (
                    <div className="bg-gray-50 rounded-xl px-3 py-1.5 text-xs text-gray-500 flex items-center justify-between">
                      <span>Outcome:</span>
                      <span className="font-semibold text-accent-600">{(item as any).timeline}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Transparency Guarantee */}
      <section className="py-14 bg-white border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-14 h-14 rounded-2xl bg-accent-50 text-accent-600 mx-auto flex items-center justify-center">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            100% Authentic Patient Testimonials
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            All reviews and case accounts are published with explicit consent from patients and their families. We preserve strict medical confidentiality and never alter patient feedback.
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-primary-950 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Begin Your Healing Story with Us
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8 text-sm sm:text-base leading-relaxed">
            Our case managers are ready to review your medical history, connect you with the right specialist, and guide your journey with care.
          </p>
          <button
            onClick={openCaseModal}
            className="bg-accent-400 hover:bg-accent-500 text-primary-950 font-bold px-8 py-3.5 rounded-full transition-all hover:scale-105 shadow-soft cursor-pointer text-sm sm:text-base inline-flex items-center gap-2"
          >
            Submit Your Case Today
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
