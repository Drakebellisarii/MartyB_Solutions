import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white py-20 relative overflow-hidden">
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h4 className="text-xl font-semibold mb-4 text-navy-300 font-playfair">Marty B Solutions</h4>
            <p className="text-gray-300">Business Broker/Facilitator<br/>Problem, Solved</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4 text-navy-300 font-playfair">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-navy-300 transition-colors duration-300 cursor-pointer">Fortune 500 Introductions</li>
              <li className="hover:text-navy-300 transition-colors duration-300 cursor-pointer">Strategic Partnerships</li>
              <li className="hover:text-navy-300 transition-colors duration-300 cursor-pointer">Retail Connections</li>
              <li className="hover:text-navy-300 transition-colors duration-300 cursor-pointer">Global Market Access</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4 text-navy-300 font-playfair">Industries</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-navy-300 transition-colors duration-300 cursor-pointer">Technology</li>
              <li className="hover:text-navy-300 transition-colors duration-300 cursor-pointer">Entertainment</li>
              <li className="hover:text-navy-300 transition-colors duration-300 cursor-pointer">Retail</li>
              <li className="hover:text-navy-300 transition-colors duration-300 cursor-pointer">Tourism</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4 text-navy-300 font-playfair">Connect</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-navy-300 transition-colors duration-300 cursor-pointer">LinkedIn</li>
              <li className="hover:text-navy-300 transition-colors duration-300 cursor-pointer">Email</li>
              <li className="hover:text-navy-300 transition-colors duration-300 cursor-pointer">Phone</li>
              <li className="hover:text-navy-300 transition-colors duration-300 cursor-pointer">In Person (NYC)</li>
            </ul>
          </div>
        </div>
        
        {/* Enhanced bottom section */}
        <div className="text-center mt-16 pt-8 border-t border-navy-700">
          <div className="inline-flex items-center space-x-4 bg-navy-800/50 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg border border-navy-700 mb-6">
            <p className="text-gray-200 font-medium">Your next big opportunity is in my network</p>
          </div>
          <p className="text-gray-400">
            &copy; 2025 Marty B Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;