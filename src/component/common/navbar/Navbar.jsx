import React from "react";
import NavbarLg from "./NavbarLg";
import NavbarMobile from "./NavbarMobile";

const Navbar = () => {
  return (
    <>
      <div className="hidden lg:block ">
        <NavbarLg />
      </div>
      <div className="lg:hidden block">
        <NavbarMobile />
      </div>
    </>
  );
};

export default Navbar;
