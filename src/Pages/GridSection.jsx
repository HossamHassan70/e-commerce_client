import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const ShopSection = () => {
  const categories = [
{
      id: 1,
      title: 'Sunglasses',
      discount: '45-80% Off',
      image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&h=1000&fit=crop',
      // Card 1: Mobile: 1 col, Desktop: 1st col spans 2 rows
      span: 'col-span-1 row-span-1 md:row-span-2' 
    },
    {
      id: 2,
      title: 'Foot Wear',
      discount: 'Up to 75% Off',
      image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&h=400&fit=crop',
      // Card 2: Always 1 col, 1 row
      span: 'col-span-1 row-span-1' 
    },
    {
      id: 3,
      title: 'Accessorise',
      discount: 'Up to 75% Off',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=400&fit=crop',
      // Card 3: Always 1 col, 1 row
      span: 'col-span-1 row-span-1' 
    },
    {
      id: 4,
      title: 'Beauty Care',
      discount: '45-80% Off',
      image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=1200&h=600&fit=crop',
      // Card 4: Mobile: 1 col, Desktop: 2 cols
      span: 'col-span-1 md:col-span-2 row-span-1' 
    }
  ];

  return (
    <section className="w-full bg-white py-8 px-4 relative z-0 clear-both mt-2">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[500px]">
          {categories.map((category) => (
            <Card 
              key={category.id}
              // Applying the calculated span classes
              className={`${category.span} overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300 border-0 rounded-2xl`}
            >
              <CardContent className="p-0 h-full relative">
                {/* Image */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Content Overlay */}
                {/* Reduced padding p-5 to p-4 and font size to text-2xl/text-sm for smaller cards */}
                <div className="absolute bottom-0 left-0 right-0 bg-light-green p-4">
                  <h2 className="text-2xl  text-gray-900 mb-1">
                    {category.title}
                  </h2>
                  <p className="text-sm text-white font-medium mb-2">
                    {category.discount}
                  </p>
                  <button className="flex items-center gap-1 text-gray-800 font-semibold hover:gap-2 transition-all duration-300 group/btn">
                    <span className="text-sm">Shop Now</span>
                    <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopSection;