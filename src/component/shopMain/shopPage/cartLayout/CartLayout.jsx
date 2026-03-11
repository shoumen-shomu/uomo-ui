import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import StepIndicator from "../stepIndicators/StepIndicator";

// Map each child route to its page title
const getTitleByPath = (pathname) => {
  if (pathname.includes("order-recived") || pathname.includes("order-tracking"))
    return "ORDER RECEIVED";
  if (pathname.includes("shoping-and-checkout")) return "SHIPPING AND CHECKOUT";
  return "CART";
};

// ─── CartLayout ────────────────────────────────────────────────────────────────
const CartLayout = () => {
  const { pathname } = useLocation();
  const title = getTitleByPath(pathname);

  return (
    <section className="pt-10 md:pt-22.5 pb-25">
      <div className="container px-4 sm:px-6">
        {/* Dynamic page title */}
        <h1 className="text-[22px] sm:text-[28px] md:text-[35px] text-head font-bold pb-6 sm:pb-9 md:pb-12">
          {title}
        </h1>

        {/* Shared step indicator — auto-highlights based on current route */}
        <StepIndicator />

        {/* Child page content (Cart / ShopCheckout / ShopInfo / OrderTracking) */}
        <Outlet />
      </div>
    </section>
  );
};

export default CartLayout;