import Container from "@/component/common/Container";
import Images from "@/component/common/Images";
import sssOne from "@/assets/images/sssOne.png";
import ssd from "@/assets/images/ssd.png";
import zoomIcon from "@/assets/images/zoomIcon.png";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa6";
import { BsShare } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules"; 
import "swiper/css/navigation";
import { useState } from "react";

const Shopsingle = () => {
  let [count, setCount] = useState(3);
  const handleMinus = () => {
    if (count > 0) {
      setCount((count -= 1));
    }
  };
  const handlePlus = () => {
    if (count < 10) {
      setCount((count += 1));
    }
  };
  return (
    // Top
    <div className="mt-12.5 mb-25">
      <Container>
        <div className="flex flex-col lg:flex-row gap-x-15">
          {/* Flex One  */}
          <div className="flex gap-x-2.5">
            <div className="space-y-2.5 hidden lg:block">
              <Images imgSrc={sssOne} />
              <Images imgSrc={sssOne} />
              <Images imgSrc={sssOne} />
              <Images imgSrc={sssOne} />
            </div>
            <div className="w-full lg:w-170 relative group">
              {/* Slider */}
              <Swiper
                modules={[Navigation]}
                navigation={{
                  nextEl: ".button-next-custom",
                  prevEl: ".button-prev-custom",
                }}
                spaceBetween={10}
                slidesPerView={1}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                className="w-full h-auto"
              >
                <SwiperSlide className="relative flex justify-center items-center bg-white">
                  <Images
                    imgSrc={ssd}
                    className="w-full h-auto object-contain"
                  />
                  <Images
                    imgSrc={zoomIcon}
                    className={
                      "absolute bottom-4 right-4 lg:bottom-7.5 lg:right-7.5 w-6 h-6 lg:w-auto"
                    }
                  />
                </SwiperSlide>
                <SwiperSlide className="relative flex justify-center items-center bg-white">
                  <Images
                    imgSrc={ssd}
                    className="w-full h-auto object-contain"
                  />
                  <Images
                    imgSrc={zoomIcon}
                    className={
                      "absolute bottom-4 right-4 lg:bottom-7.5 lg:right-7.5 w-6 h-6 lg:w-auto"
                    }
                  />
                </SwiperSlide>
                <SwiperSlide className="relative flex justify-center items-center bg-white">
                  <Images
                    imgSrc={ssd}
                    className="w-full h-auto object-contain"
                  />
                  <Images
                    imgSrc={zoomIcon}
                    className={
                      "absolute bottom-4 right-4 lg:bottom-7.5 lg:right-7.5 w-6 h-6 lg:w-auto"
                    }
                  />
                </SwiperSlide>
              </Swiper>

              {/* slider next prev buttons */}
              <div className="button-prev-custom absolute left-2 lg:left-7.5 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white text-[#767676] p-2 lg:p-4 rounded-full shadow-md flex items-center justify-center">
                <GrFormPrevious size={24} />
              </div>
              <div className="button-next-custom absolute right-2 lg:right-7.5 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white text-[#767676] p-2 lg:p-4 rounded-full shadow-md flex items-center justify-center">
                <MdNavigateNext size={24} />
              </div>
            </div>
          </div>
          {/* Flex Two  */}
          <div className="text-center lg:text-start">
            <div className="flex  flex-col lg:flex-row lg:gap-x-71.25">
              <h4 className="texts_14_medium text-head pt-3 lg:pt-0">
                HOME /THE SHOP
              </h4>
              <div className="flex text-head texts_14_medium gap-x-7 mx-auto">
                <button className="flex items-center gap-x-2.5 cursor-pointer">
                  <GrFormPrevious /> PREV
                </button>
                <button className="flex items-center gap-x-2.5 cursor-pointer">
                  NEXT <MdNavigateNext />
                </button>
              </div>
            </div>
            <h3 className="lg:head_26_regular py-2 lg:pt-10 lg:pb-[7px]">
              Lightweight Puffer Jacket With a Hood
            </h3>
            <h4 className="text-[22px] font-medium ">$449</h4>
            <p className="texts_14_regular text-head lg:w-135 w-full leading-6 lg:pt-6.25">
              Phasellus sed volutpat orci. Fusce eget lore mauris vehicula
              elementum gravida nec dui. Aenean aliquam varius ipsum, non
              ultricies tellus sodales eu. Donec dignissim viverra nunc, ut
              aliquet magna posuere eget.
            </p>
            {/* Butttons  */}
            <div className="flex flex-col lg:flex-row mx-auto text-center justify-center lg:justify-start items-center  gap-5 my-2 lg:my-8.75">
              <div className="w-29 h-15 border-2 border-second p-5 flex items-center justify-center gap-x-3 texts_16_regular text-[#767676]">
                <button onClick={handleMinus} className="cursor-pointer">
                  -
                </button>
                <span>{count}</span>
                <button onClick={handlePlus} className="cursor-pointer">
                  +
                </button>
              </div>
              <button className="w-70 h-15 bg-head flex justify-center items-center text-white texts_14_medium">
                ADD TO CART
              </button>
            </div>
            <div className="flex justify-center lg:justify-start gap-x-7.75 py-1">
              <h4 className="text-head text-[13px] font-medium flex gap-x-2.5">
                <FaRegHeart /> ADD TO WISHLIST
              </h4>
              <h4 className="text-head text-[13px] font-medium flex gap-x-2.5">
                <BsShare />
                SHARE
              </h4>
            </div>
            <div className="w-22.5 h-0.5 bg-head mt-0.75 mb-8 hidden lg:block"></div>
            <h5 className="texts_13_regular text-[#767676]">
              SKU: <span className="text-head"> N/A</span>
            </h5>
            <h5 className="texts_13_regular text-[#767676] ">
              Categories:{" "}
              <span className="text-head">
                Casual & Urban Wear, Jackets, Men
              </span>
            </h5>
            <h5 className="texts_13_regular text-[#767676]">
              Tags:{" "}
              <span className="text-head">biker, black, bomber, leather</span>
            </h5>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Shopsingle;
