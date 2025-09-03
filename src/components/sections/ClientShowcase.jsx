import React from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { clients } from '../../data/clients';

const ClientShowcase = () => {
  const isVisible = useIntersectionObserver();

  return (
    <section id="success-stories" className="py-24 bg-gradient-to-br from-navy-50 via-white to-gray-50 relative overflow-hidden">
      {/* Enhanced background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-navy-100 rounded-full opacity-10"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-navy-100 rounded-full opacity-10"></div>
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
            Trusted by Industry Leaders
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-navy-400 to-navy-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discretion is key, but here are some names you might recognize
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {clients.map((client, index) => (
            <div 
              key={client}
              className={`bg-white/80 backdrop-blur-sm p-6 border border-gray-200 hover:border-navy-300 transition-all duration-500 text-center transform hover:-translate-y-2 shadow-lg hover:shadow-xl rounded-xl ${
                isVisible['success-stories'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`bg-gradient-to-br from-navy-50 to-navy-100 h-16 flex items-center justify-center text-sm text-navy-700 mb-4 rounded-lg border border-navy-200 font-medium`}>
                {client.split(' ')[0]}<br/>{client.split(' ').slice(1).join(' ')}
              </div>
              <p className="text-xs text-gray-500 font-medium">Industry Leader</p>
            </div>
          ))}
        </div>
        
        {/* Enhanced bottom section */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg border border-gray-200">
            <p className="text-gray-700 font-medium">Building bridges across industries</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientShowcase;