"use client";
// components/CartModal.js
import Image from "next/image";

type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type CartModalProps = {
  cart: CartItem[];
  onClose: () => void;
};

export default function CartModal({ cart, onClose }: CartModalProps) {
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96 relative shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>
        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <ul className="space-y-4">
            {cart.map((item, index) => (
              <li key={index} className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 object-cover rounded"
                />
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
        <h3 className="text-xl font-semibold mt-6">
          Total: ${totalPrice.toFixed(2)}
        </h3>
        <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
