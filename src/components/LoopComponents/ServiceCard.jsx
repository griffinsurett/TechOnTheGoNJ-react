import React from "react";
import { Play } from "lucide-react";

/**
 * Renders one service card, optional video icon.
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
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg main-transition border border-gray-100 hover:border-blue-200 group">
      <div className="primary-faded-b-g-gradient p-3 rounded-lg w-fit xsmall-under-text group-hover:from-blue-200 group-hover:to-green-200 main-transition relative">
        <Icon className="h-6 w-6 text-blue-600" />
        {service.hasVideo && (
          <div className="absolute -top-1 -right-1 bg-red-500 rounded-full p-1">
            <Play className="h-3 w-3 text-white" />
          </div>
        )}
      </div>
      <h4 className="text-lg font-semibold text-gray-900 mb-2">
        {service.title}
      </h4>
      <p className="text-gray-600 text-sm leading-relaxed mb-3">
        {service.description}
      </p>
      {service.hasVideo && (
        <div className="mt-4">
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <video
              className="w-full h-32 object-cover"
              controls
              poster="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjE4MCIgdmlld0JveD0iMCAwIDMyMCAxODAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMjAiIGhlaWdodD0iMTgwIiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjE2MCIgY3k9IjkwIiByPSIzMCIgZmlsbD0iIzM3NDE1MSIvPgo8cG9seWdvbiBwb2ludHM9IjE1MCw3NSAxNzUsMTAwIDE1MCwxMjUiIGZpbGw9IndoaXRlIi8+Cjx0ZXh0IHg9IjE2MCIgeT0iMTUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjczODAiPkRlbW8gVmlkZW88L3RleHQ+Cjwvc3ZnPg=="
            >
              <source
                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="text-xs text-blue-600 font-medium flex items-center mt-2">
            <Play className="h-3 w-3 mr-1" />
            Watch demo video
          </div>
        </div>
      )}
    </div>
  );
}
