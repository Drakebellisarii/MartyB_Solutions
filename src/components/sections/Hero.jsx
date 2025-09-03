import React from 'react';
import useTypewriter from '../../hooks/useTypewriter';
import useScrollPosition from '../../hooks/useScrollPosition';

const Hero = () => {
  const typedText = useTypewriter("Your Strategic Partner for Elite Business Connections");
  const scrollY = useScrollPosition();

  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-navy-50"></div>
      
      {/* Enhanced geometric pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-navy-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-navy-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-gray-200 to-transparent opacity-10"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 flex items-center justify-center min-h-screen">
        <div className="text-center space-y-8">
          
          {/* Enhanced main heading with improved typography */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight font-playfair">
              <span className="bg-gradient-to-r from-gray-800 via-navy-700 to-gray-800 bg-clip-text text-transparent drop-shadow-sm">
                Marty B Solutions
              </span>
            </h1>
            
            {/* Enhanced professional divider */}
            <div className="flex items-center justify-center space-x-6 py-6">
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-navy-400 to-navy-600"></div>
              <div className="w-3 h-3 bg-gradient-to-br from-navy-500 to-navy-600 rounded-full shadow-lg"></div>
              <div className="h-px w-20 bg-gradient-to-l from-transparent via-navy-400 to-navy-600"></div>
            </div>
          </div>

          {/* Enhanced professional tagline */}
          <div className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-medium text-gray-800 leading-relaxed max-w-3xl mx-auto">
              Executive Business Connections & Strategic Partnerships
            </h2>
            
            <p className="text-lg text-gray-600 font-normal max-w-2xl mx-auto">
              Connecting Fortune 500 executives with innovative opportunities through trusted relationships
            </p>
          </div>

          {/* Enhanced description */}
          <div className="max-w-4xl mx-auto space-y-6 pt-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-xl border border-gray-200">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                With over <span className="font-semibold text-gray-800">three decades</span> of experience, 
                I specialize in connecting Fortune 500 executives with strategic opportunities through 
                trusted relationships and proven networks.
              </p>
              
              <p className="text-base text-gray-600 leading-relaxed">
                My extensive network spans across industries, from established enterprises to 
                innovative startups, ensuring the right connections for your business objectives.
              </p>
            </div>
          </div>

          {/* Enhanced call-to-action */}
          <div className="pt-8 space-y-4">
            <p className="text-base text-gray-600 font-medium">
              Ready to explore strategic partnership opportunities?
            </p>
            <div className="inline-flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg border border-gray-200">
              <p className="text-gray-700 font-medium">Let's start the conversation</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;