import { testimonials } from '@/lib/data';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="pt-6 pb-16 lg:pt-8 lg:pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-12">
          <span className="text-accent-500 font-bold text-sm uppercase tracking-wider">Patient Stories</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-3 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Real Cambodian families who trusted Medibee with their healthcare journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div
              key={testimonial.name}
              className="group bg-gradient-to-b from-gray-50 to-white border border-gray-100 rounded-3xl p-8 hover:shadow-card transition-all animate-fade-in-up"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <Quote className="w-10 h-10 text-primary-100 mb-4" />

              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-accent-400 text-accent-400" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.city}, Cambodia</p>
                  <p className="text-xs text-primary-500 font-medium mt-0.5">{testimonial.treatment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
