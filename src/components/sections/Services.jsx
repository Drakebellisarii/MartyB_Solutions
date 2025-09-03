import React, { useState } from 'react';
import { Store, Monitor, Users } from 'lucide-react';

// Mock hook for intersection observer (you'd replace with your actual hook)
const useIntersectionObserver = () => ({ services: true });

const FeaturedServices = () => {
  const isVisible = useIntersectionObserver();
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: 'retail',
      title: 'Retail',
      icon: Store,
      description: 'Marty Singer has been connecting people, places, and excellent things for more than three decades. His expertise in retail has made him a sought after contact for both companies and manufacturers looking to increase their presence in their respective marketplace. His deep rooted network, as well as his innate ability to identify, address and solve problems has made him an asset to many top clients.',
      gradient: 'from-navy-500 to-navy-600',
      bgGradient: 'from-navy-50 to-navy-100'
    },
    {
      id: 'reputation',
      title: 'Online Reputation Management',
      icon: Monitor,
      description: 'With his clients\' best interests at heart, Marty is a natural at steering the conversation—both online and off. He helps clients take control of their reputations. After running the digital arms at J&R and Camrise DJI, he is fluent in e-commerce and social media, using the best of the web to connect clients and companies with their target audiences in meaningful ways.',
      gradient: 'from-navy-500 to-navy-600',
      bgGradient: 'from-navy-50 to-navy-100'
    },
    {
      id: 'executive',
      title: 'Executive Customer Affairs',
      icon: Users,
      description: 'Offering discreet assistance to VIPs of all walks of life (entertainers, politicians, CEOs, etc.), Marty has worked his quiet magic with some of the world\'s most famous people. At J&R, he cultivated lasting relationships with high-end corporate and celebrity clients. A natural problem solver, Marty easily ascertains customer needs and company realities. Spot-on instinct helps him find the perfect solutions.',
      gradient: 'from-navy-500 to-navy-600',
      bgGradient: 'from-navy-50 to-navy-100'
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-navy-100 rounded-full opacity-10"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-navy-100 rounded-full opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-gray-200 to-transparent opacity-5"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Enhanced section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-navy-500 to-navy-600 rounded-full mb-6 shadow-lg">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-navy-600 rounded-full"></div>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-playfair">
            Featured Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-navy-400 to-navy-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions tailored to elevate your business presence and strategic partnerships
          </p>
        </div>

        {/* Enhanced services grid */}
        <div className="space-y-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={service.id} 
                className={`bg-gradient-to-br ${service.bgGradient} rounded-2xl p-8 md:p-10 shadow-lg border border-white/50 backdrop-blur-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1 group`}
              >
                <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-8">
                  {/* Enhanced icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} text-white flex items-center justify-center rounded-xl flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={28} />
                  </div>
                  
                  {/* Enhanced content */}
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 font-playfair">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {service.description}
                    </p>
                  </div>
                  
                  {/* Decorative element */}
                  <div className="hidden lg:block w-12 h-12 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex-shrink-0"></div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Enhanced bottom section */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg border border-gray-200">
            <p className="text-gray-700 font-medium">Trusted by industry leaders for over 30 years</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;