import React from "react";

const Breadcrumbs = () => {
  return (
    <nav className="text-sm text-white">
      <ol className="list-none pb-3 flex space-x-2">
        <li><a href="/" className="hover:underline">Home</a></li>
        <li><span className="mx-2">/</span></li>
        <li><a href="/shop" className="hover:underline">Shop</a></li>
        <li><span className="mx-2">/</span></li>
        <li><a href="/clothes" className="hover:underline">Clothes</a></li>
        <li><span className="mx-2">/</span></li>
        <li><a href="/women" className="hover:underline">Women</a></li>
        <li><span className="mx-2">/</span></li>
        <li><a href="/dresses" className="hover:underline">Dresses</a></li>
        <li><span className="mx-2">/</span></li>
        <li>product Details</li>
      </ol>
    </nav>
  );
};

export default Breadcrumbs;