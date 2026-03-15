import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useState } from "react";

const ShopFilter = () => {
    const [open, setOpen] = useState(null);

  const toggle = (section) => {
    setOpen(open === section ? null : section);
  };
  return (
    <>
    <section>
        <div className="w-105 bg-white h-full shadow-lg overflow-y-auto ">
            <div className="flex justify-between items-center mb-8 bg-footer pt-8.25 pb-6.5 pl-10 pr-10">
                <h3 className='texts_16_medium text-head uppercase'>Filter By</h3>
                <button class="text-head texts_16_medium ">✕</button>
            </div>
            {/* Categories */}
      <div className="pl-10 pt-9.5 pr-10 pb-4 mb-4">
        <button
          onClick={() => toggle("categories")}
          className="flex justify-between w-full texts_18_medium text-head uppercase"
        >
          Product Categories
          <span>{open === "categories" ? <IoIosArrowUp /> : <IoIosArrowDown />
}</span>
        </button>

        {open === "categories" && (
          <div className="grid grid-cols-2 gap-2 mt-3.25 texts_14_regular text-head">
            <span>Dresses</span>
            <span>Shorts</span>
            <span>Sweatshirts</span>
            <span>Swimwear</span>
            <span>Jackets</span>
            <span>T-Shirts & Tops</span>
            <span>Jeans</span>
            <span>Trousers</span>
            <span>Men</span>
            <span>Jumpers & Cardigans</span>
          </div>
        )}
      </div>
        </div>
    </section>
    </>
  )
}

export default ShopFilter