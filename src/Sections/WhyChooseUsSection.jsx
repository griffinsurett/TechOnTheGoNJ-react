import React from "react";
import { Shield, HeadphonesIcon, Brain, Users, Home } from "lucide-react";

const whyChooseUsSectionData = {
  title: "Why Seniors Choose Tech On The Go",
  description:
    "We understand the unique challenges seniors face with technology. Our approach is different because we truly care about making your life easier.",
  securityWarning: {
    title: "Critical: Seniors Lost $4.8 Billion to Scammers in 2024",
    description:
      "Technology scams are getting more sophisticated every day, especially with new AI-powered scams. We don't just set up your devices - we teach you how to stay safe, recognize scams, protect your personal information, and use AI safely. Your security is our top priority.",
  },
};

const benefitsData = [
  {
    icon: HeadphonesIcon,
    title: "We Handle Tech Support For You",
    description:
      "Never waste hours on hold again. We call customer service, deal with the frustration, and get your problems solved.",
  },
  {
    icon: Brain,
    title: "AI Made Simple & Safe",
    description:
      "We'll show you how AI can make your life easier - from writing emails to planning trips - while keeping your information completely secure.",
  },
  {
    icon: Users,
    title: "Patient, Personal Service",
    description:
      "We sit with you, explain everything clearly, and never make you feel rushed or stupid about technology.",
  },
  {
    icon: Home,
    title: "We Come To You",
    description:
      "No driving to stores or shipping devices away. We bring expertise directly to your home.",
  },
  {
    icon: Shield,
    title: "Scam Protection Experts",
    description:
      "With seniors losing $4.8 billion to scammers in 2024, we prioritize your security and teach you to stay safe.",
  },
];

// inline BenefitCard component
function BenefitCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 group hover:shadow-lg main-transition">
      <div className="flex items-start space-x-4">
        <div className="secondary-b-g-gradient p-3 rounded-full flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div>
          <h4 className="text-xl font-semibold text-gray-900 mb-3">{title}</h4>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}

function WhyChooseUsSection() {
  const d = whyChooseUsSectionData;

  return (
    <section id="about" className="section bg-white/50">
      <div className="inner-section">
        <div className="text-center large-under-text">
          <h3 className="h3 text-gray-900 mb-4">{d.title}</h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {d.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 large-under-text mt-8">
          {benefitsData.map((b, i) => (
            <BenefitCard key={i} {...b} />
          ))}
        </div>

        <div className="danger-gradient rounded-2xl p-8 border-l-4 border-red-400 mt-12">
          <div className="flex items-start space-x-4">
            <div className="bg-red-100 p-3 rounded-full flex-shrink-0">
              <Shield className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <h4 className="h4 text-red-800 mb-3">
                {d.securityWarning.title}
              </h4>
              <p className="text-red-700 leading-relaxed">
                {d.securityWarning.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUsSection;
