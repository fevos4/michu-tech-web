import React from 'react';

import Navbar from './components/Navbar';
import About from './components/About';
import Mission from './components/Mission';
import Teams from './components/Teams';
import Detail from './components/Detail';
import Promo from './components/Promo';
import ProjectsPage from './components/Projects';
import Footer from './components/Footer';

import Hero from './components/Hero';
import ServicesPage from './components/Services';
import PartnersSection from './components/Partners';
import TestimonialsSection from './components/Testimonial';
import JoinUsSection from './components/Join';
import ContactUsSection from './components/Contact';


export default function App() {
  return (
    <div>
       <Navbar />
      
      <Hero />
      <About />
      <Mission />
      <Teams />
      <Detail />
      <Promo />
      <ProjectsPage />
     
      <ServicesPage/>
      <PartnersSection/>
      <TestimonialsSection/>
      <JoinUsSection/>
      <ContactUsSection/>
      <Footer />
      
    </div>
 
     
       
  );
}