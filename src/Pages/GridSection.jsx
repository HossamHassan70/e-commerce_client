import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const ShopSection = () => {
  const categories = [
    {
      id: 1,
      title: "Sunglasses",
      discount: "45-80% Off",
      image:
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&h=1000&fit=crop",
      span: "col-span-1 row-span-1 md:row-span-2",
    },
    {
      id: 2,
      title: "Foot Wear",
      discount: "Up to 75% Off",
      image:
        "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&h=400&fit=crop",
      span: "col-span-1 row-span-1",
    },
    {
      id: 3,
      title: "Accessorise",
      discount: "Up to 75% Off",
      image:
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=400&fit=crop",
      span: "col-span-1 row-span-1",
    },
    {
      id: 4,
      title: "Beauty Care",
      discount: "45-80% Off",
      image:
        "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=1200&h=600&fit=crop",
      span: "col-span-1 md:col-span-2 row-span-1",
    },
  ];

  return (
    <section className="py-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[500px]">
          {categories.map((category) => (
            <Card
              key={category.id}
              className={`${category.span} overflow-hidden group cursor-pointer transition-all duration-500 border-0 rounded-2xl`}
            >
              <CardContent className="p-0 h-full relative">
                {/* الصورة */}
                <motion.div
                  initial={{ scale: 1, opacity: 1 }}
                  whileHover={{ scale: 0.9, opacity: 0.2 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* المحتوى */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 flex flex-col items-center justify-center bg-light-green text-center"
                >
                  <h2 className="text-2xl text-gray-900 mb-2 font-semibold">
                    {category.title}
                  </h2>
                  <p className="text-sm text-white font-medium mb-3">
                    {category.discount}
                  </p>
                  <button className="flex items-center gap-1 text-gray-800 font-semibold hover:gap-2 transition-all duration-300 group/btn">
                    <span className="text-sm">Shop Now</span>
                    <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
