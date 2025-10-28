import React, { useState } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { connections } from '../../data/connections';
import { Network as NetworkIcon, Sparkles } from 'lucide-react';

const Network = () => {
  const isVisible = useIntersectionObserver();
  const [activeConnection, setActiveConnection] = useState(null);

  const gradients = [
    { bg: 'from-primary-500 to-primary-600', card: 'from-primary-50 to-primary-100', hover: 'hover:border-primary-400' },
    { bg: 'from-secondary-500 to-secondary-600', card: 'from-secondary-50 to-secondary-100', hover: 'hover:border-secondary-400' },
    { bg: 'from-accent-500 to-accent-600', card: 'from-accent-50 to-accent-100', hover: 'hover:border-accent-400' },
  ];

  return (
    <section id="network" className="py-32 bg-gradient-to-br from-dark-900 via-primary-950 to-dark-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary-500/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full text-primary-300 text-sm font-semibold mb-6 backdrop-blur-sm">
            <NetworkIcon className="w-4 h-4" />
            Global Connections
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 font-playfair">
            <span className="bg-gradient-to-r from-white via-primary-200 to-white bg-clip-text text-transparent">
              My Network Spans
            </span>
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary-400"></div>
            <Sparkles className="w-5 h-5 text-primary-400" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary-400"></div>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Decades of connections across industries, continents, and Fortune 500 boardrooms
          </p>
        </div>

        {/* Connection cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {connections.map((connection, index) => {
            const theme = gradients[index % 3];
            return (
              <div
                key={connection.id}
                className={`group relative bg-white/5 backdrop-blur-md border border-white/10 ${theme.hover} p-8 rounded-3xl cursor-pointer transition-all duration-500 hover:scale-105 hover:bg-white/10 ${
                  isVisible.network ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setActiveConnection(connection.id)}
                onMouseLeave={() => setActiveConnection(null)}
              >
                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${theme.card} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>

                <div className="relative">
                  {/* Icon */}
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${theme.bg} text-white flex items-center justify-center text-3xl mb-6 mx-auto rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 ${
                      activeConnection === connection.id ? 'animate-glow' : ''
                    }`}
                  >
                    {connection.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 text-center font-playfair group-hover:text-primary-300 transition-colors duration-300">
                    {connection.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-center leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {connection.description}
                  </p>

                  {/* Decorative corner */}
                  <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-white/5 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Connecting lines visualization */}
        <div className="relative py-16 mb-16">
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <svg className="w-full h-64" viewBox="0 0 800 200">
              <path
                d="M 100 100 Q 200 50 300 100 T 500 100 T 700 100"
                stroke="url(#gradient1)"
                strokeWidth="2"
                fill="none"
                className="animate-pulse-slow"
              />
              <path
                d="M 100 120 Q 200 70 300 120 T 500 120 T 700 120"
                stroke="url(#gradient2)"
                strokeWidth="2"
                fill="none"
                className="animate-pulse-slow"
                style={{ animationDelay: '1s' }}
              />
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0c93eb" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#d946ef" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#0c93eb" stopOpacity="0.2" />
                </linearGradient>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f97316" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#0c93eb" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#f97316" stopOpacity="0.2" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="relative text-center">
            <div className="inline-flex items-center gap-6 bg-gradient-to-r from-primary-600/20 via-secondary-600/20 to-accent-600/20 backdrop-blur-md rounded-full px-10 py-6 border border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-300 mb-1">∞</div>
                <div className="text-xs text-gray-400">Connections</div>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-300 mb-1">24/7</div>
                <div className="text-xs text-gray-400">Available</div>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-300 mb-1">100%</div>
                <div className="text-xs text-gray-400">Trusted</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-primary-600/10 to-secondary-600/10 backdrop-blur-md rounded-2xl px-8 py-6 border border-white/10">
            <NetworkIcon className="w-8 h-8 text-primary-400" />
            <div className="text-left">
              <div className="text-white font-semibold text-lg">Ready to tap into this network?</div>
              <div className="text-gray-400 text-sm">Let's connect and unlock new opportunities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Network;