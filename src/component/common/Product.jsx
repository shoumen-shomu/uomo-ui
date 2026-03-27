import React, { useState } from "react";
import Images from "./Images";
import { FaHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";

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
      <div className="lg:max-w-82.5 w-full relative group ">
        <div className="relative overflow-hidden ">
          <Images
            className={"w-[250px] object-cover"}
            imgSrc={imgSrc}
            imgAlt={imgAlt}
          />
          {/* Badge Start */}

          {/* Add To Cart Start */}

          <Link
            to={"/shop-single"}
            className="texts_14_medium text-head bg-white  w-full pt-4 pb-2.5 text-center absolute  bottom-4 left-1/2 -translate-x-1/2 translate-y-[50%] opacity-0 group-hover:opacity-100 group-hover:translate-y-0 ease-in-out duration-500 whitespace-nowrap cursor-pointer"
          >
            ADD TO CART
          </Link>

          {/* Add To Cart End*/}
        </div>

        {/* Product Description Start */}
        <div className="mt-3.5">
          <div className="flex justify-between items-center">
            <p className="texts_14_regular text-second">{catagory}</p>

            <div
              onClick={() => setIsLiked(!isLiked)}
              className="cursor-pointer"
            >
              {isLiked ? (
                <FaHeart className="text-red cursor-pointer" size={14} />
              ) : (
                <FaHeart className="text-second cursor-pointer" size={14} />
              )}
            </div>
          </div>
          <p className="texts_16_regular text-head pt-0.5 line-clamp-2">
            {itemName}
          </p>
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
