// src/pages/SearchPage.jsx
import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";
import ProductCard from "./Product/ProductCard";

// بيانات المنتجات (نفس dealsData)
const dealsData = [
  {
    id: 1,
    name: "Back bags",
    description: "Tan Solid laptop Back Bag",
    image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400&q=80",
    originalPrice: 185,
    discountedPrice: 149,
    discount: "19% off",
    rating: 4,
    isBelt: false,
  },
  {
    id: 2,
    name: "Shoes",
    description: "Stylish running shoes",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80",
    originalPrice: 185,
    discountedPrice: 149,
    discount: "19% off",
    rating: 4,
    isBelt: false,
  },
  {
    id: 3,
    name: "Watches",
    description: "Classic chronograph watch",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80",
    originalPrice: 185,
    discountedPrice: 149,
    discount: "19% off",
    rating: 4,
    isBelt: false,
  },
  {
    id: 4,
    name: "Belts",
    description: "Brown Solid Leather Belt",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
    originalPrice: 185,
    discountedPrice: 149,
    discount: "19% off",
    rating: 5,
    isBelt: true,
  },
  {
    id: 5,
    name: "Dress",
    description: "Pink Solid Off Shoulder Dress",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400&q=80",
    originalPrice: 185,
    discountedPrice: 149,
    discount: "19% off",
    rating: 4,
    isBelt: false,
  },
];

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q")?.toLowerCase() || "";

  // فلترة المنتجات حسب البحث
  const filteredProducts = useMemo(() => {
    if (!query) return [];
    return dealsData.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
    );
  }, [query]);

  return (
    <div className="container mx-auto py-12 px-4 md:px-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        Search Results for:{" "}
        <span className="text-primary">"{query}"</span>
      </h1>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">
            No products found for "<strong>{query}</strong>"
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}