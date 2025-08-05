import React, { useState } from "react";
import Button from "./components/Button";
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  Smartphone,
  Wifi,
  Monitor,
  Printer,
  Camera,
  Shield,
  Users,
  Settings,
  Zap,
  CheckCircle,
  HeadphonesIcon,
  Clock,
  Heart,
  Star,
  Award,
  Home,
  MessageCircle,
  PhoneCall,
  Brain,
  Play,
  FileImage,
} from "lucide-react";
import "./App.css";

// Site Configuration - Easy to modify all site content
const siteData = {
  company: {
    name: "Tech On The Go",
    tagline: "We Come To You",
    subtitle: "Serving the Jersey Shore",
    description: "Your Personal Tech Department",
    location: "Marlboro, NJ",
    phone: "(732) 555-TECH",
    email: "help@techonthego.com",
  },
  hero: {
    mainTitle: "Tech Support Is",
    highlightTitle: "Just Around The Corner",
    description:
      "We're the friendly middlemen between you and frustrating tech support.",
    boldText:
      "We sit with you, handle the calls, and deal with the headaches so you don't have to.",
    aiText: "Plus, we'll show you how AI can make your life easier and safer!",
    primaryCTA: "Schedule Your Visit",
    secondaryCTA: "Call (732) 555-TECH",
  },
  middleman: {
    title: "Stop Fighting With Customer Service",
    description:
      "We know how frustrating it is to spend hours on hold, get transferred multiple times, and still not get your problem solved. That's why we handle ALL of it for you.",
    tagline: "Your Personal Tech Advocate",
    taglineDescription:
      "Think of us as your personal tech department. When something goes wrong, you call us - not the big companies. We handle everything and keep you updated every step of the way.",
  },
  ai: {
    title: "AI Made Simple & Safe for Seniors",
    description:
      "Artificial Intelligence isn't just for young people. We'll show you how AI can help with everyday tasks while keeping your personal information completely secure.",
    safetyTitle: "We Make AI Safe for Seniors",
    safetyDescription:
      "Unlike other tech companies that just show you the buttons to push, we teach you the safety rules first. You'll learn exactly what personal information to keep private, how to spot AI-generated scams, and when to trust AI versus when to ask a human expert.",
  },
  services: {
    title: "Complete Technology Solutions",
    description:
      "From initial setup to ongoing support, we handle every aspect of your technology needs with patience, expertise, and a personal touch.",
  },
  whyChooseUs: {
    title: "Why Seniors Choose Tech On The Go",
    description:
      "We understand the unique challenges seniors face with technology. Our approach is different because we truly care about making your life easier.",
    securityWarning: {
      title: "Critical: Seniors Lost $4.8 Billion to Scammers in 2024",
      description:
        "Technology scams are getting more sophisticated every day, especially with new AI-powered scams. We don't just set up your devices - we teach you how to stay safe, recognize scams, protect your personal information, and use AI safely. Your security is our top priority.",
    },
  },
  serviceArea: {
    title: "We Serve The Entire Jersey Shore",
    description:
      "Based in Marlboro, we provide in-home tech support throughout Monmouth County and the greater Jersey Shore area.",
    areas: [
      "Marlboro",
      "Freehold",
      "Colts Neck",
      "Manalapan",
      "Howell",
      "Wall Township",
      "Ocean Township",
      "Neptune",
      "Asbury Park",
      "Long Branch",
      "Red Bank",
      "Rumson",
      "Fair Haven",
      "Little Silver",
      "Shrewsbury",
      "Eatontown",
      "West Long Branch",
      "Lakewood",
    ],
    extraText: "Don't see your town listed? We likely serve your area too!",
    extraCTA: "Call to confirm service in your location",
  },
  testimonials: {
    title: "What Our Clients Say",
    subtitle: "Real feedback from Jersey Shore seniors we've helped",
    callout: {
      title: "Ready to Join Our Happy Clients?",
      description:
        "Over 200+ Jersey Shore seniors trust us with their technology needs",
      cta: "Schedule Your Free Consultation",
    },
  },
  videoTestimonials: {
    title: "See Our Success Stories",
    subtitle: "Watch real clients share their Tech On The Go experience",
  },
  contact: {
    title: "Ready to Stop Fighting With Technology?",
    description:
      "Let us handle the frustration while you enjoy the benefits. Call today to schedule your personalized in-home tech support visit.",
    offer: {
      title: "Special Offer for New Clients",
      description:
        "First consultation is FREE! We'll assess your needs and show you exactly how we can help.",
    },
    cta: "Schedule Your FREE Consultation",
  },
  footer: {
    tagline: "Making technology accessible and stress-free for everyone.",
    subtitle: "We handle the tech headaches so you don't have to.",
    copyright:
      "© 2025 Tech On The Go. All rights reserved. | Licensed & Insured",
  },
  stats: {
    scamLoss: "$4.8 billion",
    clientCount: "200+",
    year: "2024",
  },
  navigation: [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "AI Help", href: "#ai" },
    { name: "Why Us", href: "#about" },
    { name: "Reviews", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ],
};

