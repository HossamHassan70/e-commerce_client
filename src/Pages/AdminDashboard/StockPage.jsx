// Pages/Admin/StockPage.jsx
import React, { useState } from "react";
import ProductCard from "@/Pages/Product/ProductCard";
import ConfirmDeleteDialog from "@/components/ConfirmDeleteDialog";

function StockPage() {
      const [deleteDialog, setDeleteDialog] = useState({
    open: false,
    productId: null,
  });
  // بيانات تجريبية - هتستبدليها بالبيانات الحقيقية من الـ API
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Summer Dress",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500",
      category: "Dress",
      code: "AA0090KPSA",
      stock: 1000,
    },
    {
      id: 2,
      name: "Evening Gown",
      image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400&q=80",
      category: "Dress",
      code: "BB1234WXYZ",
      stock: 750,
    },
    {
      id: 3,
      name: "Casual Top",
      image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400&q=80",
      category: "Top",
      code: "CC5678ABCD",
      stock: 500,
    },
    {
      id: 4,
      name: "Floral Dress",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
      category: "Dress",
      code: "DD9012EFGH",
      stock: 300,
    },
    {
      id: 5,
      name: "Party Dress",
      image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&q=80",
      category: "Dress",
      code: "EE3456IJKL",
      stock: 850,
    },
    {
      id: 6,
      name: "Maxi Dress",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80",
      category: "Dress",
      code: "FF7890MNOP",
      stock: 620,
    },
  ]);

  const handleDeleteProduct = (productId) => {
    // فتح الـ dialog
    setDeleteDialog({
      open: true,
      productId: productId,
    });
  };
  const confirmDelete = () => {
    // حذف المنتج من القائمة
    setProducts(products.filter((p) => p.id !== deleteDialog.productId));
    // هنا تحطي كود الحذف من الـ database
    console.log("Deleted product:", deleteDialog.productId);
  };
  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Stock Management</h2>
        <p className="text-gray-600 mt-1">
          Total Products: {products.length}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            variant="admin"
            onDelete={handleDeleteProduct}
          />
        ))}
      </div>

      {products.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No products available</p>
        </div>
      )}
            {/* Delete Confirmation Dialog */}
      <ConfirmDeleteDialog
        open={deleteDialog.open}
        onClose={() => setDeleteDialog({ open: false, productId: null })}
        onConfirm={confirmDelete}
        title="Delete Product"
        message="Are you sure you want to delete this product? This action cannot be undone."
      />
    </div>
  );
}

export default StockPage;