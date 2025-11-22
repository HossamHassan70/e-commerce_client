import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Trash2 } from "lucide-react";
import ConfirmDeleteDialog from "@/components/ConfirmDeleteDialog";

function ReviewsPage() {
  const [deleteDialog, setDeleteDialog] = useState({
    open: false,
    reviewId: null,
    userName: "",
  });

  const [reviews, setReviews] = useState([
    {
      id: 1,
      userName: "Sofia kazamen",
      userImage: "https://i.pravatar.cc/150?img=1",
      rating: 4,
      comment:
        "Lorem ipsum dolor sit amet consectetur. Ipsum a vulputate risus fringilla non mollis fringilla. Alctor pulvinar neque turtor semper. In sed molestie faucibus arni vitae nunc.",
      productImage: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=300",
    },
    {
      id: 2,
      userName: "Sofia kazamen",
      userImage: "https://i.pravatar.cc/150?img=1",
      rating: 4,
      comment:
        "Lorem ipsum dolor sit amet consectetur. Ipsum a vulputate risus fringilla non mollis fringilla. Alctor pulvinar neque turtor semper. In sed molestie faucibus arni vitae nunc.",
      productImage: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=300",
    },
    {
      id: 3,
      userName: "Sofia kazamen",
      userImage: "https://i.pravatar.cc/150?img=1",
      rating: 4,
      comment:
        "Lorem ipsum dolor sit amet consectetur. Ipsum a vulputate risus fringilla non mollis fringilla. Alctor pulvinar neque turtor semper. In sed molestie faucibus arni vitae nunc.",
      productImage: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=300",
    },
  ]);

  const handleDeleteClick = (review) => {
    setDeleteDialog({
      open: true,
      reviewId: review.id,
      userName: review.userName,
    });
  };

  const confirmDelete = () => {
    setReviews(reviews.filter((r) => r.id !== deleteDialog.reviewId));
    console.log("Deleted review:", deleteDialog.reviewId);
  };

  return (
    <div className="p-6 space-y-4">
      {reviews.map((review) => (
        <div
          key={review.id}
          className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow relative"
        >
          <div className="flex gap-4">
            {/* User Avatar & Info */}
            <div className="flex-shrink-0">
              <Avatar className="h-12 w-12">
                <AvatarImage src={review.userImage} alt={review.userName} />
                <AvatarFallback className="bg-gray-200 text-gray-600">
                  {review.userName
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
            </div>

            {/* Review Content */}
            <div className="flex-grow">
              {/* User Name & Rating */}
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900">
                  {review.userName}
                </h3>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-lg ${
                        i < review.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>

              {/* Comment */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {review.comment}
              </p>
            </div>

            {/* Product Image */}
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-100">
                <img
                  src={review.productImage}
                  alt="Product"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Delete Button */}
          <button
            onClick={() => handleDeleteClick(review)}
            className="absolute bottom-0 right-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Trash2 className="w-4 h-4 text-red-400 hover:text-red-600" />
          </button>
        </div>
      ))}

      {/* Empty State */}
      {reviews.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No reviews available</p>
        </div>
      )}

      {/* Delete Confirmation Dialog */}
      <ConfirmDeleteDialog
        open={deleteDialog.open}
        onClose={() =>
          setDeleteDialog({ open: false, reviewId: null, userName: "" })
        }
        onConfirm={confirmDelete}
        title="Delete Review"
        message={`Are you sure you want to delete the review by "${deleteDialog.userName}"? This action cannot be undone.`}
      />
    </div>
  );
}

export default ReviewsPage;