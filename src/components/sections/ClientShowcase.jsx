import React from 'react';
import { Link } from 'react-router-dom';

const names = [
  'Michael Jackson', 'Michael Bloomberg', 'Herbie Hancock', 'Harry Belafonte',
  'Stevie Wonder', 'Scott Stringer', 'Neil Young', 'Katie Couric',
  'Julie Banderas', 'B.B. King', 'Terry Lundgren', 'Regis Philbin',
  'Mike Woods', 'Cousin Brucie', 'Joan Hamburg', 'Marvin Scott',
  'Joe Perry', 'Brad Whitford',
];

const marqueeContent = [...names, ...names];

const ClientShowcase = () => (
  <section id="clients" style={{ backgroundColor: '#F7F9FC' }}>

    {/* Top rule */}
    <div className="h-px w-full" style={{ background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.3), transparent)' }} />

    {/* Section label */}
    <div className="max-w-7xl mx-auto px-8 md:px-16 pt-16 pb-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-px w-8" style={{ backgroundColor: '#C9A84C' }} />
          <span className="text-xs font-inter font-semibold tracking-widest uppercase" style={{ color: '#C9A84C' }}>
            Trusted By
          </span>
        </div>
        <span className="font-inter text-xs tracking-widest uppercase" style={{ color: '#A0AEC0' }}>
          A few familiar names
        </span>
      </div>
    </div>

    {/* Infinite marquee */}
    <div className="overflow-hidden py-4" style={{ borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
      <div className="flex animate-marquee" style={{ width: 'max-content' }}>
        {marqueeContent.map((name, i) => (
          <div key={i} className="flex items-center flex-shrink-0">
            <span
              className="font-playfair font-bold text-xl md:text-2xl px-8 whitespace-nowrap"
              style={{ color: i % 2 === 0 ? '#050D1A' : '#A0AEC0' }}
            >
              {name}
            </span>
            <span className="text-gold-500 font-inter" style={{ color: '#C9A84C', fontSize: '0.6rem' }}>◆</span>
          </div>
        ))}
      </div>
    </div>

    {/* Editorial two-column: quote + stats */}
    <div
      className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 px-8 md:px-16 py-20 gap-12 md:gap-0"
    >
      {/* Quote */}
      <div
        className="md:col-span-6 md:pr-16"
        style={{ borderRight: 'none' }}
      >
        <p
          className="font-playfair italic leading-snug mb-8"
          style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: '#050D1A', letterSpacing: '-0.01em' }}
        >
          "Your next big opportunity is already in my network."
        </p>
        <p className="font-inter text-sm mb-8" style={{ color: '#A0AEC0' }}>— Marty Singer</p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-6 py-3.5 font-inter font-semibold text-sm transition-colors duration-200"
          style={{ backgroundColor: '#050D1A', color: '#C9A84C' }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#0A1628'; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#050D1A'; }}
        >
          Join This Network
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>

      {/* Stats — editorial vertical list */}
      <div
        className="md:col-span-6 md:pl-16 flex flex-col justify-center gap-0"
        style={{ borderLeft: '1px solid #E2E8F0' }}
      >
        {[
          { value: '500+', label: 'Fortune Companies' },
          { value: '1,000+', label: 'Successful Connections' },
          { value: '30+', label: 'Years of Trust' },
        ].map((s, i) => (
          <div
            key={s.label}
            className="flex items-center justify-between py-7"
            style={{ borderBottom: i < 2 ? '1px solid #E2E8F0' : 'none' }}
          >
            <span className="font-inter text-sm" style={{ color: '#A0AEC0' }}>{s.label}</span>
            <span
              className="font-playfair font-bold"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#050D1A', letterSpacing: '-0.02em' }}
            >
              {s.value}
            </span>
          </div>
        ))}
      </div>
    </div>

    {/* Bottom rule */}
    <div className="h-px w-full" style={{ background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.3), transparent)' }} />
  </section>
);

export default ClientShowcase;
