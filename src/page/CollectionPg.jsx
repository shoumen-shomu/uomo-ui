import Container from "@/component/common/Container";
import Product from "@/component/common/Product";
import React from "react";
import product from "@/assets/images/product.png";



const CollectionPage = () => {
  return (
    <Container>
      <div className=" my-30 ">
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <h1 className="head_35_bold w-[200px]">Collection</h1>

          {/* Sort */}
          <select className="border w-[150px] p-2 mt-4 md:mt-0">
            <option>Default Sorting</option>
            <option>Price Low to High</option>
            <option>Price High to Low</option>
          </select>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <Product
            catagory={"Dresses"}
            imgSrc={product}
            itemName={"Cropped  Faux Leather Jacket"}
            itemPrice={"29"}
          />
          <Product
            catagory={"Dresses"}
            imgSrc={product}
            itemName={"Calvin Shorts"}
            itemPrice={"62"}
          />
          <Product
            catagory={"Dresses"}
            imgSrc={product}
            itemName={"Kirby T-Shirt"}
            itemPrice={"17"}
          />
          <Product
            catagory={"Dresses"}
            imgSrc={product}
            itemName={"Kirby T-Shirt"}
            itemPrice={"17"}
          />
          <Product
            catagory={"Dresses"}
            imgSrc={product}
            itemName={"Kirby T-Shirt"}
            itemPrice={"17"}
          />
        </div>
      </div>
    </Container>
  );
};

export default CollectionPage;
