import React, { useState } from "react";
import Button from "../components/Button";
import JerseyShorePhoto from "../assets/jerseyshore.jpg";

export const serviceAreaSectionData = {
  title: "We Serve The Entire Jersey Shore",
  description:
    "Based in Marlboro, we provide in-home tech support throughout Monmouth County and the greater Jersey Shore area.",
  extraText: "Don't see your town listed? We likely serve your area too!",
  extraCTA: "Call to confirm service in your location",
};

const serviceAreaData = {
  counties: {
    monmouth: "Monmouth County",
    ocean: "Ocean County", 
    middlesex: "Middlesex County",
  },
  areas: {
    monmouth: [
      "Aberdeen", "Allenhurst", "Allentown", "Asbury Park", "Atlantic Highlands",
      "Avon-by-the-Sea", "Belmar", "Bradley Beach", "Brielle", "Colts Neck", "Deal",
      "Eatontown", "Fair Haven", "Freehold", "Hazlet",
      "Highlands", "Holmdel", "Howell", "Interlaken", "Keansburg", "Keyport", "Lake Como",
      "Little Silver", "Loch Arbour", "Long Branch", "Manalapan", "Manasquan", "Marlboro",
      "Matawan", "Middletown", "Millstone", "Monmouth Beach", "Neptune City",
      "Neptune", "Ocean", "Oceanport", "Red Bank", "Roosevelt", "Rumson",
      "Sea Bright", "Sea Girt", "Shrewsbury", "Spring Lake",
      "Spring Lake Heights", "Tinton Falls", "Union Beach", "Upper Freehold", "Wall",
      "West Long Branch"
    ],
    ocean: [
      // Border towns with Monmouth County
      "Brielle",
      "Wall", 
      "Spring Lake",
      "Spring Lake Heights",
      "Manasquan",
      
      // Major municipalities & Jersey Shore
      "Point Pleasant", 
      "Point Pleasant Beach", 
      "Bay Head", 
      "Mantoloking",
      "Brick",
      "Toms River",
      "Jackson",
      "Lakewood",
      "Manchester",
      "Seaside Heights", 
      "Seaside Park", 
      "Lavallette",
      "Island Heights",
      "Beachwood",
      "South Toms River",
      "Ocean Gate",
      "Pine Beach",
      "Barnegat",
      "Lacey",
      "Berkeley",
      "Plumsted",
      "Lakehurst",
      "Ship Bottom", 
      "Long Beach", 
      "Beach Haven",
      "Surf City",
      "Harvey Cedars",
      "Barnegat Light",
      "Stafford",
      "Little Egg Harbor",
      "Tuckerton"
    ],
    middlesex: [
      "Old Bridge", "Monroe", "South Amboy", "Sayreville", "East Brunswick"
    ]
  }
};

function ServiceAreaSection() {
  const [activeCounty, setActiveCounty] = useState("monmouth");
  const d = serviceAreaSectionData;

  return (
    <section 
      id="area" 
      className="section relative bg-cover bg-center lg:bg-fixed bg-no-repeat"
      style={{
        backgroundImage: `url(${JerseyShorePhoto})`
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Content */}
      <div className="inner-section text-center relative z-10">
        <h3 className="h3 text-white mb-4">{d.title}</h3>
        <p className="text-xl text-white max-w-2xl mx-auto">
          {d.description}
        </p>

        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mt-6">
          {/* County Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {Object.entries(serviceAreaData.counties).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveCounty(key)}
                className={`button button-regular shadow-accent/30 main-transition ${
                  activeCounty === key
                    ? "bg-primary-b-g-gradient shadow-lg text-white"
                    : "primary-faded-b-g-gradient text-gray-700 hover:bg-blue-200"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Area Count Display */}
          <div className="text-center mb-6">
            <p className="text-gray-600 text-sm">
              Showing <span className="font-semibold text-blue-600">
                {serviceAreaData.areas[activeCounty].length}
              </span> municipalities in{" "}
              <span className="font-semibold">
                {serviceAreaData.counties[activeCounty]}
              </span>
            </p>
          </div>

          {/* Towns Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {serviceAreaData.areas[activeCounty].map((area, i) => (
              <div
                key={i}
                className="text-center p-3 main-transition rounded-lg primary-faded-b-g-gradient hover:bg-blue-100 transform hover:scale-105 duration-200"
              >
                <span className="text-gray-800 font-medium text-sm">{area}</span>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
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