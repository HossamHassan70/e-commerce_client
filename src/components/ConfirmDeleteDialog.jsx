// src/components/common/ConfirmDeleteDialog.jsx
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const ConfirmDeleteDialog = ({ open, onClose, onConfirm, title, message }) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold text-gray-800">
            {title || "Confirm Deletion"}
          </DialogTitle>
        </DialogHeader>

        <p className="text-gray-600 text-sm mt-2">{message || "Are you sure you want to delete this item?"}</p>

        <DialogFooter className="mt-6 flex justify-end gap-3">
          <Button
            variant="outline"
            onClick={() => onClose(false)}
            className="text-gray-700"
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              onConfirm();
              onClose(false);
            }}
            className="bg-red-600 hover:bg-red-700 text-white"
          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmDeleteDialog;
