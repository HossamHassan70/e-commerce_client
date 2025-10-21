import React from 'react';
import { Button } from '@/components/ui/button';
import HeroImage from '../assets/Hero.jpg';

export default function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-teal-50">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[653px]">
          {/* Image Section */}
          <div className="relative ">
            <img
              src={HeroImage}
              alt="Summer Fashion Hero"
              className="w-[918px] h-[714px] object-cover transition-opacity duration-300 hover:opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>

          {/* Content Section */}
          <div className="text-center space-y-3">
            {/* Summer Sale Text */}
            <h5 className="font-island text-4xl font-normal tracking-normal text-primary uppercase">
              Summer Sale
            </h5>

            {/* Collections Text */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight tracking-wide">
              Collections
            </h1>

            {/* Discount Text */}
            <p className="text-2xl md:text-3xl  text-gray-700">
              Up to 65% off
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-center pt-10">
              <Button
                size="lg"
                className="bg-primary hover:bg-teal-600 text-white px-6 py-3 text-base font-semibold  shadow-md hover:shadow-lg transition-all duration-300"
              >
                Shop Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-teal-50 hover:border-teal-600 px-6 py-3 text-base font-semibold  transition-all duration-300"
              >
                Read More
              </Button>
            </div>
          </div>
        </div>
    </div>
  );
}