import { ArrowRight, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { heroImage } from '@/lib/data';
import CrossIcon from '@/components/CrossIcon';

interface HeroProps {
  onSubmitCase: () => void;
}

export default function Hero({ onSubmitCase }: HeroProps) {
  return (
    <section id="home" className="relative bg-primary-500 overflow-hidden pt-20 pb-16 lg:pt-24 lg:pb-20">
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-400/10 rounded-full blur-3xl translate-y-1/3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <CrossIcon size={16} />
              <span className="text-white/90 text-sm font-medium">Trusted medical coordination platform</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Our Vision,<br />
              <span className="text-accent-400">Your Care.</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              We&apos;re building a trusted healthcare journey platform that connects Cambodian patients with India&apos;s leading hospitals — making cross-border treatment easier, safer, and fully coordinated, from first consultation to recovery back home.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={onSubmitCase}
                className="group bg-white text-primary-700 font-bold px-7 py-3.5 rounded-full hover:bg-gray-50 transition-all hover:shadow-xl hover:scale-105 inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                Submit Your Case
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <Link
                href="/contact"
                className="border-2 border-white/60 text-white font-bold px-7 py-3.5 rounded-full hover:bg-white/10 transition-all inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Talk to a Case Manager
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/15">
              <div className="text-center lg:text-left">
                <p className="text-2xl lg:text-3xl font-extrabold text-white">500+</p>
                <p className="text-sm text-white/70 mt-1">Patients Coordinated</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-2xl lg:text-3xl font-extrabold text-white">20+</p>
                <p className="text-sm text-white/70 mt-1">Partner Hospitals</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-2xl lg:text-3xl font-extrabold text-white">98%</p>
                <p className="text-sm text-white/70 mt-1">Satisfaction Rate</p>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative animate-fade-in-up">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Doctor consulting with patient"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/30 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
