// pages/CategoryPage.jsx
import React from "react";
import CategoryFilter from "./CategoryFilter";
import ProductCard from "../Product/ProductCard";

const dummyProducts = [
  {
    id: 1,
    name: "Men",
    image:
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400&q=80",
  },
  {
    id: 2,
    name: "Women",
    image:
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400&q=80",
  },
  {
    id: 3,
    name: "Watches",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
  },
  {
    id: 4,
    name: "Bags",
    image:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&q=80",
  },
  {
    id: 5,
    name: "Shoes",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80",
  },
  {
    id: 6,
    name: "Accessories",
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80",
  },
  {
    id: 7,
    name: "Kids",
    image:
      "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400&q=80",
  },
  {
    id: 8,
    name: "Accessories",
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80",
  },
  {
    id: 9,
    name: "Shoes",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80",
  },
    {
    id: 1,
    name: "Men",
    image:
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400&q=80",
  },
  {
    id: 2,
    name: "Women",
    image:
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400&q=80",
  },
  {
    id: 3,
    name: "Watches",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
  },
  {
    id: 4,
    name: "Bags",
    image:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&q=80",
  },
  {
    id: 5,
    name: "Shoes",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80",
  },
  {
    id: 6,
    name: "Accessories",
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80",
  },
  {
    id: 7,
    name: "Kids",
    image:
      "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400&q=80",
  },
  {
    id: 8,
    name: "Accessories",
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80",
  },
  {
    id: 9,
    name: "Shoes",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80",
  },
    {
    id: 1,
    name: "Men",
    image:
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400&q=80",
  },
  {
    id: 2,
    name: "Women",
    image:
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400&q=80",
  },
  {
    id: 3,
    name: "Watches",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
  },
  {
    id: 4,
    name: "Bags",
    image:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&q=80",
  },
  {
    id: 5,
    name: "Shoes",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80",
  },
  {
    id: 6,
    name: "Accessories",
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80",
  },
  {
    id: 7,
    name: "Kids",
    image:
      "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400&q=80",
  },
  {
    id: 8,
    name: "Accessories",
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80",
  },
  {
    id: 9,
    name: "Shoes",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80",
  },
];

export default function CategoryPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* الفلتر */}
      <div className="w-80 sticky top-0 h-screen overflow-y-auto overflow-x-hidden bg-white border-r border-gray-200">
        <CategoryFilter />
      </div>

      {/* المحتوى */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Women</h1>

          {/* الشبكة الفائقة البساطة */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {dummyProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                variant="ultra-minimal"  // النسخة الجديدة
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-3 border-2 border-teal-600 text-teal-600 font-semibold rounded-lg hover:bg-teal-600 hover:text-white transition-all">
              Load More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}