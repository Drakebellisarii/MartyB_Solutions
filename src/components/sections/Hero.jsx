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
      {/* Sophisticated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-accent-blue-50"></div>
      
      {/* Subtle geometric pattern overlay */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-blue-500 rounded-full blur-3xl"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 flex items-center justify-center min-h-screen">
        <div className="text-center space-y-8">
          

          {/* Main heading with enhanced typography */}
                                <div className="space-y-6">
             <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
               <span className="bg-gradient-to-r from-slate-800 via-accent-blue-700 to-slate-800 bg-clip-text text-transparent drop-shadow-sm">
                 Marty B Solutions
               </span>
             </h1>
             
             {/* Professional divider */}
             <div className="flex items-center justify-center space-x-6 py-6">
               <div className="h-px w-16 bg-gradient-to-r from-transparent via-accent-blue-400 to-accent-blue-600"></div>
               <div className="w-2 h-2 bg-accent-blue-600 rounded-full shadow-sm"></div>
               <div className="h-px w-16 bg-gradient-to-l from-transparent via-accent-blue-400 to-accent-blue-600"></div>
             </div>
           </div>

                     {/* Professional tagline */}
           <div className="space-y-8">
             <h2 className="text-2xl md:text-3xl font-medium text-slate-800 leading-relaxed max-w-3xl mx-auto">
               Executive Business Connections & Strategic Partnerships
             </h2>
             
             <p className="text-lg text-slate-600 font-normal max-w-2xl mx-auto">
               Connecting Fortune 500 executives with innovative opportunities through trusted relationships
             </p>
           </div>

                     {/* Enhanced description */}
           <div className="max-w-4xl mx-auto space-y-6 pt-8">
             <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-accent-blue-200">
               <p className="text-lg text-slate-700 leading-relaxed mb-4">
                 With over <span className="font-semibold text-slate-800">three decades</span> of experience, 
                 I specialize in connecting Fortune 500 executives with strategic opportunities through 
                 trusted relationships and proven networks.
               </p>
               
               <p className="text-base text-slate-600 leading-relaxed">
                 My extensive network spans across industries, from established enterprises to 
                 innovative startups, ensuring the right connections for your business objectives.
               </p>
             </div>
           </div>

                     {/* Call-to-action */}
           <div className="pt-8 space-y-4">
             <p className="text-base text-slate-600 font-medium">
               Ready to explore strategic partnership opportunities?
             </p>
           </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;