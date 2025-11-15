import React from "react";

export default function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100/5 ">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        <p className="text-gray-300 text-lg animate-pulse">Loading, please wait...</p>
      </div>
    </div>
  );
}
