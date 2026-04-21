import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useScrollPosition from '../../hooks/useScrollPosition';

const Header = () => {
  const scrollY = useScrollPosition();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const navItems = [
    { name: 'About', href: 'about' },
    { name: 'Services', href: 'services' },
    { name: 'Network', href: 'network' },
    { name: 'Process', href: 'process' },
    { name: 'Clients', href: 'clients' },
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/martysingernyc',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      )
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/martybsolutions/',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      )
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/martybsolutions/',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      )
    },
  ];

  useEffect(() => {
    if (!isHomePage) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' }
    );
    document.querySelectorAll('section[id]').forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [isHomePage]);

  const scrollToSection = (id) => {
    if (!isHomePage) {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) {
        const offset = el.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: offset, behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const isScrolled = scrollY > 40;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-navy-800/98 backdrop-blur-xl shadow-blue-lg border-b border-white/8'
          : 'bg-navy-900/80 backdrop-blur-md'
      }`}
      style={{ borderBottomColor: isScrolled ? 'rgba(201,168,76,0.15)' : 'transparent' }}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4" role="navigation" aria-label="Main navigation">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-gold-500 focus-visible:outline-offset-2 rounded-sm"
          >
            <div className="w-9 h-9 bg-gradient-to-br from-gold-500 to-gold-600 rounded-sm flex items-center justify-center shadow-gold-sm flex-shrink-0">
              <span className="text-navy-900 font-playfair font-bold text-base leading-none select-none">M</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-white font-playfair font-semibold text-lg leading-none tracking-wide">
                Marty B Solutions
              </div>
              <div className="text-gold-500 text-xs font-inter tracking-widest uppercase mt-0.5">
                New York City
              </div>
            </div>
          </Link>

          {/* Desktop Nav — centered */}
          <ul className="hidden lg:flex items-center gap-1" role="list">
            {navItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-4 py-2 text-sm font-inter font-medium rounded-sm transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-gold-500 focus-visible:outline-offset-2 ${
                    activeSection === item.href && isHomePage
                      ? 'text-gold-400'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.name}
                  {activeSection === item.href && isHomePage && (
                    <span className="absolute bottom-0 left-4 right-4 h-px bg-gold-500" />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Right side — socials + CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-white/50 hover:text-gold-400 transition-colors duration-200 rounded-sm focus-visible:outline-2 focus-visible:outline-gold-500 focus-visible:outline-offset-2"
                aria-label={s.name}
              >
                {s.icon}
              </a>
            ))}
            <Link
              to="/contact"
              className="ml-2 px-5 py-2.5 bg-gold-500 text-navy-900 text-sm font-inter font-semibold rounded-sm hover:bg-gold-400 transition-colors duration-200 shadow-gold-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              style={{ letterSpacing: '0.02em' }}
            >
              Get In Touch
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white/80 hover:text-white transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-gold-500 focus-visible:outline-offset-2 rounded-sm"
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className={`block h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`block h-0.5 bg-current transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile dropdown */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-[480px] mt-4' : 'max-h-0'
          }`}
        >
          <div className="py-4 bg-navy-700/95 backdrop-blur-md rounded-sm border border-white/8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-6 py-3 text-sm font-inter font-medium text-white/80 hover:text-white hover:bg-white/5 transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
            <div className="mx-6 mt-3 pt-3 border-t border-white/10">
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center px-5 py-3 bg-gold-500 text-navy-900 text-sm font-inter font-semibold rounded-sm hover:bg-gold-400 transition-colors duration-200"
              >
                Get In Touch
              </Link>
            </div>
            <div className="flex items-center justify-center gap-4 mt-4 pb-1">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-white/40 hover:text-gold-400 transition-colors duration-200"
                  aria-label={s.name}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
