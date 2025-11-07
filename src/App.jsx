import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


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
