import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Rootlayout from "@/rootlayout/Rootlayout";
import Home from "@/page/Home";
import Shop from "@/page/Shop";
import Shopsingle from "./page/Shopsingle";
import Cart from "./component/cart/Cart";
import CollectionPg from "./page/CollectionPg";
import Journal from "./page/Journal";
import LookBook from "./page/LookBook";
import NotFound from "./page/NotFound";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "shop-single", element: <Shopsingle /> },
      { path: "cart", element: <Cart /> },
      { path: "collection", element: <CollectionPg /> },
      { path: "journal", element: <Journal /> },
      { path: "lookbook", element: <LookBook /> },
      { path: "*", element: <NotFound /> }
    
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;