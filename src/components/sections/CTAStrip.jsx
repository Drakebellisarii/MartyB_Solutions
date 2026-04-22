import React from 'react';
import { Link } from 'react-router-dom';

const CTAStrip = () => {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: '#050D1A' }}
      aria-label="Call to action — Get in touch"
    >
      {/* Gold top line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold-500 to-transparent" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(201,168,76,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.025) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Center glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(16,85,204,0.1) 0%, transparent 70%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 py-8 text-center">

        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="h-px w-10 bg-gradient-to-r from-transparent to-gold-500" />
          <span className="text-gold-500 text-xs font-inter font-semibold tracking-widest uppercase">
            Open Doors Today
          </span>
          <div className="h-px w-10 bg-gradient-to-l from-transparent to-gold-500" />
        </div>

        <h2 className="font-playfair font-bold text-2xl md:text-3xl lg:text-4xl text-white mb-2 leading-tight">
          Ready to Open{' '}
          <span style={{ color: '#C9A84C' }}>New Doors?</span>
        </h2>

        <p className="font-inter text-sm text-white/50 max-w-lg mx-auto leading-relaxed mb-5">
          One conversation with Marty can unlock a network that took 30 years to build.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-5">
          <Link
            to="/contact"
            className="px-7 py-3 font-inter font-semibold text-sm rounded-sm transition-colors duration-200"
            style={{ backgroundColor: '#C9A84C', color: '#050D1A', minWidth: '160px' }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#D4B96B'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#C9A84C'; }}
          >
            Send a Message
          </Link>
          <a
            href="tel:917-309-9905"
            className="px-7 py-3 font-inter font-medium text-sm rounded-sm border border-white/20 text-white hover:border-gold-500/50 hover:text-gold-400 transition-colors duration-200"
            style={{ minWidth: '160px' }}
          >
            Call Now
          </a>
        </div>

        {/* Contact details inline */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-inter text-white/35">
          <a href="tel:917-309-9905" className="hover:text-gold-400 transition-colors duration-200">917-309-9905</a>
          <span className="text-white/15">·</span>
          <a href="mailto:marty@martybsolutions.com" className="hover:text-gold-400 transition-colors duration-200">marty@martybsolutions.com</a>
          <span className="text-white/15">·</span>
          <span>New York City, NY</span>
        </div>
      </div>
    </section>
  );
};

export default CTAStrip;
