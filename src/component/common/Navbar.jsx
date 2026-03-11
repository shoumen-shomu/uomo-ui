import React, { useState } from "react";
import Container from "./Container";
import allImages from "@/helper/imagesProvider";
import Images from "./Images";
import { navItems } from "@/helper/projectArrayObj";
import { Link } from "react-router-dom";
import allIcons from "@/helper/iconProvider";

const Navbar = () => {
  // for icon and images
  const { navLogo } = allImages;
  const { navIconItems } = allIcons;

  // for manage state

  const [hoverItems, setHoverITems] = useState(null);

  return (
    <nav className="pt-[29px] pb-[19px]">
      <Container>
        <div className="flex justify-between">
          <div className="flex  items-center  gap-x-[56px] ">
            <Images
              imgSrc={navLogo}
              imgAlt={navLogo}
              className={"w-[111px] h-[27px]"}
            />
            <ul className=" flex gap-x-[37px]">
              {navItems.map((items, index) => {
                return items.label === "LOOKBOOK" ? (
                  <li key={index}>
                    <Link
                      to={items.path}
                      className="texts_14_medium text-head relative  after:absolute after:content-[''] after:w-[40%] after:h-[1.5px] after:bg-head after:bottom-[-3px] after:left-0 hover:after:w-full  after:duration-500 after:ease-in-out"
                    >
                      {items.label}
                    </Link>
                  </li>
                ) : (
                  <li
                    key={index}
                    onMouseEnter={() => setHoverITems(items.label)}
                    onMouseLeave={() => setHoverITems(null)}
                    className="relative "
                  >
                    <Link to={items.path} className="texts_14_medium text-head">
                      {items.label}
                    </Link>

                    {items.hasMegaMenu && items.label === hoverItems && (
                      <div className=" absolute bg-red-500">
                        This is shop page...
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <ul className="flex gap-x-[30px] ">
              {navIconItems.map((items) => {
                return items.name === "Cart" ? (
                  <li key={items.id}>
                    <Link
                      to={items.link}
                      className=" relative text-[22px] text-head "
                    >
                      <span className="absolute bg-third  w-[19px] h-[19px] flex  flex items-center justify-center text-xs font-medium text-white  rounded-full  bottom-[-10px] right-[-8px]">
                        {items.badge}
                      </span>
                      {items.icon}
                    </Link>
                  </li>
                ) : (
                  <li key={items.id}>
                    <Link to={items.link} className="text-[22px] text-head">
                      {items.icon}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;