
import React, { useEffect, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { cn } from '@/lib/utils';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formState);
    // Reset form
    setFormState({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    // Show success message (in a real app, you'd use a toast)
    alert('Message sent successfully! We will get back to you soon.');
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById('contact');
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
    <section id="contact" className="section-padding bg-clinic-50 dark:bg-gray-950">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={cn(
            "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-clinic-100 dark:bg-clinic-900/30 text-clinic-800 dark:text-clinic-200 text-sm font-medium mb-4 opacity-0",
            isVisible && "animate-fade-in"
          )}>
            <span className="inline-block w-2 h-2 rounded-full bg-clinic-500"></span>
            Get In Touch
          </div>
          
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 opacity-0",
            isVisible && "animate-fade-in animate-delay-100"
          )}>
            Contact Us
          </h2>
          
          <p className={cn(
            "text-gray-600 dark:text-gray-300 opacity-0",
            isVisible && "animate-fade-in animate-delay-200"
          )}>
            Have questions or need to schedule an appointment? Reach out to us through any of the contact methods below or fill out our contact form.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className={cn(
            "lg:col-span-1 opacity-0",
            isVisible && "animate-slide-in"
          )}>
            <div className="glass-card p-6 rounded-xl h-full">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-clinic-100 dark:bg-clinic-900/50 rounded-lg text-clinic-600 dark:text-clinic-400">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-1">Address</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                    Ozhukur (PO), Malappuram (Dt), <br />
                    Kerala, India - 673 642
                  </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-clinic-100 dark:bg-clinic-900/50 rounded-lg text-clinic-600 dark:text-clinic-400">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-1">Phone</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                   +91 6238573656 <br />
                    +91 9207100102

                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-clinic-100 dark:bg-clinic-900/50 rounded-lg text-clinic-600 dark:text-clinic-400">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-1">Email</h4>
                    <p className="text-gray-600 dark:text-gray-300"> chcozhukur@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-clinic-100 dark:bg-clinic-900/50 rounded-lg text-clinic-600 dark:text-clinic-400">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-1">Working Hours</h4>
                    <p className="text-gray-600 dark:text-gray-300">



Working Hours: Mon-Sat: 7:30 AM - 9:00 PM
Sun: 8:30 AM - 11:30 AM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className={cn(
            "lg:col-span-2 opacity-0",
            isVisible && "animate-slide-in-right"
          )}>
            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-clinic-500"
                      placeholder="Name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-clinic-500"
                      placeholder="Email"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-clinic-500"
                    placeholder="Phone no"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-clinic-500"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="btn-primary w-full md:w-auto"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Map */}
        <div className={cn(
          "mt-12 glass-card rounded-xl overflow-hidden opacity-0",
          isVisible && "animate-fade-in animate-delay-400"
        )}>
          {/* <div className="aspect-video w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2989.827847905881!2d-73.971!3d40.783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQ3JzA3LjAiTiAxMjPCsDA1JzExLjAiVw!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="CH Centre Location"
            ></iframe>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
