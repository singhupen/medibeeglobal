'use client';

import { useState } from 'react';
import { specialties, costComparisons } from '@/lib/data';
import { CheckCircle2 } from 'lucide-react';

export default function WhyIndia() {
  const [activeProcedure, setActiveProcedure] = useState(0);

  return (
    <section id="why-india" className="pt-6 pb-16 lg:pt-8 lg:pb-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-12">
          <span className="text-accent-500 font-bold text-sm uppercase tracking-wider">Why India</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-3 mb-4">
            World-Class Care, Fraction of the Cost
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            India is home to JCI-accredited hospitals, internationally trained doctors, and advanced medical technology — at a fraction of Western or regional prices.
          </p>
        </div>

        {/* Specialties Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {specialties.map((specialty, i) => (
            <div
              key={specialty.title}
              className="group bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-card hover:border-primary-200 transition-all animate-fade-in-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary-500 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                <specialty.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{specialty.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{specialty.description}</p>
            </div>
          ))}
        </div>

        {/* Cost Comparison */}
        <div className="bg-white rounded-3xl shadow-card border border-gray-100 overflow-hidden">
          <div className="bg-primary-500 px-8 py-6">
            <h3 className="text-2xl font-bold text-white">Cost Comparison</h3>
            <p className="text-white/70 text-sm mt-1">Sample procedure costs across Asia (USD, approximate)</p>
          </div>

          {/* Procedure tabs */}
          <div className="flex flex-wrap gap-2 p-6 border-b border-gray-100">
            {costComparisons.map((c, i) => (
              <button
                key={c.procedure}
                onClick={() => setActiveProcedure(i)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeProcedure === i
                    ? 'bg-primary-500 text-white shadow-soft'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {c.procedure}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="p-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { country: 'India', flag: '🇮🇳', cost: costComparisons[activeProcedure].india, highlight: true },
                { country: 'Singapore', flag: '🇸🇬', cost: costComparisons[activeProcedure].singapore, highlight: false },
                { country: 'Malaysia', flag: '🇲🇾', cost: costComparisons[activeProcedure].malaysia, highlight: false },
                { country: 'China', flag: '🇨🇳', cost: costComparisons[activeProcedure].china, highlight: false },
              ].map((item) => (
                <div
                  key={item.country}
                  className={`rounded-2xl p-6 text-center transition-all ${
                    item.highlight
                      ? 'bg-primary-500 text-white shadow-blue scale-105'
                      : 'bg-gray-50 text-gray-700 border border-gray-100'
                  }`}
                >
                  <span className="text-3xl block mb-2">{item.flag}</span>
                  <p className={`font-bold text-sm mb-3 ${item.highlight ? 'text-white' : 'text-gray-500'}`}>
                    {item.country}
                  </p>
                  <p className={`text-2xl font-extrabold ${item.highlight ? 'text-white' : 'text-gray-900'}`}>
                    {item.cost}
                  </p>
                  {item.highlight && (
                    <div className="mt-3 inline-flex items-center gap-1 bg-white/20 rounded-full px-3 py-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                      <span className="text-xs font-semibold text-white">Best Value</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <p className="text-center text-sm text-gray-400 mt-6">
              * Costs are approximate and for comparison purposes only. Actual costs vary by hospital, doctor, and individual case.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
