// src/components/VideoInCard.jsx
import React, { useState } from "react";
import { Play } from "lucide-react";
import Modal from "./Modal";

/**
 * Reusable video modal component for cards
 * 
 * Props:
 * - hasVideo: boolean - whether this card has video
 * - videoTitle: string - title for video overlay (optional)
 * - videoDescription: string - description for video overlay (optional)
 * - videoDuration: string - duration display (optional)
 * - fallbackTitle: string - fallback title if videoTitle not provided
 * - fallbackDescription: string - fallback description if videoDescription not provided
 * - children: function - render prop that receives { hasVideo, handleVideoClick }
 */
export default function VideoInCard({
  hasVideo = false,
  videoTitle,
  videoDescription, 
  videoDuration,
  fallbackTitle = "Video",
  fallbackDescription = "Watch this video",
  children
}) {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const handleVideoClick = (e) => {
    if (hasVideo) {
      e.preventDefault();
      e.stopPropagation();
      setIsVideoModalOpen(true);
    }
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  const displayTitle = videoTitle || fallbackTitle;
  const displayDescription = videoDescription || fallbackDescription;

  return (
    <>
      {/* Render the card content using children render prop */}
      {children({ hasVideo, handleVideoClick })}

      {/* Video Modal */}
      {hasVideo && (
        <Modal
          isOpen={isVideoModalOpen}
          onClose={closeVideoModal}
          className="bg-black rounded-lg overflow-hidden max-w-4xl w-full mx-4"
          overlayClass="bg-black bg-opacity-75"
          closeButtonClass="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
        >
          <div className="relative">
            <video
              className="w-full h-auto max-h-[70vh]"
              controls
              autoPlay
              poster="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjE4MCIgdmlld0JveD0iMCAwIDMyMCAxODAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMjAiIGhlaWdodD0iMTgwIiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjE2MCIgY3k9IjkwIiByPSIzMCIgZmlsbD0iIzM3NDE1MSIvPgo8cG9seWdvbiBwb2ludHM9IjE1MCw3NSAxNzUsMTAwIDE1MCwxMjUiIGZpbGw9IndoaXRlIi8+Cjx0ZXh0IHg9IjE2MCIgeT0iMTUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjczODAiPkRlbW8gVmlkZW88L3RleHQ+Cjwvc3ZnPg=="
            >
              <source
                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            
            {/* Video Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <h3 className="text-white text-xl font-semibold mb-1">
                {displayTitle}
              </h3>
              <p className="text-gray-200 text-sm">
                {displayDescription}
              </p>
              {videoDuration && (
                <p className="text-gray-300 text-xs mt-2">
                  Duration: {videoDuration}
                </p>
              )}
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}