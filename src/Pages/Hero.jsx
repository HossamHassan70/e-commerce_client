import React from "react";
import { Button } from "@/components/ui/button";
import HeroImage from "../assets/Hero.jpg"; 

const heroSlidesData = [
  {
    id: 1,
    image: HeroImage,
    title: "Summer Sale",
    collection: "Collections",
    discount: "Up to 65% off",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=1000&q=80",
    title: "New Arrivals",
    collection: "Denim & Casual",
    discount: "Shop Now",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=1200&q=80",
    title: "Flash Deal",
    collection: "Watches",
    discount: "72 Hours Only!",
  },
];

export default function Hero({ activeIndex = 0, handleDotClick = () => {}, totalDots = heroSlidesData.length }) {
  const currentSlide = heroSlidesData[activeIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-teal-50 flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12 py-12">
        
        {/* Image Section */}
        <div className="relative w-full flex justify-center">
          <img
            src={currentSlide.image}
            alt={`${currentSlide.collection} Hero`}
            className="w-full max-w-[450px] sm:max-w-[600px] md:max-w-[750px] lg:max-w-[900px] xl:max-w-[950px] h-auto object-cover rounded-2xl shadow-md transition-transform duration-300 hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
        </div>

        {/* Content Section */}
        <div className="text-center lg:text-left space-y-4 sm:space-y-6">
          {/* Title */}
          <h5 className="font-island text-primary text-[48px] sm:text-[64px] md:text-[80px] lg:text-[90px] xl:text-[96px] leading-none">
            {currentSlide.title}
          </h5>

          {/* Collection */}
          <h1 className="font-inter font-semibold text-gray-900 text-[36px] sm:text-[48px] md:text-[64px] lg:text-[72px] xl:text-[80px] leading-none">
            {currentSlide.collection}
          </h1>

          {/* Discount */}
          <p className="font-inter text-gray-700 text-[20px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] leading-tight">
            {currentSlide.discount}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-6 pt-6 sm:pt-10">
            <Button
              size="lg"
              className="bg-primary hover:bg-teal-600 text-white px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 rounded-xl"
            >
              Shop Now
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-teal-50 hover:border-teal-600 px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold rounded-xl transition-all duration-300"
            >
              Read More
            </Button>
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-8 sm:mt-12 space-x-2 sm:space-x-3">
        {Array.from({ length: totalDots }).map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className="focus:outline-none focus:ring-2 focus:ring-primary rounded-full p-1 transition-all duration-300"
            aria-label={`Go to slide ${index + 1}`}
          >
            <div
              className={`rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "bg-primary w-4 h-4 sm:w-5 sm:h-5"
                  : "bg-gray-300 hover:bg-gray-400 w-2 h-2 sm:w-3 sm:h-3"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
