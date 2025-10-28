import React from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { Award, Globe, Target, TrendingUp } from 'lucide-react';

const About = () => {
  const isVisible = useIntersectionObserver();

  const stats = [
    { number: '30+', label: 'Years Experience', icon: Award, gradient: 'from-primary-500 to-primary-600' },
    { number: '500+', label: 'Fortune Companies', icon: Globe, gradient: 'from-secondary-500 to-secondary-600' },
    { number: '∞', label: 'Doors Opened', icon: Target, gradient: 'from-accent-500 to-accent-600' }
  ];

  const achievements = [
    { title: 'J&R Music Legacy', desc: 'Built legendary retail partnerships' },
    { title: 'Fortune 500 Access', desc: 'Direct line to C-suite executives' },
    { title: 'Global Network', desc: 'Connections across continents' },
    { title: 'Proven Track Record', desc: '1000+ successful introductions' },
  ];

  return (
    <section id="about" className="py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-secondary-200/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary-100/20 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 border border-primary-200 rounded-full text-primary-700 text-sm font-semibold mb-6">
            <TrendingUp className="w-4 h-4" />
            The Connection Expert
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-playfair">
            Meet <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Marty Singer</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image side with creative design */}
          <div
            className={`transition-all duration-1000 ${
              isVisible.about ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative group">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-all duration-500 opacity-20"></div>
              <div className="absolute -inset-2 bg-gradient-to-tr from-accent-400 to-primary-400 rounded-3xl transform -rotate-2 group-hover:-rotate-4 transition-all duration-500 opacity-15"></div>

              {/* Main image */}
              <div className="relative bg-white p-3 rounded-3xl shadow-2xl">
                <img
                  src="/Marty.png"
                  alt="Marty Singer - Professional Headshot"
                  className="relative w-full h-auto object-contain rounded-2xl"
                />

                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-primary-600 to-secondary-600 text-white px-6 py-4 rounded-2xl shadow-xl transform group-hover:scale-110 transition-all duration-300">
                  <div className="text-3xl font-bold">30+</div>
                  <div className="text-sm font-medium">Years</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div
            className={`transition-all duration-1000 ${
              isVisible.about ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-playfair">
              Classic Vibes, <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Connected Lives</span>
            </h3>

            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              I'm Marty Singer, and I've spent <span className="font-semibold text-primary-700">four decades</span> mastering the art of opening doors.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From my legendary days at J&R Music & Computer World to building bridges across
              Fortune 500 boardrooms, I'm the connector who makes impossible introductions possible.
              Whether you need access to retail buyers, C-suite executives, or global markets,
              I'm your direct line to decision-makers who can say "yes" to your vision.
            </p>

            {/* Achievement cards */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br from-white to-gray-50 p-5 rounded-xl border border-gray-200 hover:border-primary-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                    isVisible.about ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="text-sm font-bold text-primary-600 mb-1">{achievement.title}</div>
                  <div className="text-xs text-gray-600">{achievement.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`group relative bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl border border-gray-200 hover:border-primary-300 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100/50 to-transparent rounded-3xl transform translate-x-8 -translate-y-8"></div>

              <div className="relative">
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.gradient} text-white flex items-center justify-center rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-5xl font-bold text-gray-900 mb-3 font-playfair">{stat.number}</div>
                <div className="text-lg text-gray-600 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;