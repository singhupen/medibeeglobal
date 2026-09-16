import { pricingCards } from '@/lib/data';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function Pricing({ onSubmitCase }: { onSubmitCase: () => void }) {
  return (
    <section id="pricing" className="pt-6 pb-16 lg:pt-8 lg:pb-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-12">
          <span className="text-accent-500 font-bold text-sm uppercase tracking-wider">Transparency</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-3 mb-4">
            How We Charge
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            No hidden fees. No middleman markups. Just honest, transparent coordination.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingCards.map((card, i) => (
            <div
              key={card.title}
              className={`group relative rounded-3xl p-8 transition-all animate-fade-in-up ${
                i === 1
                  ? 'bg-primary-500 text-white shadow-blue scale-105'
                  : 'bg-white border border-gray-100 hover:shadow-card'
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${
                i === 1 ? 'bg-accent-400' : 'bg-primary-50'
              }`}>
                <card.icon className={`w-7 h-7 ${i === 1 ? 'text-primary-950' : 'text-primary-500'}`} />
              </div>

              <h3 className={`text-xl font-bold mb-3 ${i === 1 ? 'text-white' : 'text-gray-900'}`}>
                {card.title}
              </h3>
              <p className={`mb-6 leading-relaxed ${i === 1 ? 'text-white/80' : 'text-gray-500'}`}>
                {card.description}
              </p>

              <ul className="space-y-3">
                {card.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${i === 1 ? 'text-accent-400' : 'text-primary-500'}`} />
                    <span className={`text-sm ${i === 1 ? 'text-white/90' : 'text-gray-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={onSubmitCase}
            className="group bg-primary-500 hover:bg-primary-600 text-white font-bold px-8 py-4 rounded-full transition-all hover:shadow-xl hover:scale-105 inline-flex items-center gap-2"
          >
            Start Your Case Today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
