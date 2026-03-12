import allIcons from "@/helper/iconProvider";
import allImages from "@/helper/imagesProvider";

import { Link } from "react-router-dom";
import React, { useState } from "react";
import { navTabsData } from "@/helper/projectArrayObj";
import Images from "../common/Images";

const NavTabs = ({unMount}) => {
  const { close } = allIcons;
  const { navtabImg } = allImages;
  const [activeTab, setActiveTab] = useState(0);

  const currentData = navTabsData[activeTab];

  return (
    <div className="fixed inset-0 z-[999] flex">
      {/* Left — image */}
      <div className="w-[50%]">
        <Images
          imgSrc={navtabImg}
          imgAlt="nav tab"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right — menu */}
      <div className="w-[50%] bg-white flex flex-col relative">
        {/* Close — top right of entire screen */}
        <div className="absolute top-6 right-8">
          <span className="text-2xl cursor-pointer text-head " onClick={()=>unMount(null)}>{close}</span>
        </div>

        {/* Tabs — WOMEN / MEN / KIDS */}
        <div className="flex gap-x-3 px-14 pt-6 mb-10">
          {navTabsData.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(index)}
              className={`texts_14_medium tracking-wider px-5 py-2 transition-all duration-200 ${
                activeTab === index
                  ? "bg-head text-white"
                  : "text-head hover:bg-secondbg"
              }`}
            >
              {item.tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex gap-x-14 px-14 overflow-y-auto">
          {/* Categories */}
          <ul className="flex flex-col gap-y-6 min-w-[220px]">
            {currentData.categories.map((cat) => (
              <li key={cat.id} className="relative">
                <Link
                  to={cat.link}
                  className={`head_26_regular tracking-wide hover:opacity-60 transition-opacity ${
                    cat.isRed ? "text-red" : "text-head"
                  }`}
                >
                  {cat.name}
                </Link>
                {/* Active underline — long line */}
                {cat.isActive && (
                  <span className="absolute bottom-[-4px] left-0 w-[120px] h-[1.5px] bg-head" />
                )}
              </li>
            ))}
          </ul>

          {/* Divider */}
          <div className="w-[1px] bg-footer self-stretch" />

          {/* Sub Links */}
          <ul className="flex flex-col gap-y-4">
            {currentData.subLinks.map((sub) => (
              <li key={sub.id}>
                <Link
                  to={sub.link}
                  className="texts_14_regular text-head hover:underline underline-offset-2 transition-all"
                >
                  {sub.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavTabs;
