import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-16 relative overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-32 h-32 bg-accent-blue-500 rounded-full opacity-3"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent-orange-500 rounded-full opacity-3"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h4 className="text-xl font-semibold mb-4 text-accent-blue-300">Marty B Solutions</h4>
            <p className="text-gray-400">Business Broker/Facilitator<br/>Problem, Solved</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4 text-accent-orange-300">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-accent-blue-300 transition-colors duration-300 cursor-pointer">Fortune 500 Introductions</li>
              <li className="hover:text-accent-blue-300 transition-colors duration-300 cursor-pointer">Strategic Partnerships</li>
              <li className="hover:text-accent-blue-300 transition-colors duration-300 cursor-pointer">Retail Connections</li>
              <li className="hover:text-accent-blue-300 transition-colors duration-300 cursor-pointer">Global Market Access</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4 text-accent-blue-300">Industries</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-accent-orange-300 transition-colors duration-300 cursor-pointer">Technology</li>
              <li className="hover:text-accent-orange-300 transition-colors duration-300 cursor-pointer">Entertainment</li>
              <li className="hover:text-accent-orange-300 transition-colors duration-300 cursor-pointer">Retail</li>
              <li className="hover:text-accent-orange-300 transition-colors duration-300 cursor-pointer">Tourism</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4 text-accent-orange-300">Connect</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-accent-blue-300 transition-colors duration-300 cursor-pointer">LinkedIn</li>
              <li className="hover:text-accent-blue-300 transition-colors duration-300 cursor-pointer">Email</li>
              <li className="hover:text-accent-blue-300 transition-colors duration-300 cursor-pointer">Phone</li>
              <li className="hover:text-accent-blue-300 transition-colors duration-300 cursor-pointer">In Person (NYC)</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-12 pt-8 border-t border-accent-blue-800">
          <p className="text-gray-400">
            &copy; 2025 Marty B Solutions. Your next big opportunity is in my network.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;