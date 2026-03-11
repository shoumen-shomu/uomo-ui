import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import { LiaDollarSignSolid } from "react-icons/lia";
import { MdLocalShipping } from "react-icons/md";
import { BsBoxSeam } from "react-icons/bs";
import { MdOutlinePayment } from "react-icons/md";
import { useCartStore } from "../cart/Cart";

// CartLayout provides: <section>, <div className="container">, <h1>, <StepIndicator>
const ShopInfo = () => {
  const { items: cartItems, clearCart } = useCartStore();

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const vat = Math.round(subtotal * 0.015);
  const total = subtotal + vat;

  return (
    <div className="w-full flex flex-col items-center">

      {/* ── Checkmark + Title ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center text-center mt-4 sm:mt-6 mb-8 sm:mb-10"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 280, damping: 22, delay: 0.15 }}
          className="w-[52px] h-[52px] sm:w-[58px] sm:h-[58px] rounded-full flex items-center justify-center mb-5 sm:mb-6"
          style={{ backgroundColor: "#B8A048" }}
        >
          <FiCheck className="text-white text-[22px] sm:text-[26px]" strokeWidth={2.5} />
        </motion.div>

        <h2 className="text-[22px] sm:text-[24px] md:text-[26px] font-normal text-head mb-1.5">
          Your order is completed!
        </h2>
        <p className="text-[13px] text-[#767676] font-normal">
          Thank you. Your order has been received.
        </p>
      </motion.div>

      {/* ── Order Meta — dashed border, NO column dividers ── */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="w-full max-w-[660px] border border-dashed border-[#B8A048] mb-8 sm:mb-10"
      >
        {/* 4 columns, no dividers between them at all */}
        <div className="grid grid-cols-2 sm:grid-cols-4 px-6 sm:px-8 py-5 gap-y-4 sm:gap-y-0">
          {[
            { label: "Order Number", value: "13119" },
            { label: "Date", value: "27/11/2020" },
            { label: "Total", value: `$${total.toFixed(2)}` },
            { label: "Payment Method", value: "Direct Bank Transfer" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col gap-1">
              <span className="text-[12px] sm:text-[13px] text-[#767676] font-normal leading-5">
                {item.label}
              </span>
              <span className="text-[13px] sm:text-[14px] font-bold text-head leading-5">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Order Details — solid border box ── */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="w-full max-w-[660px] border border-[#E4E4E4] mb-8 sm:mb-10"
      >
        {/* "ORDER DETAILS" heading row with icon */}
        <div className="flex items-center gap-2 px-6 sm:px-8 py-4 sm:py-5 border-b border-[#E4E4E4]">
          <BsBoxSeam className="text-head text-[15px]" />
          <span className="text-[13px] sm:text-[14px] font-semibold text-head uppercase tracking-wide">
            Order Details
          </span>
        </div>

        {/* PRODUCT / SUBTOTAL column headers — plain, no background */}
        <div className="flex justify-between px-6 sm:px-8 py-3 border-b border-[#E4E4E4]">
          <span className="text-[12px] sm:text-[13px] font-semibold text-head uppercase tracking-wide">
            Product
          </span>
          <span className="text-[12px] sm:text-[13px] font-semibold text-head uppercase tracking-wide">
            Subtotal
          </span>
        </div>

        {/* Cart items */}
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center px-6 sm:px-8 py-3 border-b border-[#E4E4E4]"
          >
            <span className="text-[13px] sm:text-[14px] text-[#767676] font-normal">
              {item.title}{" "}
              <span className="font-bold text-head">x{item.quantity}</span>
            </span>
            <span className="text-[13px] sm:text-[14px] text-head font-normal flex items-center gap-0.5">
              <LiaDollarSignSolid />
              {(item.price * item.quantity).toFixed(2)}
            </span>
          </div>
        ))}

        {/* SUBTOTAL */}
        <div className="flex justify-between items-center px-6 sm:px-8 py-3 border-b border-[#E4E4E4]">
          <span className="text-[13px] sm:text-[14px] font-semibold text-head uppercase">
            Subtotal
          </span>
          <span className="text-[13px] sm:text-[14px] text-head font-normal flex items-center gap-0.5">
            <LiaDollarSignSolid />
            {subtotal.toFixed(2)}
          </span>
        </div>

        {/* SHIPPING — with truck icon */}
        <div className="flex justify-between items-center px-6 sm:px-8 py-3 border-b border-[#E4E4E4]">
          <span className="text-[13px] sm:text-[14px] font-semibold text-head uppercase flex items-center gap-2">
            <MdLocalShipping className="text-[17px]" />
            Shipping
          </span>
          <span className="text-[13px] sm:text-[14px] text-[#767676] font-normal">
            Free shipping
          </span>
        </div>

        {/* VAT */}
        <div className="flex justify-between items-center px-6 sm:px-8 py-3 border-b border-[#E4E4E4]">
          <span className="text-[13px] sm:text-[14px] font-semibold text-head uppercase">
            VAT
          </span>
          <span className="text-[13px] sm:text-[14px] text-head font-normal flex items-center gap-0.5">
            <LiaDollarSignSolid />
            {vat}
          </span>
        </div>

        {/* PAYMENT METHOD — with card icon */}
        <div className="flex justify-between items-center px-6 sm:px-8 py-3 border-b border-[#E4E4E4]">
          <span className="text-[13px] sm:text-[14px] font-semibold text-head uppercase flex items-center gap-2">
            <MdOutlinePayment className="text-[17px]" />
            Payment Method
          </span>
          <span className="text-[13px] sm:text-[14px] text-[#767676] font-normal">
            Direct bank transfer
          </span>
        </div>

        {/* TOTAL */}
        <div className="flex justify-between items-center px-6 sm:px-8 py-4">
          <span className="text-[13px] sm:text-[14px] font-semibold text-head uppercase">
            Total
          </span>
          <span className="text-[13px] sm:text-[14px] text-head font-semibold flex items-center gap-0.5">
            <LiaDollarSignSolid />
            {total}
          </span>
        </div>
      </motion.div>

      {/* ── Continue Shopping button ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45 }}
        className="mb-10 sm:mb-14"
      >
        <Link
          to="/"
          onClick={clearCart}
          className="inline-block px-14 sm:px-16 py-3.5 bg-head text-white text-[12px] sm:text-[13px] font-medium uppercase tracking-widest hover:bg-[#DB4444] transition-all"
        >
          Continue Shopping
        </Link>
      </motion.div>

    </div>
  );
};

export default ShopInfo;