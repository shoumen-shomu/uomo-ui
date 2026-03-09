import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Rootlayout from "@/rootlayout/Rootlayout";
import Home from "@/page/Home";
import Shop from "@/page/Shop";
import Shopsingle from "./page/Shopsingle";
import Cart from "./component/cart/Cart";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/shop", element: <Shop /> },
      { path: "/shop-single", element: <Shopsingle /> },
      { path: "/cart", element: <Cart/> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
