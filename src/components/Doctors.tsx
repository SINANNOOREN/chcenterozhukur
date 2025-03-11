
import React, { useEffect, useState } from 'react';
import { Calendar, Mail, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

const doctors = [
  {
    name: 'Dr. Nawaf',
    specialty: 'General Medicine Department',
    image: 'https://images.=format&fit=crop',
    education: 'MBBS, MD',
    
    availability: 'Monday - Friday Morning: 8:30 AM - 9:15 AM'
  },
  {
    name: 'Dr. Mujeeb Rahman',
    specialty: 'General Medicine Department',
    image: 'https://images.unsplash.com/photoformat&fit=crop',
    education: 'MBBS',
 
    availability: 'Tuesday, Thursday, Saturday Evening: 5:30 PM - 8:30 PM'
  },
  {
    name: 'Dr. Suhail Pazheri',
    specialty: 'Dermatology Department',
    image: 'https://images.unsplash.com/phot788&auto=format&fit=crop',
    education: 'MBBS, DDVL',
    
    availability: 'Fridays Evening: 5:00 PM - 6:00 PM'
  },
  {
    name: ' Dr. Muhammad Yasir',
    specialty: 'Pediatrics Department',
    image: 'https://images.unsplash.com/p1964&auto=format&fit=crop',
    education: '',
    
    availability: 'Tuesday, Thursday, Saturday Morning: 7:00 AM - 8:00 AM'
  }
];

const Doctors = () => {
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
    
    const section = document.getElementById('doctors');
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
    <section id="doctors" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={cn(
            "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-clinic-100 dark:bg-clinic-900/30 text-clinic-800 dark:text-clinic-200 text-sm font-medium mb-4 opacity-0",
            isVisible && "animate-fade-in"
          )}>
            <span className="inline-block w-2 h-2 rounded-full bg-clinic-500"></span>
            Our Specialists
          </div>
          
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 opacity-0",
            isVisible && "animate-fade-in animate-delay-100"
          )}>
            Meet Our Expert Doctors
          </h2>
          
          <p className={cn(
            "text-gray-600 dark:text-gray-300 opacity-0",
            isVisible && "animate-fade-in animate-delay-200"
          )}>
            Our team of highly qualified doctors is committed to providing exceptional healthcare services with compassion and expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doctor, index) => (
            <div 
              key={index}
              className={cn(
                "glass-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl opacity-0 group",
                isVisible && `animate-zoom-in animate-delay-${(index % 4) * 100}`
              )}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                  
                     
                  
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-1">{doctor.name}</h3>
                <p className="text-clinic-600 dark:text-clinic-400 font-medium text-sm mb-3">{doctor.specialty}</p>
                
                <div className="border-t border-gray-200 dark:border-gray-700 mt-3 pt-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 mb-1.5">
                    <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-clinic-500"></span>
                    </div>
                    <span>{doctor.education}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 mb-1.5">
                   
                 
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <Calendar size={16} className="text-clinic-500" />
                    <span>Available: {doctor.availability}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={cn(
          "text-center mt-12 opacity-0",
          isVisible && "animate-fade-in animate-delay-500"
        )}>
          <a href="#booking " className="btn-primary inline-flex">
            Book an Appointment
          </a>
        </div>
      </div>
    </section>
  );
};

export default Doctors;
