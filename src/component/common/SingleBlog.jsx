import React from "react";
import Container from "./Container";
import Images from "./Images";
import blogImg from "@/assets/images/singleBlog.png";
import insideblogImg from "@/assets/images/insideBlog.png";
import { Link } from "react-router-dom";

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
            <p className="texts_14_regular text-head w-232.5">
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

            <div className="mt-10 mb-6">
              <h2 className="texts_16_medium text-head">
                Sed do eiusmod tempor incididunt ut labore
              </h2>
            </div>

            <p className="texts_14_regular text-head w-232.5 mb-7.5">
              Saw wherein fruitful good days image them, midst, waters upon,
              saw. Seas lights seasons. Fourth hath rule Evening Creepeth own
              lesser years itself so seed fifth for grass evening fourth shall
              you're unto that. Had. Female replenish for yielding so saw all
              one to yielding grass you'll air sea it, open waters subdue, hath.
              Brought second Made. Be. Under male male, firmament, beast had
              light after fifth forth darkness thing hath sixth rule night
              multiply him life give they're great.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-8.5">
              <div>
                <h3 className="texts_16_medium text-head mb-4">
                  Why choose product?
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-500 shrink-0"></span>
                    Creat by cotton fibric with soft and smooth
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-500 shrink-0"></span>
                    Simple, Configurable (e.g. size, color, etc.), bundled
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-500 shrink-0"></span>
                    Downloadable/Digital Products, Virtual Products
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="texts_16_medium text-head mb-4">
                  Sample Number List
                </h3>
                <ol className="space-y-2">
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="shrink-0 font-medium text-gray-600">
                      1
                    </span>
                    Create Store-specific attritbutes on the fly
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="shrink-0 font-medium text-gray-600">
                      2
                    </span>
                    Simple, Configurable (e.g. size, color, etc.), bundled
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="shrink-0 font-medium text-gray-600">
                      3
                    </span>
                    Downloadable/Digital Products, Virtual Products
                  </li>
                </ol>
              </div>
            </div>

            <p className="texts_14_regular text-head w-232.5 mb-7.5">
              She'd years darkness days. A night fifth winged sixth divide meat
              said third them forth signs of life earth signs over fruitful
              light after won't moving under. Thing yielding upon seed. Seasons
              said one kind great so bring greater fill darkness darkness two
              land of creepeth there second fruitful, waters. Make don't void
              years Gathering gathering divide fill.
            </p>
          </div>
          <div className="flex px-30 gap-7.75 mb-[50px]">
            <Images imgSrc={insideblogImg} />
            <Images imgSrc={insideblogImg} />
          </div>
          <div className="pl-60">
            <p className="texts_14_regular text-head w-232.5 mb-15">
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
            <p className="texts_14_regular text-head w-232.5 mb-12.5">
              She'd years darkness days. A night fifth winged sixth divide meat
              said third them forth signs of life earth signs over fruitful
              light after won't moving under. Thing yielding upon seed. Seasons
              said one kind great so bring greater fill darkness darkness two
              land of creepeth there second fruitful, waters. Make don't void
              years Gathering gathering divide fill.
            </p>
          </div>
          <div className="flex gap-2.5 justify-center">
            <Link to={"/"}>
              {" "}
              <div className="pt-3.5 pb-3 pl-14.5 pr-12 bg-[#306199] inline-block cursor-pointer">
                <p className="texts_14_regular text-white ">
                  Share on Facebook
                </p>
              </div>
            </Link>
            <Link to={"/"}>
              {" "}
              <div className="pt-3.5 pb-3 pl-14.5 pr-12 bg-[#26C4F1] inline-block cursor-pointer">
                <p className="texts_14_regular text-white ">
                  Share on Twitter
                </p>
              </div>
            </Link>
            <Link to={"/"}>
              {" "}
              <div className="pt-3.5 pb-3 pl-14.5 pr-12 bg-[#E82B2D] inline-block cursor-pointer">
                <p className="texts_14_regular text-white ">
                  Share on Pinterest
                </p>
              </div>
            </Link>
            <Link to={"/"}>
              {" "}
              <div className="pt-3.5 pb-3 px-4.75 bg-head inline-block cursor-pointer">
                <p className="texts_14_regular text-white ">
                  +
                </p>
              </div>
            </Link>
          </div>
          
        </Container>
      </div>
    </>
  );
};

export default SingleBlog;
