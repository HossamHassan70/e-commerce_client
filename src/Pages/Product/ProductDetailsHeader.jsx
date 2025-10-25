import React from "react";
import Breadcrumbs from "@/components/ui/Breadcrumbs"; // استيراد الـ Breadcrumbs الذي كتبته

const ProductDetailsHeader = () => {
    return (
        <>
                <div className="relative bg-light-green text-white py-4 px-6 flex items-center justify-between w-[1,440px] h-[100px]">
            {/* صورة اليسار */}
            <div className="absolute top-0 left-0 w-40 h-full bg-[url('/src/assets/DetailsHeader.jpg')] bg-no-repeat bg-contain"></div>
            {/* صورة اليمين */}
            <div className="absolute top-0 right-0 w-40 h-full bg-[url('/src/assets/DetailsHeader2.jpg')] bg-no-repeat bg-contain transform scale-x-[-1]"></div>

            <div className="flex flex-col items-center mx-auto ">
                <h1 className="text-2xl font-bold z-10 text-gray-900 pb-4">Product Details</h1>
                <Breadcrumbs />
            </div>
        </div>
        <div className="h-[60px] text-center m-auto pt-4 text-xl">
            Sign Up and <span className="font-semibold">Get 25%</span>  For Your First Order . <span className="text-primary">Sign Up Now </span> 
            
        </div>
        </>


    );
};

export default ProductDetailsHeader;