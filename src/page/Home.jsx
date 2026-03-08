import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen flex items-center justify-center  bg-gray-300 ">
      <div>
        <h1 className="text-[65px] font-bold text-white">
          Wellcome to Home page
        </h1>

        <button className="py-7">
          <Link
            className="py-2 px-4 border rounded-md text-2xl font-medium"
            to={"/shop"}
          >
            Go to Shop
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
