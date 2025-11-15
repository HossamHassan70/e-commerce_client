import React, { useState } from "react";
import { Menu, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  // دوال التنقل
  const handleHomeClick = () => {
    setIsOpen(false);
    navigate("/");
  };

  const handleProductsClick = () => {
    setIsOpen(false);
    navigate("/product");
  };

  const handleCategoriesClick = () => {
    setIsOpen(false);
    navigate("/category");
  };

  return (
    <>
      {/* الجزء الأخضر السفلي */}
      <nav className="bg-primary text-white relative">
        <div className="w-full md:max-w-[1400px] mx-auto px-6 py-3 flex justify-center relative">
          {/* زر 3 شرط فقط */}
          <button
            onClick={toggleMenu}
            className="absolute left-6 flex items-center gap-2 text-white hover:text-gray-200"
          >
            <Menu size={22} />
          </button>

          {/* الروابط في المنتصف */}
          <ul className="flex gap-8 font-semibold text-white">
            <li
              onClick={handleHomeClick}
              className="hover:text-gray-200 cursor-pointer"
            >
              Home
            </li>

            <li
              onClick={handleProductsClick}
              className="hover:text-gray-200 cursor-pointer"
            >
              Products
            </li>

            <li
              onClick={handleCategoriesClick}
              className="hover:text-gray-200 cursor-pointer flex items-center gap-1"
            >
              Categories <ChevronDown size={16} />
            </li>

            <li className="hover:text-gray-200 cursor-pointer">Offers</li>
          </ul>
        </div>

        {/* القائمة اللي بتظهر عند الضغط على الـ 3 شرط */}
        {isOpen && (
          <div className="absolute bg-white text-gray-800 shadow-lg rounded-md left-6 mt-1 z-20 w-64">
            <ul className="flex flex-col py-2">
              <li
                onClick={handleCategoriesClick}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                Shopping by categories
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}
