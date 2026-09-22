import { ArrowRight, MessageCircle, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import CrossIcon from '@/components/CrossIcon';
import HeroImageCarousel from '@/components/HeroImageCarousel';

interface HeroProps {
  onSubmitCase: () => void;
}

export default function Hero({ onSubmitCase }: HeroProps) {
  return (
    <section id="home" className="relative bg-gradient-to-b from-primary-600 via-primary-500 to-primary-600 overflow-hidden pt-28 pb-16 lg:pt-32 lg:pb-24">
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-primary-400/20 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-400/15 rounded-full blur-3xl translate-y-1/3 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
          {/* Left: Content (5 cols on desktop) */}
          <div className="lg:col-span-5 text-center lg:text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-2.5 bg-white/15 hover:bg-white/20 transition-colors backdrop-blur-md border border-white/25 rounded-full px-4 py-1.5 mb-6 shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-400" />
              </span>
              <CrossIcon size={16} />
              <span className="text-white text-xs sm:text-sm font-semibold tracking-wide">
                Cambodia&apos;s Trusted India Medical Gateway
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-[1.15] mb-6 tracking-tight">
              Our Vision,<br />
              <span className="text-accent-400 drop-shadow-sm">Your Care.</span>
            </h1>

            <p className="text-base sm:text-lg text-white/85 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              We connect Cambodian patients with India&apos;s premier multi-specialty hospitals — making cross-border medical treatment transparent, cost-effective, and fully coordinated with dedicated Khmer and English case managers.
            </p>

            <div className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 justify-center lg:justify-start">
              <button
                type="button"
                onClick={onSubmitCase}
                className="group relative bg-white text-primary-700 hover:text-primary-800 font-bold px-7 py-3.5 rounded-full hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <span>Submit Your Case</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                href="/contact"
                className="border-2 border-white/70 text-white font-bold px-7 py-3.5 rounded-full hover:bg-white/15 transition-all inline-flex items-center justify-center gap-2.5 backdrop-blur-xs"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Talk to a Case Manager</span>
              </Link>
            </div>

            {/* Micro-trust checklist */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 mt-5 text-xs font-medium text-white/90">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-accent-300 shrink-0" />
                Free Medical Assessment
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-accent-300 shrink-0" />
                Khmer Support
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-accent-300 shrink-0" />
                Direct Hospital Billing
              </span>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-10 pt-7 border-t border-white/15">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-white/15 text-center lg:text-left transition-transform hover:-translate-y-0.5">
                <p className="text-xl sm:text-2xl xl:text-3xl font-extrabold text-white tracking-tight">500+</p>
                <p className="text-[11px] sm:text-xs xl:text-sm text-white/80 mt-1 font-medium">Patients Coordinated</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-white/15 text-center lg:text-left transition-transform hover:-translate-y-0.5">
                <p className="text-xl sm:text-2xl xl:text-3xl font-extrabold text-white tracking-tight">20+</p>
                <p className="text-[11px] sm:text-xs xl:text-sm text-white/80 mt-1 font-medium">Partner Hospitals</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-white/15 text-center lg:text-left transition-transform hover:-translate-y-0.5">
                <p className="text-xl sm:text-2xl xl:text-3xl font-extrabold text-white tracking-tight">98%</p>
                <p className="text-[11px] sm:text-xs xl:text-sm text-white/80 mt-1 font-medium">Satisfaction Rate</p>
              </div>
            </div>
          </div>

          {/* Right: Sliding Medical Carousel (7 cols on desktop - wider layout) */}
          <div className="lg:col-span-7 relative animate-fade-in-up w-full">
            <HeroImageCarousel autoPlayInterval={4500} />
          </div>
        </div>
      </div>
    </section>
  );
}
