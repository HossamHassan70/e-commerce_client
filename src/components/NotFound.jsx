import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6">
      <h1 className="text-[8rem] font-bold text-primary drop-shadow-lg">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Oops! Page not found</h2>
      <p className="text-gray-400 text-center mb-8 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Button
        onClick={() => navigate("/")}
        className="px-6 py-3 bg-primary hover:bg-primary/80 text-white font-medium rounded-full transition-all duration-300"
      >
        Go Back Home
      </Button>
    </div>
  );
}
