import React from 'react';
import { Link } from 'react-router-dom';

const steps = [
  {
    num: '01',
    title: 'Get to Know You',
    description:
      "We dive deep into your business, your goals, and what you're truly trying to accomplish. Every great connection starts with genuine understanding.",
  },
  {
    num: '02',
    title: 'Identify the Right Doors',
    description:
      "I pinpoint exactly where my network can move the needle for you — the right buyers, executives, or partners who can say \"yes\" to your vision.",
  },
  {
    num: '03',
    title: 'Make the Introduction',
    description:
      "You walk away with the right introductions, a clear path forward, and the confidence that comes from knowing the right people are now in your corner.",
  },
];

const Process = () => (
  <section
    id="process"
    className="overflow-hidden"
    style={{ backgroundColor: '#FFFFFF' }}
  >
    {/* Section header — full width dark bar */}
    <div
      className="px-8 md:px-16 py-14 md:py-20"
      style={{ borderBottom: '1px solid #E2E8F0' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <span className="text-xs font-inter font-semibold tracking-widest uppercase block mb-3" style={{ color: '#C9A84C' }}>
            How It Works
          </span>
          <h2
            className="font-playfair font-bold leading-none"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: '#050D1A', letterSpacing: '-0.03em' }}
          >
            Simple.<br />Proven.<br />Effective.
          </h2>
        </div>
        <p className="font-inter text-sm max-w-xs md:text-right" style={{ color: '#A0AEC0' }}>
          30+ years refined into three steps that open the right doors every time.
        </p>
      </div>
    </div>

    {/* Staircase steps */}
    <div className="max-w-7xl mx-auto px-8 md:px-16 py-20">
      {steps.map((step, i) => (
        <div
          key={step.num}
          className="relative mb-0"
          style={{
            paddingLeft: `${i * 6}rem`,
            paddingBottom: i < steps.length - 1 ? '0' : '0',
          }}
        >
          {/* Connector line to next step */}
          {i < steps.length - 1 && (
            <div
              className="absolute left-0 pointer-events-none"
              style={{
                top: '100%',
                left: `calc(${i * 6}rem + 1.5rem)`,
                width: '1px',
                height: '3rem',
                background: 'linear-gradient(to bottom, #E2E8F0, transparent)',
              }}
            />
          )}

          <div
            className="grid grid-cols-1 md:grid-cols-12 py-12 md:py-14 gap-6 md:gap-0"
            style={{ borderTop: '1px solid #E2E8F0' }}
          >
            {/* Step number — giant, faded */}
            <div className="md:col-span-2 flex items-start">
              <span
                className="font-playfair font-bold leading-none select-none"
                style={{
                  fontSize: 'clamp(3rem, 6vw, 5rem)',
                  color: i === 0 ? '#050D1A' : '#E2E8F0',
                  letterSpacing: '-0.04em',
                }}
              >
                {step.num}
              </span>
            </div>

            {/* Title */}
            <div className="md:col-span-4 flex items-start">
              <h3
                className="font-playfair font-bold leading-tight"
                style={{
                  fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                  color: '#050D1A',
                  letterSpacing: '-0.01em',
                }}
              >
                {step.title}
              </h3>
            </div>

            {/* Description */}
            <div className="md:col-span-6 flex items-start">
              <p className="font-inter text-base leading-relaxed" style={{ color: '#718096' }}>
                {step.description}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* CTA row */}
      <div
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-12 mt-4 gap-4"
        style={{ borderTop: '1px solid #E2E8F0' }}
      >
        <p className="font-inter text-sm" style={{ color: '#A0AEC0' }}>
          One conversation can change everything.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-7 py-3.5 font-inter font-semibold text-sm transition-colors duration-200"
          style={{ backgroundColor: '#050D1A', color: '#C9A84C' }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#0A1628'; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#050D1A'; }}
        >
          Let's Talk
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  </section>
);

export default Process;
