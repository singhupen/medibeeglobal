'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  CheckCircle2, 
  XCircle, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  HeartHandshake, 
  Stethoscope, 
  Building2, 
  Plane, 
  Hospital, 
  CalendarCheck, 
  FileText,
  Sparkles
} from 'lucide-react';
import { detailedJourneyPhases, JourneyPhaseDetail } from '@/lib/data';
import { useCaseModal } from '@/context/case-modal-context';
import CrossIcon from '@/components/CrossIcon';

export default function PatientJourneyPage() {
  const { openCaseModal } = useCaseModal();
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);

  const activePhase = detailedJourneyPhases[activePhaseIndex];

  return (
    <div className="pt-20 lg:pt-24 min-h-screen bg-gray-50/50">
      {/* Hero Header */}
      <section className="bg-primary-500 text-white pt-12 pb-14 lg:pt-16 lg:pb-18 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-400/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-5">
            <CrossIcon size={16} />
            <span className="text-white/90 text-sm font-medium">Clear, Transparent Cross-Border Care</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold mt-2 mb-4 leading-tight tracking-tight">
            The Medibeeglobal{' '}
            <span className="text-accent-400">Patient Journey</span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
            A step-by-step roadmap from your first consultation in Phnom Penh, through world-class surgical treatment in India, to continuous recovery support back home.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto pt-4 border-t border-white/15 text-center">
            <div className="p-2">
              <p className="text-2xl sm:text-3xl font-extrabold text-accent-400">6 Stages</p>
              <p className="text-xs text-white/70">Structured Care Roadmap</p>
            </div>
            <div className="p-2">
              <p className="text-2xl sm:text-3xl font-extrabold text-accent-400">100% Direct</p>
              <p className="text-xs text-white/70">Hospital Invoicing</p>
            </div>
            <div className="p-2">
              <p className="text-2xl sm:text-3xl font-extrabold text-accent-400">Dedicated</p>
              <p className="text-xs text-white/70">Khmer Case Manager</p>
            </div>
            <div className="p-2">
              <p className="text-2xl sm:text-3xl font-extrabold text-accent-400">Lifelong</p>
              <p className="text-xs text-white/70">Post-Treatment Follow-Up</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive 6-Phase Roadmap */}
      <section className="py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent-500 font-bold text-xs sm:text-sm uppercase tracking-wider">
              Roadmap Overview
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 mt-2 mb-3">
              Your 6 Phases from Cambodia to India &amp; Back
            </h2>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              Click any phase below to explore its timeline, deliverables, and on-ground support.
            </p>
          </div>

          {/* Phase Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
            {detailedJourneyPhases.map((phase, idx) => {
              const isSelected = activePhaseIndex === idx;
              return (
                <button
                  key={phase.phaseNumber}
                  onClick={() => setActivePhaseIndex(idx)}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-primary-500 text-white border-primary-500 shadow-card scale-102'
                      : 'bg-white hover:bg-gray-50 text-gray-800 border-gray-200/80 shadow-soft'
                  }`}
                >
                  <span className={`text-xs font-bold ${isSelected ? 'text-accent-300' : 'text-primary-500'}`}>
                    Phase {phase.phaseNumber}
                  </span>
                  <p className="font-extrabold text-sm sm:text-base mt-2 line-clamp-2">
                    {phase.stage}
                  </p>
                  <span className={`text-xs mt-3 ${isSelected ? 'text-white/80' : 'text-gray-400'}`}>
                    {phase.duration}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Phase Spotlight Card */}
          <div className="bg-white rounded-3xl border border-gray-100 p-8 sm:p-12 shadow-soft hover:shadow-card transition-all">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 pb-6 mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-accent-600 bg-accent-50 px-3 py-1 rounded-full border border-accent-200">
                  Phase {activePhase.phaseNumber} — {activePhase.stage}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-2">
                  {activePhase.title}
                </h3>
              </div>
              <span className="bg-primary-50 text-primary-700 text-xs sm:text-sm font-bold px-4 py-2 rounded-full flex items-center gap-1.5 border border-primary-100">
                <Clock className="w-4 h-4" />
                Expected Timeline: {activePhase.duration}
              </span>
            </div>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
              {activePhase.summary}
            </p>

            <div className="space-y-3 bg-gray-50 rounded-2xl p-6 border border-gray-100 mb-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                Key Deliverables in this Phase:
              </h4>
              <div className="grid sm:grid-cols-3 gap-4">
                {activePhase.highlights.map((hl, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-accent-500 flex-shrink-0 mt-0.5" />
                    <span className="font-medium">{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-gray-100">
              <p className="text-xs sm:text-sm text-gray-400">
                Every step is documented and available directly on your patient portal.
              </p>
              <button
                onClick={openCaseModal}
                className="w-full sm:w-auto bg-primary-500 hover:bg-primary-600 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full transition-all shadow-soft cursor-pointer flex items-center justify-center gap-2"
              >
                Inquire About This Step
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison: Medibeeglobal vs Going Independently */}
      <section className="py-14 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent-500 font-bold text-xs sm:text-sm uppercase tracking-wider">
              The Medibeeglobal Difference
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 mt-2 mb-3">
              Why Families Don't Travel Alone
            </h2>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              Navigating a foreign healthcare system without local advocacy can lead to predatory pricing, language barriers, and fragmented treatment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Medibeeglobal Card */}
            <div className="bg-primary-50/40 rounded-3xl p-8 border-2 border-primary-500/20 shadow-card flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary-500 text-white flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-primary-950">With Medibeeglobal</h3>
                    <p className="text-xs text-primary-600 font-semibold">Protected &amp; Professionally Coordinated</p>
                  </div>
                </div>

                <ul className="space-y-4 text-xs sm:text-sm text-gray-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Direct Hospital Billing:</strong> Pay hospital counters directly at verified package rates. Zero middleman markup.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Dedicated Khmer Case Manager:</strong> Speaks your language, translates doctor recommendations, and accompanies you.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Vetted Senior Specialists:</strong> Direct access to HODs and leading transplant &amp; cardiac surgeons.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                    <span><strong>End-to-End Logistics:</strong> Fast-track Medical Visa VIL letter in 24h, airport pickup, and sanitized stay near hospital.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Lifelong Cambodia Follow-up:</strong> Ongoing teleconsultations and doctor reviews back home in Phnom Penh.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-primary-100">
                <span className="text-xs font-bold text-accent-600">Peace of mind guaranteed throughout your treatment</span>
              </div>
            </div>

            {/* Independent Card */}
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gray-200 text-gray-500 flex items-center justify-center">
                    <XCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-gray-900">Traveling Independently</h3>
                    <p className="text-xs text-gray-500 font-semibold">Unassisted &amp; Vulnerable to Delays</p>
                  </div>
                </div>

                <ul className="space-y-4 text-xs sm:text-sm text-gray-600">
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Hidden Costs:</strong> Risk of inflated tourist clinic fees, unnecessary diagnostic repeats, and unverified rates.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Language Barriers:</strong> Confusion discussing complex surgical consent and medication dosages in English or Hindi.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Doctor Uncertainty:</strong> Booking based on forum rumors rather than clinical audit and surgical success metrics.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Logistical Stress:</strong> Figuring out medical visa invitation letters, transport, and distant hotels while feeling ill.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Post-Discharge Disconnection:</strong> Left completely on your own after boarding the plane back to Cambodia.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <span className="text-xs font-semibold text-gray-400">High emotional and financial stress on patient and family</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-primary-950 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Start Your Free Journey Assessment Today
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8 text-sm sm:text-base leading-relaxed">
            Speak directly with a Khmer-speaking case manager. We review your case, present hospital options, and organize your journey with total transparency.
          </p>
          <button
            onClick={openCaseModal}
            className="bg-accent-400 hover:bg-accent-500 text-primary-950 font-bold px-8 py-3.5 rounded-full transition-all hover:scale-105 shadow-soft cursor-pointer text-sm sm:text-base inline-flex items-center gap-2"
          >
            Begin Your Care Journey
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
