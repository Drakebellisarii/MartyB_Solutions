import React from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { clients } from '../../data/clients';

const ClientShowcase = () => {
  const isVisible = useIntersectionObserver();

  return (
    <section id="success-stories" className="py-20 bg-gradient-to-br from-gray-50 via-accent-orange-50 to-gray-50 relative overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-32 h-32 bg-accent-blue-100 rounded-full opacity-20"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-accent-orange-100 rounded-full opacity-20"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 
          className={`text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 transition-all duration-1000 ${
            isVisible['success-stories'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Trusted by Industry Leaders
        </h2>
        <p className="text-xl text-center text-gray-600 mb-16">
          Discretion is key, but here are some names you might recognize
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {clients.map((client, index) => (
            <div 
              key={client}
              className={`bg-white p-4 md:p-6 border-2 border-gray-200 hover:border-accent-orange-300 transition-all duration-500 text-center transform hover:-translate-y-1 shadow-md hover:shadow-lg rounded-lg ${
                isVisible['success-stories'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`bg-gradient-to-br from-accent-blue-50 to-accent-blue-100 h-10 md:h-12 flex items-center justify-center text-xs md:text-sm text-accent-blue-700 mb-4 rounded border border-accent-blue-200 ${
                index % 3 === 1 ? 'from-accent-orange-50 to-accent-orange-100 text-accent-orange-700 border-accent-orange-200' : ''
              }`}>
                {client.split(' ')[0]}<br/>{client.split(' ').slice(1).join(' ')}
              </div>
              <p className="text-xs md:text-sm text-gray-500">Industry Leader</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientShowcase;