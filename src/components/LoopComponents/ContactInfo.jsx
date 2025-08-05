import React from "react";

/**
 * Renders one piece of contact info with icon.
 *
 * Props:
 * - icon: React component (Lucide icon)
 * - title: string
 * - info: string
 */
export default function ContactInfo({ icon: Icon, title, info }) {
  return (
    <div className="text-center">
      <div className="bg-white/20 p-3 rounded-full w-fit mx-auto mb-3">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h4 className="text-lg font-semibold mb-1">{title}</h4>
      <p className="opacity-90">{info}</p>
    </div>
  );
}
