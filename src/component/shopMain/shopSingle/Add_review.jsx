import Container from "@/component/common/Container";
import React from "react";

const Add_review = () => {
  return (
    <div className="px-60 mt-[54px] hidden lg:block">
      <Container>
        <div className="">
          <h3 className="texts_18_medium text-head">
            Be the first to review “Message Cotton T-Shirt”
          </h3>
          <h4 className="texts_14_regular text-head pb-7.5">
            Your email address will not be published. Required fields are marked
            *
          </h4>

          <div className="flex items-center gap-2 mb-[26px]">
            <span className="texts_14_regular text-head">Your rating *</span>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
          </div>

          <form className="space-y-7.5">
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
                htmlFor="save-info"
                className="texts_14_regular text-[#767676]"
              >
                Save my name, email, and website in this browser for the next
                time I comment.
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-head text-white px-[74px] py-[22px] texts_14_medium"
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
