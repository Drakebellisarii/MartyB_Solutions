import React from 'react';
import { Link } from 'react-router-dom';
import ScrollExpandMedia from '../ui/scroll-expansion-hero';

const HeroContent = () => (
  <div style={{ backgroundColor: '#050D1A' }}>
    <div
      className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12"
      style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
    >
      {/* Left: large pull quote */}
      <div
        className="md:col-span-7 py-16 md:py-20 px-8 md:px-16"
        style={{ borderRight: '1px solid rgba(255,255,255,0.08)' }}
      >
        <p
          className="font-playfair font-bold leading-tight text-white mb-10"
          style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em' }}
        >
          "Opening doors Fortune 500 executives{' '}
          <em className="not-italic" style={{ color: '#C9A84C' }}>
            can't find on their own
          </em>{' '}
          — through 30 years of trusted New York relationships."
        </p>

        <div className="flex items-center gap-6">
          <Link
            to="/contact"
            className="px-8 py-4 font-inter font-semibold text-sm tracking-wide transition-colors duration-200"
            style={{ backgroundColor: '#C9A84C', color: '#050D1A' }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#D4B96B'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#C9A84C'; }}
          >
            Get In Touch
          </Link>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="font-inter text-sm flex items-center gap-2 transition-colors duration-200"
            style={{ color: 'rgba(255,255,255,0.4)' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.8)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.4)'; }}
          >
            Learn more
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Right: bio + stats */}
      <div className="md:col-span-5 py-16 md:py-20 px-8 md:px-14">
        <p className="font-inter text-sm leading-relaxed mb-10" style={{ color: 'rgba(255,255,255,0.45)' }}>
          Marty Singer has spent three decades building one of New York's most trusted private networks — connecting entrepreneurs, executives, and entertainers with the people who can actually move the needle.
        </p>

        <div
          className="grid grid-cols-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          {[
            { value: '30+', label: 'Years' },
            { value: '1,000+', label: 'Connections' },
            { value: '100%', label: 'Discretion' },
          ].map((s, i) => (
            <div
              key={s.label}
              className="py-6 text-center"
              style={{ borderRight: i < 2 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}
            >
              <div className="font-playfair font-bold text-2xl" style={{ color: '#C9A84C' }}>
                {s.value}
              </div>
              <div className="font-inter text-xs mt-1 tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.3)' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <p className="font-inter text-xs tracking-widest uppercase mb-3" style={{ color: 'rgba(255,255,255,0.25)' }}>
            Connected with
          </p>
          <p className="font-inter text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
            Michael Bloomberg · Michael Jackson · Stevie Wonder · Harry Belafonte · Katie Couric · Terry Lundgren
          </p>
        </div>
      </div>
    </div>
  </div>
);

const Hero = () => (
  <section id="hero" aria-label="Hero — Marty B Solutions" style={{ backgroundColor: '#050D1A' }}>
    <ScrollExpandMedia
      mediaType="image"
      mediaSrc="/hero2.png"
      bgImageSrc="/Manhattan-USA.jpg"
      title="The Human Rolodex"
      name="Marty Singer"
      date="New York City · Est. 1990"
      scrollToExpand="Scroll to discover"
    >
      <HeroContent />
    </ScrollExpandMedia>
  </section>
);

export default Hero;
