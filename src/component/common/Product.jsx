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
      <div className="w-82.5">
        <Images className={""} imgSrc={imgSrc} imgAlt={imgAlt} />
        <div className="mt-3.5">
          <div className="flex justify-between items-center">
            <p className="texts_14_regular text-[#767676]">{catagory}</p>

            <div onClick={()=>setIsLiked(!isLiked)} className="cursor-pointer">
              {isLiked ? (
                <FaHeart  className="text-red cursor-pointer" size={14} />
              ) : (
                <FaHeart 
                  className="text-[#767676] cursor-pointer"
                  size={14}
                />
              )}
            </div>
          </div>
          <p className="texts_16_regular text-head pt-0.5">{itemName}</p>
          <div className="flex gap-2 items-center">
            {discountPrice ? (
              <>
                <p className="texts_16_regular text-[#767676] line-through">
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
      </div>
    </>
  );
};

export default Product;
