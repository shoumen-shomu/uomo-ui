import Banner from "@/component/layouts/home/Banner";
import Collection from "@/component/layouts/home/Collection";
import Countdown from "@/component/layouts/home/Countdown";
import Feature from "@/component/layouts/home/Feature";
import LimitedEdition from "@/component/layouts/home/LimitedEdition";
import Products from "@/component/layouts/home/Products";
import Support from "@/component/layouts/home/Support";
import Uomo from "@/component/layouts/home/Uomo";
import React from "react";
<<<<<<< HEAD
import { Link } from "react-router-dom";
import BlogList from "../component/blogPost/BlogList";
import Blog from "@/component/common/Blog";
import SingleBlog from "@/component/common/SingleBlog";
=======

>>>>>>> 2ddc98f8a58552ba0be31d6749837760e81e010a

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
      <SingleBlog/>
    </>
  );
};

export default Home;
