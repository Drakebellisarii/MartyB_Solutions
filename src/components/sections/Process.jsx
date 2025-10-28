import React from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { processSteps } from '../../data/processSteps';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Process = () => {
  const isVisible = useIntersectionObserver();

  return (
    <section id="process" className="py-32 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full text-primary-300 text-sm font-semibold mb-6 backdrop-blur-sm">
            <CheckCircle2 className="w-4 h-4" />
            Proven Process
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 font-playfair">
            <span className="bg-gradient-to-r from-white via-primary-200 to-white bg-clip-text text-transparent">
              How It Works
            </span>
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary-400"></div>
            <div className="w-3 h-3 bg-primary-400 rounded-full"></div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary-400"></div>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A proven methodology that opens doors and creates opportunities
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connection line */}
          <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500/50 via-secondary-500/50 to-accent-500/50"></div>

          {/* Steps */}
          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className={`relative transition-all duration-1000 ${
                  isVisible.process ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Content card */}
                  <div className="flex-1 w-full">
                    <div className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-glow-md">
                      <div className="flex items-start gap-6">
                        <div className="flex-1">
                          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 font-playfair group-hover:text-primary-300 transition-colors">
                            {step.title}
                          </h3>
                          <p className="text-gray-400 leading-relaxed text-lg group-hover:text-gray-300 transition-colors">
                            {step.description}
                          </p>
                        </div>
                        <ArrowRight className="w-6 h-6 text-primary-400 flex-shrink-0 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                      </div>
                    </div>
                  </div>

                  {/* Number badge */}
                  <div className="relative flex-shrink-0 z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 text-white flex items-center justify-center text-3xl font-bold rounded-2xl shadow-glow-md hover:scale-110 transition-all duration-300 border-4 border-dark-800">
                      {step.number}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl blur-md opacity-50 animate-pulse-slow"></div>
                  </div>

                  {/* Spacer for alignment */}
                  <div className="hidden md:block flex-1"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-primary-600/10 to-accent-600/10 backdrop-blur-md rounded-2xl px-8 py-6 border border-white/10">
            <CheckCircle2 className="w-8 h-8 text-primary-400" />
            <div className="text-left">
              <div className="text-white font-semibold text-lg">Simple, Effective, Proven</div>
              <div className="text-gray-400 text-sm">30+ years of successful connections</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;