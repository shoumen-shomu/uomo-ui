import Images from "@/component/common/Images";
import React from "react";
import womencollection from "@/assets/images/womencollection.png";
import mencollection from "@/assets/images/mencollection.png";
import kidcollection from "@/assets/images/kidscollection.png";
import giftcard from "@/assets/images/giftcard.png";
import Button from "@/component/common/Button";

const Collection = () => {
  return (
    <>
      <section className="mt-25">
        <div className="container">
          <div className="grid grid-cols-2 gap-7.5">
            <div className="relative group overflow-hidden">
              <Images className={""} imgSrc={womencollection} />
              <div className=" absolute bottom-10 left-10  ">
                <p className="texts_14_regular text-head">HOT LIST</p>
                <h3 className="head_26_medium text-head pb-1.25">
                  <span className="head_26_bold text-head">WOMEN</span>{" "}
                  COLLECTION
                </h3>
                <Button className={"hover:after:w-12.5"} btnText={"SHOP NOW"} />
              </div>
            </div>
            <div className="flex-wrap">
              <div className="relative group overflow-hidden">
                <Images className={" "} imgSrc={mencollection} />
                <div className="absolute bottom-10 left-10 ">
                  <p className="texts_14_regular text-head">HOT LIST</p>
                  <h3 className="head_26_medium text-head pb-1.25">
                    <span className="head_26_bold text-head">MEN</span>{" "}
                    COLLECTION
                  </h3>
                  <Button
                    className={"hover:after:w-12.5"}
                    btnText={"SHOP NOW"}
                  />
                </div>
              </div>
              <div className="flex mt-7.5 gap-7.5">
                <div className="relative group overflow-hidden">
                  <Images className={""} imgSrc={kidcollection} />
                  <div className="absolute bottom-10 left-10 ">
                    <p className="texts_14_regular text-head">HOT LIST</p>
                    <h3 className="head_26_medium text-head pb-1.25">
                      <span className="head_26_bold text-head">KIDS</span>{" "}
                      COLLECTION
                    </h3>
                    <Button
                      className={"hover:after:w-12.5"}
                      btnText={"SHOP NOW"}
                    />
                  </div>
                </div>
                <div className="relative group overflow-hidden">
                  <Images className={""} imgSrc={giftcard} />
                  <div className="absolute bottom-10 left-10 ">
                    <h3 className="head_26_medium text-head pb-1.25">
                      <span className="head_26_bold text-head">E-GIFT</span>{" "}
                      CARDS
                    </h3>
                    <p className="texts_14_regular text-head w-53.25 pt-2 pb-4">
                      Surprise someone with the gift they really want.
                    </p>
                    <Button
                      className={"hover:after:w-12.5"}
                      btnText={"DISCOVER MORE"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Collection;
