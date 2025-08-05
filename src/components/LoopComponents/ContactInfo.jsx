import React from "react";

/**
 * Renders one piece of contact info with icon.
 *
 * Props:
 * - icon: React component (Lucide icon)
 * - title: string
 * - info: string
 * - href: string (optional)
 */
export default function ContactInfo({ icon: Icon, title, info, href }) {
  const content = (
    <>
      <div className="bg-white/20 p-3 rounded-full w-fit mx-auto mb-3">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h4 className="text-lg font-semibold mb-1">{title}</h4>
      <p className="opacity-90">{info}</p>
    </>
  );

  if (href) {
    return (
      <a href={href} className="text-center">
        {content}
      </a>
    );
  }

  return (
    <div className="text-center">
      {content}
    </div>
  );
}