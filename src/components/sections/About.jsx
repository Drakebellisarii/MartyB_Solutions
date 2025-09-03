import React from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const About = () => {
  const isVisible = useIntersectionObserver();

  const stats = [
    { number: '40+', label: 'Years Experience', gradient: 'from-navy-500 to-navy-600' },
    { number: '500+', label: 'Fortune Companies', gradient: 'from-navy-500 to-navy-600' },
    { number: '∞', label: 'Doors Opened', gradient: 'from-navy-500 to-navy-600' }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-50 via-white to-navy-50 relative overflow-hidden">
      {/* Enhanced background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-navy-100 rounded-full opacity-10"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-navy-100 rounded-full opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-gray-200 to-transparent opacity-5"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div 
            className={`transition-all duration-1000 flex items-center justify-center ${
              isVisible.about ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-navy-200 via-gray-200 to-navy-200 rounded-2xl transform rotate-3 scale-105 opacity-20"></div>
              <img 
                src="/Marty.png" 
                alt="Marty Singer - Professional Headshot" 
                className="relative w-full max-w-md h-auto object-contain rounded-2xl shadow-2xl border-4 border-white bg-gradient-to-br from-gray-50 to-white p-6"
              />
            </div>
          </div>
          <div 
            className={`transition-all duration-1000 ${
              isVisible.about ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="inline-flex items-center space-x-3 mb-6">
              <div className="w-8 h-1 bg-gradient-to-r from-navy-400 to-navy-600 rounded-full"></div>
              <span className="text-gray-600 font-medium">About Marty</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-8 font-playfair">
              Classic Vibes, Connected Lives
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              I'm Marty Singer, and I've spent four decades mastering the art of opening doors. 
              From my legendary days at J&R Music & Computer World to building bridges across 
              Fortune 500 boardrooms, I'm the connector who makes impossible introductions possible.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className={`text-center p-6 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                    isVisible.about ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 200}ms` }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${stat.gradient} text-white flex items-center justify-center rounded-lg mx-auto mb-3 text-xl font-bold`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-700 text-sm md:text-base font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed">
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