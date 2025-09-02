import React from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { processSteps } from '../../data/processSteps';

const Process = () => {
  const isVisible = useIntersectionObserver();

  return (
    <section id="process" className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Creative background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-accent-blue-500 rounded-full opacity-5 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-accent-orange-500 rounded-full opacity-5 animate-float" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-blue-400 rounded-full opacity-3"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 
          className={`text-3xl md:text-4xl font-bold text-center mb-16 transition-all duration-1000 ${
            isVisible.process ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Here's How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {processSteps.map((step, index) => (
            <div 
              key={step.number}
              className={`text-center transition-all duration-1000 group ${
                isVisible.process ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={`w-16 md:w-20 h-16 md:h-20 bg-gradient-to-br from-accent-blue-500 to-accent-blue-600 text-white flex items-center justify-center text-2xl md:text-3xl font-bold mb-6 mx-auto transform transition-all duration-300 hover:scale-110 hover:shadow-lg border-2 border-accent-blue-400 rounded-lg ${
                index === 1 ? 'from-accent-orange-500 to-accent-orange-600 border-accent-orange-400' : ''
              }`}>
                {step.number}
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4">{step.title}</h3>
              <p className="text-gray-300 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;