import React, { useState } from 'react';
import useScrollPosition from '../../hooks/useScrollPosition';

const Header = () => {
  const scrollY = useScrollPosition();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'About', href: 'about' },
    { name: 'Network', href: 'network' },
    { name: 'Process', href: 'process' },
    { name: 'Success Stories', href: 'success-stories' },
    { name: 'Contact', href: 'contact' }
  ];

  const scrollToSection = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-accent-blue-200' 
          : 'bg-white'
      } border-b-2 border-accent-blue-100`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4">
        {/* Desktop Navigation */}
        <ul className="hidden md:flex justify-center space-x-12">
          {navItems.map((item, index) => (
            <li key={item.name} className="relative group">
              <button
                onClick={() => scrollToSection(item.href)}
                className="text-gray-800 hover:text-accent-blue-600 transition-all duration-300 font-medium"
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-blue-500 to-accent-orange-500 transition-all duration-300 group-hover:w-full`}></span>
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation */}
        <div className="md:hidden flex justify-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-800 hover:text-accent-blue-600 transition-colors duration-300"
          >
            <span className="sr-only">Open menu</span>
            <div className="w-6 h-6 flex flex-col justify-center">
              <span className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-0.5' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-current mt-1 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-current mt-1 transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-accent-blue-200 bg-white/95 backdrop-blur-md rounded-lg shadow-lg">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  scrollToSection(item.href);
                  setIsMenuOpen(false);
                }}
                className="block w-full text-center py-2 text-gray-800 hover:text-accent-blue-600 hover:bg-accent-blue-50 transition-all duration-300 rounded"
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;