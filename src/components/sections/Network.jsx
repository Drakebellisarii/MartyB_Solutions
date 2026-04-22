import React from 'react';
import { Link } from 'react-router-dom';
import ParticlesBg from '../ui/particles-bg';

const connections = [
  {
    id: 'fortune500',
    title: 'Fortune 500',
    desc: "C-suite executives and decision-makers across America's largest corporations",
    size: 'featured',
  },
  {
    id: 'entertainment',
    title: 'Entertainment',
    desc: 'A-list contacts in music, media, television, and the performing arts',
    size: 'tall',
  },
  {
    id: 'retail',
    title: 'Retail Giants',
    desc: 'Major buyers and merchandising partners in national and global retail chains',
    size: 'standard',
  },
  {
    id: 'startups',
    title: 'Startups & Innovators',
    desc: 'Growth-ready entrepreneurs seeking the introductions that change everything',
    size: 'standard',
  },
  {
    id: 'global',
    title: 'Global Markets',
    desc: 'International partners and cross-border opportunities on every continent',
    size: 'standard',
  },
];

const cardBase = {
  backgroundColor: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.07)',
  backdropFilter: 'blur(8px)',
};

const Network = () => (
  <section
    id="network"
    className="py-20 lg:py-28 relative overflow-hidden"
    style={{ backgroundColor: '#0A1628' }}
  >
    <ParticlesBg />

    <div className="max-w-7xl mx-auto px-8 md:px-16 relative z-10">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
        <div>
          <span className="text-xs font-inter font-semibold tracking-widest uppercase block mb-3" style={{ color: '#C9A84C' }}>
            The Network
          </span>
          <h2
            className="font-playfair font-bold leading-none"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: '#FFFFFF', letterSpacing: '-0.03em' }}
          >
            Decades of<br />relationships.
          </h2>
        </div>
        <p className="hidden md:block font-inter text-sm max-w-xs text-right" style={{ color: 'rgba(255,255,255,0.35)' }}>
          Across industries, continents, and Fortune 500 boardrooms — all accessible through one call.
        </p>
      </div>

      {/* Bento grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 mb-10">

        {/* Fortune 500 — featured large left */}
        <div
          className="md:col-span-7 p-8 md:p-10 rounded-sm group cursor-default transition-colors duration-300"
          style={{ ...cardBase, minHeight: '220px' }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.35)'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.07)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.04)'; }}
        >
          <div className="flex items-start justify-between mb-auto">
            <span className="text-xs font-inter tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.25)' }}>01</span>
            <span className="font-playfair italic text-white/20 text-5xl leading-none">F</span>
          </div>
          <div className="mt-8">
            <h3 className="font-playfair font-bold text-3xl md:text-4xl text-white mb-3 group-hover:text-gold-400 transition-colors duration-200" style={{ letterSpacing: '-0.02em' }}>
              Fortune 500
            </h3>
            <p className="font-inter text-sm" style={{ color: 'rgba(255,255,255,0.4)', maxWidth: '360px' }}>
              C-suite executives and decision-makers across America's largest corporations — direct relationships built over three decades.
            </p>
          </div>
        </div>

        {/* Entertainment — tall right */}
        <div
          className="md:col-span-5 p-8 rounded-sm group cursor-default transition-colors duration-300"
          style={{ ...cardBase }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.35)'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.07)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.04)'; }}
        >
          <span className="text-xs font-inter tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.25)' }}>02</span>
          <h3 className="font-playfair font-bold text-2xl text-white mt-8 mb-3 group-hover:text-gold-400 transition-colors duration-200">Entertainment</h3>
          <p className="font-inter text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
            A-list contacts in music, media, television, and the performing arts.
          </p>
        </div>

        {/* Three equal cards — second row */}
        {connections.slice(2, 5).map((conn, i) => (
          <div
            key={conn.id}
            className="md:col-span-4 p-7 rounded-sm group cursor-default transition-colors duration-300"
            style={{ ...cardBase }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.35)'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.07)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.04)'; }}
          >
            <span className="text-xs font-inter tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.25)' }}>0{i + 3}</span>
            <h3 className="font-playfair font-bold text-xl text-white mt-6 mb-2 group-hover:text-gold-400 transition-colors duration-200">{conn.title}</h3>
            <p className="font-inter text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>{conn.desc}</p>
          </div>
        ))}

      </div>

      {/* Stats strip */}
      <div
        className="grid grid-cols-3 rounded-sm overflow-hidden"
        style={{ border: '1px solid rgba(255,255,255,0.07)' }}
      >
        {[
          { value: '∞', label: 'Connections' },
          { value: '24/7', label: 'Available' },
          { value: '100%', label: 'Discretion' },
        ].map((s, i) => (
          <div
            key={s.label}
            className="py-6 text-center"
            style={{
              backgroundColor: 'rgba(17,35,71,0.8)',
              borderRight: i < 2 ? '1px solid rgba(255,255,255,0.07)' : 'none',
            }}
          >
            <div className="font-playfair font-bold text-3xl mb-1" style={{ color: '#C9A84C' }}>{s.value}</div>
            <div className="font-inter text-xs tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.3)' }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-7 py-3.5 font-inter font-semibold text-sm transition-all duration-200 hover:scale-105"
          style={{ backgroundColor: '#C9A84C', color: '#050D1A' }}
        >
          Tap Into This Network
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  </section>
);

export default Network;
