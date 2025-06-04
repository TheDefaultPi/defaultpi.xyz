import React from 'react';
import BackgroundAnimation from './components/BackgroundAnimation';
import SocialLinks from './components/SocialLinks';
import HoverCard from './components/HoverCard';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden relative">
      <BackgroundAnimation />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col items-center justify-center gap-8">

          
          <HoverCard>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-yellow-300 to-blue-400 animate-gradient-x">
              DefaultPi
            </h1>
            <p className="text-xl text-gray-300 text-center max-w-2xl mb-8">
              Explore my digital footprint and connect with me across various platforms.
              My passion for innovation and creativity drives everything I do.
            </p>
            
            <SocialLinks />
          </HoverCard>
        </div>
      </div>
      
      <div className="absolute bottom-10 right-10 w-20 h-20 bg-blue-500/20 rounded-full animate-pulse"></div>
      <div className="absolute top-20 left-10 w-16 h-16 bg-yellow-400/20 rounded-full animate-bounce delay-700"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-gray-400/20 rounded-full animate-ping"></div>
      
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10">
        <div className="flex flex-col mb-2">
          <div className="h-4 w-20 bg-blue-500 rounded-t-md"></div>
          <div className="h-4 w-20 bg-yellow-400 rounded-b-md"></div>
        </div>
        <span className="text-sm text-gray-400 whitespace-nowrap">
          Proudly Ukrainian 🇺🇦
        </span>
      </div>
    </div>
  );
}

export default App;
