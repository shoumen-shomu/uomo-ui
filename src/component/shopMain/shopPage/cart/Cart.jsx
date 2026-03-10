import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { create } from "zustand";
import { FiPlus } from "react-icons/fi";
import { FaMinus } from "react-icons/fa6";
import { LiaDollarSignSolid } from "react-icons/lia";

// ─── Dummy Products ────────────────────────────────────────────────────────────
const DUMMY_ITEMS = [
  {
    id: 1,
    title: "Zessi Dresses",
    price: 99,
    quantity: 3,
    thumbnail: "https://placehold.co/80x80/d1d5db/9ca3af",
  },
  {
    id: 2,
    title: "Kirby T-Shirt",
    price: 99,
    quantity: 3,
    color: "Yellow",
    size: "L",
    thumbnail: "https://placehold.co/80x80/d1d5db/9ca3af",
  },
  {
    id: 3,
    title: "Cableknit Shawl",
    price: 99,
    quantity: 3,
    thumbnail: "https://placehold.co/80x80/d1d5db/9ca3af",
  },
];

// ─── Zustand Store ─────────────────────────────────────────────────────────────
export const useCartStore = create((set) => ({
  items: DUMMY_ITEMS,
  addToCart: (product) =>
    set((state) => {
      const existing = state.items.find((i) => i.id === product.id);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i,
          ),
        };
      }
      return { items: [...state.items, { ...product, quantity: 1 }] };
    }),
  removeCart: (id) =>
    set((state) => ({ items: state.items.filter((i) => i.id !== id) })),
  updateQuantity: (id, quantity) =>
    set((state) => ({
      items: state.items.map((i) => (i.id === id ? { ...i, quantity } : i)),
    })),
  clearCart: () => set({ items: [] }),
}));

// ─── Step Indicator ────────────────────────────────────────────────────────────
const steps = [
  {
    num: "01",
    label: "SHOPPING BAG",
    sub: "Manage Your Items List",
    path: "/cart",
  },
  {
    num: "02",
    label: "SHIPPING AND CHECKOUT",
    sub: "Checkout Your Items List",
    path: "/checkout",
  },
  {
    num: "03",
    label: "CONFIRMATION",
    sub: "Review And Submit Your Order",
    path: "/confirmation",
  },
];

const StepIndicator = ({ currentStep = 0 }) => {
  const navigate = useNavigate();
  return (
    <div className="flex mb-10 border-b border-gray-200">
      {steps.map((step, idx) => {
        const isActive = idx === currentStep;
        const isClickable = idx > currentStep;
        return (
          <div
            key={step.num}
            onClick={() => isClickable && navigate(step.path)}
            style={{ flex: 1 }}
            className={`relative pb-5 transition-all duration-200 text-head ${isClickable ? "cursor-pointer" : "cursor-default text-gray-400"}`}
          >
            {/* Active underline — sits on top of the shared border-b */}
            {isActive && (
              <span className="absolute -bottom-px left-0 right-0 h-0.5 bg-head" />
            )}

            <div
              className={`flex items-baseline gap-2 ${isClickable ? "hover:opacity-60" : ""}`}
            >
              <span className="text-[18px] font-medium">{step.num}</span>
              <span
                className={`text-[18px] font-medium ${isActive ? "text-head" : "text-gray-400"}`}
              >
                {step.label}
              </span>
            </div>
            <p className="text-[14px] text-[#767676] mt-1 ml-7">{step.sub}</p>
          </div>
        );
      })}
    </div>
  );
};

