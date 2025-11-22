import React, { useState } from "react";
import { Edit2, Trash2 } from "lucide-react";
import ConfirmDeleteDialog from "@/components/ConfirmDeleteDialog";

function CategoryPage() {
  const [deleteDialog, setDeleteDialog] = useState({
    open: false,
    categoryId: null,
    categoryName: "",
  });

  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "Bags",
      image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=300",
      amount: 1000,
    },
    {
      id: 2,
      name: "Watches",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300",
      amount: 1000,
    },
    {
      id: 3,
      name: "Accessorise",
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=300",
      amount: 1000,
    },
    {
      id: 4,
      name: "Classic",
      image: "https://images.unsplash.com/photo-1507680434567-5739c80be1ac?w=300",
      amount: 1000,
    },
    {
      id: 5,
      name: "Sunglasses",
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300",
      amount: 1000,
    },
    {
      id: 6,
      name: "Makeup",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300",
      amount: 1000,
    },
  ]);

  const handleEdit = (categoryId) => {
    console.log("Edit category:", categoryId);
    // هنا تحطي كود التعديل
  };

  const handleDeleteClick = (category) => {
    setDeleteDialog({
      open: true,
      categoryId: category.id,
      categoryName: category.name,
    });
  };

  const confirmDelete = () => {
    setCategories(categories.filter((c) => c.id !== deleteDialog.categoryId));
    console.log("Deleted category:", deleteDialog.categoryId);
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="bg-gray-100 rounded-t-lg px-6 py-4">
        <div className="grid grid-cols-12 gap-4 text-sm font-semibold text-gray-600">
          <div className="col-span-2">Image</div>
          <div className="col-span-4">Type</div>
          <div className="col-span-4">Amount</div>
          <div className="col-span-2 text-center">Action</div>
        </div>
      </div>

      {/* Categories List */}
      <div className="space-y-3 mt-3">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-white rounded-lg border border-gray-200 px-6 py-4 hover:shadow-md transition-shadow"
          >
            <div className="grid grid-cols-12 gap-4 items-center">
              {/* Image */}
              <div className="col-span-2">
                <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Type */}
              <div className="col-span-4">
                <p className="text-gray-800 font-medium">{category.name}</p>
              </div>

              {/* Amount */}
              <div className="col-span-4">
                <p className="text-gray-800 font-medium">{category.amount}</p>
              </div>

              {/* Actions */}
              <div className="col-span-2 flex justify-center gap-2">
                <button
                  onClick={() => handleEdit(category.id)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Edit2 className="w-5 h-5 text-gray-600 hover:text-primary" />
                </button>
                <button
                  onClick={() => handleDeleteClick(category)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Trash2 className="w-5 h-5 text-gray-600 hover:text-red-500" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {categories.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No categories available</p>
        </div>
      )}

      {/* Delete Confirmation Dialog */}
      <ConfirmDeleteDialog
        open={deleteDialog.open}
        onClose={() =>
          setDeleteDialog({ open: false, categoryId: null, categoryName: "" })
        }
        onConfirm={confirmDelete}
        title="Delete Category"
        message={`Are you sure you want to delete "${deleteDialog.categoryName}" category? This action cannot be undone.`}
      />
    </div>
  );
}

export default CategoryPage;