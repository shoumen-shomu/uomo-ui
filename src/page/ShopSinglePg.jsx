import Add_review from "@/component/shopMain/shopSingle/Add_review";
import Shopsingle from "@/component/shopMain/shopSingle/Shopsingle";
import Tabs_desc from "@/component/shopMain/shopSingle/Tabs_desc";
import Trend_product from "@/component/shopMain/shopSingle/Trend_product";

import React from "react";

const ShopSinglePg = () => {
  return (
    <>
      <Shopsingle />
      <Tabs_desc />
      <Add_review />
      <Trend_product/>
    </>
  );
};

export default ShopSinglePg;
