import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Ana Sayfa', path: '/' },
    { name: 'Hizmetler', path: '#services' },
    { name: 'Hakkımızda', path: '#about' },
    { name: 'Mağaza', path: '#shop' }
  ];

  const handleNavClick = (e, path) => {
    if (path.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-aspect-green/5' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 flex items-center justify-center">
              <div className="absolute inset-0 bg-aspect-green/20 rounded-lg blur-md group-hover:bg-aspect-green/30 transition-all duration-300"></div>
              <img 
                src="https://customer-assets.emergentagent.com/job_modelwizard/artifacts/u0f1cf0l_marka.jpg" 
                alt="Aspect Logo" 
                className="relative w-10 h-10 object-contain"
              />
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">
              ASPECT
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                onClick={(e) => handleNavClick(e, item.path)}
                className="text-gray-300 hover:text-aspect-green transition-colors duration-300 font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-aspect-green group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              className="bg-aspect-green hover:bg-aspect-green-dark text-black font-semibold px-6 py-2.5 rounded-lg shadow-lg shadow-aspect-green/20 hover:shadow-aspect-green/40 transition-all duration-300 hover:scale-105"
              onClick={() => window.location.href = '#shop'}
            >
              Mağazaya Git
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 hover:text-aspect-green transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-black/98 backdrop-blur-md border-t border-aspect-green/20 shadow-xl">
            <nav className="flex flex-col p-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  onClick={(e) => handleNavClick(e, item.path)}
                  className="text-gray-300 hover:text-aspect-green transition-colors duration-300 font-medium py-2 border-b border-gray-800 hover:border-aspect-green/30"
                >
                  {item.name}
                </a>
              ))}
              <Button 
                className="bg-aspect-green hover:bg-aspect-green-dark text-black font-semibold w-full py-3 rounded-lg shadow-lg shadow-aspect-green/20 mt-4"
                onClick={() => {
                  window.location.href = '#shop';
                  setIsMobileMenuOpen(false);
                }}
              >
                Mağazaya Git
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
