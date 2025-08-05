// src/components/LoopComponents/ServiceCard.jsx
import React from "react";
import { Play } from "lucide-react";
import VideoInCard from "../VideoInCard";

/**
 * Renders one service card with optional video modal.
 *
 * Props:
 * - service: {
 *     icon: React component,
 *     title: string,
 *     description: string,
 *     hasVideo: boolean
 *   }
 */
export default function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <VideoInCard
      hasVideo={service.hasVideo}
      fallbackTitle={service.title}
      fallbackDescription={service.description}
    >
      {({ hasVideo, handleVideoClick }) => (
        <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg main-transition border border-gray-100 hover:border-blue-200 group">
          <div 
            className={`primary-faded-b-g-gradient p-3 rounded-lg w-fit xsmall-under-text group-hover:from-blue-200 group-hover:to-green-200 main-transition relative ${
              hasVideo ? 'cursor-pointer hover:scale-105' : ''
            }`}
            onClick={handleVideoClick}
          >
            <Icon className="h-6 w-6 text-blue-600" />
            {hasVideo && (
              <div className="absolute -top-1 -right-1 bg-red-500 rounded-full p-1 animate-pulse">
                <Play className="h-3 w-3 text-white" />
              </div>
            )}
          </div>
          <h4 className="text-lg font-semibold text-gray-900 mb-2">
            {service.title}
          </h4>
          <p className="text-gray-600 text-sm leading-relaxed">
            {service.description}
          </p>
          {hasVideo && (
            <p className="text-xs text-blue-600 font-medium mt-3 flex items-center">
              <Play className="h-3 w-3 mr-1" />
              Click icon to watch demo
            </p>
          )}
        </div>
      )}
    </VideoInCard>
  );
}