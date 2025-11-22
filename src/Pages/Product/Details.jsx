// Pages/Product/Details.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Facebook, Linkedin, Twitter, Heart, ShoppingCart } from "lucide-react";
import ProductDetailsHeader from "./ProductDetailsHeader";
import ProductTabs from "./ProductTabs";
import sampleProducts from "./sampleProducts";
import { useFavorites } from "@/context/FavoritesContext";
import { useCart } from "@/context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const product = sampleProducts.find((p) => p.id === parseInt(id));
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const { addToCart, cartItems } = useCart();

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
    stock: 12, // الكمية المتاحة
  };

  const alreadyInFavorites = isFavorite(product.id);
  const alreadyInCart = cartItems.some((item) => item.id === product.id);

  const handleFavoriteToggle = (e) => {
    e.stopPropagation();
    if (alreadyInFavorites) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(productDetails);
    }
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (quantity > productDetails.stock) {
      alert(`Only ${productDetails.stock} items available!`);
      return;
    }
    addToCart({ ...productDetails, quantity });
  };

  const handleQuantityChange = (action) => {
    if (action === "increment" && quantity < productDetails.stock) {
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
            className="w-full h-[500px] object-cover rounded-lg shadow-sm" // قللنا الارتفاع
          />
          <div className="flex gap-2 mt-3 overflow-x-auto">
            {productDetails.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`thumbnail ${index + 1}`}
                className="w-24 h-24 object-cover rounded-md cursor-pointer border hover:border-primary transition-all flex-shrink-0"
              />
            ))}
          </div>
        </div>

        {/* تفاصيل المنتج */}
        <div className="w-full md:w-[60%] space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-secondary">{productDetails.name}</h2>
            <p className="text-primary font-semibold mt-1">{productDetails.lastName}</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="flex text-yellow-400">★★★★★</span>
              <span className="text-gray-600 text-sm">
                {productDetails.rating} ({productDetails.reviewCount} reviews)
              </span>
            </div>
            <div className="mt-3">
              <span className="text-2xl font-bold text-gray-800">${productDetails.price}</span>
            </div>
            <p className="text-sm text-secondary mt-3 leading-relaxed">{productDetails.description}</p>
          </div>

          {/* الكمية + المفضلة */}
          <div className="flex items-center gap-4">
            <div className="flex items-center border rounded-md">
              <button
                className="px-3 py-1.5 text-gray-700 hover:bg-gray-100 disabled:opacity-50"
                onClick={() => handleQuantityChange("decrement")}
                disabled={quantity === 1}
              >
                -
              </button>
              <span className="px-5 py-1.5 font-medium">{quantity}</span>
              <button
                className="px-3 py-1.5 text-gray-700 hover:bg-gray-100 disabled:opacity-50"
                onClick={() => handleQuantityChange("increment")}
                disabled={quantity >= productDetails.stock}
              >
                +
              </button>
            </div>

            <button
              onClick={handleFavoriteToggle}
              className={`p-2.5 border rounded-full transition-all ${
                alreadyInFavorites
                  ? "bg-red-50 border-red-500 text-red-500"
                  : "border-gray-300 text-gray-500 hover:border-red-500 hover:text-red-500"
          }`}
            >
              <Heart
                size={22}
                className={`transition-all ${alreadyInFavorites ? "fill-red-500" : ""}`}
              />
            </button>
          </div>

          {/* الأزرار: Add to Cart + Buy Now */}
          <div className="flex gap-3">
            <button
              onClick={handleAddToCart}
              className={` px-4 py-3 rounded-md flex items-center justify-center gap-2 transition-all font-medium ${
                alreadyInCart
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "bg-primary text-white hover:bg-teal-700"
              }`}
              disabled={productDetails.stock === 0}
            >
              <ShoppingCart size={20} className={alreadyInCart ? "fill-current" : ""} />
              {alreadyInCart ? "Added to Cart" : "Add to Cart"}
            </button>
            <button
              className=" px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 font-medium"
              disabled={productDetails.stock === 0}
            >
              Buy Now
            </button>
          </div>

          {/* حالة المخزون */}
          <div className="py-3">
            <p className="text-sm">
              <span className="font-medium">Availability:</span>{" "}
              <span className={productDetails.stock > 0 ? "text-green-600" : "text-red-600"}>
                {productDetails.stock > 0
                  ? `${productDetails.stock} in stock`
                  : "Out of stock"}
              </span>
            </p>
          </div>

          <hr className="border-t border-gray-200" />

          {/* الكود + المشاركة */}
          <div className="text-sm space-y-2">
            <p>
              <span className="font-medium">Code:</span>{" "}
              <span className="text-secondary">{productDetails.code}</span>
            </p>
            <div className="flex items-center gap-3">
              <span className="font-medium">Share:</span>
              <a href="#" className="text-blue-600 hover:text-blue-800"><Facebook size={18} /></a>
              <a href="#" className="text-sky-500 hover:text-sky-700"><Twitter size={18} /></a>
              <a href="#" className="text-blue-700 hover:text-blue-900"><Linkedin size={18} /></a>
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