import React from "react";
import Button from "../components/Button";
import { MapPin } from "lucide-react";
import { companyData } from "../siteData";
import { serviceAreaSectionData } from "./ServiceAreaSection";

const heroSectionData = {
  mainTitle: "Tech Support Is",
  highlightTitle: "Just Around The Corner",
  description:
    "We're the friendly middlemen between you and frustrating tech support.",
  boldText:
    "We sit with you, handle the calls, and deal with the headaches so you don't have to.",
  aiText: "Plus, we'll show you how AI can make your life easier and safer!",
  primaryCTA: "Schedule Your Visit",
  secondaryCTA: "Call (732) 555-TECH",
};

function HeroSection() {
  const d = heroSectionData;
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="inner-section text-center">
        <h1 className="h2 text-gray-900 mb-6">
          <span className="block">{d.mainTitle}</span>
          <span className="text-primary-b-g-gradient">{d.highlightTitle}</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 small-under-text max-w-4xl mx-auto leading-relaxed">
          {d.description}
          <strong className="text-primary-b-g-gradient"> {d.boldText}</strong>
          <br />
          <span className="font-semibold">{d.aiText}</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center main-under-text mt-8">
          <Button variant="primary" className="button-large">
            {d.primaryCTA}
          </Button>
          <Button variant="secondary" className="button-large">
            {d.secondaryCTA}
          </Button>
        </div>
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto border border-blue-100 mt-8">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <MapPin className="h-5 w-5 text-blue-600" />
            <span className="text-lg font-semibold text-gray-800">
              Proudly Based in {companyData.location}
            </span>
          </div>
          <p className="text-gray-600">
            {serviceAreaSectionData.description}
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
