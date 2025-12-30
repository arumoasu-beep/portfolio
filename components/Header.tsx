
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-100 py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-4xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-tight text-slate-900">
          Portfolio.
        </a>
        
        <div className="flex items-center space-x-4">
          <a 
            href="#contact" 
            className="text-sm font-bold text-slate-900 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-full transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
