import React, { useState } from "react";
import { Smartphone, Monitor, Wifi, Printer, Camera, Brain, Zap, Settings, Shield, Users, HeadphonesIcon, PhoneCall, Play } from "lucide-react";
import ServiceCard from "../components/LoopComponents/ServiceCard";

const servicesSectionData = {
  title: "Complete Technology Solutions",
  description:
    "From initial setup to ongoing support, we handle every aspect of your technology needs with patience, expertise, and a personal touch.",
};

const servicesData = {
  categories: {
    setup: "Device Setup & Training",
    ai: "AI & Smart Technology",
    security: "Security & Privacy",
    support: "Ongoing Support",
  },
  services: {
    setup: [
      {
        icon: Smartphone,
        title: "Smartphone Setup & Mastery",
        description:
          "Complete phone setup, app installation, and patient training until you're comfortable",
        hasVideo: true,
      },
      {
        icon: Monitor,
        title: "Smart TV & Streaming Setup",
        description:
          "Netflix, Hulu, YouTube - we'll set it up and teach you everything",
        hasVideo: true,
      },
      {
        icon: Wifi,
        title: "WiFi Network Creation",
        description:
          "Secure, fast internet setup with easy-to-remember passwords",
        hasVideo: false,
      },
      {
        icon: Monitor,
        title: "Computer Setup & Training",
        description:
          "New computer setup, email configuration, and personalized lessons",
        hasVideo: true,
      },
      {
        icon: Printer,
        title: "Printer Setup & Troubleshooting",
        description:
          "Wireless printing setup and ongoing support when it stops working",
        hasVideo: false,
      },
      {
        icon: Camera,
        title: "Digital Camera & Photo Management",
        description:
          "Camera setup and photo organization so memories are safe",
        hasVideo: false,
      },
    ],
    ai: [
      {
        icon: Brain,
        title: "ChatGPT & AI Assistant Setup",
        description:
          "Complete ChatGPT setup with your personal account, safety settings, and training on how to get better answers",
        hasVideo: true,
      },
      {
        icon: Zap,
        title: "Prompt Engineering Training",
        description:
          "Learn the secrets to getting amazing results from AI - we'll teach you the exact phrases that work best",
        hasVideo: true,
      },
      {
        icon: Settings,
        title: "AI Account Management",
        description:
          "We create and securely manage all your AI accounts so you never have to worry about passwords or billing",
        hasVideo: false,
      },
      {
        icon: Smartphone,
        title: "AI on Your Phone & Devices",
        description:
          "Set up Siri, Google Assistant, and Alexa to actually be helpful in your daily life",
        hasVideo: true,
      },
      {
        icon: Shield,
        title: "AI Safety & Privacy",
        description:
          "Learn what information to never share with AI and how to use it safely without risking your privacy",
        hasVideo: true,
      },
      {
        icon: Users,
        title: "Practical AI Applications",
        description:
          "Real-world AI uses: writing emails, planning trips, managing health information, and staying connected with family",
        hasVideo: true,
      },
    ],
    security: [
      {
        icon: Shield,
        title: "Computer Security & VPN",
        description: "Full security setup to protect against scams and hackers",
        hasVideo: false,
      },
      {
        icon: PhoneCall,
        title: "Spam Call Elimination",
        description: "Block robocalls and scammers permanently",
        hasVideo: true,
      },
      {
        icon: Shield,
        title: "Personal Info Removal",
        description: "Remove your information from data broker websites",
        hasVideo: false,
      },
      {
        icon: Settings,
        title: "Privacy Settings Optimization",
        description: "Lock down your social media and online accounts",
        hasVideo: true,
      },
    ],
    support: [
      {
        icon: HeadphonesIcon,
        title: "Tech Support Middleman Service",
        description:
          "We handle ALL your tech support calls - you never have to deal with customer service again",
        hasVideo: true,
      },
      {
        icon: Users,
        title: "Technology Tutoring",
        description:
          "One-on-one lessons for any app, device, or program you want to learn",
        hasVideo: true,
      },
      {
        icon: Smartphone,
        title: "Custom iPhone Automations",
        description:
          "Create shortcuts to make your phone work exactly how you want",
        hasVideo: true,
      },
      {
        icon: Settings,
        title: "Ongoing Tech Maintenance",
        description: "Regular check-ins to keep everything running smoothly",
        hasVideo: false,
      },
    ],
  },
};

function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState("setup");
  const s = servicesSectionData;

  return (
    <section id="services" className="section">
      <div className="inner-section text-center">
        <h3 className="h3 text-gray-900 mb-4">{s.title}</h3>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {s.description}
        </p>

        <div className="flex flex-wrap justify-center gap-4 main-under-text mt-6">
          {Object.entries(servicesData.categories).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`button button-regular shadow-accent/30 main-transition ${
                activeCategory === key
                  ? "bg-primary-b-g-gradient shadow-lg"
                  : "primary-faded-b-g-gradient text-gray-700 hover:bg-gray-200"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {servicesData.services[activeCategory].map((svc, i) => (
            <ServiceCard key={i} service={svc} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