// ─── Main Cart ─────────────────────────────────────────────────────────────────
const Cart = () => {
  const { items: cartItems, removeCart, updateQuantity } = useCartStore();

  const increment = (item) => updateQuantity(item.id, item.quantity + 1);
  const decrement = (item) => {
    if (item.quantity > 1) updateQuantity(item.id, item.quantity - 1);
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const vat = Math.round(subtotal * 0.015);
  const total = subtotal + vat;

  return (
    <section className="pt-10 md:pt-22.5 pb-25">
      <div className="container px-6">
        {/* Title */}
        <h1 className="text-[35px] text-head font-bold pb-12">CART</h1>

        {/* Steps */}
        <StepIndicator currentStep={0} />

        {cartItems.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            {/* ── Left ── */}
            <div className="flex-1 min-w-0">
              {/* Table Header */}
              <div className="grid grid-cols-[3fr_0.8fr_1.2fr_0.8fr_30px] gap-4 pb-2.25">
                {["PRODUCT", "PRICE", "QUANTITY", "SUBTOTAL", ""].map((h) => (
                  <span
                    key={h}
                    className="text-[14px] font-medium leading-6 text-head"
                  >
                    {h}
                  </span>
                ))}
              </div>

              {/* Items */}
              <AnimatePresence mode="popLayout">
                {cartItems.map((cart, index) => (
                  <motion.div
                    key={cart.id}
                    layout
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ delay: index * 0.04 }}
                    className="grid grid-cols-[3fr_0.8fr_1.2fr_0.8fr_30px] gap-4 items-center py-7.5 border-b border-[#E4E4E4] border-t"
                  >
                    {/* Product */}
                    <div className="flex gap-4 items-center">
                      <div className="shrink-0">
                        <img
                          className="w-30 h-30 object-cover bg-gray-200 rounded-sm"
                          src={cart.thumbnail}
                          alt={cart.title}
                        />
                      </div>
                      <div>
                        <h3 className="text-[16px] font-normal text-head">
                          {cart.title}
                        </h3>
                        {cart.color && (
                          <p className="text-[13px] text-gray-500 mt-0.5">
                            Color: {cart.color}
                          </p>
                        )}
                        {cart.size && (
                          <p className="text-[13px] text-gray-500">
                            Size: {cart.size}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Price */}
                    <span className="text-[16px] font-normal text-[#767676] flex  items-center">
                      <LiaDollarSignSolid />
                      {cart.price}
                    </span>

                    {/* Quantity — minus / number / plus */}
                    <div className="flex items-center border-2 border-[#E4E4E4] w-full max-w-[110px] h-12.5">
                      <button
                        onClick={() => decrement(cart)}
                        className="w-9 h-full flex items-center justify-center text-gray-500 hover:text-[#DB4444] text-[16px] select-none cursor-pointer"
                      >
                        <FaMinus />
                      </button>
                      <span className="flex-1 text-center text-[14px] select-none">
                        {cart.quantity}
                      </span>
                      <button
                        onClick={() => increment(cart)}
                        className="w-9 h-full flex items-center justify-center text-gray-500 hover:text-[#DB4444] text-[16px] select-none cursor-pointer"
                      >
                        <FiPlus />
                      </button>
                    </div>

                    {/* Subtotal */}
                    <span className="text-[16px] font-medium flex items-center text-head justify-start">
                      <LiaDollarSignSolid />{(cart.price * cart.quantity).toFixed(0)}
                    </span>

                    {/* Remove */}
                    <button
                      onClick={() => removeCart(cart.id)}
                      className="text-gray-400 hover:text-[#DB4444] transition-colors cursor-pointer"
                    >
                      <IoCloseOutline className="text-[20px]" />
                    </button>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Bottom actions */}
              <div className="flex flex-col sm:flex-row justify-between gap-3 mt-8">
                {/* Coupon */}
                <div className="flex items-center border border-[#E4E4E4] overflow-hidden h-12 w-92.5">
                  <input
                    type="text"
                    placeholder="Coupon Code"
                    className="flex-1 me-5.25 text-[14px] outline-none h-full text-[#767676]"
                  />
                  <button className="">
                    APPLY COUPON
                  </button>
                </div>

                {/* Update Cart */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="h-12 px-10 border border-gray-300 rounded-sm text-[12px] font-bold text-gray-700 bg-gray-100 hover:bg-[#DB4444] hover:text-white hover:border-[#DB4444] transition-all select-none"
                >
                  UPDATE CART
                </motion.button>
              </div>
            </div>

            {/* ── Right: Totals ── */}
            <div
              style={{ width: "470px", minWidth: "320px", maxWidth: "100%" }}
              className="shrink-0 w-full lg:w-auto"
            >
              {/* Box */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="border-2 border-head rounded-sm px-7 pt-7 pb-8"
              >
                <h3 className="text-[13px] font-bold tracking-[0.15em] mb-6 uppercase">
                  Cart Totals
                </h3>

                {/* Subtotal */}
                <div className="flex justify-between items-center py-4 border-b border-gray-200">
                  <span className="text-[12px] font-semibold text-gray-700 uppercase">
                    Subtotal
                  </span>
                  <span className="text-[14px] font-medium">${subtotal}</span>
                </div>

                {/* Shipping */}
                <div className="py-4 border-b border-gray-200">
                  <div className="flex justify-between items-start">
                    <span className="text-[12px] font-semibold text-gray-700 uppercase pt-0.5">
                      Shipping
                    </span>
                    <div className="space-y-2.5 text-right">
                      {[
                        { id: "free", label: "Free shipping" },
                        { id: "flat", label: "Flat rate: $49" },
                        { id: "local", label: "Local pickup: $8" },
                      ].map((opt) => (
                        <label
                          key={opt.id}
                          className="flex items-center gap-2 justify-end cursor-pointer"
                        >
                          <span className="text-[13px] text-gray-600">
                            {opt.label}
                          </span>
                          <input
                            type="checkbox"
                            className="w-4 h-4 border border-gray-300 rounded-none accent-head cursor-pointer"
                          />
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-3">
                    <span className="text-[13px] text-gray-500">
                      Shipping to AL.
                    </span>
                    <button className="text-[12px] font-bold underline underline-offset-2 text-gray-800 hover:text-[#DB4444] transition-colors">
                      CHANGE ADDRESS
                    </button>
                  </div>
                </div>

                {/* VAT */}
                <div className="flex justify-between items-center py-4 border-b border-gray-200">
                  <span className="text-[12px] font-semibold text-gray-700 uppercase">
                    VAT
                  </span>
                  <span className="text-[14px] font-medium">${vat}</span>
                </div>

                {/* Total */}
                <div className="flex justify-between items-center py-4">
                  <span className="text-[12px] font-bold text-gray-900 uppercase">
                    Total
                  </span>
                  <span className="text-[14px] font-bold">${total}</span>
                </div>
              </motion.div>

              {/* Checkout Button — outside the box, full width */}
              <Link
                to="/checkout"
                className="mt-0 block text-center py-4 bg-head text-white text-[12px] font-bold hover:bg-[#DB4444] transition-all"
              >
                PROCEED TO CHECKOUT
              </Link>
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-20 px-6 bg-[#f9f9f9] rounded-lg border-2 border-dashed border-gray-300"
          >
            <div className="mb-6 bg-white p-5 rounded-full shadow-md">
              <svg
                className="w-16 h-16 text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h2 className="text-[22px] font-bold text-gray-800 mb-2">
              Your Cart is Empty
            </h2>
            <p className="text-gray-500 mb-8 text-center">
              Add some products to your cart to see them here.
            </p>
            <Link
              to="/"
              className="bg-[#DB4444] text-white px-10 py-3 rounded-sm hover:bg-black transition-all text-[13px] font-bold"
            >
              Go Shopping
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Cart;
