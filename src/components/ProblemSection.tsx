import { problems } from '@/lib/data';

export default function ProblemSection() {
  return (
    <section id="problem" className="pt-6 pb-16 lg:pt-8 lg:pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-12">
          <span className="text-accent-500 font-bold text-sm uppercase tracking-wider">The Challenge</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-3 mb-4">
            Getting treatment abroad shouldn't be this hard
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Cambodian families seeking medical care in India face real obstacles. Medibeeglobal exists to remove them.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, i) => (
            <div
              key={problem.title}
              className="group bg-gray-50 hover:bg-white border border-gray-100 hover:border-primary-200 rounded-2xl p-8 transition-all hover:shadow-card animate-fade-in-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <problem.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{problem.title}</h3>
              <p className="text-gray-500 leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-primary-50 rounded-full px-6 py-3">
            <span className="text-primary-700 font-semibold">Medibeeglobal solves all three — and more.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
