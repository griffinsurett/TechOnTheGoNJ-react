import React from "react";
import { Play } from "lucide-react";

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

function VideoTestimonialCard({ video }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg main-transition">
      <div className="relative">
        <video
          className="w-full h-48 object-cover"
          controls
          poster={video.thumbnail ? "" : undefined}
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
