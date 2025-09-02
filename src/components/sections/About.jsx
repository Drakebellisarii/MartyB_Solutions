import React from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const About = () => {
  const isVisible = useIntersectionObserver();

  const stats = [
    { number: '40+', label: 'Years Experience', color: 'accent-blue' },
    { number: '500+', label: 'Fortune Companies', color: 'accent-blue' },
    { number: '∞', label: 'Doors Opened', color: 'accent-blue' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-accent-blue-50 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-32 h-32 bg-accent-blue-100 rounded-full opacity-10"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-accent-blue-100 rounded-full opacity-10"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div 
            className={`transition-all duration-1000 flex items-center justify-center ${
              isVisible.about ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <img 
              src="/Marty.png" 
              alt="Marty Singer - Professional Headshot" 
              className="w-full max-w-md h-auto object-contain rounded-xl shadow-xl border-4 border-accent-blue-200 bg-gradient-to-br from-accent-blue-50 to-white p-4"
            />
          </div>
          <div 
            className={`transition-all duration-1000 ${
              isVisible.about ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            Classic Vibes, Connected Lives
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              I'm Marty Singer, and I've spent four decades mastering the art of opening doors. 
              From my legendary days at J&R Music & Computer World to building bridges across 
              Fortune 500 boardrooms, I'm the connector who makes impossible introductions possible.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className={`text-center p-6 bg-white border-2 border-${stat.color}-200 rounded-lg shadow-md hover:shadow-lg transition-all duration-700 hover:-translate-y-1 ${
                    isVisible.about ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 200}ms` }}
                >
                  <div className={`text-2xl md:text-3xl font-bold text-${stat.color}-600 mb-2`}>{stat.number}</div>
                  <div className="text-gray-600 text-sm md:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you need access to retail buyers, C-suite executives, or global markets, 
              I'm your direct line to decision-makers who can say "yes" to your vision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;