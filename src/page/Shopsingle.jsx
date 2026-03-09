import Container from "@/component/common/Container";
import Images from "@/component/common/Images";
import sssOne from "@/assets/images/sssOne.png";
import ssd from "@/assets/images/ssd.png";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa6";
import { BsShare } from "react-icons/bs";

const Shopsingle = () => {
  return (
    // Top
    <div className="mt-12.5 mb-25">
      <Container>
        <div className="flex justify-between">
          {/* Flex One  */}
          <div className="flex gap-x-2.5">
            <div className="space-y-2.5">
              <Images imgSrc={sssOne} />
              <Images imgSrc={sssOne} />
              <Images imgSrc={sssOne} />
              <Images imgSrc={sssOne} />
            </div>
            <div className="">
              <Images imgSrc={ssd} />
            </div>
          </div>
          {/* Flex Two  */}
          <div className="">
            <div className="flex gap-x-71.25">
              <h4 className="texts_14_medium text-head">HOME / THE SHOP</h4>
              <div className="flex text-head texts_14_medium gap-x-7">
                <span className="flex items-center gap-x-2.5">
                  <GrFormPrevious /> PREV{" "}
                </span>
                <span className="flex items-center gap-x-2.5">
                  {" "}
                  NEXT <MdNavigateNext />
                </span>
              </div>
            </div>
            <h3 className="head_26_regular pt-10 pb-[7px]">
              Lightweight Puffer Jacket With a Hood
            </h3>
            <h4 className="text-[22px] font-medium ">$449</h4>
            <p className="texts_14_regular text-head w-135 leading-6 pt-6.25">
              Phasellus sed volutpat orci. Fusce eget lore mauris vehicula
              elementum gravida nec dui. Aenean aliquam varius ipsum, non
              ultricies tellus sodales eu. Donec dignissim viverra nunc, ut
              aliquet magna posuere eget.
            </p>
            {/* Butttons  */}
            <div className="flex gap-x-5 my-8.75">
              <div className="w-29 h-15 border-2 border-second p-5 flex items-center justify-center gap-x-3 texts_16_regular text-[#767676]">
                <button className="cursor-pointer">-</button>
                <span>3</span>
                <button className="cursor-pointer">+</button>
              </div>
              <button className="w-70 h-15 bg-head flex justify-center items-center text-white texts_14_medium">
                ADD TO CART
              </button>
            </div>
            <div className="flex gap-x-7.75">
              <h4 className="text-head text-[13px] font-medium flex gap-x-2.5">
                <FaRegHeart /> ADD TO WISHLIST
              </h4>
              <h4 className="text-head text-[13px] font-medium flex gap-x-2.5">
                <BsShare />
                SHARE
              </h4>
            </div>
            <div className="w-22.5 h-0.5 bg-head mt-0.75 mb-8"></div>
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
