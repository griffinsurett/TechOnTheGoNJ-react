import React from "react";
import Button from "../components/Button";
import { Phone, Mail, MapPin } from "lucide-react";
import { companyData } from "../siteData";
import ContactInfo from "../components/LoopComponents/ContactInfo";

const contactSectionData = {
  title: "Ready to Stop Fighting With Technology?",
  description:
    "Let us handle the frustration while you enjoy the benefits. Call today to schedule your personalized in-home tech support visit.",
  offer: {
    title: "Special Offer for New Clients",
    description:
      "First consultation is FREE! We'll assess your needs and show you exactly how we can help.",
  },
  cta: "Schedule Your FREE Consultation",
};

function ContactSection() {
  const d = contactSectionData;
  return (
    <section id="contact" className="section primary-b-g-gradient">
      <div className="inner-section text-center text-white">
        <h3 className="h3 xsmall-under-text">{d.title}</h3>
        <p className="text-xl small-under-text opacity-90 max-w-2xl mx-auto">
          {d.description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 main-under-text mt-8">
          <ContactInfo
            icon={Phone}
            title="Call or Text"
            info={companyData.phone}
            href={`tel:${companyData.phone}`}
          />
          <ContactInfo icon={Mail} title="Email Us" info={companyData.email} href={`mailto:${companyData.email}`} />
          <ContactInfo
            icon={MapPin}
            title="Based in"
            info={companyData.location}
          />
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto small-under-text mt-8">
          <h4 className="h4 text-white mb-3">{d.offer.title}</h4>
          <p className="text-white/90">{d.offer.description}</p>
        </div>
        <Button variant="secondary" className="button-regular mt-6">
          {d.cta}
        </Button>
      </div>
    </section>
  );
}

export default ContactSection;
