import React from "react";
import NavbarLg from "./NavbarLg";
import NavbarMobile from "./NavbarMobile";
import { useLocation } from "react-router-dom";
import allImages from "@/helper/imagesProvider";

const Navbar = () => {
  // for locations
  const { pathname } = useLocation();

  // for images
  const { notFoundPage } = allImages;
  //  style={
  //         pathname === "/404"
  //           ? { backgroundImage: `url(${notFoundPage})` }
  //           : { backgroundColor: "white" }
  //       }
  return (
    <div className="fixed top-0 left-0 w-full z-[999] ">
      <div
        className={`hidden lg:block ${
          pathname === "/404" || pathname === "/coming-soon"
            ? "bg-transparent"
            : "bg-white"
        }`}
      >
        <NavbarLg />
      </div>
      <div className="lg:hidden block">
        <NavbarMobile />
      </div>
    </div>
  );
};

export default Navbar;
