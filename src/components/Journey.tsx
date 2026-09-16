'use client';

import { useState } from 'react';
import { journeySteps } from '@/lib/data';
import { ChevronRight } from 'lucide-react';

export default function Journey() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="journey" className="pt-6 pb-16 lg:pt-8 lg:pb-20 bg-primary-950 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-400/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-12">
          <span className="text-accent-400 font-bold text-sm uppercase tracking-wider">The Medibeeglobal Journey</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-3 mb-4">
            Your 6-Step Path to Care
          </h2>
          <p className="text-lg text-white/60 leading-relaxed">
            From your first call to post-treatment follow-up, we're with you at every step. Click a step to learn more.
          </p>
        </div>

        {/* Desktop: Horizontal Stepper */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-7 left-0 right-0 h-0.5 bg-white/15" />
            <div
              className="absolute top-7 left-0 h-0.5 bg-accent-400 transition-all duration-500"
              style={{ width: `${(activeStep / (journeySteps.length - 1)) * 100}%` }}
            />

            {/* Step circles */}
            <div className="relative flex justify-between">
              {journeySteps.map((step, i) => (
                <button
                  key={step.title}
                  onClick={() => setActiveStep(i)}
                  className="group flex flex-col items-center"
                  style={{ width: `${100 / journeySteps.length}%` }}
                >
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      activeStep === i
                        ? 'bg-accent-400 scale-110 shadow-lg'
                        : activeStep > i
                        ? 'bg-primary-500'
                        : 'bg-white/10 group-hover:bg-white/20'
                    }`}
                  >
                    <step.icon className={`w-6 h-6 transition-colors ${
                      activeStep === i ? 'text-primary-950' : 'text-white'
                    }`} />
                  </div>
                  <span className={`mt-3 text-xs font-bold transition-colors ${
                    activeStep === i ? 'text-accent-400' : 'text-white/50'
                  }`}>
                    Step {i + 1}
                  </span>
                  <span className={`mt-1 text-sm font-semibold text-center transition-colors ${
                    activeStep === i ? 'text-white' : 'text-white/60'
                  }`}>
                    {step.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Detail panel */}
          <div className="mt-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-10 animate-fade-in" key={activeStep}>
            <div className="flex items-start gap-5">
              <div className="w-16 h-16 rounded-2xl bg-accent-400 flex items-center justify-center flex-shrink-0">
                {(() => {
                  const Icon = journeySteps[activeStep].icon;
                  return <Icon className="w-8 h-8 text-primary-950" />;
                })()}
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-accent-400 font-bold text-sm">Step {activeStep + 1} of {journeySteps.length}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{journeySteps[activeStep].title}</h3>
                <p className="text-white/70 leading-relaxed text-lg">{journeySteps[activeStep].detail}</p>
              </div>
            </div>

            {/* Nav buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-white/10">
              <button
                onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                disabled={activeStep === 0}
                className="text-white/60 hover:text-white font-medium text-sm disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                ← Previous
              </button>
              <button
                onClick={() => setActiveStep(Math.min(journeySteps.length - 1, activeStep + 1))}
                disabled={activeStep === journeySteps.length - 1}
                className="text-accent-400 hover:text-accent-300 font-bold text-sm disabled:opacity-30 disabled:cursor-not-allowed transition-colors inline-flex items-center gap-1"
              >
                Next Step <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile: Vertical Timeline */}
        <div className="lg:hidden space-y-4">
          {journeySteps.map((step, i) => (
            <button
              key={step.title}
              onClick={() => setActiveStep(i)}
              className={`w-full text-left rounded-2xl p-5 transition-all ${
                activeStep === i
                  ? 'bg-white/10 border border-accent-400/30'
                  : 'bg-white/5 border border-white/10'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                  activeStep === i ? 'bg-accent-400' : 'bg-white/10'
                }`}>
                  <step.icon className={`w-6 h-6 ${activeStep === i ? 'text-primary-950' : 'text-white'}`} />
                </div>
                <div className="flex-1">
                  <span className="text-accent-400 text-xs font-bold">Step {i + 1}</span>
                  <h3 className="text-white font-bold mt-0.5">{step.title}</h3>
                  {activeStep === i && (
                    <p className="text-white/70 text-sm mt-2 leading-relaxed animate-fade-in">{step.detail}</p>
                  )}
                  {activeStep !== i && (
                    <p className="text-white/50 text-sm mt-0.5">{step.short}</p>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
