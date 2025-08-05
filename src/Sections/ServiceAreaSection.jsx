import React from "react";
import Button from "../components/Button";

export const serviceAreaSectionData = {
  title: "We Serve The Entire Jersey Shore",
  description:
    "Based in Marlboro, we provide in-home tech support throughout Monmouth County and the greater Jersey Shore area.",
  areas: [
    "Marlboro",
    "Freehold",
    "Colts Neck",
    "Manalapan",
    "Howell",
    "Wall Township",
    "Ocean Township",
    "Neptune",
    "Asbury Park",
    "Long Branch",
    "Red Bank",
    "Rumson",
    "Fair Haven",
    "Little Silver",
    "Shrewsbury",
    "Eatontown",
    "West Long Branch",
    "Lakewood",
  ],
  extraText: "Don't see your town listed? We likely serve your area too!",
  extraCTA: "Call to confirm service in your location",
};

function ServiceAreaSection() {
  const d = serviceAreaSectionData;
  return (
    <section id="area" className="section">
      <div className="inner-section text-center">
        <h3 className="h3 text-gray-900 mb-4">{d.title}</h3>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          {d.description}
        </p>

        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mt-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {d.areas.map((area, i) => (
              <div
                key={i}
                className="text-center p-3 rounded-lg primary-faded-b-g-gradient hover:bg-blue-100 transition-colors"
              >
                <span className="text-gray-800 font-medium">{area}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">{d.extraText}</p>
            <Button variant="primary" className="button-regular">
              {d.extraCTA}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceAreaSection;
