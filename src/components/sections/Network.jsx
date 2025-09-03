import React, { useState } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { connections } from '../../data/connections';

const Network = () => {
  const isVisible = useIntersectionObserver();
  const [activeConnection, setActiveConnection] = useState(null);

  return (
    <section id="network" className="py-24 bg-gradient-to-br from-gray-50 via-white to-navy-50 relative overflow-hidden">
      {/* Enhanced background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-navy-100 rounded-full opacity-10"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-navy-100 rounded-full opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-gray-200 to-transparent opacity-5"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Enhanced header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-navy-500 to-navy-600 rounded-full mb-6 shadow-lg">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-navy-600 rounded-full"></div>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-playfair">
            My Network Spans
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-navy-400 to-navy-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Decades of connections across industries and continents
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {connections.map((connection, index) => {
            const gradients = [
              'from-navy-500 to-navy-600',
              'from-navy-500 to-navy-600',
              'from-navy-500 to-navy-600'
            ];
            const bgGradients = [
              'from-navy-50 to-navy-100',
              'from-navy-50 to-navy-100',
              'from-navy-50 to-navy-100'
            ];
            
            return (
              <div
                key={connection.id}
                className={`bg-gradient-to-br ${bgGradients[index % 3]} p-8 border border-gray-200 hover:border-navy-300 transition-all duration-500 transform hover:-translate-y-2 cursor-pointer shadow-lg hover:shadow-xl rounded-xl backdrop-blur-sm ${
                  isVisible.network ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setActiveConnection(connection.id)}
                onMouseLeave={() => setActiveConnection(null)}
              >
                <div 
                  className={`w-16 h-16 bg-gradient-to-br ${gradients[index % 3]} text-white flex items-center justify-center text-2xl mb-6 mx-auto transition-all duration-300 rounded-xl shadow-lg ${
                    activeConnection === connection.id ? 'scale-110 shadow-xl' : ''
                  }`}
                >
                  {connection.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center font-playfair">{connection.title}</h3>
                <p 
                  className={`text-gray-700 text-center transition-all duration-300 leading-relaxed ${
                    activeConnection === connection.id ? 'text-gray-800' : ''
                  }`}
                >
                  {connection.description}
                </p>
              </div>
            );
          })}
        </div>
        
        {/* Enhanced bottom section */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg border border-gray-200">
            <p className="text-gray-700 font-medium">Connecting worlds, creating opportunities</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Network;