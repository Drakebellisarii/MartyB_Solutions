import React from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const Contact = () => {
  const isVisible = useIntersectionObserver();

  const contactInfo = [
    { icon: '📞', title: 'Call Me', detail: '917-309-9905', gradient: 'from-navy-500 to-navy-600' },
    { icon: '✉️', title: 'Email', detail: 'marty@martybsolutions.com', gradient: 'from-navy-500 to-navy-600' }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white relative overflow-hidden">
      {/* Enhanced background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-navy-500 rounded-full opacity-5"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-navy-500 rounded-full opacity-5"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-navy-600 to-transparent opacity-10"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Enhanced header */}
        <div className="mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-navy-500 to-navy-600 rounded-full mb-6 shadow-lg">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-navy-600 rounded-full"></div>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">
            Ready to Stop Knocking on Closed Doors?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-navy-400 to-navy-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Let's talk about opening the right ones instead.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-2xl mx-auto">
          {contactInfo.map((item, index) => (
            <div 
              key={item.title}
              className={`p-8 bg-gradient-to-br from-navy-700/50 to-navy-800/50 border border-navy-600 hover:border-navy-400 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl rounded-xl backdrop-blur-sm group`}
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${item.gradient} rounded-full flex items-center justify-center text-3xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {item.icon}
              </div>
              <h4 className="text-xl font-semibold mb-3 text-white">{item.title}</h4>
              <p className="text-gray-300 text-lg">{item.detail}</p>
            </div>
          ))}
        </div>
        
        {/* Enhanced bottom section */}
        <div className="inline-flex items-center space-x-4 bg-navy-700/50 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg border border-navy-600">
          <p className="text-gray-200 font-medium">Your success story starts with a conversation</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;