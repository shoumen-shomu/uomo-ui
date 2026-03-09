import Images from "@/component/common/Images";
import React from "react";
import bannerRightImg from "@/assets/images/bannerRightImg.png";

const Banner = () => {
  return (
    <>
      <section id="banner">
        <div class="bg-[url('./assets/images/bannerBg.png')] pt-[57px] mx-20 bg-no-repeat bg-cover bg-center">
          <div className="container">
            <div className="flex gap-25.75">
              <div className="leftContent ">
                <div className="flex items-center gap-3.25">
                  <div className="w-10 h-0.5 bg-second-red"></div>
                  <p className="texts_14_medium text-second-red">NEW TREND</p>
                </div>
                <h1 className="head_70_regular">
                  SUMMER SALE STYLISH <span className="head_70_bold">WOMENS</span>
                </h1>
              </div>
              <div className="rightContent">
                <Images imgSrc={bannerRightImg} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
