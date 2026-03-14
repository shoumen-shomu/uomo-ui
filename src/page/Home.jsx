import SingleBlog from "@/component/common/SingleBlog";
import Banner from "@/component/layouts/home/Banner";
import Collection from "@/component/layouts/home/Collection";
import Countdown from "@/component/layouts/home/Countdown";
import Feature from "@/component/layouts/home/Feature";
import LimitedEdition from "@/component/layouts/home/LimitedEdition";
import Products from "@/component/layouts/home/Products";
import Support from "@/component/layouts/home/Support";
import Uomo from "@/component/layouts/home/Uomo";
import React from "react";

const Home = () => {
  return (
    <>
      <Banner />
      <Collection />
      <Products />
      <Countdown />
      <Feature />
      <LimitedEdition />
      <Uomo />
      <Support />
    </>
  );
};

export default Home;
