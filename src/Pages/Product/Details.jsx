import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import ProductDetailsHeader from "./ProductDetailsHeader";
import ProductTabs from "./ProductTabs";
import sampleProducts from "./sampleProducts";

const ProductDetails = () => {
    const { id } = useParams();
    const product = sampleProducts.find((p) => p.id === parseInt(id));
    const [selectedColor, setSelectedColor] = useState("");
    const [selectedSize, setSelectedSize] = useState("");
    const [quantity, setQuantity] = useState(1);

    if (!product) return <div>Product not found</div>;

    const productDetails = {
        ...product,
        rating: 4.5,
        reviewCount: 150,
        colors: ["black", "brown", "tan"],
        sizes: ["S", "M", "L", "XL"],
        images: [
            product.image,
            "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400&q=80",
            "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80",
        ],
        code: `PROD${product.id}XYZ`,
    };

    // Handle quantity changes
    const handleQuantityChange = (action) => {
        if (action === "increment") {
            setQuantity((prev) => prev + 1);
        } else if (action === "decrement" && quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
    };

    return (
        <>
            <ProductDetailsHeader />
            <div className="flex flex-col md:flex-row gap-6 p-4 max-w-5xl mx-auto">
                {/* صورة المنتج الرئيسية */}
                <div className="w-full md:w-[40%] overflow-hidden">
                    <img
                        src={productDetails.images[0]}
                        alt={productDetails.name}
                        className="w-full h-[687px] object-cover"
                    />
                    <div className="flex gap-2 mt-2">
                        {productDetails.images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`${productDetails.name} thumbnail ${index + 1}`}
                                className="w-[180px] h-[140px] object-cover rounded-lg cursor-pointer"
                            />
                        ))}
                    </div>
                </div>

                {/* تفاصيل المنتج */}
                <div className="w-full md:w-[60%] p-4 bg-white">
                    <h2 className="text-lg font-semibold text-secondary">{productDetails.name}</h2>
                    <p className="text-primary font-semibold mt-4">{productDetails.lastName}</p>
                    <div className="flex items-center gap-2 mt-2">
                        <span className="flex text-yellow-400">★★★★★</span>
                        <span className="text-gray-600">
                            {productDetails.rating} ({productDetails.reviewCount} review{productDetails.reviewCount !== 1 ? "s" : ""})
                        </span>
                    </div>
                    <div className="mt-2">
                        <span className="text-lg font-bold text-gray-800">${productDetails.price}</span>
                        <p className="text-sm text-secondary my-4">{productDetails.description}</p>
                    </div>

                    {/* الألوان */}
                    <div className="mt-4">
                        <h3 className="text-md font-medium">
                            Color: {selectedColor ? <span className="text-secondary">{selectedColor}</span> : "Select a color"}
                        </h3>
                        <div className="flex gap-2 mt-2">
                            {productDetails.colors.map((color, index) => (
                                <div
                                    key={index}
                                    className={`w-6 h-6 rounded-full border-2 cursor-pointer
                                        ${selectedColor === color ? "border-primary" : "border-gray-300"}`}
                                    style={{ backgroundColor: color }}
                                    onClick={() => setSelectedColor(color)}
                                ></div>
                            ))}
                        </div>
                    </div>

                    {/* المقاسات */}
                    <div className="mt-4">
                        <h3 className="text-md font-medium">
                            Size: {selectedSize ? <span className="text-secondary">{selectedSize}</span> : "Select a size"}
                        </h3>
                        <div className="flex gap-2 mt-2">
                            {productDetails.sizes.map((size, index) => (
                                <button
                                    key={index}
                                    className={`px-3 py-1 border rounded-md hover:bg-gray-100
                                        ${selectedSize === size ? "bg-primary text-white" : ""}`}
                                    onClick={() => setSelectedSize(size)}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                        <a href="#" className="text-primary text-sm my-4 inline-block hover:underline">
                            View Size Guide
                        </a>
                    </div>

                    {/* الكمية والأزرار */}
                    <div className="mt-4 flex items-center gap-4">
                        <div className="flex items-center border rounded-md">
                            <button
                                className="px-3 py-1"
                                onClick={() => handleQuantityChange("decrement")}
                                disabled={quantity === 1}
                            >
                                -
                            </button>
                            <span className="px-4">{quantity}</span>
                            <button
                                className="px-3 py-1"
                                onClick={() => handleQuantityChange("increment")}
                            >
                                +
                            </button>
                        </div>
                        <button className="px-2 py-2 bg-primary text-black hover:bg-light-green">
                            Add to Cart
                        </button>
                        <button className="px-2 py-2 bg-primary text-black hover:bg-light-green">
                            Buy Now
                        </button>
                        <button className="text-red-500 hover:text-red-700 border border-secondary p-2">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                />
                            </svg>
                        </button>
                    </div>
                    <hr className="mt-20 border-t-2 border-gray-300" />

                    {/* الكود وزر التحديد */}
                    <div className="mt-4 font-semibold">
                        <p>
                            Code: <span className="text-secondary">{productDetails.code}</span>
                        </p>
                        <div className="flex gap-2 mt-2">
                            <span>Share:</span>
                            <a href="#" className="text-primary transition duration-300">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="text-green-400 transition duration-300">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="text-primary transition duration-300">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
<ProductTabs
  description={productDetails.description}
  additionalInfo={["Material: Leather", "Made in Italy", "Warranty: 1 year"]}
  review="Great quality and design!"
/>
        </>
    );
};

export default ProductDetails;