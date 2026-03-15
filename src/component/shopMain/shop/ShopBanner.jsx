import Images from "@/component/common/Images";
import shopBannerImg from "@/assets/images/shopBannerImg.png";
import React from "react";
import { Link } from "react-router-dom";
import Container from "@/component/common/Container";
import { shopList1 } from "@/helper/projectArrayObj";
import allIcons from "@/helper/iconProvider";
import Product from "@/component/common/Product";
import allImages from "@/helper/imagesProvider";

const ShopBanner = () => {
  //for icons & img

  const { filter } = allIcons;
  const { shopimg } = allImages;

  return (
    <section>
      <div className="bg-[url('./assets/images/ShopBannerBg.png')] py-[135px] mx-15 bg-no-repeat bg-cover bg-center relative mt-[75px]">
        <Container>
          <div className="">
            <h3
              className="font-bold text-[90px] uppercase tracking-wide
               text-[#efefef] bg-transparent
               filter-[drop-shadow(1px_0_0_#8b8282)_drop-shadow(-1px_0_0_#8b8282)_drop-shadow(0_1px_0_#8b8282)_drop-shadow(0_-1px_0_#8b8282)]"
            >
              Jackets & Coats
            </h3>
          </div>
          <div className="pt-[14px]">
            <ul className="flex items-center gap-x-10">
              {shopList1.map((items) => {
                return (
                  <li key={items.id}>
                    <button className="texts_16_medium text-head relative  after:absolute after:content-[''] after:w-[0%] after:h-[2px] after:bg-head after:bottom-[-2px] after:left-0 hover:after:w-[60%]  after:duration-500 after:ease-in-out">
                      {items.title}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </Container>
      </div>

      <div className="mt-9 mb-[100px]">
        <Container>
          <div className="flex justify-between">
            <p className="text-head texts_14_medium">HOME / THE SHOP</p>
            <div className="flex  items-center gap-x-[30px]">
              <select className="border-b-2 border-head  ">
                <option className="text-head texts_14_medium" value="default">
                  Default Sorting
                </option>
                <option
                  className="text-head texts_14_medium"
                  value="popularity"
                >
                  Popularity
                </option>
                <option className="text-head texts_14_medium" value="rating">
                  Average Rating
                </option>
                <option className="text-head texts_14_medium" value="latest">
                  Latest
                </option>
                <option className="text-head texts_14_medium" value="price-low">
                  Price: Low to High
                </option>
                <option
                  className="text-head texts_14_medium"
                  value="price-high"
                >
                  Price: High to Low
                </option>
              </select>
              <button className=" border-l-2 pl-[30px] border-footer texts_14_medium text-head flex items-center gap-x-[10px] cursor-pointer">
                <span className="text-lg">{filter}</span> FILTER
              </button>
            </div>
          </div>
          <div>
            <div className="pt-[40px] pb-[50px] grid  grid-cols-4 gap-[30px]">
              {[...new Array(16)].map((_, index) => {
                return (
                  <Product
                    imgAlt={"shop-page-img"}
                    catagory={"Dresses"}
                    itemName={"Colorful Jacket"}
                    itemPrice={"$29"}
                    discountPrice={"$5"}
                    imgSrc={shopimg}
                  />
                );
              })}
            </div>
            <div></div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default ShopBanner;
