
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Doctors from '@/components/Doctors';
import NewsSection from '@/components/NewsSection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Doctors />
      <NewsSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
