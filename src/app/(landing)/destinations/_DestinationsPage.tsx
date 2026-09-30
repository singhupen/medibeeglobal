'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  MapPin, 
  Plane, 
  Building2, 
  CheckCircle2, 
  Clock, 
  Compass, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles,
  Wallet
} from 'lucide-react';
import { destinationsData, Destination } from '@/lib/data';
import { useCaseModal } from '@/context/case-modal-context';
import CrossIcon from '@/components/CrossIcon';

export default function DestinationsPage() {
  const { openCaseModal } = useCaseModal();
  const [selectedCity, setSelectedCity] = useState<Destination>(destinationsData[0]);

  return (
    <div className="pt-20 lg:pt-24 min-h-screen bg-gray-50/50">
      {/* Hero Header */}
      <section className="bg-primary-500 text-white pt-12 pb-14 lg:pt-16 lg:pb-18 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-400/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-5">
            <CrossIcon size={16} />
            <span className="text-white/90 text-sm font-medium">Healthcare Hubs Across India</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold mt-2 mb-4 leading-tight tracking-tight">
            Top Medical Tourism{' '}
            <span className="text-accent-400">Destinations</span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
            Explore India&apos;s foremost medical cities. From Delhi&apos;s quaternary transplant centers to Bengaluru&apos;s robotic surgery hubs and Chennai&apos;s affordable clinical excellence.
          </p>

          <div className="flex flex-wrap justify-center gap-3 text-xs sm:text-sm font-semibold">
            {destinationsData.map((dest) => (
              <a
                key={dest.id}
                href={`#${dest.id}`}
                className="bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-1.5 rounded-full text-white transition-all backdrop-blur-sm"
              >
                {dest.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Detailed Showcase */}
      <section className="py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {destinationsData.map((dest, idx) => {
            const isReversed = idx % 2 !== 0;
            return (
              <div
                key={dest.id}
                id={dest.id}
                className={`bg-white rounded-3xl border border-gray-100 p-6 sm:p-10 shadow-soft hover:shadow-card transition-all flex flex-col ${
                  isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
                } gap-8 lg:gap-12 items-center`}
              >
                {/* Destination Image & Quick Tags */}
                <div className="w-full lg:w-1/2 relative">
                  <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-md">
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent" />
                    
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-primary-700 shadow-sm flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-accent-500" />
                      {dest.state}
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-xs uppercase font-bold tracking-wider text-accent-400">
                        {dest.livingCostTier} Living Costs
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold mt-1">{dest.name}</h3>
                    </div>
                  </div>
                </div>

                {/* Destination Details */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div>
                    <span className="text-accent-600 font-bold text-xs uppercase tracking-wider">
                      City Profile
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1 mb-3">
                      {dest.tagline}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {dest.description}
                    </p>
                  </div>

                  {/* Flight Connectivity from Cambodia */}
                  <div className="bg-primary-50/60 rounded-2xl p-4 border border-primary-100 flex items-start gap-3">
                    <Plane className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm">
                      <p className="font-bold text-primary-900">Flight Route from Cambodia:</p>
                      <p className="text-primary-700 mt-0.5">{dest.flightRoute}</p>
                      <p className="text-primary-600 font-medium text-xs mt-1">
                        ⏱ {dest.flightDuration}
                      </p>
                    </div>
                  </div>

                  {/* Key Specialties & Partner Hospitals */}
                  <div className="grid sm:grid-cols-2 gap-4 pt-2">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                        Top Specialties
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {dest.keySpecialties.map((spec) => (
                          <span
                            key={spec}
                            className="bg-gray-100 text-gray-700 text-xs px-2.5 py-1 rounded-lg font-medium"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                        Accredited Hospitals
                      </h4>
                      <ul className="space-y-1 text-xs text-gray-700">
                        {dest.hospitals.map((hosp) => (
                          <li key={hosp} className="flex items-center gap-1.5">
                            <Building2 className="w-3.5 h-3.5 text-primary-500 flex-shrink-0" />
                            <span className="line-clamp-1">{hosp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* City Features */}
                  <div className="border-t border-gray-100 pt-4 space-y-2">
                    {dest.features.slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-accent-500 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action */}
                  <div className="pt-2">
                    <button
                      onClick={openCaseModal}
                      className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full transition-all shadow-soft cursor-pointer"
                    >
                      Explore Hospitals in {dest.name}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Practical Comparison Matrix */}
      <section className="py-14 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-accent-500 font-bold text-xs sm:text-sm uppercase tracking-wider">
              Planning Your Travel
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 mt-2 mb-3">
              City Selection Comparison
            </h2>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              Find the perfect balance of surgical specialization, travel duration from Phnom Penh, and family living expenses.
            </p>
          </div>

          <div className="overflow-x-auto bg-gray-50 rounded-2xl border border-gray-100 shadow-sm">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-primary-950 text-white">
                  <th className="p-4 font-bold">Medical Hub</th>
                  <th className="p-4 font-bold">Best Known For</th>
                  <th className="p-4 font-bold">Living Expense Index</th>
                  <th className="p-4 font-bold">Transit from Phnom Penh</th>
                  <th className="p-4 font-bold">Recommended For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-white transition-colors">
                  <td className="p-4 font-bold text-gray-900">Delhi NCR</td>
                  <td className="p-4 text-gray-600">Liver/Kidney Transplants, Oncology, Robotic Surgery</td>
                  <td className="p-4 text-primary-600 font-semibold">Moderate ($35-60/day)</td>
                  <td className="p-4 text-gray-600">~6.5 – 7.5 hrs via BKK/KUL</td>
                  <td className="p-4 text-gray-700">Complex quaternary procedures</td>
                </tr>
                <tr className="hover:bg-white transition-colors">
                  <td className="p-4 font-bold text-gray-900">Bengaluru</td>
                  <td className="p-4 text-gray-600">Cardiac Science, Robotic Joints, IVF, Pleasant Weather</td>
                  <td className="p-4 text-primary-600 font-semibold">Moderate ($35-55/day)</td>
                  <td className="p-4 text-gray-600">~6.5 – 8 hrs via SIN/BKK</td>
                  <td className="p-4 text-gray-700">Heart surgeries &amp; post-op recovery</td>
                </tr>
                <tr className="hover:bg-white transition-colors">
                  <td className="p-4 font-bold text-gray-900">Chennai</td>
                  <td className="p-4 text-gray-600">Orthopedic Joint Replacement, Heart, Unmatched Value</td>
                  <td className="p-4 text-accent-600 font-bold">Budget-Friendly ($25-45/day)</td>
                  <td className="p-4 text-gray-600">~6 – 7 hrs via BKK/SIN</td>
                  <td className="p-4 text-gray-700">Budget-conscious family stays</td>
                </tr>
                <tr className="hover:bg-white transition-colors">
                  <td className="p-4 font-bold text-gray-900">Mumbai</td>
                  <td className="p-4 text-gray-600">Advanced Cancer Care, Brain &amp; Spine Surgery</td>
                  <td className="p-4 text-primary-600 font-semibold">Balanced ($45-75/day)</td>
                  <td className="p-4 text-gray-600">~7 hrs via BKK/KUL</td>
                  <td className="p-4 text-gray-700">Specialized clinical oncology</td>
                </tr>
                <tr className="hover:bg-white transition-colors">
                  <td className="p-4 font-bold text-gray-900">Kolkata</td>
                  <td className="p-4 text-gray-600">Shortest Travel Time, Cardiology, General Surgeries</td>
                  <td className="p-4 text-accent-600 font-bold">Lowest Travel Time ($25-40/day)</td>
                  <td className="p-4 text-gray-600">~4.5 – 5.5 hrs via BKK</td>
                  <td className="p-4 text-gray-700">Elderly patients needing fast transit</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-primary-950 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Unsure Which Indian City Fits Your Care Plan?
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8 text-sm sm:text-base leading-relaxed">
            Our medical advisors compare hospital facilities, doctors, flight connections, and accommodation budgets to suggest the optimal destination for you.
          </p>
          <button
            onClick={openCaseModal}
            className="bg-accent-400 hover:bg-accent-500 text-primary-950 font-bold px-8 py-3.5 rounded-full transition-all hover:scale-105 shadow-soft cursor-pointer text-sm sm:text-base inline-flex items-center gap-2"
          >
            Get Free Destination Advice
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
