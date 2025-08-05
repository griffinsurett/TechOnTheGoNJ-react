import React from "react";
import { Play } from "lucide-react";

/**
 * Renders one video testimonial card.
 *
 * Props:
 * - video: { name, location, title, description, duration, thumbnail }
 */
export default function VideoTestimonialCard({ video }) {
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
