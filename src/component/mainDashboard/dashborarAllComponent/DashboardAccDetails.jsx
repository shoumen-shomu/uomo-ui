import Container from "@/component/common/Container";
import React from "react";

const DashboardAccDetails = () => {
  return (
    <>
      <Container>
        <div className="w-full mt-25">
          {/* First Name + Last Name */}
          <div className="flex flex-col sm:flex-row gap-[27px] mb-3">
            <div className="flex-1 border border-[#c8dde9]">
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-3 py-2 sm:py-3 text-sm text-gray-800 outline-none bg-transparent placeholder-gray-400"
              />
            </div>
            <div className="flex-1 border border-[#c8dde9]">
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-3 py-2 sm:py-3 text-sm text-gray-800 outline-none bg-transparent placeholder-gray-400"
              />
            </div>
          </div>

          {/* Display Name */}
          <div className="border border-[#c8dde9] mb-3">
            <input
              type="text"
              placeholder="Display Name"
              className="w-full px-3 py-2 sm:py-3 text-sm text-gray-800 outline-none bg-transparent placeholder-gray-400"
            />
          </div>

          {/* Email Address */}
          <div className="border border-[#c8dde9] mb-4 focus-within:border focus-within:border-gray-900 transition-all">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-3 py-2 sm:py-3 text-sm text-gray-800 outline-none bg-transparent placeholder-gray-400"
            />
          </div>

          {/* Password Change */}
          <div className="pt-4">
            <p className="text-[11px] font-bold tracking-widest uppercase text-gray-900 mb-3">
              Password Change
            </p>

            <div className="border border-[#c8dde9] mb-3 focus-within:border-gray-400 transition-all">
              <input
                type="password"
                placeholder="Current password (leave blank to leave unchanged)"
                className="w-full px-3 py-2 sm:py-3 text-xs sm:text-sm text-gray-800 outline-none bg-transparent placeholder-gray-400"
              />
            </div>

            <div className="border border-[#c8dde9] mb-3 focus-within:border-gray-400 transition-all">
              <input
                type="password"
                placeholder="New password (leave blank to leave unchanged)"
                className="w-full px-3 py-2 sm:py-3 text-xs sm:text-sm text-gray-800 outline-none bg-transparent placeholder-gray-400"
              />
            </div>

            <div className="border border-[#c8dde9] mb-5 focus-within:border-gray-400 transition-all">
              <input
                type="password"
                placeholder="Confirm new password"
                className="w-full px-3 py-2 sm:py-3 text-xs sm:text-sm text-gray-800 outline-none bg-transparent placeholder-gray-400"
              />
            </div>
          </div>

          {/* Save Button */}
          <div className="pt-4 pb-5">
            <button className="w-full sm:w-auto bg-black text-white text-[10px] sm:text-[11px] font-bold tracking-widest uppercase px-6 sm:px-10 py-3 sm:py-4 hover:bg-gray-800 transition-colors">
              Save Changes
            </button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default DashboardAccDetails;
