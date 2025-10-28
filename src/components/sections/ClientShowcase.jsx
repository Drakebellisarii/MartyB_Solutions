import React from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { clients } from '../../data/clients';
import { Star, Award } from 'lucide-react';

const ClientShowcase = () => {
  const isVisible = useIntersectionObserver();

  return (
    <section id="success-stories" className="py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-accent-200/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-primary-200/20 rounded-full blur-3xl animate-float-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent-50 border border-accent-200 rounded-full text-accent-700 text-sm font-semibold mb-6">
            <Award className="w-4 h-4" />
            Trusted Partners
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-playfair">
            Connections That <span className="bg-gradient-to-r from-accent-600 to-primary-600 bg-clip-text text-transparent">Matter</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-500 to-primary-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discretion is key, but here are some names you might recognize
          </p>
        </div>

        {/* Client grid with modern cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {clients.map((client, index) => (
            <div
              key={client}
              className={`group relative bg-white p-6 border-2 border-gray-200 hover:border-primary-400 transition-all duration-500 text-center transform hover:-translate-y-2 shadow-lg hover:shadow-2xl rounded-2xl ${
                isVisible['success-stories'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-accent-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

              <div className="relative">
                {/* Client name */}
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 h-16 flex items-center justify-center text-sm text-gray-800 mb-4 rounded-xl border border-gray-200 group-hover:border-primary-300 font-semibold transition-colors duration-300">
                  {client.split(' ')[0]}
                  <br />
                  {client.split(' ').slice(1).join(' ')}
                </div>

                {/* Badge */}
                <div className="flex items-center justify-center gap-1">
                  <Star className="w-3 h-3 text-accent-500 fill-accent-500" />
                  <p className="text-xs text-gray-600 font-medium">Industry Leader</p>
                </div>

                {/* Corner decoration */}
                <div className="absolute top-2 right-2 w-8 h-8 bg-gradient-to-br from-primary-100/50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="bg-gradient-to-r from-primary-50 via-secondary-50 to-accent-50 rounded-3xl p-8 border border-gray-200 shadow-xl mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { value: '500+', label: 'Fortune Companies', icon: Award },
              { value: '1000+', label: 'Successful Connections', icon: Star },
              { value: '30+', label: 'Years of Trust', icon: Award },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-3">
                  <stat.icon className="w-6 h-6 text-primary-600 mr-2" />
                  <div className="text-4xl font-bold text-gray-900 font-playfair">{stat.value}</div>
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom message */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-accent-50 to-primary-50 backdrop-blur-sm rounded-2xl px-8 py-6 border border-accent-200 shadow-lg">
            <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-primary-500 rounded-full flex items-center justify-center shadow-md">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <div className="text-gray-900 font-semibold text-lg">Join This Elite Network</div>
              <div className="text-gray-600 text-sm">Your next big opportunity awaits</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientShowcase;