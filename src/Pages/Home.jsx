import React, { useState } from "react";
import Hero from "./Hero";
import Categories from "./Categories";
import DealsOfTheDay from "./Deals";
import CategoriesSection from "./GridSection";
import ProductTabsHeader from "./Arrival";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="w-full md:max-w-[1400px] mx-auto p-4 md:px-8 lg:px-20">
      <Hero
        activeIndex={activeIndex}
        handleDotClick={handleDotClick}
        totalDots={3}
      />
      <Categories />
      <DealsOfTheDay />
      <CategoriesSection />
      <ProductTabsHeader />
    </div>
  );
}
