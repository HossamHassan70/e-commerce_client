// ProductCard.jsx
import { Star, ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFavorites } from "@/context/FavoritesContext.jsx"; // استيراد الـ Context

const ProductCard = ({ product }) => {
  const { addToFavorites, isFavorite: checkIsFavorite } = useFavorites();
  const [selectedOption, setSelectedOption] = useState("Select Options");
  const navigate = useNavigate();

  const isAlreadyFavorite = checkIsFavorite(product.id);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    setSelectedOption("Add to Cart");
  };

  const handleAddToFavorite = (e) => {
    e.stopPropagation();
    if (!isAlreadyFavorite) {
      addToFavorites(product); // إضافة للمفضلة
    }
    setSelectedOption("Added to Favorites");
  };

  const stars = Array.from({ length: 5 }, (_, index) => (
    <Star
      key={index}
      className={`h-4 w-4 ${
        index < product.rating
          ? "fill-yellow-400 text-yellow-400"
          : "text-gray-300"
      }`}
    />
  ));

  return (
    <Card
      onClick={() => navigate(`/product/${product.id}`)}
      className="relative w-full md:max-w-[400px] shadow-lg border-2 border-transparent hover:border-teal-400 transition-all duration-300 cursor-pointer"
    >
      <div className="absolute top-[8px] left-[8px] bg-orange-500 text-white text-xs font-semibold px-2 py-1 z-10 rounded">
        {product.discount}
      </div>

      <CardHeader className="p-0">
        <div className="h-[180px] w-full flex items-center justify-center overflow-hidden rounded-t-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
      </CardHeader>

      <CardContent className="p-4 flex flex-col items-start space-y-1">
        <p className="text-sm text-secondary font-medium w-full truncate">
          {product.name}
        </p>
        <p className="text-xs text-gray-900 font-semibold w-full truncate">
          {product.description}
        </p>
        <div className="flex items-center space-x-0.5 mt-1">{stars}</div>
        <div className="mt-2 flex items-center space-x-2">
          <span className="text-base font-bold text-gray-900">
            {product.discountedPrice} $
          </span>
          <span className="text-sm text-gray-500 line-through">
            {product.originalPrice} $
          </span>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex space-x-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="border-teal-600 text-teal-600 hover:bg-teal-50 hover:text-teal-700"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedOption}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem onClick={handleAddToCart}>
              <ShoppingCart
                className={`mr-2 h-4 w-4 ${selectedOption === "Add to Cart" ? "fill-teal-600 text-teal-600" : ""}`}
              />
              <span>Add to Cart</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={handleAddToFavorite}
              className={isAlreadyFavorite ? "text-red-500" : ""}
            >
              <Heart
                className={`mr-2 h-4 w-4 ${
                  isAlreadyFavorite ? "fill-red-500 text-red-500" : ""
                }`}
              />
              <span>
                {isAlreadyFavorite ? "Added to Favorites" : "Add to Favorite"}
              </span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;