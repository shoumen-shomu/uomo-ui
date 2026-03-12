import Container from "@/component/common/Container";
import React from "react";

const Add_review = () => {
  return (
    <div className=" mt-7 lg:mt-[54px]">
      <Container>
        <div className="">
          <h3 className="texts_18_medium text-head">
            Be the first to review “Message Cotton T-Shirt”
          </h3>
          <h4 className="texts_14_regular text-head py-3 lg:pb-7.5">
            Your email address will not be published. Required fields are marked
            *
          </h4>

          <div className="flex flex-col lg:flex-row lg:items-center gap-x-2 lg:mb-[26px]">
            <span className="texts_14_regular text-head">Your rating *</span>
            <div className="flex  text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
          </div>

          <form className="space-y-3 lg:space-y-7.5">
            {/* Review Textarea */}
            <div>
              <textarea
                placeholder="Your Review"
                className="w-full border border-footer p-[17px] h-[213px] outline-none focus:border-head texts_14_regular text-[#767676"
              />
            </div>

            {/* Floating Label Name Input */}
            <div className="relative">
              <label className="absolute -top-3 left-3 bg-white px-1 texts_14_regular text-head">
                Name *
              </label>
              <input
                type="text"
                defaultValue="Ali"
                className="w-full border border-head p-[17px] outline-none"
              />
            </div>

            {/* Email Input */}
            <div>
              <input
                type="email"
                placeholder="Email address *"
                className="w-full border border-footer texts_14_regular text-[#767676] p-[17px] outline-none focus:border-head"
              />
            </div>

            {/* Checkbox */}
            <div className="flex items-start gap-3">
              <input type="checkbox" id="save-info" className="mt-1 w-4 h-4" />
              <label
                className="texts_14_regular text-[#767676]"
              >
                Save my name, email, and website in this browser for the next
                time I comment.
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-head text-white px-10 lg:px-0 texts_14_medium h-12 lg:w-[280px] lg:h-[60px] cursor-pointer"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Add_review;
