import Container from "@/component/common/Container";
import FeaturedProducts from "@/component/common/featuredProducts";
import React from "react";
import product from "@/assets/images/feaureProducts.png";

const Feature = () => {
  return (
    <>
      <section className="mt-25">
        <Container>
          <div className="grid grid-cols-2 gap-7.5">
            <FeaturedProducts
              imgSrc={product}
              imgAlt={product}
              price={"STARTING AT $19"}
              category={"Men’s T-Shirts"}
            />
            <FeaturedProducts
              imgSrc={product}
              imgAlt={product}
              price={"STARTİNG AT $39"}
              category={"Men’s Sportswear"}
            />
          </div>
        </Container>
      </section>
    </>
  );
};

export default Feature;
