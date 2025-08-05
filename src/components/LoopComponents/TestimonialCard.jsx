// src/components/LoopComponents/TestimonialCard.jsx
import React from "react";
import { Star, FileImage, Play } from "lucide-react";
import VideoInCard from "../VideoInCard";

/**
 * Renders one testimonial card with optional video modal.
 *
 * Props:
 * - testimonial: {
 *     name, location, age, quote, rating, service, hasPhoto, hasVideo, videoTitle, videoDescription, videoDuration
 *   }
 */
export default function TestimonialCard({ testimonial }) {
  return (
    <VideoInCard
      hasVideo={testimonial.hasVideo}
      videoTitle={testimonial.videoTitle}
      videoDescription={testimonial.videoDescription}
      videoDuration={testimonial.videoDuration}
      fallbackTitle={`${testimonial.name}'s Story`}
      fallbackDescription={testimonial.quote}
    >
      {({ hasVideo, handleVideoClick }) => (
        <div 
          className={`bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg main-transition ${
            hasVideo ? 'cursor-pointer hover:border-red-200 hover:shadow-red-100' : ''
          }`}
          onClick={hasVideo ? handleVideoClick : undefined}
        >
          <div className="flex items-center justify-between xsmall-under-text">
            <div className="flex">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-blue-600 text-sm font-medium bg-blue-50 px-2 py-1 rounded">
                {testimonial.service}
              </span>
              {hasVideo && (
                <div className="bg-red-500 text-white rounded-full p-1.5 animate-pulse">
                  <Play className="h-3 w-3" />
                </div>
              )}
            </div>
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
          {hasVideo && (
            <p className="text-xs text-red-600 font-medium mt-3 flex items-center justify-center">
              <Play className="h-3 w-3 mr-1" />
              Click to watch their story
            </p>
          )}
        </div>
      )}
    </VideoInCard>
  );
}