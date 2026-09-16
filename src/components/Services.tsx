import { services } from '@/lib/data';

export default function Services() {
  return (
    <section className="pt-6 pb-16 lg:pt-8 lg:pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-12">
          <span className="text-accent-500 font-bold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-3 mb-4">
            How Medibee Works for You
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            A comprehensive coordination platform connecting patients, hospitals, and travel partners.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="group relative bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-3xl p-8 hover:shadow-card hover:border-primary-200 transition-all animate-fade-in-up overflow-hidden"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 rounded-full blur-2xl group-hover:bg-primary-500/10 transition-colors" />

              <div className="relative">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-xs font-bold text-accent-500 bg-accent-50 px-3 py-1.5 rounded-full">
                    {service.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
