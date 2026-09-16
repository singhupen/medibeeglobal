import { Target, AlertTriangle, Globe } from 'lucide-react';

export default function VisionCards() {
  const cards = [
    {
      id: 'vision',
      title: 'The Vision',
      emoji: '🎯',
      icon: Target,
      tag: 'Our Goal',
      description:
        'Make cross-border medical care easier, safer, and more coordinated for patients from Cambodia.',
      badgeColor: 'bg-accent-50 text-accent-700 border-accent-200',
      iconBg: 'bg-accent-50 text-accent-600 border-accent-200/60',
      tagBg: 'bg-accent-100 text-accent-800',
      borderAccent: 'hover:border-accent-400',
    },
    {
      id: 'problem',
      title: 'The Problem',
      emoji: '⚠️',
      icon: AlertTriangle,
      tag: 'The Reality',
      description:
        'Patients and families face fragmented hospital research, medical documents, travel arrangements, communication, and follow-up.',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
      iconBg: 'bg-amber-50 text-amber-600 border-amber-200/60',
      tagBg: 'bg-amber-100 text-amber-800',
      borderAccent: 'hover:border-amber-400',
    },
    {
      id: 'opportunity',
      title: 'The Opportunity',
      emoji: '🌐',
      icon: Globe,
      tag: 'Our Solution',
      description:
        'A trusted platform connecting patients, hospitals, doctors, and service partners — built on transparency, not just transaction.',
      badgeColor: 'bg-primary-50 text-primary-700 border-primary-200',
      iconBg: 'bg-primary-50 text-primary-600 border-primary-200/60',
      tagBg: 'bg-primary-100 text-primary-800',
      borderAccent: 'hover:border-primary-400',
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50/80 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 bg-primary-50 text-primary-600 border border-primary-100 rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider">
            Vision & Strategy
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 mb-3">
            Why We Are Building Medibee
          </h2>
          <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
            Addressing real patient hurdles with a transparent, coordinated healthcare bridge.
          </p>
        </div>

        {/* 3-Card Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className={`bg-white rounded-2xl p-8 border border-gray-100 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between group relative overflow-hidden ${card.borderAccent}`}
              >
                <Icon className="absolute right-3 -bottom-3 w-24 h-24 text-gray-900/[0.03] group-hover:text-primary-500/[0.06] transition-colors pointer-events-none" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl border flex items-center justify-center text-2xl shadow-xs transition-transform duration-300 group-hover:scale-110 ${card.iconBg}`}
                      aria-label={card.title}
                    >
                      <span className="select-none">{card.emoji}</span>
                    </div>
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider ${card.tagBg}`}
                    >
                      {card.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-gray-600 text-base leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-50 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent-500" />
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Medibee Core Pillar
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
