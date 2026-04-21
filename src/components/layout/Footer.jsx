import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 120);
    }
  };

  const services = [
    'Retail Connections',
    'Online Reputation Management',
    'Executive Customer Affairs',
    'Fortune 500 Introductions',
    'Strategic Partnerships',
    'Global Market Access',
  ];

  const quickLinks = [
    { label: 'About Marty', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Network', id: 'network' },
    { label: 'How It Works', id: 'process' },
    { label: 'Client Roster', id: 'clients' },
  ];

  return (
    <footer className="bg-navy-900 text-white" style={{ backgroundColor: '#050D1A' }}>
      {/* Gold top accent */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold-500 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-gradient-to-br from-gold-500 to-gold-600 rounded-sm flex items-center justify-center flex-shrink-0">
                <span className="text-navy-900 font-playfair font-bold text-base leading-none">M</span>
              </div>
              <div>
                <div className="text-white font-playfair font-semibold text-lg leading-none">Marty B Solutions</div>
                <div className="text-gold-500 text-xs font-inter tracking-widest uppercase mt-0.5">New York City</div>
              </div>
            </div>
            <p className="text-white/50 text-sm font-inter leading-relaxed mb-5">
              Business Broker · Facilitator · Connector.<br />
              30+ years opening doors others can't find.
            </p>
            <div className="flex items-center gap-3">
              {[
                { name: 'LinkedIn', url: 'https://linkedin.com/in/martysingernyc', path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
                { name: 'Facebook', url: 'https://www.facebook.com/martybsolutions/', path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
                { name: 'Instagram', url: 'https://www.instagram.com/martybsolutions/', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="w-8 h-8 flex items-center justify-center text-white/40 hover:text-gold-400 transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Services column */}
          <div>
            <h4 className="text-white font-inter font-semibold text-sm uppercase tracking-widest mb-5" style={{ color: '#C9A84C' }}>
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="text-white/50 hover:text-white text-sm font-inter transition-colors duration-200 text-left"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links column */}
          <div>
            <h4 className="text-white font-inter font-semibold text-sm uppercase tracking-widest mb-5" style={{ color: '#C9A84C' }}>
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <button
                    onClick={() => scrollToSection(l.id)}
                    className="text-white/50 hover:text-white text-sm font-inter transition-colors duration-200 text-left"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
              <li>
                <Link
                  to="/contact"
                  className="text-gold-500 hover:text-gold-400 text-sm font-inter transition-colors duration-200"
                >
                  Contact Marty →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h4 className="text-white font-inter font-semibold text-sm uppercase tracking-widest mb-5" style={{ color: '#C9A84C' }}>
              Connect
            </h4>
            <ul className="space-y-4">
              <li>
                <div className="text-white/40 text-xs font-inter uppercase tracking-wider mb-1">Phone</div>
                <a href="tel:917-309-9905" className="text-white/80 hover:text-gold-400 text-sm font-inter transition-colors duration-200">
                  917-309-9905
                </a>
              </li>
              <li>
                <div className="text-white/40 text-xs font-inter uppercase tracking-wider mb-1">Email</div>
                <a href="mailto:marty@martybsolutions.com" className="text-white/80 hover:text-gold-400 text-sm font-inter transition-colors duration-200 break-all">
                  marty@martybsolutions.com
                </a>
              </li>
              <li>
                <div className="text-white/40 text-xs font-inter uppercase tracking-wider mb-1">Location</div>
                <span className="text-white/80 text-sm font-inter">New York City, NY</span>
              </li>
              <li className="pt-2">
                <Link
                  to="/contact"
                  className="inline-block px-4 py-2.5 bg-gold-500 text-navy-900 text-sm font-inter font-semibold rounded-sm hover:bg-gold-400 transition-colors duration-200"
                >
                  Send a Message
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs font-inter">
            © 2026 Marty B Solutions. All rights reserved. · New York City
          </p>
          <p className="text-white/20 text-xs font-inter italic">
            "Your next big opportunity is in my network."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