// Service Data Configuration
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
        description: "Camera setup and photo organization so memories are safe",
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
        icon: Phone,
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

// Benefits Data Configuration
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

// Testimonials Data Configuration
const testimonialsData = [
  {
    name: "Margaret S.",
    location: "Freehold",
    age: "72",
    quote:
      "When my computer stopped working, I dreaded calling customer service. Tech On The Go handled everything - they called Dell, waited on hold for 2 hours, and got my warranty replacement. I didn't have to deal with any of the frustration!",
    rating: 5,
    service: "Tech Support Middleman",
    hasPhoto: true,
  },
  {
    name: "Robert M.",
    location: "Colts Neck",
    age: "68",
    quote:
      "They taught me how to use ChatGPT to help write emails to my children and plan my anniversary trip. I was scared of AI, but now I use it every week! They made sure I knew how to keep my information private too.",
    rating: 5,
    service: "AI Training",
    hasPhoto: true,
  },
  {
    name: "Dorothy K.",
    location: "Marlboro",
    age: "75",
    quote:
      "I was getting scam calls every day. They set up call blocking on my phone and taught me how to recognize different types of scams. Haven't had a problem since!",
    rating: 5,
    service: "Security Setup",
    hasPhoto: false,
  },
  {
    name: "Frank P.",
    location: "Howell",
    age: "69",
    quote:
      "They set up my smart TV and taught me how to use Netflix and YouTube. Now I can watch my shows and see videos of my grandchildren anytime I want. They were so patient with me.",
    rating: 5,
    service: "Smart TV Setup",
    hasPhoto: true,
  },
  {
    name: "Eleanor R.",
    location: "Manalapan",
    age: "71",
    quote:
      "When Apple wanted me to update my iPhone, I was terrified I'd lose all my photos. They backed everything up, did the update, and taught me the new features. My phone works better than ever!",
    rating: 5,
    service: "iPhone Help",
    hasPhoto: false,
  },
  {
    name: "William T.",
    location: "Wall Township",
    age: "74",
    quote:
      "I needed help with my printer for months. Other places wanted to sell me a new one. They fixed my old printer remotely and showed me how to print from my phone. Saved me hundreds of dollars!",
    rating: 5,
    service: "Printer Support",
    hasPhoto: false,
  },
];

// Video Testimonials Data Configuration
const videoTestimonialsData = [
  {
    name: "Mary & John D.",
    location: "Freehold Township",
    title: "How We Learned to Use AI Safely",
    description:
      "See how this retired couple now uses ChatGPT to plan meals, write letters, and stay connected with family.",
    duration: "3:45",
    thumbnail: true,
  },
  {
    name: "Charles R.",
    location: "Colts Neck",
    title: "No More Customer Service Headaches",
    description:
      "Watch Charles explain how we handled his Internet provider issues while he relaxed at home.",
    duration: "2:30",
    thumbnail: true,
  },
  {
    name: "Patricia L.",
    location: "Marlboro",
    title: "From Scared to Smart TV Expert",
    description:
      "Patricia went from being afraid of her smart TV to confidently streaming shows and video calling family.",
    duration: "4:12",
    thumbnail: true,
  },
];

// AI Benefits Data Configuration
const aiBenefitsData = [
  {
    title: "Writing Help",
    description:
      "AI can help you write emails to family, thank you notes, or even letters to your doctor - we'll show you exactly how.",
  },
  {
    title: "Trip Planning",
    description:
      "Planning a vacation? AI can help you find the best restaurants, activities, and even create a day-by-day itinerary.",
  },
  {
    title: "Health Questions",
    description:
      "Get quick answers about medications, symptoms, or health topics - but we'll teach you when to see a real doctor instead.",
  },
  {
    title: "Learning New Things",
    description:
      "Want to learn about gardening, cooking, or a hobby? AI can be your personal tutor, explaining things at your own pace.",
  },
  {
    title: "Family Communication",
    description:
      "AI can help you write better texts to grandchildren, create photo captions, or even help with social media posts.",
  },
];

