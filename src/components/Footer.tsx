
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-white dark:bg-gray-900 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/lovable-uploads/27f13d19-fca9-4989-80a1-1c7b063f8860.png" 
                alt="CH Centre Logo" 
                className="h-10 w-auto" 
              />
              <span className="font-semibold text-xl text-gray-900 dark:text-white">
                CH Centre Ozhukur
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
            Dedicated to medical care, home care, education, and community empowerment.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-clinic-100 hover:text-clinic-600 dark:hover:bg-clinic-900/30 dark:hover:text-clinic-400 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-clinic-100 hover:text-clinic-600 dark:hover:bg-clinic-900/30 dark:hover:text-clinic-400 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-clinic-100 hover:text-clinic-600 dark:hover:bg-clinic-900/30 dark:hover:text-clinic-400 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-clinic-100 hover:text-clinic-600 dark:hover:bg-clinic-900/30 dark:hover:text-clinic-400 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-600 dark:text-gray-300 hover:text-clinic-600 dark:hover:text-clinic-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-clinic-600 dark:hover:text-clinic-400 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="text-gray-600 dark:text-gray-300 hover:text-clinic-600 dark:hover:text-clinic-400 transition-colors">Services</a>
              </li>
              <li>
                <a href="#doctors" className="text-gray-600 dark:text-gray-300 hover:text-clinic-600 dark:hover:text-clinic-400 transition-colors">Doctors</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-clinic-600 dark:hover:text-clinic-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-600 dark:text-gray-300 hover:text-clinic-600 dark:hover:text-clinic-400 transition-colors">Medi Care</a>
              </li>
              <li>
                <a href="#services" className="text-gray-600 dark:text-gray-300 hover:text-clinic-600 dark:hover:text-clinic-400 transition-colors">Health Care</a>
              </li>
              <li>
                <a href="#services" className="text-gray-600 dark:text-gray-300 hover:text-clinic-600 dark:hover:text-clinic-400 transition-colors">Edu Care</a>
              </li>
              <li>
                <a href="#services" className="text-gray-600 dark:text-gray-300 hover:text-clinic-600 dark:hover:text-clinic-400 transition-colors">Home Care</a>
              </li>
              <li>
                <a href="#services" className="text-gray-600 dark:text-gray-300 hover:text-clinic-600 dark:hover:text-clinic-400 transition-colors">Youth Care</a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="text-gray-600 dark:text-gray-300">
                
Ozhukur (PO), Malappuram (Dt), 
<br />
Kerala, India - 673 642
              </li>
              <li className="text-gray-600 dark:text-gray-300">
                Phone: +91 6238573656 <br />
                +91 9207100102
              </li>
              <li className="text-gray-600 dark:text-gray-300">
                Email:  chcozhukur@gmail.com
              </li>
              <li className="text-gray-600 dark:text-gray-300">
                Working Hours: Mon-Sat: 7:30 AM - 9:00 PM <br />
                Sun: 8:30 AM - 11:30 AM
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} CH Centre. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-clinic-600 dark:hover:text-clinic-400 transition-colors">
              Privacy Policy
            </a>
            <span className="text-gray-400">|</span>
            <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-clinic-600 dark:hover:text-clinic-400 transition-colors">
              Terms of Service
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 bg-clinic-100 dark:bg-gray-800 rounded-full text-clinic-600 dark:text-clinic-400 hover:bg-clinic-200 dark:hover:bg-gray-700 transition-colors ml-2"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
