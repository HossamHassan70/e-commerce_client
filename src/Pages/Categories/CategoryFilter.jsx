// components/CategoryFilter.jsx
import React, { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const CategoryFilter = () => {
  // حالة الفتح/الغلق لكل قسم
  const [openSections, setOpenSections] = useState({
    women: true,
    men: false,
    watches: false,
    bags: false,
    shoes: false,
    accessories: false,
    kids: false,
  });

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const categories = [
    {
      id: "women",
      title: "Women",
      sub: [
        "All Women",
        "Clothing",
        "Dresses",
        "T-shirt",
        "Shirts",
        "Pants",
        "Skirts",
        "Tops",
        "Shoes",
        "Jewelry",
        "Accessories",
        "Bags",
        "Sun glasses",
      ]
    },
    {
      id: "men",
      title: "Men",
      sub: ["All Men", "Shirts", "Pants", "Shoes", "Accessories"]
    },
    {
      id: "watches",
      title: "Watches",
      sub: []
    },
    {
      id: "bags",
      title: "Bags",
      sub: []
    },
    {
      id: "shoes",
      title: "Shoes",
      sub: []
    },
    {
      id: "accessories",
      title: "Accessories",
      sub: []
    },
    {
      id: "kids",
      title: "Kids",
      sub: []
    },
  ];

  return (
    <div className="w-80 bg-gray-50 border-r border-gray-200 h-screen sticky top-0 overflow-x-hidden overflow-y-auto max-h-[90vh] scrollbar-width-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
      <div className="p-6 overflow-hidden">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Category</h2>

        <div className="space-y-1">
          {categories.map((cat) => (
            <Collapsible
              key={cat.id}
              open={openSections[cat.id]}
              onOpenChange={() => toggleSection(cat.id)}
            >
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  className={`w-full justify-between hover:bg-gray-100 rounded-lg 
                    ${openSections[cat.id] ? "text-teal-600 font-semibold" : "text-gray-700"}
                    hover:text-teal-600 transition-all`}
                >
                  <span className="text-lg">{cat.title}</span>
                  {cat.sub.length > 0 && (
                    <span className="ml-2">
                      {openSections[cat.id] ? 
                        <ChevronDown className="w-5 h-5" /> : 
                        <ChevronRight className="w-5 h-5" />
                      }
                    </span>
                  )}
                </Button>
              </CollapsibleTrigger>

              {cat.sub.length > 0 && (
                <CollapsibleContent className="pl-6 mt-2 space-y-2">
                  {cat.sub.map((item, idx) => (
                    <button
                      key={idx}
                      className={`block w-full text-left px-4 py-2.5 rounded-lg text-gray-600 
                        hover:bg-teal-50 hover:text-teal-600 transition-all text-base
                        ${item === "All Women" ? "font-medium text-teal-600" : ""}`}
                    >
                      {item}
                    </button>
                  ))}
                </CollapsibleContent>
              )}
            </Collapsible>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;