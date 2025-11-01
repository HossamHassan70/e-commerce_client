import PageHeader from "@/components/PageHeader";
import React from "react";

const ProductDetailsHeader = () => {
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Shop", path: "/shop" },
    { label: "Clothes", path: "/clothes" },
    { label: "Women", path: "/women" },
    { label: "Dresses", path: "/dresses" },
    { label: "Product Details" },
  ];

  return (
    <>
      <PageHeader title="Product Details" breadcrumbItems={breadcrumbItems} />
      <div className="h-[60px] text-center m-auto pt-4 text-xl">
        Sign Up and <span className="font-semibold">Get 25%</span> For Your First Order.{" "}
        <span className="text-primary">Sign Up Now</span>
      </div>
    </>
  );
};

export default ProductDetailsHeader;
