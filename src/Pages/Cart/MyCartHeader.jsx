import React from "react";
import PageHeader from "@/components/PageHeader"
const MyCartHeader = () => {
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Product", path: "/" },
    { label: "My Cart" },
  ];

  return <PageHeader title="My Cart" breadcrumbItems={breadcrumbItems} />;
};

export default MyCartHeader;
