import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Container from "@/component/common/Container";
import { shopList1 } from "@/helper/projectArrayObj";
import allIcons from "@/helper/iconProvider";
import Product from "@/component/common/Product";
import allImages from "@/helper/imagesProvider";
import { Progress } from "@/components/ui/progress";
import Button from "@/component/common/Button";
import ShopFilter from "./ShopFilter";
import Images from "@/component/common/Images";

const ShopBanner = () => {
  const [visibleItems, setVisibleItems] = useState(36);
  const [open, isOpen] = useState(false);
  // for images

  const { shopBanner } = allImages;

  // for ref
  const handleRef = useRef(null);

  useEffect(() => {
    const clicked = (e) => {
      if (handleRef.current && handleRef.current.contains(e.target)) {
        console.log("Dom aChe!");
        isOpen(false);
      }
    };

    document.addEventListener("click", clicked);

    return () => document.removeEventListener("click", clicked);
  }, []);

  // for hanndle event
  const handleOpen = () => {
    isOpen(!open);
  };

  const totalItems = 100;
  const percentage = (visibleItems / totalItems) * 100;

  const handleLoadMore = () => {
    if (visibleItems < totalItems) {
      setVisibleItems((prev) => Math.min(prev + 12, totalItems));
    }
  };
  //for icons & img

  const { filter, close } = allIcons;
  const { shopimg } = allImages;

  return (
    <section className="z-0">
      {open && (
        <div
          className="fixed top-0 left-0 h-screen bg-[#22222258] w-full z-[800]"
          ref={handleRef}
        ></div>
      )}
      {open && (
        <div className="fixed z-[999] h-full top-0 right-0">
          <ShopFilter onClose={handleOpen} />
        </div>
      )}

      <div className="overflow-hidden relative bg-[url('./assets/images/ShopBannerBg.png')] py-8 sm:py-16 md:py-24 lg:py-33.75 px-4 sm:px-8 md:px-12 lg:mx-15 bg-no-repeat bg-cover bg-center mt-[60px] sm:mt-[70px] lg:mt-[75px] ">
        <div>
          <Images
            imgSrc={shopBanner}
            imgAlt={"shopBanner"}
            className="absolute top-5 right-0 w-[180px] h-[160px] sm:w-[280px] sm:h-[260px] md:w-[400px] md:h-[380px] lg:max-w-[550px] lg:h-[500px] object-cover opacity-70 sm:opacity-85 lg:opacity-100"
          />
        </div>

        <Container>
          <div className="">
            <h3
              className="font-bold text-[36px] sm:text-[52px] md:text-[70px] lg:text-[90px] uppercase tracking-wide
               text-[#efefef] bg-transparent
               filter-[drop-shadow(1px_0_0_#8b8282)_drop-shadow(-1px_0_0_#8b8282)_drop-shadow(0_1px_0_#8b8282)_drop-shadow(0_-1px_0_#8b8282)] leading-tight"
            >
              Jackets & Coats
            </h3>
          </div>
          <div className="pt-2 sm:pt-3 lg:pt-3.5">
            <ul className="flex items-center gap-x-4 sm:gap-x-6 md:gap-x-8 lg:gap-x-10 overflow-x-auto scrollbar-hide">
              {shopList1.map((items) => {
                return (
                  <li key={items.id} className="whitespace-nowrap">
                    <button className="texts_16_medium cursor-pointer text-head relative  after:absolute after:content-[''] after:w-[0%] after:h-[2px] after:bg-head after:bottom-[2.5px] after:left-0 hover:after:w-[60%]  after:duration-500 after:ease-in-out  py-1">
                      {items.title}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </Container>
      </div>

      <div className="mt-6 sm:mt-8 lg:mt-9 mb-16 sm:mb-20 lg:mb-25">
        <Container>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
            <p className="text-head texts_14_medium">HOME / THE SHOP</p>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-5 lg:gap-x-7.5 w-full sm:w-auto">
              {/* Filter part start */}

              {/* Filter part end */}

              <select className="border-b-2 border-head flex-1 sm:flex-initial min-w-[160px]">
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
              <div className="hidden md:block h-6 w-0.5 bg-gray-300 cursor-pointer"></div>
              <div className="hidden md:flex justify-between items-center gap-x-3 cursor-pointer">
                <button className="texts_14_medium text-head">VIEW</button>
                <button className="texts_14_medium text-head">2</button>
                <button className="texts_14_medium text-head">3</button>
                <button className="texts_14_medium text-head">4</button>
              </div>
              <button
                className="border-l-2 pl-4 sm:pl-5 md:pl-6 lg:pl-7.5 border-footer texts_14_medium text-head flex items-center gap-x-[10px] cursor-pointer"
                onClick={handleOpen}
              >
                <span className="text-lg">{filter}</span> FILTER
              </button>
            </div>
          </div>
          <div>
            <div className="pt-6 sm:pt-8 lg:pt-10 pb-8 sm:pb-10 lg:pb-12.5 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-7.5">
              {[...new Array(16)].map((_, index) => {
                return (
                  <Product
                    key={index}
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
            <div className="flex flex-col items-center w-full max-w-full sm:max-w-[90%] md:max-w-75 mx-auto uppercase px-4 sm:px-0">
              <p className="texts_14_medium text-black pb-1.25">
                Showing {visibleItems} of {totalItems} Items
              </p>

              <Progress
                value={percentage}
                className="h-full w-full bg-[#E4E4E4] [&>div]:bg-black transition-all duration-500 items-center rounded-[10px]"
              />

              {visibleItems < totalItems && (
                <Link>
                  {" "}
                  <Button
                    onClick={handleLoadMore}
                    className={
                      "texts_14_medium text-black hover:after:w-15 pt-4.25"
                    }
                    btnText={"SHOW MORE"}
                  />
                </Link>
              )}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default ShopBanner;
