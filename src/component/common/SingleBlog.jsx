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
            <p className="w-289.5 texts_14_regular text-head pb-15">
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
            <p className="texts_14_regular text-head w-289.5">
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
                <p className="texts_14_regular text-white ">Share on Twitter</p>
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
                <p className="texts_14_regular text-white ">+</p>
              </div>
            </Link>
          </div>
          <div class="max-w-2xl mx-auto px-4 pt-12.5">
            <div class="flex justify-between items-start border-t border-b border-gray-200 pt-11.25 pb-10.5 mb-8">
              <div class="text-left">
                <p class="text-xs text-gray-500 flex items-center gap-1">
                  &#8249; PREVIOUS POST
                </p>
                <p class="text-sm text-gray-800 mt-1">
                  Given Set was without from god divide rule Hath
                </p>
              </div>
              <div class="text-right">
                <p class="text-xs text-gray-500 flex items-center justify-end gap-1">
                  NEXT POST &#8250;
                </p>
                <p class="text-sm text-gray-800 mt-1">
                  Tree earth fowl given moveth deep lesser After
                </p>
              </div>
            </div>

            <h2 class="text-base font-semibold text-gray-900 mb-5">Reviews</h2>

            <div class="flex gap-4 mb-6 pb-6 border-b border-gray-100">
              <div class="w-10 h-10 rounded-full bg-gray-200 shrink-0"></div>
              <div class="flex-1">
                <div class="flex justify-between items-start">
                  <div>
                    <p class="text-sm font-semibold text-gray-900">
                      Janice Miller
                    </p>
                    <p class="text-xs text-gray-400">April 06, 2020</p>
                  </div>
                  <div class="flex text-yellow-400 text-sm">
                    ★★★★<span class="text-gray-300">★</span>
                  </div>
                </div>
                <p class="text-xs text-gray-600 mt-2 leading-relaxed">
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque
                  nihil impedit quo minus id quod maxime placeat facere
                  possimus, omnis voluptas assumenda est...
                </p>
              </div>
            </div>

            <div class="flex gap-4 mb-8 pb-6 border-b border-gray-100">
              <div class="w-10 h-10 rounded-full bg-gray-200 shrink-0"></div>
              <div class="flex-1">
                <div class="flex justify-between items-start">
                  <div>
                    <p class="text-sm font-semibold text-gray-900">
                      Benjam Porter
                    </p>
                    <p class="text-xs text-gray-400">April 06, 2020</p>
                  </div>
                  <div class="flex text-yellow-400 text-sm">★★★★★</div>
                </div>
                <p class="text-xs text-gray-600 mt-2 leading-relaxed">
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque
                  nihil impedit quo minus id quod maxime placeat facere
                  possimus, omnis voluptas assumenda est...
                </p>
              </div>
            </div>

            <div>
              <h3 class="text-sm font-semibold text-gray-900 mb-1">
                Be the first to review "Message Cotton T-Shirt"
              </h3>
              <p class="text-xs text-gray-500 mb-4">
                Your email address will not be published. Required fields are
                marked *
              </p>

              <div class="flex items-center gap-2 mb-4">
                <label class="text-xs text-gray-700">Your rating *</label>
                <div class="flex text-yellow-400 text-sm">★★★★★</div>
              </div>

              <div class="mb-4">
                <textarea
                  placeholder="Your Review"
                  rows="6"
                  class="w-full border border-gray-300 text-sm text-gray-700 px-3 py-2 resize-none focus:outline-none focus:ring-1 focus:ring-gray-400 placeholder-gray-400"
                ></textarea>
              </div>

              <div class="mb-4 relative border border-gray-800 px-3 pt-3 pb-2">
                <label class="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-600">
                  Name *
                </label>
                <input
                  type="text"
                  value="Ali"
                  class="w-full text-sm text-gray-800 focus:outline-none"
                />
              </div>

              <div class="mb-4">
                <input
                  type="email"
                  placeholder="Email address *"
                  class="w-full border border-gray-300 text-sm text-gray-600 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-400 placeholder-gray-400"
                />
              </div>

              <div class="flex items-center gap-2 mb-6">
                <input
                  type="checkbox"
                  id="save"
                  class="w-3.5 h-3.5 border-gray-300"
                />
                <label for="save" class="text-xs text-gray-500">
                  Save my name, email, and website in this browser for the next
                  time I comment.
                </label>
              </div>

              <button class="bg-gray-900 text-white text-xs font-semibold tracking-widest uppercase px-6 py-3 hover:bg-gray-700 transition-colors">
                SUBMIT
              </button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default SingleBlog;
