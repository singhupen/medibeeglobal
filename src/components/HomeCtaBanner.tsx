import { ArrowRight, MessageCircle, ShieldCheck, Clock, Award } from 'lucide-react';
import Link from 'next/link';

interface HomeCtaBannerProps {
  onSubmitCase: () => void;
}

export default function HomeCtaBanner({ onSubmitCase }: HomeCtaBannerProps) {
  return (
    <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 py-16 lg:py-20 overflow-hidden text-white">
      {/* Decorative ambient glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-400/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-6 text-xs sm:text-sm font-semibold text-accent-300">
          <Award className="w-4 h-4 text-accent-400" />
          <span>Start Your Care Journey Today</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight max-w-3xl mx-auto leading-tight mb-5">
          Ready to Consult India&apos;s Top Medical Specialists?
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed mb-8">
          Send us your latest medical reports for a complimentary, confidential evaluation and transparent cost estimate directly from India&apos;s leading hospital boards.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
          <button
            type="button"
            onClick={onSubmitCase}
            className="w-full sm:w-auto bg-white text-primary-800 hover:text-primary-900 font-extrabold px-8 py-4 rounded-full hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center gap-2.5 cursor-pointer text-base"
          >
            <span>Submit Your Medical Case</span>
            <ArrowRight className="w-5 h-5 text-primary-700" />
          </button>

          <Link
            href="/contact"
            className="w-full sm:w-auto border-2 border-white/50 hover:border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-all inline-flex items-center justify-center gap-2 text-base backdrop-blur-xs"
          >
            <MessageCircle className="w-5 h-5 text-accent-300" />
            <span>Talk to a Case Manager</span>
          </Link>
        </div>

        {/* 3 Trust Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto pt-8 border-t border-white/15">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-white/85">
            <ShieldCheck className="w-4 h-4 text-accent-400 shrink-0" />
            <span>Zero Patient Coordination Fees</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-white/85">
            <Clock className="w-4 h-4 text-accent-400 shrink-0" />
            <span>Opinions Within 24–48 Hours</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-white/85">
            <Award className="w-4 h-4 text-accent-400 shrink-0" />
            <span>End-to-End Visa & Travel Care</span>
          </div>
        </div>
      </div>
    </section>
  );
}
