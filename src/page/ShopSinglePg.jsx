import Add_review from "@/component/shopMain/shopSingle/Add_review";
import Shopsingle from "@/component/shopMain/shopSingle/Shopsingle";
import Tabs_desc from "@/component/shopMain/shopSingle/tabs_desc";
import React from "react";

const ShopSinglePg = () => {
  return (
    <>
      <Shopsingle />
      <Tabs_desc/>
      <Add_review/>
    </>
  );
};

export default ShopSinglePg;
