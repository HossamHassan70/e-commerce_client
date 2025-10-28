// Components/Header.jsx
import { Input } from "@/components/ui/input";
import { Heart, ShoppingCart, User, Search } from "lucide-react";
import LoginDialog from "@/components/Login";
import { useState } from "react";
import { useFavorites } from "@/context/FavoritesContext.jsx";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [loginOpen, setLoginOpen] = useState(false);
  const { favorites } = useFavorites();
  const navigate = useNavigate();

  return (
    <>
      <header className="w-full border-b border-gray-200 bg-white">
        <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
          {/* Logo */}
          <div
            onClick={() => navigate("/")}
            className="text-2xl font-semibold text-primary cursor-pointer"
          >
            Shop<span className="text-black">Easy</span>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-xl mx-6 hidden md:flex">
            <div className="relative w-full">
              <Input
                placeholder="Search for products..."
                className="border-primary focus-visible:ring-primary rounded-full px-4 pr-10"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-primary" />
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => setLoginOpen(true)}
              className="flex items-center gap-1 text-gray-700 hover:text-primary"
            >
              <User size={20} />
              <span className="hidden md:inline text-sm">Login</span>
            </button>

            {/* Favorites */}
            <div
              className="relative cursor-pointer"
              onClick={() => navigate("/favorites")}
            >
              <Heart
                size={22}
                className="text-primary hover:fill-red-500 transition-all"
              />
              {favorites.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold animate-pulse">
                  {favorites.length}
                </span>
              )}
            </div>

            <ShoppingCart
              size={22}
              className="cursor-pointer text-primary"
              onClick={() => navigate("/cart")}
            />
          </div>
        </div>
      </header>

      <LoginDialog open={loginOpen} onOpenChange={setLoginOpen} />
    </>
  );
}