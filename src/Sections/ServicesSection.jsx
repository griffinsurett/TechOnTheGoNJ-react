import React, { useState } from "react";
import { Smartphone, Monitor, Wifi, Printer, Camera, Brain, Zap, Settings, Shield, Users, HeadphonesIcon, PhoneCall, Play } from "lucide-react";
import Button from "../components/Button";

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

function ServiceCard({ service }) {
  const Icon = service.icon;
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg main-transition border border-gray-100 hover:border-blue-200 group">
      <div className="primary-faded-b-g-gradient p-3 rounded-lg w-fit xsmall-under-text group-hover:from-blue-200 group-hover:to-green-200 main-transition relative">
        <Icon className="h-6 w-6 text-blue-600" />
        {service.hasVideo && (
          <div className="absolute -top-1 -right-1 bg-red-500 rounded-full p-1">
            <Play className="h-3 w-3 text-white" />
          </div>
        )}
      </div>
      <h4 className="text-lg font-semibold text-gray-900 mb-2">
        {service.title}
      </h4>
      <p className="text-gray-600 text-sm leading-relaxed mb-3">
        {service.description}
      </p>
      {service.hasVideo && (
        <div className="mt-4">
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <video
              className="w-full h-32 object-cover"
              controls
              poster="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjE4MCIgdmlld0JveD0iMCAwIDMyMCAxODAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMjAiIGhlaWdodD0iMTgwIiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjE2MCIgY3k9IjkwIiByPSIzMCIgZmlsbD0iIzM3NDE1MSIvPgo8cG9seWdvbiBwb2ludHM9IjE1MCw3NSAxNzUsMTAwIDE1MCwxMjUiIGZpbGw9IndoaXRlIi8+Cjx0ZXh0IHg9IjE2MCIgeT0iMTUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjczODAiPkRlbW8gVmlkZW88L3RleHQ+Cjwvc3ZnPg=="
            >
              <source
                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="text-xs text-blue-600 font-medium flex items-center mt-2">
            <Play className="h-3 w-3 mr-1" />
            Watch demo video
          </div>
        </div>
      )}
    </div>
  );
}

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
