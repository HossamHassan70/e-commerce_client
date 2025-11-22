import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import ConfirmDeleteDialog from "@/components/ConfirmDeleteDialog";

function RequestsPage() {
  const [rejectDialog, setRejectDialog] = useState({
    open: false,
    requestId: null,
    requestName: "",
  });

  const [requests, setRequests] = useState([
    {
      id: 1,
      name: "Mahmoud Ahmed",
      mobile: "0123456789",
      brandName: "Dema",
      message: "",
    },
    {
      id: 2,
      name: "Mahmoud Ahmed",
      mobile: "0123456789",
      brandName: "Dema",
      message: "",
    },
    {
      id: 3,
      name: "Mahmoud Ahmed",
      mobile: "0123456789",
      brandName: "Dema",
      message: "",
    },
  ]);

  const handleAccept = (requestId) => {
    console.log("Accepted request:", requestId);
    // هنا تحطي كود قبول الطلب
    setRequests(requests.filter((r) => r.id !== requestId));
  };

  const handleRejectClick = (request) => {
    setRejectDialog({
      open: true,
      requestId: request.id,
      requestName: request.name,
    });
  };

  const confirmReject = () => {
    console.log("Rejected request:", rejectDialog.requestId);
    // هنا تحطي كود رفض الطلب
    setRequests(requests.filter((r) => r.id !== rejectDialog.requestId));
  };

  return (
    <div className="p-6 space-y-6">
      {requests.map((request) => (
        <Card key={request.id} className="bg-gray-50 shadow-sm">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Side - Input Fields */}
              <div className="space-y-4">
                {/* Name Field */}
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-primary">
                    Name
                  </Label>
                  <Input
                    value={request.name}
                    readOnly
                    className="bg-white border-gray-300"
                  />
                </div>

                {/* Mobile Field */}
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-primary">
                    Mob
                  </Label>
                  <Input
                    value={request.mobile}
                    readOnly
                    className="bg-white border-gray-300"
                  />
                </div>

                {/* Brand Name Field */}
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-primary">
                    Brand Name
                  </Label>
                  <Input
                    value={request.brandName}
                    readOnly
                    className="bg-white border-gray-300"
                  />
                </div>
              </div>

              {/* Right Side - Message Field */}
              <div className="space-y-2 flex flex-col">
                <Label className="text-sm font-medium text-primary">
                  Message
                </Label>
                <Textarea
                  value={request.message}
                  readOnly
                  placeholder=""
                  className="bg-white border-gray-300 flex-1 min-h-[180px] resize-none"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-3 mt-6">
              <Button
                onClick={() => handleAccept(request.id)}
                className="bg-primary hover:bg-teal-700 text-white px-8"
              >
                Accept
              </Button>
              <Button
                onClick={() => handleRejectClick(request)}
                variant="secondary"
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-8"
              >
                Reject
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}

      {requests.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No pending requests</p>
        </div>
      )}

      {/* Reject Confirmation Dialog */}
      <ConfirmDeleteDialog
        open={rejectDialog.open}
        onClose={() =>
          setRejectDialog({ open: false, requestId: null, requestName: "" })
        }
        onConfirm={confirmReject}
        title="Reject Request"
        message={`Are you sure you want to reject the seller request from "${rejectDialog.requestName}"? This action cannot be undone.`}
      />
    </div>
  );
}

export default RequestsPage;