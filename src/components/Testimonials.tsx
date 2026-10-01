import { testimonials } from '@/data/testimonials';
import { Star, Quote, CheckCircle2, MessageSquareQuote } from 'lucide-react';
import Avatar from '@/components/Avatar';

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 bg-accent-50 text-accent-700 border border-accent-200 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider shadow-xs">
            <MessageSquareQuote className="w-3.5 h-3.5 text-accent-500" />
            Patient Stories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-3 mb-4 tracking-tight">
            What Our Patients Say
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Real Cambodian families who trusted Medibeeglobal for their specialized treatment in India.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div
              key={testimonial.name}
              className="group bg-gradient-to-b from-gray-50/70 via-white to-gray-50/30 border border-gray-100 hover:border-primary-200 rounded-3xl p-8 hover:shadow-card transition-all duration-300 hover:-translate-y-1 relative flex flex-col justify-between"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-primary-200 group-hover:text-primary-400 transition-colors" />
                </div>

                <p className="text-gray-700 leading-relaxed mb-6 italic text-[15px]">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <div className="relative">
                  <Avatar name={testimonial.name} image={testimonial.photo} />
                  {testimonial.verified && (
                    <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent-500 fill-accent-50" />
                    </div>
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <p className="font-extrabold text-gray-900 text-sm">{testimonial.name}</p>
                  </div>
                  <p className="text-xs text-gray-500">{testimonial.city}, Cambodia</p>
                  <span className="inline-block mt-1 text-[11px] font-semibold text-primary-600 bg-primary-50 px-2 py-0.5 rounded-full border border-primary-100">
                    {testimonial.treatment}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
