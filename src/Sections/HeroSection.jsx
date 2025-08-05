import React from "react";
import Button from "../components/Button";
import { MapPin } from "lucide-react";
import { companyData } from "../siteData";
import { serviceAreaSectionData } from "./ServiceAreaSection";
import TechOnTheGoHero from "../assets/techhonthego.png";

function HeroSection() {
  return (
    <section 
      className="py-12 sm:py-16 lg:py-20 relative bg-cover bg-center lg:bg-fixed bg-no-repeat"
      style={{
        backgroundImage: `url(${TechOnTheGoHero})`
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Content */}
      <div className="inner-section text-center relative z-10">
        <h1 className="h2 text-white mb-6">
          <span className="block">Tech Support Is</span>
          <span className="text-primary-b-g-gradient">Just Around The Corner</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-200 small-under-text max-w-4xl mx-auto leading-relaxed">
          We're the friendly middlemen between you and frustrating tech support.
          <strong className="text-blue-200">
            {" "}We sit with you, handle the calls, and deal with the headaches so you don't have to.
          </strong>
          <br />
          <span className="font-semibold text-white">
            Plus, we'll show you how AI can make your life easier and safer!
          </span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center main-under-text mt-8">
          <Button variant="primary" className="button-large" href={`#contact`}>
            Schedule Your Visit
          </Button>
          <Button variant="secondary" className="button-large">
            Call (732) 555-TECH
          </Button>
        </div>
        <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 max-w-2xl mx-auto border border-white/30 mt-8">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <MapPin className="h-5 w-5 text-blue-300" />
            <span className="text-lg font-semibold text-white">
              Proudly Based in {companyData.location}
            </span>
          </div>
          <p className="text-gray-200">
            {serviceAreaSectionData.description}
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;