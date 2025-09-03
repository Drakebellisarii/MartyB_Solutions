import React from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { processSteps } from '../../data/processSteps';

const Process = () => {
  const isVisible = useIntersectionObserver();

  return (
    <section id="process" className="py-24 bg-gradient-to-br from-navy-800 via-navy-900 to-navy-800 text-white relative overflow-hidden">
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Enhanced header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-navy-500 to-navy-600 rounded-full mb-6 shadow-lg">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-navy-600 rounded-full"></div>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">
            Here's How It Works
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-navy-400 to-navy-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A proven process that opens doors and creates opportunities
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {processSteps.map((step, index) => (
            <div 
              key={step.number}
              className={`text-center transition-all duration-1000 group ${
                isVisible.process ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={`w-20 h-20 bg-gradient-to-br from-navy-500 to-navy-600 text-white flex items-center justify-center text-3xl font-bold mb-8 mx-auto transform transition-all duration-300 hover:scale-110 hover:shadow-xl border-2 border-navy-400 rounded-xl`}>
                {step.number}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">{step.title}</h3>
              <p className="text-gray-300 leading-relaxed text-lg">{step.description}</p>
            </div>
          ))}
        </div>
        
        {/* Enhanced bottom section */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center space-x-4 bg-navy-700/50 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg border border-navy-600">
            <p className="text-gray-200 font-medium">Proven methodology, exceptional results</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;