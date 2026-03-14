import React from "react";
import Container from "./Container";
import Images from "./Images";
import blogImg from "@/assets/images/singleBlog.png";

const SingleBlog = () => {
  return (
    <>
      <div className="">
        <Container>
          <div className="pl-60">
            <h2 className="head_35_bold text-head">
              5 Tips to Increase Your Online Sales
            </h2>
            <div className="flex gap-5 mb-10.75">
              <p className="texts_14_regular text-second">BY ADMIN</p>
              <p className="texts_14_regular text-second">APRIL 05, 2020</p>
              <p className="texts_14_regular text-second">TRENDS</p>
            </div>
          </div>
          <Images className={"mb-12.5"} imgSrc={blogImg} />
          <div className="pl-60">
            <p className="w-[1158px] texts_14_regular text-head pb-15">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              sapien dignissim a elementum. Sociis metus, hendrerit mauris id
              in. Quis sit sit ultrices tincidunt euismod luctus diam. Turpis
              sodales orci etiam phasellus lacus id leo. Amet turpis nunc, nulla
              massa est viverra interdum. Praesent auctor nulla morbi non
              posuere mattis. Arcu eu id maecenas cras. Eget fames tincidunt
              leo, sed vitae, pretium interdum. Non massa, imperdiet nunc sit
              sapien. Tempor lectus ornare quis mi vel. Nibh euismod donec elit
              posuere lobortis consequat faucibus aliquam metus. Ornare
              consequat, vulputate sit maecenas mauris urna sed fringilla. Urna
              fermentum iaculis pharetra, maecenas dui nullam nullam rhoncus.
              Facilisis quis vulputate sem gravida lacus, justo placerat.
            </p>
            <h5 className="texts_16_medium text-head">
              Sed do eiusmod tempor incididunt ut labore
            </h5>
            <p className="texts_14_regular text-head w-[1158px]">
              Saw wherein fruitful good days image them, midst, waters upon,
              saw. Seas lights seasons. Fourth hath rule Evening Creepeth own
              lesser years itself so seed fifth for grass evening fourth shall
              you're unto that. Had. Female replenish for yielding so saw all
              one to yielding grass you'll air sea it, open waters subdue, hath.
              Brought second Made. Be. Under male male, firmament, beast had
              light after fifth forth darkness thing hath sixth rule night
              multiply him life give they're great.
            </p>
          </div>
        </Container>
      </div>
    </>
  );
};

export default SingleBlog;
