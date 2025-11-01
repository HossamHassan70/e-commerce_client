import { useFavorites } from "@/context/FavoritesContext";
import {
  Star,
  ShoppingCart,
  Trash2,
  Edit,
  Share2,
  MoreVertical,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ConfirmDeleteDialog from "@/components/ConfirmDeleteDialog"; // ✅ استيراد المكون الجديد

export default function Favorites() {
  const { favorites, removeFromFavorites } = useFavorites();
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // ✅ للتحكم في نافذة التأكيد
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const handleDeleteAll = () => {
    favorites.forEach((item) => removeFromFavorites(item.id));
    setIsDropdownOpen(false);
  };

  const handleSingleDelete = (id) => {
    setItemToDelete(id);
    setConfirmOpen(true);
  };

  const confirmDelete = () => {
    if (itemToDelete) {
      removeFromFavorites(itemToDelete);
      setItemToDelete(null);
    }
  };

  if (favorites.length === 0) {
    return (
      <div className="container mx-auto py-10 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Favourite</h1>
        <p className="text-gray-500">No items in your favorites yet.</p>
      </div>
    );
  }

  return (
    <div className="container m-auto p-8 shadow-2xl border border-gray-200 rounded-lg bg-white w-[90%] my-10">
      {/* ✅ Dialog تأكيد الحذف */}
      <ConfirmDeleteDialog
        open={confirmOpen}
        onClose={setConfirmOpen}
        onConfirm={confirmDelete}
        title="Delete Favorite"
        message="Are you sure you want to remove this item from your favorites?"
      />

      {/* العنوان + زر More */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-secondary">Favourite</h1>

        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-1 px-3 py-1 border rounded-md hover:bg-gray-50 transition-colors"
          >
            <MoreVertical size={18} />
            <span>More</span>
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50 overflow-hidden">
              <ul className="py-1">
                <li>
                  <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2">
                    <Edit size={16} />
                    Edit List
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleDeleteAll}
                    className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-2"
                  >
                    <Trash2 size={16} />
                    Delete All
                  </button>
                </li>
                <li>
                  <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2">
                    <Share2 size={16} />
                    Share List
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* المنتجات */}
      <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-thin scrollbar-thumb-gray-300">
        {favorites.map((product) => {
          const stars = Array.from({ length: 5 }, (_, i) => (
            <Star
              key={i}
              size={14}
              className={`${
                i < Math.floor(product.rating || 4)
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              }`}
            />
          ));

          return (
            <div
              key={product.id}
              className="relative flex-shrink-0 w-[220px] bg-white rounded-lg shadow-sm border border-gray-200 p-3 cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                {product.discount || "19% off"}
              </div>

              <div className="h-40 mb-3 rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-xs text-gray-500 font-medium">
                {product.category || "Back bags"}
              </p>

              <p className="text-sm font-semibold text-gray-800 line-clamp-1 mt-1">
                {product.name}
              </p>

              <div className="flex items-center gap-0.5 my-1">{stars}</div>

              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm font-bold text-gray-900">
                  {product.discountedPrice} $
                </span>
                <span className="text-xs text-gray-500 line-through">
                  {product.originalPrice} $
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button className="flex-1 bg-teal-600 text-white text-xs font-medium py-2 rounded-md hover:bg-teal-700 transition-colors flex items-center justify-center gap-1">
                  <ShoppingCart size={14} />
                  Add to Cart
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSingleDelete(product.id); // ✅ فتح التأكيد بدل الحذف المباشر
                  }}
                  className="p-2 text-red-500 hover:bg-red-50 rounded-md transition-colors"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
