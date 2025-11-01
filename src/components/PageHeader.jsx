import React from "react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

const PageHeader = ({ title, breadcrumbItems }) => {
  return (
    <div className="relative bg-light-green text-white overflow-hidden">
      {/* الخلفية العلوية */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-40 h-40 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-8 right-0 w-32 h-32 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="relative max-w-7xl mx-auto ">
        <div className="flex items-center justify-between ">
          {/* صورة اليسار */}
          <div 
            className="w-40 h-30 bg-[url('/src/assets/DetailsHeader.jpg')] bg-no-repeat bg-center bg-cover  flex-shrink-0"

          ></div>

          {/* المحتوى الأوسط */}
          <div className="flex flex-col items-center flex-1 mx-8">
            <h1 className="text-3xl font-bold">{title}</h1>
            <div className="mt-2">
              <Breadcrumbs 
                items={breadcrumbItems} 
                className="text-white/80 text-sm"
              />
            </div>
          </div>

          {/* صورة اليمين */}
          <div 
            className="w-40 h-30 bg-[url('/src/assets/DetailsHeader2.jpg')] bg-no-repeat   bg-center bg-cover flex-shrink-0"
  
          ></div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;