import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
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

export default function Hero({
  activeIndex = 0,
  handleDotClick = () => {},
  totalDots = heroSlidesData.length,
}) {
  const navigate = useNavigate();
  const currentSlide = heroSlidesData[activeIndex];

  return (
    <section className="w-full bg-gradient-to-br from-white to-teal-50 flex flex-col justify-center overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12 ">
        {/* Image Section */}
        <div className="relative w-full flex justify-center">
          <img
            src={currentSlide.image}
            alt={`${currentSlide.collection} Hero`}
            className="w-full max-w-[60rem] h-[35rem] sm:h-[38rem] md:h-[40rem] lg:h-[42rem] xl:h-[45rem] object-cover rounded-2xl shadow-md transition-transform duration-300 hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
        </div>

        {/* Content Section */}
        <div className="text-center lg:text-left space-y-[1.5rem] sm:space-y-[2rem] transition-all duration-700 transform">
          <h5
            className="font-island text-primary leading-none transition-all duration-500"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
            }}
          >
            {currentSlide.title}
          </h5>

          <h1
            className="font-inter font-semibold text-gray-900 leading-tight transition-all duration-500"
            style={{
              fontSize: "clamp(2rem, 5vw, 4.5rem)",
            }}
          >
            {currentSlide.collection}
          </h1>

          <p
            className="font-inter text-gray-700 leading-tight transition-all duration-500"
            style={{
              fontSize: "clamp(1.2rem, 2.5vw, 2rem)",
            }}
          >
            {currentSlide.discount}
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-[1rem] sm:gap-[1.5rem] pt-[2rem] sm:pt-[3rem]">
            <Button
              size="lg"
              className="bg-primary hover:bg-teal-600 text-white px-[2rem] py-[1rem] text-[1rem] sm:text-[1.1rem] font-semibold shadow-md hover:shadow-lg transition-all duration-300 rounded-xl"
            >
              Shop Now
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/category")}
              className="border-2 border-primary text-primary hover:bg-teal-50 hover:border-teal-600 px-[2rem] py-[1rem] text-[1rem] sm:text-[1.1rem] font-semibold rounded-xl transition-all duration-300"
            >
              Read More
            </Button>
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center  sm:mt-[2rem] space-x-[0.5rem]  sm:space-x-[1rem]">
        {Array.from({ length: totalDots }).map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className="focus:outline-none focus:ring-2 focus:ring-primary rounded-full p-[0.25rem] transition-all duration-300"
            aria-label={`Go to slide ${index + 1}`}
          >
            <div
              className={`rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "bg-primary w-[1rem] h-[1rem]"
                  : "bg-gray-300 hover:bg-gray-400 w-[0.6rem] h-[0.6rem]"
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
