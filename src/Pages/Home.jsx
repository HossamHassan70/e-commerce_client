import React from "react";
import Hero from "./Hero";
import Categories from "./Categories";
import DealsOfTheDay from "./Deals";
import CategoriesSection from "./GridSection";
import ProductTabsHeader from "./Arrival";
export default function Home() {
  return (
    <div>
      <Hero />
      <Categories/>
      <DealsOfTheDay/>
      <CategoriesSection/>
      <ProductTabsHeader/>
    </div>
  );
}
