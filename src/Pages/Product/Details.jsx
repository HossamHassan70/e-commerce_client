// Pages/Product/Details.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Facebook, Linkedin, Twitter, Heart } from "lucide-react";
import ProductDetailsHeader from "./ProductDetailsHeader";
import ProductTabs from "./ProductTabs";
import sampleProducts from "./sampleProducts";
import { useFavorites } from "@/context/FavoritesContext.jsx"; // تأكدي من المسار

const ProductDetails = () => {
  const { id } = useParams();
  const product = sampleProducts.find((p) => p.id === parseInt(id));

  // استخدام الـ Context
  const { addToFavorites, isFavorite } = useFavorites(); // هنا المفتاح

  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  if (!product) return <div>Product not found</div>;

  const productDetails = {
    ...product,
    rating: 4.5,
    reviewCount: 150,
    colors: ["black", "brown", "tan"],
    sizes: ["S", "M", "L", "XL"],
    images: [
      product.image,
      "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80",
    ],
    code: `PROD${product.id}XYZ`,
  };

  // استخدام isFavorite هنا
  const alreadyInFavorites = isFavorite(product.id);

  const handleAddToFavorite = (e) => {
    e.stopPropagation();
    if (!alreadyInFavorites) {
      addToFavorites(productDetails);
    }
  };

  const handleQuantityChange = (action) => {
    if (action === "increment") {
      setQuantity((prev) => prev + 1);
    } else if (action === "decrement" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <>
      <ProductDetailsHeader />
      <div className="flex flex-col md:flex-row gap-6 p-4 max-w-5xl mx-auto">
        {/* صورة المنتج */}
        <div className="w-full md:w-[40%]">
          <img
            src={productDetails.images[0]}
            alt={productDetails.name}
            className="w-full h-[687px] object-cover rounded-lg"
          />
          <div className="flex gap-2 mt-2">
            {productDetails.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`thumbnail ${index + 1}`}
                className="w-[180px] h-[140px] object-cover rounded-lg cursor-pointer"
              />
            ))}
          </div>
        </div>

        {/* تفاصيل المنتج */}
        <div className="w-full md:w-[60%] p-4 bg-white">
          <h2 className="text-lg font-semibold text-secondary">{productDetails.name}</h2>
          <p className="text-primary font-semibold mt-4">{productDetails.lastName}</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="flex text-yellow-400">*****</span>
            <span className="text-gray-600">
              {productDetails.rating} ({productDetails.reviewCount} reviews)
            </span>
          </div>
          <div className="mt-2">
            <span className="text-lg font-bold text-gray-800">${productDetails.price}</span>
            <p className="text-sm text-secondary my-4">{productDetails.description}</p>
          </div>

          {/* الألوان */}
          <div className="mt-4">
            <h3 className="text-md font-medium">
              Color: {selectedColor ? <span className="text-secondary">{selectedColor}</span> : "Select a color"}
            </h3>
            <div className="flex gap-2 mt-2">
              {productDetails.colors.map((color) => (
                <div
                  key={color}
                  className={`w-6 h-6 rounded-full border-2 cursor-pointer transition-all
                    ${selectedColor === color ? "border-primary" : "border-gray-300"}`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </div>
          </div>

          {/* المقاسات */}
          <div className="mt-4">
            <h3 className="text-md font-medium">
              Size: {selectedSize ? <span className="text-secondary">{selectedSize}</span> : "Select a size"}
            </h3>
            <div className="flex gap-2 mt-2">
              {productDetails.sizes.map((size) => (
                <button
                  key={size}
                  className={`px-3 py-1 border rounded-md hover:bg-gray-100 transition-all
                    ${selectedSize === size ? "bg-primary text-white" : ""}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
            <a href="#" className="text-primary text-sm my-4 inline-block hover:underline">
              View Size Guide
            </a>
          </div>

          {/* الكمية والأزرار */}
          <div className="mt-6 flex items-center gap-4">
            <div className="flex items-center border rounded-md">
              <button
                className="px-3 py-1"
                onClick={() => handleQuantityChange("decrement")}
                disabled={quantity === 1}
              >
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button
                className="px-3 py-1"
                onClick={() => handleQuantityChange("increment")}
              >
                +
              </button>
            </div>
            <button className="px-6 py-2 bg-primary text-white rounded-md hover:bg-teal-700">
              Add to Cart
            </button>
            <button className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800">
              Buy Now
            </button>

            {/* زر القلب */}
            <button
              onClick={handleAddToFavorite}
              className={`p-2 border rounded-full transition-all
                ${alreadyInFavorites
                  ? "bg-red-50 border-red-500 text-red-500"
                  : "border-gray-300 text-gray-500 hover:border-red-500 hover:text-red-500"
                }`}
            >
              <Heart
                size={24}
                className={`transition-all ${alreadyInFavorites ? "fill-red-500" : ""}`}
              />
            </button>
          </div>

          <hr className="my-8 border-t border-gray-300" />

          {/* الكود ومشاركة */}
          <div className="mt-4 font-semibold">
            <p>
              Code: <span className="text-secondary">{productDetails.code}</span>
            </p>
            <div className="flex gap-2 mt-2 items-center">
              <span>Share:</span>
              <a href="#" className="text-blue-600 hover:text-blue-800"><Facebook size={20} /></a>
              <a href="#" className="text-sky-500 hover:text-sky-700"><Twitter size={20} /></a>
              <a href="#" className="text-blue-700 hover:text-blue-900"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>
      </div>

      <ProductTabs
        description={productDetails.description}
        additionalInfo={["Material: Leather", "Made in Italy", "Warranty: 1 year"]}
        review="Great quality and design!"
      />
    </>
  );
};

export default ProductDetails;