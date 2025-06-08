import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-6 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center mb-4">
          <div className="flex items-center">
            <span className="mr-2">Proudly Ukrainian</span>
            <div className="w-6 h-4 flex flex-col">
              <div className="h-1/2 bg-blue-500"></div>
              <div className="h-1/2 bg-yellow-400"></div>
            </div>
          </div>
        </div>
        <p className="text-gray-400 text-sm">
          &copy; 2025 DefaultPi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
