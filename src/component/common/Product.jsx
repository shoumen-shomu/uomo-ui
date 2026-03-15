import React, { useState } from "react";
import Images from "./Images";
import { FaHeart } from "react-icons/fa6";

const Product = ({
  imgSrc,
  imgAlt,
  catagory,
  itemName,
  itemPrice,
  discountPrice,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <>
      <div className="lg:w-82.5 w-full relative group">
        <div className="relativec overflow-hidden ">
          <Images className={""} imgSrc={imgSrc} imgAlt={imgAlt} />
          {/* Badge Start */}

          {/* Badge End */}

          {/* Add To Cart Start */}
          <div className="w-77.5 bg-white pt-4 pb-2.5 text-center mx-auto absolute bottom-[20%] left-1/2 -translate-x-1/2 translate-y-[50%] opacity-0 group-hover:opacity-100 group-hover:translate-y-0 ease-in-out duration-500">
            <h2 className="texts_14_medium text-head">ADD TO CART</h2>
          </div>
          {/* Add To Cart End*/}
        </div>

        {/* Product Description Start */}
        <div className="mt-3.5">
          <div className="flex justify-between items-center">
            <p className="texts_14_regular text-second">{catagory}</p>

            <div onClick={() => setIsLiked(!isLiked)} className="cursor-pointer">
              {isLiked ? (
                <FaHeart className="text-red cursor-pointer" size={14} />
              ) : (
                <FaHeart
                  className="text-second cursor-pointer"
                  size={14}
                />
              )}
            </div>
          </div>
          <p className="texts_16_regular text-head pt-0.5">{itemName}</p>
          <div className="flex gap-2 items-center">
            {discountPrice ? (
              <>
                <p className="texts_16_regular text-second line-through">
                  ${itemPrice}
                </p>
                <p className="texts_16_regular text-red font-bold">
                  ${discountPrice}
                </p>
              </>
            ) : (
              <p className="texts_16_regular text-head">${itemPrice}</p>
            )}
          </div>
        </div>
        {/* Product Description End */}

      </div>
    </>
  );
};

export default Product;
