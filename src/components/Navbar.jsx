import React, { useState } from "react";
import { Menu, ChevronDown, Facebook, Twitter, Linkedin } from "lucide-react";

// Navbar Component
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-primary text-white">
      <div className="w-full md:max-w-[1400px] mx-auto p-4 md:px-8 lg:px-20">
        <div className="flex items-center justify-between">
          {/* Categories Button */}
          <button className="bg-light-green text-white font-semibold px-4 py-2 rounded-lg flex items-center gap-2">
            Shopping by categories 
            <Menu size={18} />
          </button>

          {/* Desktop Links */}
          <ul className="hidden md:flex md:justify-center md:items-center md:m-auto gap-8 font-medium text-light-white">
            <li className="hover:text-secondary cursor-pointer font-bold">Home</li>
            <li className="hover:text-secondary cursor-pointer">Products</li>
            <li className="hover:text-secondary cursor-pointer flex items-center gap-1">
              Categories <ChevronDown size={16} />
            </li>
            <li className="hover:text-secondary cursor-pointer">Offers</li>
          </ul>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={toggleMenu}>
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4">
            <ul className="flex flex-col gap-3 font-medium">
              <li className="hover:text-secondary">Home</li>
              <li className="hover:text-secondary">Products</li>
              <li className="hover:text-secondary">Categories</li>
              <li className="hover:text-secondary">Offers</li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}