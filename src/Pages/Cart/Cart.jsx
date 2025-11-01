// pages/CartPage.jsx
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Trash2, Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import MyCartHeader from './MyCartHeader';
import { useCart } from '@/context/CartContext';
import ConfirmDialog from '@/components/ConfirmDeleteDialog'; // ✅ جديد

const CartItem = ({
  id,
  name,
  image,
  color,
  size,
  discountedPrice,
  originalPrice,
  quantity,
  onQuantityChange,
  onRemove,
}) => {
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <>
      <div className="flex items-center gap-4 py-4">
        {/* صورة المنتج */}
        <div className="bg-gray-200 border-2 border-dashed w-30 h-30">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>

        {/* تفاصيل المنتج */}
        <div className="flex-1 space-y-1">
          <p className="text-primary font-semibold">{name}</p>
          {color && (
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Color:</span> {color}
            </p>
          )}
          {size && (
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Size:</span> {size}
            </p>
          )}
          <div className="flex items-center gap-2">
            <span className="text-gray-700 font-semibold text-sm">${discountedPrice}</span>
            {originalPrice && (
              <span className="text-secondary text-sm line-through">${originalPrice}</span>
            )}
          </div>
        </div>

        {/* التحكم في الكمية */}
        <div className="flex items-center gap-2">
          <Button
            className="text-gray-950"
            size="icon"
            variant="outline"
            onClick={() => onQuantityChange(id, -1)}
            disabled={quantity <= 1}
          >
            <Minus className="h-4 w-4" />
          </Button>
          <span className="w-8 text-center font-medium">{quantity}</span>
          <Button
            size="icon"
            className="text-gray-950"
            variant="outline"
            onClick={() => onQuantityChange(id, 1)}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>

        {/* حذف العنصر */}
        <Button
          size="icon"
          variant="ghost"
          className="text-red-600 hover:text-red-700"
          onClick={() => setShowConfirm(true)} // ✅ فتح الـ dialog
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>

      {/* ✅ Dialog تأكيد الحذف */}
      <ConfirmDialog
        open={showConfirm}
        onClose={() => setShowConfirm(false)}
        onConfirm={() => {
          onRemove(id);
          setShowConfirm(false);
        }}
        title="Remove item?"
        message={`Are you sure you want to remove "${name}" from your cart?`}
      />
    </>
  );
};

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, subtotal } = useCart();
  const [coupon, setCoupon] = useState('');

  const shipping = 10;
  const taxes = 7;
  const total = subtotal + shipping + taxes;

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <MyCartHeader />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <Card className="rounded-none px-4">
              <CardHeader className="pt-4">
                <CardTitle className="text-gray-500 font-bold text-2xl">My Cart</CardTitle>
              </CardHeader>
              <CardContent>
                {cartItems.length === 0 ? (
                  <p className="text-center text-gray-500 py-8">Your cart is empty</p>
                ) : (
                  cartItems.map((item) => (
                    <div key={item.id}>
                      <CartItem
                        {...item}
                        onQuantityChange={updateQuantity}
                        onRemove={removeFromCart}
                      />
                      <Separator />
                    </div>
                  ))
                )}
              </CardContent>
            </Card>
          </div>

          {/* Checkout Summary */}
          <div className="space-y-6">
            {/* Coupon */}
            <Card className="rounded-none px-4 shadow-2xl">
              <CardHeader className="pt-4">
                <CardTitle className="text-gray-500 font-bold text-2xl">Coupon</CardTitle>
              </CardHeader>
              <CardContent className="rounded-none p-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="Coupon Code"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                  />
                  <Button className="bg-black text-white hover:bg-gray-800">Apply Now</Button>
                </div>
              </CardContent>
            </Card>

            {/* Order Summary */}
            <Card className="rounded-none px-4 shadow-2xl">
              <CardHeader className="py-4">
                <CardTitle className="text-gray-500 font-bold text-2xl">Order</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 rounded-none p-4">
                <div className="flex justify-between text-sm">
                  <span className="text-secondary">Subtotal ({cartItems.length} Items)</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-secondary">Shipping</span>
                  <span className="font-medium">${shipping}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-secondary">Taxes</span>
                  <span className="font-medium">${taxes}</span>
                </div>
                <Separator />
                <div className="flex justify-between text-lg font-bold">
                  <span className="text-secondary">Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <Button className="w-full bg-primary hover:bg-light-green text-white text-lg py-6">
                  Check Out
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
