import Images from "@/component/common/Images";
import React, { useRef, useState } from "react";
import bannerRightImg from "@/assets/images/bannerRightImg.png";
import Button from "@/component/common/Button";
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Banner = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const sliderData = [1, 2, 3, 4]; 

  return (
    <section>
      <div className="mx-15 relative">
        
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          modules={[Autoplay]}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {sliderData.map((_, idx) => (
            <SwiperSlide key={idx}>
              {/* BG Image-ke eikhane niye asha hoyeche jate ota slide hoy */}
              <div className="bg-[url('./assets/images/bannerBg.png')] bg-no-repeat bg-cover bg-center pt-14.25 pb-0.5">
                <div className="container">
                  <div className="flex items-end">
                    <div className="leftContent w-[63%]">
                      <div className="flex items-center gap-3.25">
                        <div className="w-10 h-0.5 bg-second-red"></div>
                        <p className="texts_14_medium text-second-red">NEW TREND</p>
                      </div>
                      <h1 className="head_70_regular pb-2">
                        SUMMER SALE STYLISH <span className="head_70_bold">WOMENS</span>
                      </h1>
                      <Button className={"hover:after:w-24"} btnText={"DISCOVER MORE"} />

                      {/* Slider Dots Start */}
                      <div className="mt-48.75 mb-13.75 flex gap-1.5">
                        {sliderData.map((_, index) => (
                          <div
                            onClick={() => swiperRef.current?.slideToLoop(index)}
                            key={index}
                            className="group relative flex items-center justify-center p-3 cursor-pointer"
                          >
                            <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 
                              ${activeIndex === index ? "bg-black" : "bg-[#DDC2B9] group-hover:bg-black"}`}>
                            </div>
                            <div className={`absolute inset-0 border-2 border-black rounded-full transition-all duration-300 
                              ${activeIndex === index ? "scale-100" : "scale-0 group-hover:scale-100"}`}>
                            </div>
                          </div>
                        ))}
                      </div>
                      {/* Slider Dots End */}
                    </div>

                    <div className="rightContent">
                      <Images imgSrc={bannerRightImg} />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* FIXED ELEMENTS - Eigulo slide hobe na */}
        <div className="absolute top-1/2 -left-10 -translate-y-[50%] flex flex-col gap-y-6.25 z-10">
          <Link><FaFacebookF className="text-[#767676]" size={15} /></Link>
          <Link><FaTwitter className="text-[#767676]" size={15} /></Link>
          <Link><FaInstagram className="text-[#767676]" size={15} /></Link>
          <Link><FaPinterest className="text-[#767676]" size={15} /></Link>
          <Link>
            <p className="texts_14_medium text-[#767676] rotate-270 -ml-7.75 mt-6.5">FOLLOW US</p>
          </Link>
        </div>
        <div className="absolute bottom-5.75 -right-20 -translate-y-[50%] flex space-x-2.5 items-center rotate-270 z-10">
          <div className="w-7.5 h-0.5 bg-head"></div>
          <p className="texts_14_medium text-head">SCROLL</p>
        </div>

      </div>
    </section>
  );
};

export default Banner;