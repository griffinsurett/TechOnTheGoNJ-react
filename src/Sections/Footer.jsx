import React from "react";
import { Settings } from "lucide-react";
import { companyData } from "../siteData";

const footerData = {
  tagline: "Making technology accessible and stress-free for everyone.",
  subtitle: "We handle the tech headaches so you don't have to.",
  copyright:
    "© 2025 Tech On The Go. All rights reserved. | Licensed & Insured",
};

function Footer() {
  const f = footerData;
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="inner-section text-center">
        <div className="flex items-center justify-center space-x-3 xsmall-under-text">
          <div className="secondary-b-g-gradient p-2 rounded-lg">
            <Settings className="h-6 w-6 text-white" />
          </div>
          <div>
            <h4 className="h4">{companyData.name}</h4>
            <p className="text-sm text-gray-400">{companyData.description}</p>
          </div>
        </div>
        <p className="text-gray-400 xsmall-under-text mt-4">
          {f.tagline}
          <br />
          {f.subtitle}
        </p>
        <div className="border-t border-gray-800 pt-4 mt-4">
          <p className="text-sm text-gray-500">{f.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
