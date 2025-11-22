// Product/ProductCard.jsx
import { useCart } from "@/context/CartContext";
import { useFavorites } from "@/context/FavoritesContext";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, variant = "full", onDelete }) => {
  const { addToCart, removeFromCart, cartItems } = useCart();
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
  const navigate = useNavigate();

  // تحقق من وجود المنتج
  if (!product) {
    return null;
  }

  const isFavorite = favorites.some((item) => item.id === product.id);
  const isInCart = cartItems.some((item) => item.id === product.id);

  const handleFavoriteToggle = (e) => {
    e.stopPropagation();
    if (isFavorite) removeFromFavorites(product.id);
    else addToFavorites(product);
  };

  const handleCartToggle = (e) => {
    e.stopPropagation();
    if (isInCart) removeFromCart(product.id);
    else addToCart(product);
  };

  const handleCardClick = () => {
    // لو admin view، ما نعملش navigate
    if (variant !== "admin") {
      navigate(`/product/${product.id}`);
    }
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    if (onDelete) {
      onDelete(product.id);
    }
  };

  // Admin Dashboard View
  if (variant === "admin") {
    return (
      <div className="group relative bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
        {/* Image */}
        <div className="aspect-square overflow-hidden bg-gray-50">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Category */}
          <p className="text-sm text-gray-500 mb-1">{product.category || "Dress"}</p>
          
          {/* Code */}
          <p className="text-base font-semibold text-gray-900 mb-3">
            Code : <span className="text-gray-600 font-normal">{product.code || "AA0090KPSA"}</span>
          </p>

          {/* Stock and Delete */}
          <div className="flex items-center justify-between">
            <div className="bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-md font-medium text-sm">
              Stock : {product.stock || 1000}
            </div>
            
            <button
              onClick={handleDelete}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Trash2 className="w-5 h-5 text-gray-400 hover:text-red-500 transition-colors" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Minimal View (Shop Page)
  if (variant === "minimal") {
    return (
      <div
        className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
        onClick={handleCardClick}
      >
        {/* Discount Badge */}
        {product.discount && (
          <div className="absolute top-3 left-3 z-10 bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
            {product.discount}
          </div>
        )}

        {/* Image */}
        <div className="aspect-square overflow-hidden bg-gray-50">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div className="p-4 text-center">
          <p className="text-sm text-gray-600 mb-1">Dress</p>
          <h3 className="font-medium text-gray-900 line-clamp-2 mb-2">
            {product.name}
          </h3>

          {/* Stars */}
          <div className="flex justify-center gap-0.5 mb-2">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`text-sm ${i < 4.5 ? "text-yellow-400" : "text-gray-300"}`}
              >
                ★
              </span>
            ))}
          </div>

          {/* Price */}
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-lg font-bold text-teal-600">
              ${product.discountedPrice}
            </span>
            <span className="text-sm text-gray-500 line-through">
              ${product.originalPrice}
            </span>
          </div>

          {/* Select Options Button */}
          <button className="w-full bg-teal-600 text-white font-medium py-2.5 rounded-lg hover:bg-teal-700 transition-colors text-sm">
            Select options
          </button>
        </div>
      </div>
    );
  }

  // Ultra Minimal View (Category Page)
  if (variant === "ultra-minimal") {
    return (
      <div
        className="group cursor-pointer"
        onClick={handleCardClick}
      >
        <div className="aspect-square overflow-hidden bg-gray-100 rounded-xl mb-3">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <p className="text-center text-sm text-gray-700 line-clamp-2">
          {product.name}
        </p>
      </div>
    );
  }

  // Full View (Default)
  return (
    <div
      className="group relative bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="aspect-square overflow-hidden bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-semibold text-gray-900 line-clamp-1">{product.name}</h3>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2 flex-grow">
          {product.description}
        </p>

        <div className="flex items-center gap-1 mt-2">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`text-xs ${i < product.rating ? "text-yellow-400" : "text-gray-300"}`}
            >
              ★
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 mt-2">
          <span className="text-lg font-bold text-primary">
            ${product.discountedPrice}
          </span>
          <span className="text-sm text-gray-500 line-through">
            ${product.originalPrice}
          </span>
          <span className="text-xs text-green-600 font-semibold">
            {product.discount}
          </span>
        </div>

        <div className="flex gap-3 items-center mt-4 pt-2 border-t border-gray-100">
          <button
            onClick={handleFavoriteToggle}
            className={`p-2 rounded-full transition-all ${
              isFavorite
                ? "bg-red-100 text-red-600 hover:bg-red-200"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            <Heart size={18} className={isFavorite ? "fill-current" : ""} />
          </button>

          <button
            onClick={handleCartToggle}
            className={`p-2 rounded-full transition-all ${
              isInCart
                ? "bg-primary text-white hover:bg-teal-700"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            <ShoppingCart size={18} className={isInCart ? "fill-current" : ""} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;