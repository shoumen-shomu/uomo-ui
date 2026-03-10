import Container from "@/component/common/Container";
import Product from "@/component/common/Product";
import React from "react";
import producttwo from "@/assets/images/productstwo.png";

const LimitedEdition = () => {
  return (
    <>
      <section className="mt-22.75">
        <Container>
          <div className="text-center">
            <h2 className="head_35_regular text-head">
              LIMITED <span className="head_35_bold text-head">EDITION</span>
            </h2>
          </div>
          <div className="mt-8.25 grid grid-cols-4 gap-7.5">
            <Product
              imgSrc={producttwo}
              imgAlt={producttwo}
              catagory={"Dresses"}
              itemName={"Hub Accent Mirror"}
              itemPrice={"29"}
            />
            <Product
              imgSrc={producttwo}
              imgAlt={producttwo}
              catagory={"Dresses"}
              itemName={"Hosking Blue Area Rug"}
              itemPrice={"62"}
            />
            <Product
              imgSrc={producttwo}
              imgAlt={producttwo}
              catagory={"Dresses"}
              itemName={"Hanneman Pouf"}
              itemPrice={"17"}
            />
            <Product
              imgSrc={producttwo}
              imgAlt={producttwo}
              catagory={"Dresses"}
              itemName={"Cushion Futon Slipcover"}
              itemPrice={"129"}
              discountPrice={"99"}
            />
          </div>
        </Container>
      </section>
    </>
  );
};

export default LimitedEdition; /*  */
