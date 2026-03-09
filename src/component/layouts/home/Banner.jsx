import Images from "@/component/common/Images";
import React from "react";
import bannerRightImg from "@/assets/images/bannerRightImg.png";
import Button from "@/component/common/Button";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <section>
        <div class="bg-[url('./assets/images/bannerBg.png')] pt-14.25 mx-15 bg-no-repeat bg-cover bg-center relative">
          <div className="container">
            <div className="flex items-end">
              <div className="leftContent w-[63%] ">
                <div className="flex items-center gap-3.25">
                  <div className="w-10 h-0.5 bg-second-red"></div>
                  <p className="texts_14_medium text-second-red">NEW TREND</p>
                </div>
                <h1 className="head_70_regular pb-2">
                  SUMMER SALE STYLISH{" "}
                  <span className="head_70_bold">WOMENS</span>
                </h1>
                <Button className={'hover:after:w-24'} btnText={"DISCOVER MORE"} />
                {/* Slider */}
                <div className="mt-48.75 mb-13.75"></div>
                {/* Slider */}
              </div>
              <div className="rightContent">
                <Images imgSrc={bannerRightImg} />
              </div>
            </div>
          </div>
          <div className="absolute top-1/2 -left-10 -translate-y-[50%] flex flex-col gap-y-6.25">
            <Link>
              <FaFacebookF className="text-[#767676]" size={15} />
            </Link>
            <Link>
              <FaTwitter className="text-[#767676]" size={15} />
            </Link>
            <Link>
              <FaInstagram className="text-[#767676]" size={15} />
            </Link>
            <Link>
              <FaPinterest className="text-[#767676]" size={15} />
            </Link>
            <Link>
              <p className="texts_14_medium text-[#767676] rotate-270 -ml-7.75 mt-6.5">
                FOLLOW US
              </p>
            </Link>
          </div>
          <div className="absolute bottom-[23px] -right-20 -translate-y-[50%] flex space-x-[10px] items-center rotate-270">
            <div className="w-7.5 h-0.5 bg-head"></div>
            <p className="texts_14_medium text-head  ">SCROLL</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
