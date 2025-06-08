import { useState, useEffect } from 'react';
import Background from './components/Background';
import SocialLinks from './components/SocialLinks';
import Footer from './components/Footer';

function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
      <Background width={windowSize.width} height={windowSize.height} />
      
      {/* PayPal Donate Button */}
      <div className="absolute top-4 right-4 z-20">
        <a 
          href="https://www.paypal.com/donate/?hosted_button_id=YOURPAYPALID" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full flex items-center space-x-2 transition-all duration-300 hover:scale-105 shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.067 8.478c.492.876.78 1.865.78 2.926 0 3.314-2.686 6-6 6a5.998 5.998 0 0 1-5.689-4.09L8.666 9H15a2 2 0 0 1 1.962 1.608l.116.484a2 2 0 0 1-1.484 2.39L15.47 13.5c.99 0 1.82-.744 1.944-1.714l.024-.195L18.452 10h-3.306a1 1 0 0 1-.928-.629l-.126-.332-.8 4.096a1 1 0 0 1-.917.806L12.1 14H4.667l2.587-13.268a2 2 0 0 1 1.962-1.607zm-8.811-3.93L9.7 8h3.767a1 1 0 0 1 .949.684l.053.159.185-.18c-1.15-1.186-2.807-1.895-4.648-1.9-3.2-.007-6.947 2.263-9.86 6.567-.53.778-.79 1.734-.79 2.664 0 1.068.578 2.323 2.423 2.87.565 1.453 1.28 1.95 2.185 1.922.868-.026 1.5-.514 1.92-1.664l.153-.423.21.312c.563.833 1.598 1.414 2.777 1.414 2.483 0 3.68-1.26 4.13-2.236l.148-.33.088.344c.634 2.454 2.802 3.542 5.204 2.72l1.736-.593.217 1.748c.102.813.588 1.517 1.277 1.915-1.489.735-3.16 1.15-4.932 1.15-6.065 0-10.97-4.925-10.97-11 0-2.126.59-4.123 1.626-5.822L7.44 4.015l.244-1.046c.654-2.809 2.852-4.826 5.347-4.826 2.447 0 4.854 1.847 5.166 4.13l.043.319z"/>
          </svg>
          <span>Donate</span>
        </a>
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        <main className="container mx-auto px-4 py-8 flex flex-col items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-yellow-400 tracking-wider">
            DefaultPi
          </h1>
          
          <SocialLinks />
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;
