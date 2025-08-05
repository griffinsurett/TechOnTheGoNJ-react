import React from "react";
import { Play } from "lucide-react";
import VideoTestimonialCard from "../components/LoopComponents/VideoTestimonialCard";

const videoTestimonialsSectionData = {
  title: "See Our Success Stories",
  subtitle: "Watch real clients share their Tech On The Go experience",
};

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

function VideoTestimonialsSection() {
  const d = videoTestimonialsSectionData;
  return (
    <section className="section bg-white/50">
      <div className="inner-section text-center">
        <h3 className="h3 text-gray-900 xsmall-under-text">{d.title}</h3>
        <p className="text-xl text-gray-600">{d.subtitle}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {videoTestimonialsData.map((v, i) => (
            <VideoTestimonialCard key={i} video={v} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default VideoTestimonialsSection;
