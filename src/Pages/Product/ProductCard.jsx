// Product/ProductCard.jsx
import { useCart } from "@/context/CartContext";
import { useFavorites } from "@/context/FavoritesContext";
import { Heart, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom"; // أضيفي ده

const ProductCard = ({ product }) => {
  const { addToCart, removeFromCart, cartItems } = useCart();
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
  const navigate = useNavigate(); // للتنقل لصفحة المنتج

  const isFavorite = favorites.some((item) => item.id === product.id);
  const isInCart = cartItems.some((item) => item.id === product.id);

  const handleFavoriteToggle = (e) => {
    e.stopPropagation(); // مهم: يمنع الانتقال لصفحة المنتج
    if (isFavorite) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  const handleCartToggle = (e) => {
    e.stopPropagation(); // مهم: يمنع الانتقال لصفحة المنتج
    if (isInCart) {
      removeFromCart(product.id);
    } else {
      addToCart(product);
    }
  };

  const handleCardClick = () => {
    navigate(`/product/${product.id}`); // يودّي لصفحة المنتج
  };

  return (
    <div
      className="group relative bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full cursor-pointer"
      onClick={handleCardClick} // الكارت كله يودّي للمنتج
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

        {/* Rating */}
        <div className="flex items-center gap-1 mt-2">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`text-xs ${
                i < product.rating ? "text-yellow-400" : "text-gray-300"
              }`}
            >
              ★
            </span>
          ))}
        </div>

        {/* Price */}
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

        {/* Action Buttons */}
        <div className="flex gap-3 items-center mt-4 pt-2 border-t border-gray-100">
          {/* Heart Button */}
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

          {/* Cart Button */}
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