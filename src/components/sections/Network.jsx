import React, { useState } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { connections } from '../../data/connections';

const Network = () => {
  const isVisible = useIntersectionObserver();
  const [activeConnection, setActiveConnection] = useState(null);

  return (
    <section id="network" className="py-20 bg-gradient-to-br from-gray-50 via-accent-blue-50 to-gray-50 relative overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-40 h-40 bg-accent-blue-100 rounded-full opacity-20"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-accent-blue-100 rounded-full opacity-20"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 
          className={`text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16 transition-all duration-1000 ${
            isVisible.network ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          My Network Spans
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {connections.map((connection, index) => (
            <div
              key={connection.id}
              className={`bg-white p-6 md:p-8 border-2 border-gray-200 hover:border-accent-blue-300 transition-all duration-500 transform hover:-translate-y-2 cursor-pointer shadow-md hover:shadow-xl rounded-lg ${
                isVisible.network ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setActiveConnection(connection.id)}
              onMouseLeave={() => setActiveConnection(null)}
            >
              <div 
                className={`w-16 h-16 bg-gradient-to-br from-accent-blue-500 to-accent-blue-600 text-white flex items-center justify-center text-2xl mb-6 mx-auto transition-all duration-300 rounded-lg shadow-md ${
                  activeConnection === connection.id ? 'scale-110 shadow-lg' : ''
                } ${
                  index % 3 === 1 ? 'from-accent-orange-500 to-accent-orange-600' : ''
                }`}
              >
                {connection.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">{connection.title}</h3>
              <p 
                className={`text-gray-600 text-center transition-all duration-300 ${
                  activeConnection === connection.id ? 'text-gray-800' : ''
                }`}
              >
                {connection.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Network;