import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, HeartHandshake, Eye, Sparkles } from 'lucide-react';
import ProblemSection from '@/components/ProblemSection';
import CrossIcon from '@/components/CrossIcon';

export const metadata: Metadata = {
  title: 'About Us — Medibee',
  description: 'Learn why Medibee was founded: solving medical travel fragmentation, language barriers, and lack of follow-up for Cambodian patients seeking healthcare in India.',
};

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Header */}
      <section className="bg-primary-500 text-white pt-16 pb-12 lg:pt-20 lg:pb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-5">
            <CrossIcon size={16} />
            <span className="text-white/90 text-sm font-medium">About Medibee</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mt-2 mb-5 leading-tight">
            Bridging Families to{' '}
            <span className="text-accent-400">Trusted Care.</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Founded with a singular mission: to bring clarity, dignity, and seamless cross-border coordination to Cambodian patients seeking world-class medical treatment in India.
          </p>
        </div>
      </section>

      {/* The Challenge We Solve */}
      <ProblemSection />

      {/* Our 3 Core Commitments */}
      <section className="py-14 lg:py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent-500 font-bold text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 mb-3">
              Built on Transparency & Care
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Every step of our process is designed to protect your family's health and financial peace of mind.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-soft">
              <div className="w-12 h-12 rounded-xl bg-accent-50 flex items-center justify-center mb-5 text-accent-600">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">100% Direct Billing</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                No middleman margins or inflated clinic fees. You pay partner hospitals directly at verified package rates.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-soft">
              <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-5 text-primary-500">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Khmer Language Support</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Dedicated case managers who speak your language, translate medical reports, and accompany you through every decision.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-soft">
              <div className="w-12 h-12 rounded-xl bg-accent-50 flex items-center justify-center mb-5 text-accent-600">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Accredited Excellence</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                We partner exclusively with JCI-accredited and internationally certified institutions with top surgical outcomes.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-bold px-7 py-3.5 rounded-full transition-all hover:shadow-lg"
            >
              Speak with a Case Manager
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
