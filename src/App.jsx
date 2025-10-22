import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header />
      <Navbar />

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
