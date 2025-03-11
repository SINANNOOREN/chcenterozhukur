
import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md py-3 shadow-md' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/chlogo.png" 
            alt="CH Centre Logo" 
            className="h-10 md:h-12 w-auto" 
          />
          <span className={cn(
            'font-semibold text-xl transition-colors',
            isScrolled ? 'text-clinic-800 dark:text-white' : 'text-clinic-800 dark:text-white'
          )}>
            CH Centre Ozhukur
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          <Link to="/" className="nav-link">Home</Link>
          <a href="#about" className="nav-link">About</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#doctors" className="nav-link">Doctors</a>
          <a href="#news" className="nav-link">News</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <Link to="/book-appointment" className="btn-primary">
            Book Appointment
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            onClick={toggleMenu} 
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} glass-card shadow-lg mt-2 mx-4 rounded-lg overflow-hidden`}>
        <nav className="flex flex-col">
          <Link to="/" className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors" onClick={toggleMenu}>Home</Link>
          <a href="#about" className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors" onClick={toggleMenu}>About</a>
          <a href="#services" className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors" onClick={toggleMenu}>Services</a>
          <a href="#doctors" className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors" onClick={toggleMenu}>Doctors</a>
          <a href="#news" className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors" onClick={toggleMenu}>News</a>
          <a href="#contact" className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors" onClick={toggleMenu}>Contact</a>
          <Link to="/book-appointment" className="m-4 btn-primary" onClick={toggleMenu}>Book Appointment</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
