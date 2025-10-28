import React, { useEffect, useState } from 'react';
import useTypewriter from '../../hooks/useTypewriter';
import useScrollPosition from '../../hooks/useScrollPosition';
import { Sparkles, TrendingUp, Users, Zap } from 'lucide-react';

const Hero = () => {
  const typedText = useTypewriter("Where Vision Meets Opportunity");
  const scrollY = useScrollPosition();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-dark-900 via-primary-900 to-dark-900">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-20 -left-20 w-96 h-96 bg-primary-500/30 rounded-full blur-3xl animate-float"
          style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
        ></div>
        <div
          className="absolute bottom-20 -right-20 w-80 h-80 bg-secondary-500/20 rounded-full blur-3xl animate-float-slow"
          style={{ transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)` }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary-500/10 to-transparent animate-pulse-slow"></div>
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]"></div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary-300/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex items-center justify-center min-h-screen">
        <div className="text-center space-y-12 w-full">

          {/* Main heading */}
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight font-playfair">
              <span className="bg-gradient-to-r from-white via-primary-200 to-white bg-clip-text text-transparent drop-shadow-2xl leading-tight block">
                Marty B Solutions
              </span>
            </h1>

            {/* Typewriter effect */}
            <div className="h-12 flex items-center justify-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-primary-100 font-inter">
                {typedText}
                <span className="animate-pulse">|</span>
              </h2>
            </div>

            {/* Divider with glow */}
            <div className="flex items-center justify-center space-x-6 py-6">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary-400 to-primary-500 shadow-glow-sm"></div>
              <div className="relative">
                <div className="w-3 h-3 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full animate-glow"></div>
                <div className="absolute inset-0 w-3 h-3 bg-primary-400 rounded-full animate-ping"></div>
              </div>
              <div className="h-px w-24 bg-gradient-to-l from-transparent via-primary-400 to-primary-500 shadow-glow-sm"></div>
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Connecting Fortune 500 executives with groundbreaking opportunities through
            <span className="text-primary-300 font-medium"> 30+ years </span>
            of trusted relationships
          </p>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto pt-8 animate-scale-in">
            {[
              { icon: Users, title: 'Elite Network', desc: 'Fortune 500 connections' },
              { icon: TrendingUp, title: 'Proven Results', desc: '1000+ successful matches' },
              { icon: Zap, title: 'Fast Action', desc: '24-48 hour response' },
            ].map((feature, i) => (
              <div
                key={i}
                className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-glow-md"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                <div className="relative z-10">
                  <feature.icon className="w-10 h-10 text-primary-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 animate-fade-in-up">
            <button
              onClick={scrollToContact}
              className="group relative px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold rounded-full overflow-hidden shadow-glow-md hover:shadow-glow-lg transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">Start Your Journey</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto pt-12 border-t border-white/10 animate-fade-in">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-300 mb-2">30+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div className="text-center border-x border-white/10">
              <div className="text-4xl font-bold text-primary-300 mb-2">1000+</div>
              <div className="text-sm text-gray-400">Connections Made</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-300 mb-2">100%</div>
              <div className="text-sm text-gray-400">Client Satisfaction</div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;