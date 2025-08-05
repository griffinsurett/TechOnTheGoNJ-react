import React from "react";

/**
 * Renders one middleman service card.
 *
 * Props:
 * - icon: React component
 * - title: string
 * - description: string
 */
export default function MiddlemanCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
      <div className="bg-white/20 p-4 rounded-full w-fit mx-auto xsmall-under-text">
        <Icon className="h-8 w-8 text-white" />
      </div>
      <h4 className="text-xl font-semibold text-white mb-3">{title}</h4>
      <p className="text-white/90 leading-relaxed">{description}</p>
    </div>
  );
}
