// components/ProductTabs.jsx
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DealsOfTheDay from "../Deals";

const ProductTabs = ({ description, additionalInfo, reviews = [] }) => {
  // بيانات افتراضية بالإنجليزي لو مفيش reviews
  const defaultReviews = reviews.length > 0 ? reviews : [
    {
      id: 1,
      name: "John Smith",
      rating: 5,
      comment: "Amazing product! High quality and fast delivery. Highly recommend.",
      date: "Oct 15, 2025",
    },
    {
      id: 2,
      name: "Emma Wilson",
      rating: 4,
      comment: "Very good product, but the packaging could be improved.",
      date: "Oct 10, 2025",
    },
    {
      id: 3,
      name: "Michael Brown",
      rating: 5,
      comment: "Best purchase I've made on this site. Comfortable and stylish.",
      date: "Oct 05, 2025",
    },
  ];

  return (
    <div className="w-[80%] mx-auto my-10">
      <Tabs defaultValue="description" className="mt-4 m-auto flex justify-center items-center">
        <TabsList className="w-[80%] bg-transparent">
          <TabsTrigger
            value="description"
            className="text-secondary text-xl hover:text-primary !shadow-none data-[state=active]:!border-primary data-[state=active]:!text-primary transition-all border-none relative px-0"
          >
            <span className="border-b-2 !shadow-none border-secondary hover:border-primary pb-1">
              Description
            </span>
          </TabsTrigger>
          <TabsTrigger
            className="text-secondary text-xl hover:text-primary !shadow-none transition-all border-none relative px-0 data-[state=active]:!border-primary data-[state=active]:!text-primary "
            value="additional"
          >
            <span className="border-b-2 border-secondary hover:border-primary data-[state=active]:border-primary data-[state=active]:text-primary pb-1">
              Additional Information
            </span>
          </TabsTrigger>
          <TabsTrigger
            className="text-secondary text-xl hover:text-primary !shadow-none transition-all border-none relative px-0 data-[state=active]:!border-primary data-[state=active]:!text-primary"
            value="review"
          >
            <span className="border-b-2 border-secondary hover:border-primary data-[state=active]:border-primary data-[state=active]:text-primary pb-1">
              Reviews ({defaultReviews.length})
            </span>
          </TabsTrigger>
        </TabsList>

        {/* Description */}
        <TabsContent value="description" className="">
          <p className="text-lg text-secondary my-4">{description}</p>
        </TabsContent>

        {/* Additional Information */}
        <TabsContent value="additional" className="">
          <ul className="list-disc pl-5 text-lg text-secondary my-4">
            {additionalInfo.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </TabsContent>

        {/* Reviews - Cards (بالإنجليزي) */}
        <TabsContent value="review" className="">
          <div className="space-y-6 my-4">
            {defaultReviews.map((review) => (
              <div
                key={review.id}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{review.name}</h4>
                      <p className="text-sm text-gray-500">{review.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-xs ${
                          i < review.rating ? "text-yellow-400" : "text-gray-300"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">{review.comment}</p>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Related Products */}
      <div className="text-center py-5">
        <p className="text-lg font-semibold text-secondary mb-2">
          Related Product
        </p>
        <p className="text-2xl text-primary font-semibold">
          Explore Related product
        </p>
      </div>
      <DealsOfTheDay title={null} />
    </div>
  );
};

export default ProductTabs;