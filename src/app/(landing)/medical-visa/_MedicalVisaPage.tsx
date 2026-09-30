'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  FileText, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Users, 
  HelpCircle, 
  ChevronDown, 
  ArrowRight, 
  Plane, 
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { medicalVisaSteps, visaFaqs, VisaStep } from '@/lib/data';
import { useCaseModal } from '@/context/case-modal-context';
import CrossIcon from '@/components/CrossIcon';

export default function MedicalVisaPage() {
  const { openCaseModal } = useCaseModal();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="pt-20 lg:pt-24 min-h-screen bg-gray-50/50">
      {/* Hero Header */}
      <section className="bg-primary-500 text-white pt-12 pb-14 lg:pt-16 lg:pb-18 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-400/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-5">
            <CrossIcon size={16} />
            <span className="text-white/90 text-sm font-medium">Hassle-Free India e-Medical Visa</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold mt-2 mb-4 leading-tight tracking-tight">
            Medical &amp; Attendant{' '}
            <span className="text-accent-400">Visa Assistance</span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
            Complete, end-to-end medical visa guidance for Cambodian patients and up to two family attendants. Fast official hospital invitation letters and guaranteed paperwork accuracy.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto pt-4 border-t border-white/15 text-center">
            <div className="p-2">
              <p className="text-2xl sm:text-3xl font-extrabold text-accent-400">24–48h</p>
              <p className="text-xs text-white/70">Hospital Invitation Letter</p>
            </div>
            <div className="p-2">
              <p className="text-2xl sm:text-3xl font-extrabold text-accent-400">48–72h</p>
              <p className="text-xs text-white/70">Online e-Visa Approval</p>
            </div>
            <div className="p-2">
              <p className="text-2xl sm:text-3xl font-extrabold text-accent-400">Up to 2</p>
              <p className="text-xs text-white/70">Medical Attendants (MEDX)</p>
            </div>
            <div className="p-2">
              <p className="text-2xl sm:text-3xl font-extrabold text-accent-400">100% Free</p>
              <p className="text-xs text-white/70">VIL Assistance Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Step Process */}
      <section className="py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent-500 font-bold text-xs sm:text-sm uppercase tracking-wider">
              Step-by-Step Workflow
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 mt-2 mb-3">
              How We Streamline Your India Medical Visa
            </h2>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              Never worry about embassy queues or paper rejections. We handle every step electronically.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {medicalVisaSteps.map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-soft hover:shadow-card hover:border-primary-200 transition-all flex flex-col sm:flex-row items-start gap-6"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary-500 text-white font-extrabold text-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                  0{step.step}
                </div>

                <div className="flex-1 space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">{step.title}</h3>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-accent-50 text-accent-700 px-3 py-1 rounded-full border border-accent-200/60">
                      <Clock className="w-3.5 h-3.5" />
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.summary}</p>
                  <div className="bg-gray-50 rounded-xl p-3 text-xs text-primary-900 border border-gray-200/60 flex items-start gap-2 mt-3">
                    <CheckCircle2 className="w-4 h-4 text-accent-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Action:</strong> {step.action}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents Checklist */}
      <section className="py-14 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent-500 font-bold text-xs sm:text-sm uppercase tracking-wider">
              Document Readiness
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 mt-2 mb-3">
              Required Documents Checklist
            </h2>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              Keep these documents handy. Our case managers review and optimize them before submission.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Patient Documents */}
            <div className="bg-gray-50 rounded-3xl p-6 sm:p-8 border border-gray-100 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">For the Patient</h3>
                  <p className="text-xs text-gray-400">Primary e-Medical Visa applicant</p>
                </div>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-gray-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-accent-500 flex-shrink-0 mt-0.5" />
                  <span>Valid Cambodian Passport (minimum 6 months validity &amp; 2 blank pages)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-accent-500 flex-shrink-0 mt-0.5" />
                  <span>Recent digital passport photo (white background, 2x2 inches / 350x350px)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-accent-500 flex-shrink-0 mt-0.5" />
                  <span>Recent Cambodian hospital diagnosis, medical summary, or lab/imaging scans</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-accent-500 flex-shrink-0 mt-0.5" />
                  <span>Official Hospital Visa Invitation Letter (Issued by Medibeeglobal)</span>
                </li>
              </ul>
            </div>

            {/* Medical Attendants */}
            <div className="bg-gray-50 rounded-3xl p-6 sm:p-8 border border-gray-100 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent-100 text-accent-700 flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">For Family Attendants (MEDX)</h3>
                  <p className="text-xs text-gray-400">Up to 2 accompanying caregivers</p>
                </div>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-gray-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-accent-500 flex-shrink-0 mt-0.5" />
                  <span>Valid Cambodian Passport for each caregiver (minimum 6 months validity)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-accent-500 flex-shrink-0 mt-0.5" />
                  <span>Digital passport photo for each accompanying family member</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-accent-500 flex-shrink-0 mt-0.5" />
                  <span>Proof of family relationship (Khmer family record book or birth/marriage certificate)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-accent-500 flex-shrink-0 mt-0.5" />
                  <span>Included names on the official hospital Visa Invitation Letter</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Accordion */}
      <section className="py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-accent-500 font-bold text-xs sm:text-sm uppercase tracking-wider">
              Answers &amp; Clarity
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 mt-2 mb-3">
              Frequently Asked Visa Questions
            </h2>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              Common questions answered by our Cambodian-Indian consular coordination desk.
            </p>
          </div>

          <div className="space-y-4">
            {visaFaqs.map((faq, i) => {
              const isOpen = openFaqIndex === i;
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-soft transition-all"
                >
                  <button
                    onClick={() => toggleFaq(i)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-gray-900 text-sm sm:text-base cursor-pointer hover:text-primary-600 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                        isOpen ? 'rotate-180 text-primary-500' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 text-gray-600 text-xs sm:text-sm leading-relaxed border-t border-gray-50 pt-3 animate-fade-in">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-primary-950 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Ready to Request Your Visa Invitation Letter?
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8 text-sm sm:text-base leading-relaxed">
            Send your medical records and passport copy today. Our team delivers your official Hospital Visa Invitation Letter within 24 to 48 hours.
          </p>
          <button
            onClick={openCaseModal}
            className="bg-accent-400 hover:bg-accent-500 text-primary-950 font-bold px-8 py-3.5 rounded-full transition-all hover:scale-105 shadow-soft cursor-pointer text-sm sm:text-base inline-flex items-center gap-2"
          >
            Apply for Medical Visa Letter
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