// Middleman Cards Data Configuration
const middlemanCardsData = [
  {
    icon: PhoneCall,
    title: "We Make The Calls",
    description:
      "You never have to dial customer service again. We handle all the phone calls, waiting on hold, and getting transferred between departments.",
  },
  {
    icon: MessageCircle,
    title: "We Speak Tech For You",
    description:
      "No more confusing technical jargon or feeling talked down to. We translate everything into plain English and make sure you understand.",
  },
  {
    icon: CheckCircle,
    title: "We Get Results",
    description:
      "We don't give up until your problem is solved. If customer service can't help, we find another way or escalate until we get answers.",
  },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen w-screen overflow-x-hidden secondary-faded-b-g-gradient">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <HeroSection />
      <MiddlemanSection />
      <AISection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ServiceAreaSection />
      <TestimonialsSection />
      <VideoTestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

function Header({ isMenuOpen, setIsMenuOpen }) {
  return (
    <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="inner-section">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="secondary-b-g-gradient p-2 rounded-lg">
              <Settings className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-xl font-bold text-gray-800">
                {siteData.company.name}
              </p>
              <p className="text-xs text-gray-600 hidden sm:block">
                {siteData.company.subtitle}
              </p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            {siteData.navigation.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 mt-4">
            <nav className="flex flex-col space-y-3 pt-4">
              {siteData.navigation.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="inner-section">
        <div className="text-center">
          <h1 className="h2 text-gray-900 mb-6">
            <span className="block">{siteData.hero.mainTitle}</span>
            <span className="text-primary-b-g-gradient">
              {siteData.hero.highlightTitle}
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 small-under-text max-w-4xl mx-auto leading-relaxed">
            {siteData.hero.description}
            <strong className="text-primary-b-g-gradient">
              {" "}
              {siteData.hero.boldText}
            </strong>
            <br />
            <span className="font-semibold">{siteData.hero.aiText}</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center main-under-text">
            <Button variant="primary" className="button-large">
              {siteData.hero.primaryCTA}
            </Button>
            <Button variant="secondary" className="button-large">
              {siteData.hero.secondaryCTA}
            </Button>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto border border-blue-100">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <MapPin className="h-5 w-5 text-blue-600" />
              <span className="text-lg font-semibold text-gray-800">
                Proudly Based in {siteData.company.location}
              </span>
            </div>
            <p className="text-gray-600">{siteData.serviceArea.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function MiddlemanSection() {
  return (
    <section className="section primary-b-g-gradient">
      <div className="inner-section">
        <div className="text-center text-white main-under-text">
          <h3 className="h3 mb-6">
            {siteData.middleman.title}
          </h3>
          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            {siteData.middleman.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {middlemanCardsData.map((card, index) => (
            <MiddlemanCard key={index} {...card} />
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto">
            <h4 className="text-2xl font-bold text-white mb-3">
              {siteData.middleman.tagline}
            </h4>
            <p className="text-lg text-white/90">
              {siteData.middleman.taglineDescription}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function AISection() {
  return (
    <section id="ai" className="section bg-white/50">
      <div className="inner-section">
        <div className="text-center main-under-text">
          <div className="primary-p-b-gradient p-4 rounded-full w-fit mx-auto mb-6">
            <Brain className="h-10 w-10 text-white" />
          </div>
          <h3 className="h3 text-gray-900 mb-4">
            {siteData.ai.title}
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {siteData.ai.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center large-under-text">
          <div>
            <h4 className="text-2xl font-bold text-gray-900 mb-6">
              Here's How We Help You With AI:
            </h4>
            <div className="space-y-4">
              {aiBenefitsData.map((benefit, index) => (
                <AIBenefit key={index} {...benefit} />
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <div className="relative rounded-lg overflow-hidden mb-6">
              <iframe
                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                className="w-full h-64"
                title="AI Demo Video"
                allowFullScreen
              />
            </div>
            <h5 className="text-lg font-semibold text-gray-900 mb-3">
              What You'll Learn:
            </h5>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                How to ask AI questions the right way
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                What information to never share with AI
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                Practical daily uses that save time
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                How to spot AI scams and fake content
              </li>
            </ul>
          </div>
        </div>

        <div className="secondary-p-b-gradient rounded-2xl p-8 border-l-4 border-purple-400">
          <div className="flex items-start space-x-4">
            <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
              <Shield className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h4 className="h4 text-purple-800 mb-3">
                {siteData.ai.safetyTitle}
              </h4>
              <p className="text-purple-700 leading-relaxed">
                {siteData.ai.safetyDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState("setup");

  return (
    <section id="services" className="section">
      <div className="inner-section">
        <div className="text-center large-under-text">
          <h3 className="h3 text-gray-900 mb-4">
            {siteData.services.title}
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {siteData.services.description}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 main-under-text">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.services[activeCategory].map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUsSection() {
  return (
    <section id="about" className="section bg-white/50">
      <div className="inner-section">
        <div className="text-center large-under-text">
          <h3 className="h3 text-gray-900 mb-4">
            {siteData.whyChooseUs.title}
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {siteData.whyChooseUs.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 large-under-text">
          {benefitsData.map((benefit, index) => (
            <BenefitCard key={index} benefit={benefit} />
          ))}
        </div>

        <div className="danger-gradient rounded-2xl p-8 border-l-4 border-red-400">
          <div className="flex items-start space-x-4">
            <div className="bg-red-100 p-3 rounded-full flex-shrink-0">
              <Shield className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <h4 className="h4 text-red-800 mb-3">
                {siteData.whyChooseUs.securityWarning.title}
              </h4>
              <p className="text-red-700 leading-relaxed">
                {siteData.whyChooseUs.securityWarning.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceAreaSection() {
  return (
    <section id="area" className="section">
      <div className="inner-section">
        <div className="text-center main-under-text">
          <h3 className="h3 text-gray-900 mb-4">
            {siteData.serviceArea.title}
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {siteData.serviceArea.description}
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {siteData.serviceArea.areas.map((area, index) => (
              <div
                key={index}
                className="text-center p-3 rounded-lg primary-faded-b-g-gradient hover:bg-blue-100 transition-colors"
              >
                <span className="text-gray-800 font-medium">{area}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              {siteData.serviceArea.extraText}
            </p>
            <Button variant="primary" className="button-regular">
              {siteData.serviceArea.extraCTA}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section id="testimonials" className="section">
      <div className="inner-section">
        <div className="text-center main-under-text">
          <h3 className="h3 text-gray-900 xsmall-under-text">
            {siteData.testimonials.title}
          </h3>
          <p className="text-xl text-gray-600">
            {siteData.testimonials.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-50 rounded-xl p-6 max-w-2xl mx-auto">
            <h4 className="h4 text-blue-800 mb-3">
              {siteData.testimonials.callout.title}
            </h4>
            <p className="text-blue-700 xsmall-under-text">
              {siteData.testimonials.callout.description}
            </p>
            <Button variant="primary" className="button-regular">
              {siteData.testimonials.callout.cta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function VideoTestimonialsSection() {
  return (
    <section className="section bg-white/50">
      <div className="inner-section">
        <div className="text-center main-under-text">
          <h3 className="h3 text-gray-900 xsmall-under-text">
            {siteData.videoTestimonials.title}
          </h3>
          <p className="text-xl text-gray-600">
            {siteData.videoTestimonials.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videoTestimonialsData.map((video, index) => (
            <VideoTestimonialCard key={index} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="section primary-b-g-gradient">
      <div className="inner-section">
        <div className="text-center text-white">
          <h3 className="h3 xsmall-under-text">
            {siteData.contact.title}
          </h3>
          <p className="text-xl small-under-text opacity-90 max-w-2xl mx-auto">
            {siteData.contact.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 main-under-text">
            <ContactInfo
              icon={Phone}
              title="Call or Text"
              info={siteData.company.phone}
            />
            <ContactInfo
              icon={Mail}
              title="Email Us"
              info={siteData.company.email}
            />
            <ContactInfo
              icon={MapPin}
              title="Based in"
              info={siteData.company.location}
            />
          </div>

          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto small-under-text">
            <h4 className="h4 text-white mb-3">
              {siteData.contact.offer.title}
            </h4>
            <p className="text-white/90">
              {siteData.contact.offer.description}
            </p>
          </div>

          <Button variant="tertiary" className="button-regular">
            {siteData.serviceArea.extraCTA}
          </Button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="inner-section">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 xsmall-under-text">
            <div className="secondary-b-g-gradient p-2 rounded-lg">
              <Settings className="h-6 w-6 text-white" />
            </div>
            <div>
              <h4 className="h4">{siteData.company.name}</h4>
              <p className="text-sm text-gray-400">
                {siteData.company.description}
              </p>
            </div>
          </div>
          <p className="text-gray-400 xsmall-under-text">
            {siteData.footer.tagline}
            <br />
            {siteData.footer.subtitle}
          </p>
          <div className="border-t border-gray-800 pt-4">
            <p className="text-sm text-gray-500">{siteData.footer.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Component Functions
function MiddlemanCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
      <div className="bg-white/20 p-4 rounded-full w-fit mx-auto xsmall-under-text">
        <Icon className="h-8 w-8 text-white" />
      </div>
      <h4 className="text-xl font-semibold text-white mb-3">{title}</h4>
      <p className="text-white/90 leading-relaxed">{description}</p>
    </div>
  );
}

function AIBenefit({ title, description }) {
  return (
    <div className="flex items-start space-x-3">
      <div className="bg-blue-100 p-2 rounded-full flex-shrink-0 mt-1">
        <CheckCircle className="h-4 w-4 text-blue-600" />
      </div>
      <div>
        <h5 className="font-semibold text-gray-900 mb-1">{title}</h5>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}

function ServiceCard({ service }) {
  const IconComponent = service.icon;

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg main-transition border border-gray-100 hover:border-blue-200 group">
      <div className="primary-faded-b-g-gradient p-3 rounded-lg w-fit xsmall-under-text group-hover:from-blue-200 group-hover:to-green-200 main-transition relative">
        <IconComponent className="h-6 w-6 text-blue-600" />
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

function BenefitCard({ benefit }) {
  const IconComponent = benefit.icon;

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 group hover:shadow-lg main-transition">
      <div className="flex items-start space-x-4">
        <div className="secondary-b-g-gradient p-3 rounded-full flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
          <IconComponent className="h-6 w-6 text-white" />
        </div>
        <div>
          <h4 className="text-xl font-semibold text-gray-900 mb-3">
            {benefit.title}
          </h4>
          <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg main-transition">
      <div className="flex items-center justify-between xsmall-under-text">
        <div className="flex">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
          ))}
        </div>
        <span className="text-blue-600 text-sm font-medium bg-blue-50 px-2 py-1 rounded">
          {testimonial.service}
        </span>
      </div>

      <div className="flex items-start space-x-4 xsmall-under-text">
        {testimonial.hasPhoto ? (
          <div className="bg-gray-200 rounded-full w-12 h-12 flex-shrink-0 flex items-center justify-center">
            <FileImage className="h-6 w-6 text-gray-400" />
          </div>
        ) : (
          <div className="secondary-b-g-gradient rounded-full w-12 h-12 flex-shrink-0 flex items-center justify-center text-white font-bold text-lg">
            {testimonial.name.charAt(0)}
          </div>
        )}
        <div>
          <p className="font-semibold text-gray-900">{testimonial.name}</p>
          <p className="text-gray-600 text-sm">
            {testimonial.location} • Age {testimonial.age}
          </p>
        </div>
      </div>

      <p className="text-gray-700 italic leading-relaxed">
        "{testimonial.quote}"
      </p>
    </div>
  );
}

function VideoTestimonialCard({ video }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg main-transition">
      <div className="relative">
        <video
          className="w-full h-48 object-cover"
          controls
          poster="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIyNSIgdmlld0JveD0iMCAwIDQwMCAyMjUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjI1IiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjIwMCIgY3k9IjExMi41IiByPSI0MCIgZmlsbD0iIzM3NDE1MSIvPgo8cG9seWdvbiBwb2ludHM9IjE4NSw5NSAyMjUsMTEyLjUgMTg1LDEzMCIgZmlsbD0id2hpdGUiLz4KPHR4dCB4PSIyMDAiIHk9IjE4MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2IiBmaWxsPSIjNkI3MzgwIj5UZXN0aW1vbmlhbCBWaWRlbzwvdGV4dD4KPC9zdmc+"
        >
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-sm px-2 py-1 rounded">
          {video.duration}
        </div>
      </div>

      <div className="p-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-2">
          {video.title}
        </h4>
        <p className="text-gray-600 text-sm mb-3">{video.description}</p>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-gray-900 text-sm">{video.name}</p>
            <p className="text-gray-500 text-xs">{video.location}</p>
          </div>
          <div className="text-blue-600 font-medium text-sm flex items-center">
            <Play className="h-4 w-4 mr-1" />
            Playing
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactInfo({ icon: Icon, title, info }) {
  return (
    <div className="text-center">
      <div className="bg-white/20 p-3 rounded-full w-fit mx-auto mb-3">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h4 className="text-lg font-semibold mb-1">{title}</h4>
      <p className="opacity-90">{info}</p>
    </div>
  );
}

export default App;
