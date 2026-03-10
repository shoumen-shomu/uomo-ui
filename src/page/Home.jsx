import Product from "@/component/common/Product";
import Banner from "@/component/layouts/home/Banner";
import Collection from "@/component/layouts/home/Collection";
import Products from "@/component/layouts/home/Products";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Banner />
      <Collection />
      <Products />
    </>
  );
};

export default Home;
