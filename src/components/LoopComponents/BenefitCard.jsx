import React from "react";

/**
 * Renders one benefit card in WhyChooseUsSection.
 *
 * Props:
 * - icon: React component
 * - title: string
 * - description: string
 */
export default function BenefitCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 group hover:shadow-lg main-transition">
      <div className="flex items-start space-x-4">
        <div className="secondary-b-g-gradient p-3 rounded-full flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div>
          <h4 className="text-xl font-semibold text-gray-900 mb-3">{title}</h4>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}
