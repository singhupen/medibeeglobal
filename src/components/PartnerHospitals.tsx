import { partnerHospitals } from '@/lib/data';
import { MapPin, Building2 } from 'lucide-react';

export default function PartnerHospitals() {
  return (
    <section id="hospitals" className="pt-6 pb-16 lg:pt-8 lg:pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-12">
          <span className="text-accent-500 font-bold text-sm uppercase tracking-wider">Our Network</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-3 mb-4">
            Partner Hospitals in India
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            We work with JCI-accredited, internationally recognized hospitals across major Indian cities.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {partnerHospitals.map((hospital, i) => (
            <div
              key={hospital.name}
              className="group bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-card hover:border-primary-200 transition-all animate-fade-in-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-primary-50 group-hover:bg-primary-500 flex items-center justify-center transition-colors flex-shrink-0">
                  <Building2 className="w-7 h-7 text-primary-500 group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{hospital.name}</h3>
                  <div className="flex items-center gap-1 text-gray-400 text-sm mb-3">
                    <MapPin className="w-4 h-4" />
                    <span>{hospital.city}, India</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {hospital.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="text-xs font-medium bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            Hospital network continuously expanding. New partners added across Asia in the coming year.
          </p>
        </div>
      </div>
    </section>
  );
}
