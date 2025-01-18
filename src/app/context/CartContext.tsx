"use client";

import React, { createContext, useState, ReactNode } from 'react';

interface CartContextType {
  onRemove: (id: string) => void;
  toggleCartItemQty: (id: string, action: string) => void;
  totalPrice: number;
  totalQuantity: number;
  showCart: boolean;
  setShowCart: (show: boolean) => void;
  qty: number;
  incQty: () => void;
  decQty: () => void;
  cartItems: any[];
  addProduct: (product: any, quantity: number) => void;
}

const defaultValue: CartContextType = {
  onRemove: () => {},
  toggleCartItemQty: () => {},
  totalPrice: 0,
  totalQuantity: 0,
  showCart: false,
  setShowCart: () => {},
  qty: 1,
  incQty: () => {},
  decQty: () => {},
  cartItems: [],
  addProduct: () => {},
};

export const CartContext = createContext<CartContextType>(defaultValue);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [showCart, setShowCart] = useState(defaultValue.showCart);
  const [cartItems, setCartItems] = useState(defaultValue.cartItems);
  const [totalPrice, setTotalPrice] = useState(defaultValue.totalPrice);
  const [totalQuantity, setTotalQuantity] = useState(defaultValue.totalQuantity);
  const [qty, setQty] = useState(defaultValue.qty);

  const incQty = () => setQty(qty + 1);
  const decQty = () => setQty(qty > 1 ? qty - 1 : 1);

  const addProduct = (product: any, quantity: number) => {
    const checkProductInCart = cartItems.find((item: any) => item._id === product._id);
    setTotalQuantity((prev) => prev + quantity);
    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct: any) => {
        if (cartProduct._id === product._id) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
        } else {
          return cartProduct;
        }
      });
      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);
    }

    setShowCart(true); // Show the cart when a product is added
  };

  const onRemove = (id: string) => {
    const foundProduct = cartItems.find(item => item._id === id);
    if (foundProduct) {
      const newCartItems = cartItems.filter(item => item._id !== id);
      setCartItems(newCartItems);
      setTotalPrice(prevTotal => prevTotal - foundProduct.price * foundProduct.quantity);
      setTotalQuantity(prevTotalQty => prevTotalQty - foundProduct.quantity);
    }
  };

  const toggleCartItemQty = (id: string, action: string) => {
    const updatedCartItems = cartItems.map(item => {
      if (item._id === id) {
        if (action === 'inc') {
          item.quantity += 1;
          setTotalPrice(prevTotalPrice => prevTotalPrice + item.price);
          setTotalQuantity(prevTotalQuantity => prevTotalQuantity + 1);
        } else if (action === 'dec' && item.quantity > 1) {
          item.quantity -= 1;
          setTotalPrice(prevTotalPrice => prevTotalPrice - item.price);
          setTotalQuantity(prevTotalQuantity => prevTotalQuantity - 1);
        }
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  return (
    <CartContext.Provider
      value={{
        onRemove,
        toggleCartItemQty,
        totalPrice,
        totalQuantity,
        showCart,
        setShowCart,
        qty,
        incQty,
        decQty,
        cartItems,
        addProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};