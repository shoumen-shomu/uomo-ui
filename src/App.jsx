import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Rootlayout from "@/rootlayout/Rootlayout";
import Home from "@/page/Home";
import Shop from "@/page/Shop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/shop", element: <Shop /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
