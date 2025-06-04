import React, { useState } from 'react';

const HoverCard = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div
      className="relative w-full max-w-4xl rounded-2xl backdrop-filter backdrop-blur-lg overflow-hidden p-8 shadow-xl transition-all duration-300"
      style={{
        background: 'rgba(30, 30, 30, 0.5)',
        boxShadow: isHovered 
          ? '0 0 30px rgba(59, 130, 246, 0.5), 0 0 60px rgba(234, 179, 8, 0.3)'
          : '0 0 20px rgba(0, 0, 0, 0.5)',
        transform: isHovered ? 'scale(1.02)' : 'scale(1)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Animated highlight effect */}
      {isHovered && (
        <div 
          className="absolute pointer-events-none rounded-full mix-blend-overlay opacity-20"
          style={{
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)',
            left: mousePosition.x - 250,
            top: mousePosition.y - 250,
            transition: 'opacity 0.3s ease',
          }}
        />
      )}
      
      {/* Border glow */}
      <div 
        className="absolute inset-0 rounded-2xl"
        style={{
          background: isHovered 
            ? 'linear-gradient(45deg, rgba(59, 130, 246, 0.5), rgba(234, 179, 8, 0.5), rgba(59, 130, 246, 0.5))'
            : 'transparent',
          opacity: 0.6,
          filter: 'blur(8px)',
          transform: 'translateY(2px)',
        }}
      />
      
      {/* Card content */}
      <div className="relative z-10">
        {children}
      </div>
      
      <div className="absolute w-8 h-8 border-t-2 border-l-2 top-4 left-4 border-blue-400"></div>
      <div className="absolute w-8 h-8 border-t-2 border-r-2 top-4 right-4 border-yellow-400"></div>
      <div className="absolute w-8 h-8 border-b-2 border-l-2 bottom-4 left-4 border-yellow-400"></div>
      <div className="absolute w-8 h-8 border-b-2 border-r-2 bottom-4 right-4 border-blue-400"></div>
    </div>
  );
};

export default HoverCard;
