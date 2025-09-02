import React from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const Contact = () => {
  const isVisible = useIntersectionObserver();

  const contactInfo = [
    { icon: '📞', title: 'Call Me', detail: '917-309-9905', color: 'accent-blue' },
    { icon: '✉️', title: 'Email', detail: 'marty@martybsolutions.com', color: 'accent-orange' }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Creative background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-40 h-40 bg-slate-500 rounded-full opacity-5 animate-float"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-accent-orange-500 rounded-full opacity-5 animate-float" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 
          className={`text-3xl md:text-4xl font-bold mb-8 transition-all duration-1000 ${
            isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Ready to Stop Knocking on Closed Doors?
        </h2>
        <p className="text-xl md:text-2xl mb-12 text-gray-300">
          Let's talk about opening the right ones instead.
        </p>
        
        <div 
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 transition-all duration-1000 max-w-2xl mx-auto ${
            isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {contactInfo.map((item, index) => (
            <div 
              key={item.title}
              className={`p-6 bg-gradient-to-br from-gray-700 to-gray-800 border-2 border-${item.color}-400 hover:border-${item.color}-300 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl rounded-lg group`}
            >
              <div className={`w-16 h-16 bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>
              <h4 className="text-lg md:text-xl font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-300">{item.detail}</p>
            </div>
          ))}
        </div>
        
        <button className="bg-gradient-to-r from-accent-orange-500 to-accent-orange-600 text-white px-8 md:px-12 py-3 md:py-4 text-lg md:text-xl hover:from-accent-orange-600 hover:to-accent-orange-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl border-2 border-accent-orange-400 hover:border-accent-orange-500 rounded-lg animate-glow">
          Schedule Your Strategy Session
        </button>
      </div>
    </section>
  );
};

export default Contact;