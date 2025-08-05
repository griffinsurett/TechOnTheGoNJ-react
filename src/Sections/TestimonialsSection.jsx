import React from "react";
import { Star, FileImage } from "lucide-react";

const testimonialsSectionData = {
  title: "What Our Clients Say",
  subtitle: "Real feedback from Jersey Shore seniors we've helped",
  callout: {
    title: "Ready to Join Our Happy Clients?",
    description:
      "Over 200+ Jersey Shore seniors trust us with their technology needs",
    cta: "Schedule Your Free Consultation",
  },
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
      <div className="flex items-start space-x-4 xsmall-under-text mt-4">
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
      <p className="text-gray-700 italic leading-relaxed mt-4">
        "{testimonial.quote}"
      </p>
    </div>
  );
}

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
          <div className="bg-blue-50 rounded-xl p-6 max-w-2xl mx-auto">
            <h4 className="h4 text-blue-800 mb-3">{d.callout.title}</h4>
            <p className="text-blue-700 xsmall-under-text">
              {d.callout.description}
            </p>
            <button className="button button-primary button-regular mt-4">
              {d.callout.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
