import React from "react";
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
                return (
                  <li key={index}>
                    <Link to={items.path} className="texts_14_medium text-head">
                      {items.label}
                    </Link>
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
