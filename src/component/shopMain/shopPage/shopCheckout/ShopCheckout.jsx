import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { LiaDollarSignSolid } from "react-icons/lia";
import { useCartStore } from "../cart/Cart";
// ─── Step Indicator (same as Cart) ────────────────────────────────────────────
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

const StepIndicator = ({ currentStep = 1 }) => {
  const navigate = useNavigate();
  return (
    <div className="flex mb-10 border-b border-gray-200">
      {steps.map((step, idx) => {
        const isActive = idx === currentStep;
        const isClickable = idx < currentStep;
        return (
          <div
            key={step.num}
            onClick={() => isClickable && navigate(step.path)}
            style={{ flex: 1 }}
            className={`relative pb-5 transition-all duration-200 text-head ${isClickable ? "cursor-pointer" : "cursor-default"}`}
          >
            {idx <= currentStep && (
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

// ─── Main ShopCheckout ─────────────────────────────────────────────────────────
const ShopCheckout = () => {
  const { items: cartItems } = useCartStore();
  const [paymentMethod, setPaymentMethod] = useState("bank");

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const vat = Math.round(subtotal * 0.015);
  const total = subtotal + vat;

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    company: "",
    country: "",
    streetAddress: "",
    streetAddress2: "",
    city: "",
    postcode: "",
    province: "",
    phone: "",
    email: "",
    orderNotes: "",
    createAccount: false,
    shipDifferent: false,
  });

  const handle = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const inputClass =
    "w-full h-11.5 border border-[#E4E4E4] px-4 text-sm text-head placeholder:text-[#767676] outline-none focus:border-head transition-colors bg-white";

  return (
    <section className="pt-10 md:pt-22.5 pb-25">
      <div className="container px-6">
        {/* Title */}
        <h1 className="text-[35px] text-head font-bold pb-12">CART</h1>

        {/* Steps */}
        <StepIndicator currentStep={1} />

        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* ── Left: Billing Details ── */}
          <div className="flex-1 min-w-0">
            <h2 className="text-[16px] font-medium text-head uppercase mb-6">
              Billing Details
            </h2>

            {/* First / Last */}
            <div className="flex gap-4 mb-4">
              <input
                name="firstName"
                value={form.firstName}
                onChange={handle}
                placeholder="First Name"
                className={inputClass}
              />
              <input
                name="lastName"
                value={form.lastName}
                onChange={handle}
                placeholder="Last Name"
                className={inputClass}
              />
            </div>

            {/* Company */}
            <div className="mb-4">
              <input
                name="company"
                value={form.company}
                onChange={handle}
                placeholder="Company Name (optional)"
                className={inputClass}
              />
            </div>

            {/* Country */}
            <div className="mb-4 relative border border-[#E4E4E4] focus-within:border-head transition-colors">
              <label className="absolute top-1 left-4 text-[10px] text-[#767676]">
                Country / Region *
              </label>
              <select
                name="country"
                value={form.country}
                onChange={handle}
                className="w-full h-13 pt-4 pb-1 px-4 text-sm text-head outline-none bg-white appearance-none cursor-pointer"
              >
                <option value="">Select a country / region</option>
                <option value="Turkey">Turkey</option>
                <option value="US">United States</option>
                <option value="UK">United Kingdom</option>
                <option value="BD">Bangladesh</option>
              </select>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#767676] pointer-events-none">
                ▾
              </span>
            </div>

            {/* Street Address */}
            <div className="mb-4 flex flex-col gap-3">
              <input
                name="streetAddress"
                value={form.streetAddress}
                onChange={handle}
                placeholder="Street Address *"
                className={inputClass}
              />
              <input
                name="streetAddress2"
                value={form.streetAddress2}
                onChange={handle}
                placeholder=""
                className={inputClass}
              />
            </div>

            {/* Town / City */}
            <div className="mb-4">
              <input
                name="city"
                value={form.city}
                onChange={handle}
                placeholder="Town / City *"
                className={inputClass}
              />
            </div>

            {/* Postcode */}
            <div className="mb-4">
              <input
                name="postcode"
                value={form.postcode}
                onChange={handle}
                placeholder="Postcode / ZIP *"
                className={inputClass}
              />
            </div>

            {/* Province */}
            <div className="mb-4">
              <input
                name="province"
                value={form.province}
                onChange={handle}
                placeholder="Province *"
                className={inputClass}
              />
            </div>

            {/* Phone */}
            <div className="mb-4">
              <input
                name="phone"
                value={form.phone}
                onChange={handle}
                placeholder="Phone *"
                className={inputClass}
              />
            </div>

            {/* Email */}
            <div className="mb-6">
              <input
                name="email"
                value={form.email}
                onChange={handle}
                placeholder="Your Mail"
                className={inputClass}
              />
            </div>

            {/* Checkboxes */}
            <div className="flex flex-col gap-2 mb-6">
              {[
                { name: "createAccount", label: "CREATE AN ACCOUNT?" },
                {
                  name: "shipDifferent",
                  label: "SHIP TO A DIFFERENT ADDRESS?",
                },
              ].map((cb) => (
                <label
                  key={cb.name}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    name={cb.name}
                    checked={form[cb.name]}
                    onChange={handle}
                    className="w-4 h-4 border border-gray-300 rounded-none accent-head cursor-pointer shrink-0"
                  />
                  <span className="text-sm text-head font-medium">
                    {cb.label}
                  </span>
                </label>
              ))}
            </div>

            {/* Order Notes */}
            <textarea
              name="orderNotes"
              value={form.orderNotes}
              onChange={handle}
              placeholder="Order Notes (optional)"
              rows={5}
              className="w-full border border-[#E4E4E4] px-4 py-3 text-sm text-head placeholder:text-[#767676] outline-none focus:border-head transition-colors bg-white resize-none"
            />
          </div>

          {/* ── Right: Your Order ── */}
          <div style={{ width: "420px" }} className="shrink-0 w-full lg:w-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="border-2 border-head pl-10.25 pr-12.5 pt-9.5 pb-5.5"
            >
              <h3 className="text-[16px] font-medium leading-[100%] mb-6 uppercase">
                Your Order
              </h3>

              {/* Header row */}
              <div className="flex justify-between border-b border-[#E4E4E4] pb-3 mb-3">
                <span className="text-sm font-medium text-head uppercase leading-6">
                  Product
                </span>
                <span className="text-sm font-medium text-head uppercase leading-6">
                  Subtotal
                </span>
              </div>

              {/* Items */}
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between py-2">
                  <span className="text-sm text-head leading-6 font-medium">
                    {item.title} x{item.quantity}
                  </span>
                  <span className="text-sm text-head leading-6 font-medium flex items-center">
                    <LiaDollarSignSolid />
                    {(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}

              {/* Subtotal */}
              <div className="flex justify-between border-t border-[#E4E4E4] mt-3 pt-3.5">
                <span className="text-sm font-medium text-head leading-6 uppercase">
                  Subtotal
                </span>
                <span className="text-sm font-medium text-head leading-6 flex items-center">
                  <LiaDollarSignSolid />
                  {subtotal.toFixed(2)}
                </span>
              </div>

              {/* Shipping */}
              <div className="flex justify-between border-t border-[#E4E4E4] pt-3.5 pb-3.5">
                <span className="text-sm font-medium text-head leading-6 uppercase">
                  Shipping
                </span>
                <span className="text-sm font-medium text-head leading-6">
                  Free shipping
                </span>
              </div>

              {/* VAT */}
              <div className="flex justify-between border-t border-[#E4E4E4] pt-3.5 pb-3.5">
                <span className="text-sm text-head leading-6 font-medium uppercase">
                  VAT
                </span>
                <span className="text-sm text-head leading-6 font-medium">
                  ${vat}
                </span>
              </div>

              {/* Total */}
              <div className="flex justify-between border-t border-[#E4E4E4] pt-3.5">
                <span className="text-sm text-head leading-6 font-medium uppercase">
                  Total
                </span>
                <span className="text-sm text-head leading-6 font-medium">
                  ${total}
                </span>
              </div>
            </motion.div>

            {/* Payment Methods */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="border-2 border-head pl-10.25 pr-12.5 pt-7 pb-7 mt-5"
            >
              {/* Direct bank transfer */}
              <label className="flex items-center gap-2 cursor-pointer mb-3">
                <input
                  type="radio"
                  name="payment"
                  value="bank"
                  checked={paymentMethod === "bank"}
                  onChange={() => setPaymentMethod("bank")}
                  className="accent-head cursor-pointer"
                />
                <span className="text-sm text-head font-medium leading-6">
                  Direct bank transfer
                </span>
              </label>

              {paymentMethod === "bank" && (
                <p className="text-[13px] text-[#767676] leading-5 mb-4 pl-5">
                  Make your payment directly into our bank account. Please use
                  your Order ID as the payment reference. Your order will not be
                  shipped until the funds have cleared in our account.
                </p>
              )}

              {[
                { value: "check", label: "Check payments" },
                { value: "cod", label: "Cash on delivery" },
                { value: "paypal", label: "PayPal" },
              ].map((opt) => (
                <label
                  key={opt.value}
                  className="flex items-center gap-2 cursor-pointer mb-3"
                >
                  <input
                    type="radio"
                    name="payment"
                    value={opt.value}
                    checked={paymentMethod === opt.value}
                    onChange={() => setPaymentMethod(opt.value)}
                    className="accent-head cursor-pointer"
                  />
                  <span className="text-sm text-head font-medium leading-6">
                    {opt.label}
                  </span>
                </label>
              ))}

              <p className="text-[13px] text-[#767676] leading-5 mt-2">
                Your personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our{" "}
                <Link to="/privacy" className="text-head underline">
                  privacy policy
                </Link>
                .
              </p>
            </motion.div>

            {/* Place Order Button */}
            <Link
              to="/confirmation"
              className="mt-5 block text-center pt-5.25 pb-3.75 bg-head text-white text-sm font-medium leading-6 hover:bg-[#DB4444] transition-all"
            >
              PLACE ORDER
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopCheckout;
