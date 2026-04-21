import React from 'react';
import { Link } from 'react-router-dom';

const About = () => (
  <section id="about" className="overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
    <div className="grid grid-cols-1 md:grid-cols-12" style={{ minHeight: '85vh' }}>

      {/* Photo — bleeds from top, no frame, no border-radius */}
      <div className="relative md:col-span-5 overflow-hidden" style={{ minHeight: '480px' }}>
        <img
          src="/Marty.png"
          alt="Marty Singer"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'top center' }}
        />
        {/* Thin gold right border */}
        <div className="absolute top-0 right-0 bottom-0 w-px" style={{ backgroundColor: '#C9A84C' }} />
        {/* Bottom gradient to blend into next section */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{ background: 'linear-gradient(to top, rgba(255,255,255,0.15) 0%, transparent 100%)' }}
        />
      </div>

      {/* Editorial text column */}
      <div
        className="md:col-span-7 relative flex flex-col justify-center px-10 md:px-16 lg:px-24 py-20"
      >
        {/* Large watermark number — purely typographic */}
        <span
          className="absolute font-playfair font-bold leading-none select-none pointer-events-none"
          style={{
            fontSize: 'clamp(140px, 18vw, 240px)',
            color: '#F0F4F8',
            right: '-0.05em',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 0,
            letterSpacing: '-0.04em',
          }}
          aria-hidden="true"
        >
          30
        </span>

        <div className="relative" style={{ zIndex: 1 }}>
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-10">
            <div className="h-px w-8" style={{ backgroundColor: '#C9A84C' }} />
            <span
              className="text-xs font-inter font-semibold tracking-widest uppercase"
              style={{ color: '#C9A84C' }}
            >
              The Connector
            </span>
          </div>

          {/* Pull quote — the main typographic statement */}
          <h2
            className="font-playfair font-bold leading-none mb-10"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.25rem)',
              color: '#050D1A',
              letterSpacing: '-0.02em',
            }}
          >
            Four decades<br />
            mastering the art<br />
            of the introduction.
          </h2>

          <div className="h-px w-12 mb-10" style={{ backgroundColor: '#C9A84C' }} />

          <p className="font-inter text-base leading-relaxed mb-4 max-w-lg" style={{ color: '#4A5568' }}>
            Marty Singer built his reputation on the trading floor of{' '}
            <strong style={{ color: '#050D1A' }}>J&R Music &amp; Computer World</strong> — the legendary
            NYC destination where his talent for connection became legend.
          </p>
          <p className="font-inter text-base leading-relaxed mb-14 max-w-lg" style={{ color: '#718096' }}>
            Three decades later, he has direct access to Fortune 500 boardrooms, entertainment legends,
            and the full ecosystem of New York business. One call to Marty unlocks a network that took
            30 years to build.
          </p>

          {/* Stats — editorial horizontal rule style */}
          <div
            className="flex flex-wrap gap-10 mb-12 pt-10"
            style={{ borderTop: '1px solid #E2E8F0' }}
          >
            {[
              { value: '30+', label: 'Years in NYC' },
              { value: '1,000+', label: 'Introductions Made' },
              { value: '500+', label: 'Fortune Companies' },
            ].map((s) => (
              <div key={s.label}>
                <div
                  className="font-playfair font-bold"
                  style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#050D1A', letterSpacing: '-0.02em' }}
                >
                  {s.value}
                </div>
                <div
                  className="font-inter text-xs mt-1 tracking-widest uppercase"
                  style={{ color: '#A0AEC0' }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 font-inter font-semibold text-sm transition-colors duration-200"
            style={{ color: '#050D1A' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#C9A84C'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#050D1A'; }}
          >
            Connect with Marty
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default About;
