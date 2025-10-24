import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, User, Search } from "lucide-react";
import LoginDialog from "@/components/Login";

export default function Header() {
  const [loginOpen, setLoginOpen] = useState(false);
  console.log("Header rendered, loginOpen:", loginOpen); // Debugging log

  return (
    <>
      <header className="w-full border-b border-gray-200 bg-white">
        <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
          {/* Logo */}
          <div className="text-2xl font-semibold text-primary">
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
            {/* Login button to open Dialog */}
            <button
              onClick={() => setLoginOpen(true)}
              className="flex items-center gap-1 text-gray-700 hover:text-primary"
            >
              <User size={20} />
              <span className="hidden md:inline text-sm">Login</span>
            </button>

            <Heart size={22} className="cursor-pointer text-primary" />
            <ShoppingCart size={22} className="cursor-pointer text-primary" />
          </div>
        </div>
      </header>

      {/* Dialog */}
      <LoginDialog open={loginOpen} onOpenChange={setLoginOpen} />
    </>
  );
}