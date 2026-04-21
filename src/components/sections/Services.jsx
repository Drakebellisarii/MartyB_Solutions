import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    num: '01',
    tagline: 'RETAIL & DISTRIBUTION',
    title: 'Retail\nConnections',
    description:
      "Marty Singer has been connecting people, places, and excellent things for more than three decades. His expertise in retail has made him a sought-after contact for companies and manufacturers looking to increase their presence in the marketplace. His deep-rooted network and innate ability to identify, address, and solve problems has made him an asset to many top clients.",
  },
  {
    num: '02',
    tagline: 'CONTROL YOUR NARRATIVE',
    title: 'Online Reputation\nManagement',
    description:
      "With his clients' best interests at heart, Marty is a natural at steering the conversation — both online and off. He helps clients take control of their reputations. After running the digital arms at J&R and Camrise DJI, he is fluent in e-commerce and social media, using the best of the web to connect clients and companies with their target audiences in meaningful ways.",
  },
  {
    num: '03',
    tagline: 'WHITE-GLOVE SERVICE FOR VIPs',
    title: 'Executive Customer\nAffairs',
    description:
      "Discreet assistance to VIPs of all walks of life — entertainers, politicians, CEOs — Marty has been trusted to handle their most sensitive and complex requests. His ability to navigate difficult situations with humor and competence has made him the go-to resource for those who demand the highest level of service and discretion.",
  },
];

const Services = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      id="services"
      style={{ backgroundColor: '#050D1A' }}
    >
      {/* Section header */}
      <div
        className="max-w-7xl mx-auto px-8 md:px-16 pt-20 pb-4"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
      >
        <div className="flex items-end justify-between">
          <div>
            <span
              className="text-xs font-inter font-semibold tracking-widest uppercase block mb-3"
              style={{ color: '#C9A84C' }}
            >
              What I Do
            </span>
            <h2
              className="font-playfair font-bold leading-none"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: '#FFFFFF', letterSpacing: '-0.03em' }}
            >
              Services
            </h2>
          </div>
          <p className="hidden md:block font-inter text-sm max-w-xs text-right pb-2" style={{ color: 'rgba(255,255,255,0.35)' }}>
            Three decades of New York connections, at your service
          </p>
        </div>
      </div>

      {/* Service rows */}
      {services.map((svc, i) => (
        <div
          key={svc.num}
          className="max-w-7xl mx-auto cursor-default"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
        >
          <div
            className="grid grid-cols-1 md:grid-cols-12 px-8 md:px-16 py-12 md:py-16 transition-colors duration-300"
            style={{ backgroundColor: hovered === i ? 'rgba(255,255,255,0.02)' : 'transparent' }}
          >
            {/* Number + tagline */}
            <div className="md:col-span-2 mb-4 md:mb-0 flex md:flex-col gap-3 md:gap-2">
              <span
                className="font-inter text-xs font-semibold tracking-widest"
                style={{ color: hovered === i ? '#C9A84C' : 'rgba(255,255,255,0.2)' }}
              >
                {svc.num}
              </span>
              <span
                className="font-inter text-xs tracking-widest uppercase hidden md:block"
                style={{ color: 'rgba(255,255,255,0.2)', marginTop: '1rem' }}
              >
                {svc.tagline}
              </span>
            </div>

            {/* Title */}
            <div className="md:col-span-5 mb-6 md:mb-0 md:pr-10">
              <h3
                className="font-playfair font-bold leading-none transition-colors duration-300"
                style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
                  color: hovered === i ? '#FFFFFF' : 'rgba(255,255,255,0.75)',
                  letterSpacing: '-0.02em',
                  whiteSpace: 'pre-line',
                }}
              >
                {svc.title}
              </h3>
            </div>

            {/* Description + CTA */}
            <div className="md:col-span-5">
              <p
                className="font-inter text-sm leading-relaxed mb-6"
                style={{ color: 'rgba(255,255,255,0.4)' }}
              >
                {svc.description}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 font-inter text-xs font-semibold tracking-widest uppercase transition-colors duration-200"
                style={{ color: hovered === i ? '#C9A84C' : 'rgba(255,255,255,0.25)' }}
              >
                Get in touch
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Bottom CTA */}
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-14">
        <Link
          to="/contact"
          className="inline-flex items-center gap-3 font-inter font-semibold text-sm transition-colors duration-200 group"
          style={{ color: 'rgba(255,255,255,0.35)' }}
          onMouseEnter={(e) => { e.currentTarget.style.color = '#C9A84C'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.35)'; }}
        >
          Ready to work together?
          <span style={{ color: '#C9A84C' }}>Start a conversation →</span>
        </Link>
      </div>
    </section>
  );
};

export default Services;
