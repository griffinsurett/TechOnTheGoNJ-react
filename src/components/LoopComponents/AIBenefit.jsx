import React from "react";
import { CheckCircle } from "lucide-react";

/**
 * Renders one AI benefit item.
 *
 * Props:
 * - title: string
 * - description: string
 */
export default function AIBenefit({ title, description }) {
  return (
    <div className="flex items-start space-x-3">
      <div className="bg-blue-100 p-2 rounded-full flex-shrink-0 mt-1">
        <CheckCircle className="h-4 w-4 text-blue-600" />
      </div>
      <div>
        <h5 className="font-semibold text-gray-900 mb-1">{title}</h5>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}
