import React from 'react';
import { Link } from 'react-router-dom';
import NYCSkyline from '../ui/NYCSkyline';

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
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">

        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold-500" />
          <span className="text-gold-500 text-xs font-inter font-semibold tracking-widest uppercase">
            Open Doors Today
          </span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold-500" />
        </div>

        <h2 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight">
          Ready to Open<br />
          <span style={{ color: '#C9A84C' }}>New Doors?</span>
        </h2>

        <p className="font-inter text-xl text-white/50 max-w-2xl mx-auto leading-relaxed mb-10">
          One conversation with Marty can unlock a network that took 30 years to build. Let's talk about opening the right ones.
        </p>

        {/* Contact details inline */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10 text-sm font-inter text-white/50">
          <a href="tel:917-309-9905" className="flex items-center gap-2 hover:text-gold-400 transition-colors duration-200">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            917-309-9905
          </a>
          <span className="hidden sm:block text-white/20">·</span>
          <a href="mailto:marty@martybsolutions.com" className="flex items-center gap-2 hover:text-gold-400 transition-colors duration-200">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            marty@martybsolutions.com
          </a>
          <span className="hidden sm:block text-white/20">·</span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            New York City, NY
          </span>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="px-10 py-4 font-inter font-semibold text-base rounded-sm transition-colors duration-200 shadow-gold-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            style={{ backgroundColor: '#C9A84C', color: '#050D1A', minWidth: '200px' }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#D4B96B'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#C9A84C'; }}
          >
            Send a Message
          </Link>
          <a
            href="tel:917-309-9905"
            className="px-10 py-4 font-inter font-medium text-base rounded-sm border border-white/20 text-white hover:border-gold-500/50 hover:text-gold-400 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
            style={{ minWidth: '200px' }}
          >
            Call Now
          </a>
        </div>

        {/* Availability note */}
        <p className="font-inter text-xs text-white/30 mt-8 uppercase tracking-widest">
          Available 7 days a week · Responses within 24 hours
        </p>
      </div>

      {/* NYC Skyline at the very bottom */}
      <div className="relative z-10">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
        <NYCSkyline className="w-full block" opacity={0.6} />
      </div>
    </section>
  );
};

export default CTAStrip;
