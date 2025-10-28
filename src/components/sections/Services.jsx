import React, { useState } from 'react';
import { Store, Monitor, Users, Briefcase } from 'lucide-react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const FeaturedServices = () => {
  const isVisible = useIntersectionObserver();
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: 'retail',
      title: 'Retail Connections',
      icon: Store,
      description: 'Marty Singer has been connecting people, places, and excellent things for more than three decades. His expertise in retail has made him a sought after contact for both companies and manufacturers looking to increase their presence in their respective marketplace. His deep rooted network, as well as his innate ability to identify, address and solve problems has made him an asset to many top clients.',
      gradient: 'from-primary-500 to-primary-600',
      bgGradient: 'from-primary-500/10 to-primary-600/10',
      hoverGlow: 'hover:shadow-glow-sm'
    },
    {
      id: 'reputation',
      title: 'Online Reputation Management',
      icon: Monitor,
      description: 'With his clients\' best interests at heart, Marty is a natural at steering the conversation—both online and off. He helps clients take control of their reputations. After running the digital arms at J&R and Camrise DJI, he is fluent in e-commerce and social media, using the best of the web to connect clients and companies with their target audiences in meaningful ways.',
      gradient: 'from-secondary-500 to-secondary-600',
      bgGradient: 'from-secondary-500/10 to-secondary-600/10',
      hoverGlow: 'hover:shadow-glow-sm'
    },
    {
      id: 'executive',
      title: 'Executive Customer Affairs',
      icon: Users,
      description: 'Offering discreet assistance to VIPs of all walks of life (entertainers, politicians, CEOs, etc.), Marty has worked his quiet magic with some of the world\'s most famous people. At J&R, he cultivated lasting relationships with high-end corporate and celebrity clients. A natural problem solver, Marty easily ascertains customer needs and company realities. Spot-on instinct helps him find the perfect solutions.',
      gradient: 'from-accent-500 to-accent-600',
      bgGradient: 'from-accent-500/10 to-accent-600/10',
      hoverGlow: 'hover:shadow-glow-sm'
    }
  ];

  return (
    <section id="services" className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary-200/20 rounded-full blur-3xl animate-float"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 border border-primary-200 rounded-full text-primary-700 text-sm font-semibold mb-6">
            <Briefcase className="w-4 h-4" />
            Services That Deliver
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-playfair">
            How I Can <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Help You</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions tailored to elevate your business presence and strategic partnerships
          </p>
        </div>

        {/* Services cards */}
        <div className="space-y-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isActive = activeService === service.id;
            return (
              <div
                key={service.id}
                className={`group relative bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200 transition-all duration-500 hover:-translate-y-2 cursor-pointer ${service.hoverGlow} ${
                  isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setActiveService(service.id)}
                onMouseLeave={() => setActiveService(null)}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>

                <div className="relative flex flex-col lg:flex-row items-start lg:items-center gap-8">
                  {/* Icon */}
                  <div className={`relative w-20 h-20 bg-gradient-to-br ${service.gradient} text-white flex items-center justify-center rounded-2xl flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={36} />
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-playfair group-hover:text-primary-700 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>

                  {/* Arrow indicator */}
                  <div className="hidden lg:block">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-primary-100 transition-colors duration-300">
                      <svg className="w-6 h-6 text-gray-400 group-hover:text-primary-600 transform group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-primary-50 to-secondary-50 backdrop-blur-sm rounded-2xl px-8 py-6 border border-primary-200 shadow-lg">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center shadow-md">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <div className="text-gray-900 font-semibold text-lg">Need a custom solution?</div>
              <div className="text-gray-600 text-sm">Every client is unique - let's discuss your specific needs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;