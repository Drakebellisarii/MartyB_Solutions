import React from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { Phone, Mail, MessageCircle, Send } from 'lucide-react';

const Contact = () => {
  const isVisible = useIntersectionObserver();

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Me',
      detail: '917-309-9905',
      gradient: 'from-primary-500 to-primary-600',
      link: 'tel:917-309-9905'
    },
    {
      icon: Mail,
      title: 'Email Me',
      detail: 'marty@martybsolutions.com',
      gradient: 'from-secondary-500 to-secondary-600',
      link: 'mailto:marty@martybsolutions.com'
    }
  ];

  return (
    <section id="contact" className="py-32 bg-gradient-to-br from-dark-900 via-primary-950 to-dark-900 text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary-500/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        {/* Header */}
        <div className="mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full text-primary-300 text-sm font-semibold mb-6 backdrop-blur-sm">
            <MessageCircle className="w-4 h-4" />
            Let's Connect
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 font-playfair">
            <span className="bg-gradient-to-r from-white via-primary-200 to-white bg-clip-text text-transparent">
              Ready to Open New Doors?
            </span>
          </h2>
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-primary-400"></div>
            <div className="w-3 h-3 bg-primary-400 rounded-full animate-pulse"></div>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-primary-400"></div>
          </div>
          <p className="text-2xl md:text-3xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Let's talk about opening the <span className="text-primary-300 font-medium">right ones</span> instead.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-3xl mx-auto">
          {contactInfo.map((item, index) => (
            <a
              key={item.title}
              href={item.link}
              className={`group relative p-10 bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-lg rounded-3xl ${
                isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>

              <div className="relative">
                {/* Icon */}
                <div className={`w-20 h-20 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  <item.icon className="w-10 h-10 text-white" />
                </div>

                {/* Title */}
                <h4 className="text-2xl font-bold mb-4 text-white group-hover:text-primary-300 transition-colors font-playfair">
                  {item.title}
                </h4>

                {/* Detail */}
                <p className="text-lg text-gray-400 group-hover:text-gray-300 transition-colors mb-6">
                  {item.detail}
                </p>

                {/* Action indicator */}
                <div className="flex items-center justify-center gap-2 text-sm text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Send className="w-4 h-4" />
                  <span>Get in touch</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA Box */}
        <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-10 border border-white/10 shadow-2xl max-w-2xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-3xl"></div>
          <div className="relative">
            <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 font-playfair">
              Your Success Story Starts Here
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Whether you're looking to break into retail, manage your reputation, or connect with C-suite executives,
              I'm here to help. One conversation could change everything.
            </p>
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full text-white font-semibold shadow-glow-md">
              <Phone className="w-5 h-5" />
              <span>Available 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;