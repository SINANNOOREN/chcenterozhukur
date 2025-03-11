
import React, { useEffect, useState } from 'react';
import { CheckCircle2, Heart, UserPlus, Activity } from 'lucide-react';
import { cn } from '@/lib/utils';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById('about');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={cn(
            "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-clinic-100 dark:bg-clinic-900/30 text-clinic-800 dark:text-clinic-200 text-sm font-medium mb-4 opacity-0",
            isVisible && "animate-fade-in"
          )}>
            <span className="inline-block w-2 h-2 rounded-full bg-clinic-500"></span>
            About CH Centre
          </div>
          
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 opacity-0",
            isVisible && "animate-fade-in animate-delay-100"
          )}>
            Spreading Hope, Healing, and Empowerment
          </h2>
          
          <p className={cn(
            "text-gray-600 dark:text-gray-300 opacity-0",
            isVisible && "animate-fade-in animate-delay-200"
          )}>
         Committed to Compassionate Care and Community Upliftment Since 2016
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className={cn(
            "relative opacity-0",
            isVisible && "animate-fade-in animate-delay-300"
          )}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-clinic-100 to-clinic-200 dark:from-clinic-900/20 dark:to-clinic-800/20 rounded-2xl filter blur-3xl opacity-70"></div>
              <div className="relative bg-white dark:bg-gray-800 p-3 rounded-2xl shadow-xl">
                <img
                  src="/chlogo.png"
                  alt="Modern clinic interior"
                  className="w-full h-auto rounded-xl object-cover"
                />
                
                {/* Stats Card */}
                <div className="absolute -bottom-6 -right-6 glass-card p-4 rounded-lg shadow-lg">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <h4 className="text-2xl font-bold text-clinic-600 dark:text-clinic-400">9+</h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Years Experience</p>
                    </div>
                    <div className="text-center">
                      <h4 className="text-2xl font-bold text-clinic-600 dark:text-clinic-400">10k+</h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Patients Treated</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div>
            <h3 className={cn(
              "text-2xl font-bold text-gray-900 dark:text-white mb-6 opacity-0",
              isVisible && "animate-fade-in animate-delay-400"
            )}>
              Our Mission & Vision
            </h3>
            
            <p className={cn(
              "text-gray-600 dark:text-gray-300 mb-6 opacity-0",
              isVisible && "animate-fade-in animate-delay-500"
            )}>
          To create a healthier, empowered, and self-reliant community by providing essential healthcare, education, and social support, ensuring a better quality of life for all.

            </p>
            
            <div className={cn(
              "space-y-4 mb-8 opacity-0",
              isVisible && "animate-fade-in animate-delay-400"
            )}>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-clinic-500 mt-0.5 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Accessible Healthcare for All
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                  Providing specialist medical care, nursing services, home care for bedridden patients, free medicines, and medical equipment to those in need.
 </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-clinic-500 mt-0.5 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Education & Skill Developmen</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                  Offering educational support, vocational training, and career guidance to help individuals build a secure and independent future.

</p>
               
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-clinic-500 mt-0.5 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Youth & Women Empowerment
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                  Creating opportunities for leadership, entrepreneurship, and self-reliance through skill-building programs and community initiatives.
                    </p>
                </div>
              </div>
            </div>
            
            {/* Values Grid */}
            <div className={cn(
              "grid grid-cols-1 sm:grid-cols-3 gap-4 opacity-0",
              isVisible && "animate-fade-in animate-delay-500"
            )}>
              <div className="glass-card p-4 rounded-lg text-center">
                <div className="w-12 h-12 bg-clinic-100 dark:bg-clinic-900/50 rounded-full flex items-center justify-center text-clinic-600 dark:text-clinic-400 mx-auto mb-3">
                  <Heart size={20} />
                </div>
                <h5 className="font-medium text-gray-900 dark:text-white">Compassion</h5>
              </div>
              
              <div className="glass-card p-4 rounded-lg text-center">
                <div className="w-12 h-12 bg-clinic-100 dark:bg-clinic-900/50 rounded-full flex items-center justify-center text-clinic-600 dark:text-clinic-400 mx-auto mb-3">
                  <UserPlus size={20} />
                </div>
                <h5 className="font-medium text-gray-900 dark:text-white">Excellence</h5>
              </div>
              
              <div className="glass-card p-4 rounded-lg text-center">
                <div className="w-12 h-12 bg-clinic-100 dark:bg-clinic-900/50 rounded-full flex items-center justify-center text-clinic-600 dark:text-clinic-400 mx-auto mb-3">
                  <Activity size={20} />
                </div>
                <h5 className="font-medium text-gray-900 dark:text-white">Innovation</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
