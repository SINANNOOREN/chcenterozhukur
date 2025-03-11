
import React, { useEffect, useState } from 'react';
import { 
  Stethoscope, HeartPulse, BookOpenText, HouseIcon, Users, User, 
  PillIcon,FlaskConical, Ambulance
} from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
  {
    icon: <Stethoscope className="h-6 w-6" />,
    title: 'Medi Care',
    description:  (
      <>
        ▪ Free medical check-ups and medicines on Sundays
        <br /> 
        ▪ Free essential medicines for selected chronic patients

      </>
    ),
  },
  {
    icon: <HeartPulse className="h-6 w-6" />,
    title: 'Health Care',
    description:
    (
      <>
▪ Specialist doctors at minimal or no cost. <br />
▪ Nursing care services. <br />
▪ Free medical equipment access. <br />
▪ Disease prevention and awareness programs.

      </>
    ),
    },
  {
    icon: <BookOpenText className="h-6 w-6" />,
    title: 'Edu Care',
    description: '▪ Awareness programs, seminars, and guidance for students and job seekers, led by education experts'
  },
  {
    icon: <HouseIcon className="h-6 w-6" />,
    title: 'Home Care',
    description: ' ▪ Essential care and support for bedridden patients at their homes'
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Youth Care',
    description: '▪ Various programs for youth empowerment and skill development as needed'
  },
  {
    icon: <User className="h-6 w-6" />,
    title: 'Women’s Care',
    description: '▪ Initiatives for women’s empowerment and social upliftment to build a value-driven society'
  },
  {
    icon: <PillIcon className="h-6 w-6" />,
    title: 'Medical Shop',
    description: '▪ Discounts ranging from 10% to 80% on all medicines'
  },
  {
    icon: <FlaskConical className="h-6 w-6" />,
    title: 'Laboratory',
    description: '▪ Advanced medical testing with modern equipment'
  },
  {
    icon: <Ambulance className="h-6 w-6" />,
    title: 'Ambulance Service',
    description: '▪ Two fully equipped ambulances available 24/7 free of charge'
  },

];

const Services = () => {
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
    
    const section = document.getElementById('services');
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
    <section id="services" className="section-padding bg-clinic-50 dark:bg-gray-950">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={cn(
            "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-clinic-100 dark:bg-clinic-900/30 text-clinic-800 dark:text-clinic-200 text-sm font-medium mb-4 opacity-0",
            isVisible && "animate-fade-in"
          )}>
            <span className="inline-block w-2 h-2 rounded-full bg-clinic-500"></span>
            Our Services
          </div>
          
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 opacity-0",
            isVisible && "animate-fade-in animate-delay-100"
          )}>
            Comprehensive Care Services
          </h2>
          
          <p className={cn(
            "text-gray-600 dark:text-gray-300 opacity-0",
            isVisible && "animate-fade-in animate-delay-200"
          )}>
          CH Centre provides essential healthcare, home care, medical equipment, education, and empowerment services. With specialist doctors, nursing care, and free medicine distribution, we stand as a pillar of hope and well-being for our community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className={cn(
                "glass-card p-6 rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 opacity-0",
                isVisible && `animate-zoom-in animate-delay-${(index % 5) * 100}`
              )}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-clinic-100 dark:bg-clinic-900/50 rounded-lg text-clinic-600 dark:text-clinic-400 mr-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{service.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className={cn(
          "mt-16 glass-card p-8 rounded-2xl bg-gradient-to-r from-clinic-600/90 to-clinic-700/90 text-white opacity-0",
          isVisible && "animate-fade-in animate-delay-500"
        )}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Need a Specialized Service?</h3>
              <p className="mb-6">Our team of specialists is ready to provide personalized care tailored to your specific health needs.</p>
              <a href="#booking" className="inline-block bg-white text-clinic-700 hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors">
                Schedule a Consultation
              </a>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://img.freepik.com/free-photo/male-doctor-examining-patient_1170-2156.jpg?t=st=1741390334~exp=1741393934~hmac=f80848fcbf86ea479fb3cef0b6fd9f92b81b4af9a46530c97fecae4ee1bbc76c&w=740" 
                alt="Doctor consultation" 
                className="w-full h-64 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
