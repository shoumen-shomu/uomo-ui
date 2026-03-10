import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Rootlayout from "@/rootlayout/Rootlayout";
import Home from "@/page/Home";
import Shop from "@/page/Shop";
import Cart from "./component/shopMain/shopPage/cart/Cart";
import CollectionPg from "./page/CollectionPg";
import Journal from "./page/Journal";
import LookBook from "./page/LookBook";
import NotFound from "./page/NotFound";
import ShopSinglePg from "./page/ShopSinglePg";
import OrderTracking from "./component/shopMain/shopPage/orderTracking/OrderTracking";
import ShopCheckout from "./component/shopMain/shopPage/shopCheckout/ShopCheckout";
import ShopInfo from "./component/shopMain/shopPage/shopInfo/ShopInfo";
import DashboardLayout from "./component/mainDashboard/rootDashboard/DashboardLayout";
import DashboardAccount from "./component/mainDashboard/dashborarAllComponent/DashboardAccount";
import DashboardOrder from "./component/mainDashboard/dashborarAllComponent/DashboardOrder";
import DashboardAddress from "./component/mainDashboard/dashborarAllComponent/DashboardAddress";
import DashboardAccDetails from "./component/mainDashboard/dashborarAllComponent/DashboardAccDetails";
import DashboardWishlist from "./component/mainDashboard/dashborarAllComponent/DashboardWishlist";
import LogOut from "./component/mainDashboard/dashborarAllComponent/LogOut";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />,
    children: [
      // for home route
      { index: true, element: <Home /> },

      // for collection route
      { path: "collection", element: <CollectionPg /> },

      // for journal route
      { path: "journal", element: <Journal /> },

      //for lookbook route
      { path: "lookbook", element: <LookBook /> },

      // for shop page route
      { path: "shop", element: <Shop /> },
      { path: "cart", element: <Cart /> },
      { path: "shop-single", element: <ShopSinglePg /> },
      { path: "order-tracking", element: <OrderTracking /> },
      { path: "shop-checkout", element: <ShopCheckout /> },
      { path: "shop-info", element: <ShopInfo /> },

      //  for dashboard route
      {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
          { index: true, element: <DashboardAccount /> },
          { path: "/dashboard/order", element: <DashboardOrder /> },
          { path: "/dashboard/address", element: <DashboardAddress /> },
          {
            path: "/dashboard/account-details",
            element: <DashboardAccDetails />,
          },
          { path: "/dashboard/wishlist", element: <DashboardWishlist /> },
          { path: "/dashboard/logout", element: <LogOut /> },
        ],
      },
      // 404 not found
      { path: "*", element: <NotFound /> },
    ],
  },
]);

// Create a client
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />;
    </QueryClientProvider>
  );
};

export default App;
