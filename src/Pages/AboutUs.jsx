import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import img1 from "@/assets/AboutUs/img1.png";
import img2 from "@/assets/AboutUs/img2.jpg";
import img3 from "@/assets/AboutUs/img3.png";

export default function AboutUs() {
    return (
        <div className="bg-gray-50 min-h-screen flex flex-col">
            {/* ---------- About Section ---------- */}
            <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-[#8383834D] shadow-sm">
                <div className="w-[420px] h-[165px] text-center mb-8 md:mb-0">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">About Us</h2>
                    <p className="text-gray-600   leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur. Dolor odio venenatis tortor
                        cras lorem libero mi sit cursus.
                    </p>
                </div>
                <div className="relative w-[522px] h-[389px] rounded-lg shadow-md overflow-hidden">
                    <img
                        src={img1}
                        alt="About us"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30"></div>
                </div>

            </section>

            {/* ---------- Mission Section ---------- */}
            <section className="grid grid-cols-2 w-[1000px] mx-auto pt-8 rounded-lg overflow-hidden">
                {/* Left Image */}
                <div className="relative w-[500px] h-[389px] overflow-hidden rounded-l-2xl">
                    <img
                        src={img2}
                        alt="Our mission"
                        className="w-full h-full object-cover"
                    />
                    {/* Optional overlay */}
                    <div className="absolute inset-0 bg-black/20"></div>
                </div>

                {/* Right Text */}
                <div className="bg-gray-100 flex flex-col justify-center p-8 rounded-r-2xl">
                    <h3 className="text-2xl font-bold text-primary mb-3">
                        Our Mission
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur. Pellentesque etiam vitae amet urna
                        elementum orci fames nunc. Faucibus lacus volutpat enim ultricies dictum
                        malesuada. Elementum auctor quam volutpat luctus massa pretium ultricies
                        tempus. Ut tincidunt nunc pulvinar tristique consectetur mauris duis
                        pharetra et.
                    </p>
                </div>
            </section>

            {/* ---------- Vision Section ---------- */}
            <section className="grid grid-cols-2 w-[1000px] mx-auto  rounded-lg overflow-hidden">
                {/* Left Text */}
                <div className="bg-gray-100 flex flex-col justify-center p-8 rounded-l-2xl order-2 md:order-1">
                    <h3 className="text-2xl font-bold text-primary mb-3">
                        Our Vision
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur. Pellentesque etiam vitae amet urna
                        elementum orci fames nunc. Faucibus lacus volutpat enim ultricies dictum
                        malesuada. Elementum auctor quam volutpat luctus massa pretium ultricies
                        tempus. Ut tincidunt nunc pulvinar tristique consectetur mauris duis
                        pharetra et.
                    </p>
                </div>

                {/* Right Image */}
                <div className="relative w-[500px] h-[389px] overflow-hidden rounded-r-2xl order-1 md:order-2">
                    <img
                        src={img3}
                        alt="Our vision"
                        className="w-full h-full object-cover"
                    />
                    {/* Optional overlay */}
                    <div className="absolute inset-0 bg-black/20"></div>
                </div>
            </section>

        </div>
    );
}
