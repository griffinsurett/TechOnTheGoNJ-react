import React from "react";
import "./App.css";
import Header from "./Sections/Header";
import HeroSection from "./Sections/HeroSection";
import MiddlemanSection from "./Sections/MiddlemanSection";
import AISection from "./Sections/AISection";
import ServicesSection from "./Sections/ServicesSection";
import WhyChooseUsSection from "./Sections/WhyChooseUsSection";
import ServiceAreaSection from "./Sections/ServiceAreaSection";
import TestimonialsSection from "./Sections/TestimonialsSection";
import VideoTestimonialsSection from "./Sections/VideoTestimonialsSection";
import ContactSection from "./Sections/ContactSection";
import Footer from "./Sections/Footer";

function App() {
  return (
    <div className="min-h-screen w-screen secondary-faded-b-g-gradient">
      <Header />
      <HeroSection />
      <MiddlemanSection />
      <AISection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ServiceAreaSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
