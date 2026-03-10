import Banner from "@/component/layouts/home/Banner";
import Collection from "@/component/layouts/home/Collection";
import Countdown from "@/component/layouts/home/Countdown";
import Feature from "@/component/layouts/home/Feature";
import LimitedEdition from "@/component/layouts/home/LimitedEdition";
import Products from "@/component/layouts/home/Products";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Banner />
      <Collection />
      <Products />
      <Countdown/>
      <Feature/>
      <LimitedEdition/>
    </>
  );
};

export default Home;
