// components/ProductTabs.jsx
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DealsOfTheDay from "../Deals";
import customBullet from "@/assets/icon.png";

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
{/* Description - مطابق للفيجما 100% */}
<TabsContent value="description" className="mt-8">
  <div className="text-secondary space-y-6">
    {/* الفقرة الأولى */}
    <p className="text-lg leading-relح7">
      Lorem ipsum dolor sit amet consectetur. Maecenas congue velit quis sagittis sollicitudin adipiscing. 
      Nunc bibendum id penatibus neque in.
    </p>

    {/* الفقرة التانية */}
    <p className="text-lg leading-relaxed">
      Molestie nunc in mauris in risus fermentum. Sit venenatis et viverra id aliquet porta. Risus urna quis 
      amet libero id. Ut viverra sagittis nunc est molestie nunc nec. Cursus aliquet venenatis phasellus nunc 
      nam lacinia fames sit velit. Lectus commodo nibh mauris consectetur quis.
    </p>


    {/* القايمة بنقاط مخصصة */}
    <ul className="space-y-4">
      {[
        "Lorem ipsum dolor sit amet consectetur.",
        "Lorem ipsum dolor sit amet consectetur.",
        "Lorem ipsum dolor sit amet consectetur.",
        "Lorem ipsum dolor sit amet consectetur.",
        "Lorem ipsum dolor sit amet consectetur.",
      ].map((item, i) => (
        <li key={i} className="flex items-start gap-4">
          <img
            src={customBullet}
            alt="bullet"
            className="w-5 h-5 mt-0.5 object-contain flex-shrink-0"
          />
          <span className="text-lg leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  </div>
</TabsContent>

        {/* Additional Information */}
        <TabsContent value="additional" className="">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-secondary my-6">
            {/* Shipping & Delivery Policy */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                1. Shipping & Delivery Policy
              </h3>
              <ul className="space-y-3">
                {[
                  "Shipping Costs Based on Region",
                  "Estimated delivery time",
                  "Partner Shipping Companies",
                  "Free Shipping policy (if applicable)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    {/* ✅ نستخدم الصورة بدل الشكل */}
                    <img
                      src={customBullet}
                      alt=""
                      className="w-4 h-4 mt-1 object-contain"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Return & Exchange Policy */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                2. Return & Exchange Policy
              </h3>
              <ul className="space-y-3">
                {[
                  "The allowed period for returns",
                  "Conditions for returns and acceptance",
                  "Refund Method",
                  "Products that cannot be returned",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <img
                      src={customBullet}
                      alt=""
                      className="w-4 h-4 mt-1 object-contain"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Available Payment Methods */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                3. Available Payment Methods
              </h3>
              <ul className="space-y-3">
                {[
                  "Accepted Credit/Debit cards",
                  "Cash on Delivery",
                  "E-Wallets / Digital Wallets",
                  "Installment plans (if available)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <img
                      src={customBullet}
                      alt=""
                      className="w-4 h-4 mt-1 object-contain"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </TabsContent>




        {/* Reviews - Cards (بالإنجليزي) */}
        {/* Reviews */}
        <TabsContent value="review" className="w-full">
          <div className="my-8">
            {/* Rating Statistics & Overall Rating */}
            <div className="flex items-start gap-8 mb-12">
              {/* Rating Bars */}
              <div className="flex-1 space-y-3">
                {[
                  { label: "five", count: 989 },
                  { label: "Four", count: "4.5k" },
                  { label: "Three", count: 50 },
                  { label: "Tow", count: 16 },
                  { label: "One", count: 8 },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-sm text-gray-600 w-12 capitalize">{item.label}</span>
                    <span className="text-[#CEB56466]">★</span>
                    <div className="flex-1 h-2.5 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#CEB56466] rounded-full"
                        style={{ width: `${(5 - i) * 18 + 10}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-600 w-12 text-right">
                      {item.count}
                    </span>
                  </div>
                ))}
              </div>

              {/* Overall Rating Box */}
              <div className="bg-yellow-50 rounded-xl p-8 text-center min-w-[220px]">
                <div className="text-5xl font-bold text-gray-800 mb-3">4.3</div>
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#CEB56466] text-2xl">
                      ★
                    </span>
                  ))}
                </div>
                <div className="text-sm text-gray-600 font-medium">50 Rating</div>
              </div>
            </div>

            {/* Two Columns: Recent Feedbacks & Add Review */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Recent Feedbacks */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Recent Feedbacks</h3>
                <div className="space-y-4">
                  {defaultReviews.map((review) => (
                    <div key={review.id} className="border border-gray-200 rounded-xl p-5">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-16 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-bold text-lg flex-shrink-0">
                          {review.name.charAt(0)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-gray-900 text-base">{review.name}</h4>
                            <div className="flex items-center gap-0.5">
                              {[...Array(5)].map((_, i) => (
                                <span
                                  key={i}
                                  className={`text-base ${i < review.rating ? "text-[#CEB56466]" : "text-gray-300"
                                    }`}
                                >
                                  ★
                                </span>
                              ))}
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 leading-relaxed">{review.comment}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Add Review Form */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Add a Review</h3>
                <form className="space-y-5">
                  {/* Rating Input */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Add Your Rating
                    </label>
                    <div className="flex items-center gap-2">
                      {[...Array(5)].map((_, i) => (
                        <button
                          key={i}
                          type="button"
                          className="text-3xl text-gray-300 hover:text-[#CEB56466] transition-colors"
                        >
                          ★
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name Input */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CEB56466] focus:border-transparent"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CEB56466] focus:border-transparent"
                    />
                  </div>

                  {/* Review Textarea */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Write Your Review
                    </label>
                    <textarea
                      rows="3"
                      className="w-full p-2  border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CEB56466] focus:border-transparent resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-[#CEB56466] hover:bg-yellow-500 text-white font-semibold py-2 rounded-lg transition-colors shadow-sm"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
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