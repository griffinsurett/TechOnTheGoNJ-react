import React, { useState } from "react";
import { Menu, X, Settings } from "lucide-react";
import { companyData, navigationData } from "../siteData";

/**
 * Header handles the company branding and responsive nav menu.
 */
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 w-full backdrop-blur-md shadow-sm z-50">
      <div className="inner-section flex justify-between items-center py-4">
        <a href="/" className="flex items-center space-x-3">
          <div className="secondary-b-g-gradient p-2 rounded-lg">
            <Settings className="h-6 w-6 text-white" />
          </div>
          <div>
            <p className="text-xl font-bold text-gray-800">
              {companyData.name}
            </p>
            <p className="text-xs text-gray-600 hidden sm:block">
              {companyData.subtitle}
            </p>
          </div>
        </a>

        <nav className="hidden md:flex space-x-8">
          {navigationData.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden pb-4 border-t border-gray-200 mt-4">
          <nav className="flex flex-col space-y-3 pt-4">
            {navigationData.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
