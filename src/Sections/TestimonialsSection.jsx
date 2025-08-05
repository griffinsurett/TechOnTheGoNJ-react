// src/Sections/TestimonialsSection.jsx
import React from "react";
import { Star, FileImage } from "lucide-react";
import TestimonialCard from "../components/LoopComponents/TestimonialCard";
import Button from "../components/Button";

const testimonialsSectionData = {
  title: "What Our Clients Say",
  subtitle: "Real feedback from Jersey Shore seniors we've helped",
};

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
    hasVideo: false,
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
    hasVideo: false,
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
    hasVideo: false,
  },
  {
    name: "Mary & John D.",
    location: "Freehold Township",
    age: "67 & 70",
    quote:
      "We were terrified of AI and thought it was only for young people. Now we use ChatGPT to plan meals, write letters, and stay connected with family. They taught us how to use it safely!",
    rating: 5,
    service: "AI Training",
    hasPhoto: true,
    hasVideo: true,
    videoTitle: "How We Learned to Use AI Safely",
    videoDescription:
      "See how this retired couple now uses ChatGPT to plan meals, write letters, and stay connected with family.",
    videoDuration: "3:45",
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
    hasVideo: false,
  },
  {
    name: "Charles R.",
    location: "Colts Neck",
    age: "73",
    quote:
      "I was spending hours every week dealing with my internet provider's problems. Now I just call Tech On The Go and they handle everything while I relax at home. Best decision I ever made!",
    rating: 5,
    service: "Tech Support Middleman",
    hasPhoto: true,
    hasVideo: true,
    videoTitle: "No More Customer Service Headaches",
    videoDescription:
      "Watch Charles explain how we handled his Internet provider issues while he relaxed at home.",
    videoDuration: "2:30",
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
    hasVideo: false,
  },
  {
    name: "Patricia L.",
    location: "Marlboro",
    age: "69",
    quote:
      "I was so intimidated by my smart TV that I avoided using it for months. Now I confidently stream shows and video call my family. They made me feel like a tech expert!",
    rating: 5,
    service: "Smart TV Setup",
    hasPhoto: true,
    hasVideo: true,
    videoTitle: "From Scared to Smart TV Expert",
    videoDescription:
      "Patricia went from being afraid of her smart TV to confidently streaming shows and video calling family.",
    videoDuration: "4:12",
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
    hasVideo: false,
  },
];

function TestimonialsSection() {
  const d = testimonialsSectionData;
  return (
    <section id="testimonials" className="section">
      <div className="inner-section text-center">
        <h3 className="h3 text-gray-900 xsmall-under-text">{d.title}</h3>
        <p className="text-xl text-gray-600">{d.subtitle}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {testimonialsData.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} />
          ))}
        </div>
        <div className="text-center mt-12">
          <div className="secondary-b-g-gradient rounded-xl p-6 max-w-2xl mx-auto">
            <h4 className="h4 text-white mb-3">Ready to Join Our Happy Clients?</h4>
            <p className="text-gray-300 xsmall-under-text">
              Over 200+ Jersey Shore seniors trust us with their technology needs
            </p>
            <Button variant="secondary" href={"#contact"} className="button button-regular mt-4">
              Schedule Your Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
