import React from "react";
import { PhoneCall, MessageCircle, CheckCircle } from "lucide-react";
import MiddlemanCard from "../components/LoopComponents/MiddlemanCard";

const middlemanSectionData = {
  title: "Stop Fighting With Customer Service",
  description:
    "We know how frustrating it is to spend hours on hold, get transferred multiple times, and still not get your problem solved. That's why we handle ALL of it for you.",
  tagline: "Your Personal Tech Advocate",
  taglineDescription:
    "Think of us as your personal tech department. When something goes wrong, you call us - not the big companies. We handle everything and keep you updated every step of the way.",
};

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

function MiddlemanSection() {
  const d = middlemanSectionData;
  return (
    <section className="section primary-b-g-gradient">
      <div className="inner-section">
        <div className="text-center text-white main-under-text">
          <h3 className="h3 mb-6">{d.title}</h3>
          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            {d.description}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {middlemanCardsData.map((c, i) => (
            <MiddlemanCard key={i} {...c} />
          ))}
        </div>
        <div className="text-center mt-12">
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto">
            <h4 className="text-2xl font-bold text-white mb-3">
              {d.tagline}
            </h4>
            <p className="text-lg text-white/90">{d.taglineDescription}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MiddlemanSection;
