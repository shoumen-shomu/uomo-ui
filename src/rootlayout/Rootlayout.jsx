import Footer from "@/component/common/Footer";
import Navbar from "@/component/common/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

const Rootlayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Rootlayout;
