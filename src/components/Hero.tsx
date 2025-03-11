
import React, { useEffect, useState } from 'react';
import { ArrowRight, Clock, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-clinic-50 to-white dark:from-gray-900 dark:to-gray-950 -z-10"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-clinic-200 dark:bg-clinic-900/20 rounded-full filter blur-3xl opacity-50 -z-10"></div>
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-clinic-100 dark:bg-clinic-900/20 rounded-full filter blur-3xl opacity-50 -z-10"></div>
      
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 py-12">
        {/* Content */}
        <div className="flex flex-col justify-center">
          <div className={cn(
            "opacity-0", 
            isLoaded && "animate-slide-in"
          )}>
           
          </div>
          
          <h1 className={cn(
            "text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6 opacity-0",
            isLoaded && "animate-slide-in animate-delay-100"
          )}>
            Empowering Lives <span className="text-clinic-600">Transforming Communities</span>
          </h1>
          
          <p className={cn(
            "text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg opacity-0",
            isLoaded && "animate-slide-in animate-delay-200"
          )}>
       Since 2016, CH Centre Ozhukur has been a beacon of hope, providing essential healthcare, home care, education, and empowerment services to uplift the people of Ozhukur
          </p>
          
          <div className={cn(
            "flex flex-wrap gap-4 mb-12 opacity-0",
            isLoaded && "animate-slide-in animate-delay-300"
          )}>
            <Link to="/book-appointment" className="btn-primary">
              Book Appointment <ArrowRight size={18} />
            </Link>
            <a href="#services" className="btn-outline">
              Our Services
            </a>
          </div>
          
          {/* Info Cards */}
          <div className={cn(
            "grid grid-cols-1 sm:grid-cols-2 gap-4 opacity-0",
            isLoaded && "animate-slide-in animate-delay-400"
          )}>
            <div className="glass-card p-4 rounded-lg flex items-start gap-3">
              <div className="p-2 bg-clinic-100 dark:bg-clinic-900/50 rounded-lg text-clinic-600 dark:text-clinic-400">
                <Clock size={20} />
              </div>
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-1">Working Hours</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Mon-Sat: 7:30 AM - 9:00 PM</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Sun: 8:30 AM - 11:30 AM</p>
              </div>
            </div>
            
            <div className="glass-card p-4 rounded-lg flex items-start gap-3">
              <div className="p-2 bg-clinic-100 dark:bg-clinic-900/50 rounded-lg text-clinic-600 dark:text-clinic-400">
                <Phone size={20} />
              </div>
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-1">Emergency Contacts</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">+91 6238573656</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">+91 9207100102</p>

                <p className="text-sm text-gray-500 dark:text-gray-400">Available 24/7</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className={cn(
          "relative flex items-center justify-center opacity-0",
          isLoaded && "animate-slide-in-right"
        )}>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-clinic-200 to-clinic-100 dark:from-clinic-800/20 dark:to-clinic-700/20 rounded-full filter blur-3xl opacity-70 animate-pulse-slow"></div>
            <div className="relative bg-white dark:bg-gray-800 p-2 rounded-3xl shadow-xl">
              <img
                src="chabout.jpg"
                alt="Doctor with patient"
                className="w-full h-auto rounded-2xl object-cover"
              />
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 glass-card p-4 rounded-lg shadow-lg max-w-xs">
                <div className="flex items-center gap-3 mb-2">
                
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Edu Care,Youth Care,Womens Care</h4>
                
                  </div>
                </div>
              </div>
              
              {/* Second Floating Card */}
              <div className="absolute -top-6 -right-6 glass-card p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">

                  </div>
                  <div>
                    <p className=" font-medium text-gray-900 dark:text-white">Health Care,Medi Care,Home Care</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
