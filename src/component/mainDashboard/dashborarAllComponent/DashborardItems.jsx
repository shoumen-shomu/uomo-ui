import Container from "@/component/common/Container";
import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const menuItems = [
  { label: "DASHBOARD", path: "/dashboard" },
  { label: "ORDERS", path: "order" },
  { label: "DOWNLOADS", path: "downloads" },
  { label: "ADDRESSES", path: "address" },
  { label: "ACCOUNT DETAILS", path: "account-details" },
  { label: "WISHLIST",        path: "wishlist" },
  { label: "LOGOUT",          path: "/logout" },
]; 

const DashboardItems = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState("My Account");

  return (
    <section className="">
      <Container>
        <div className="flex ">
          {/* Sidebar */}
          <div className="w-326 shrink-0">
            <h2 className="font-bold text-[35px]  text-[rgb(34,34,34)] mb-9">
              {activeItem}
            </h2>
            <ul className="flex flex-col gap-3.5">
              {menuItems.map((item) => {
                const isActive = location.pathname  === item.path;
                
                return (
                  <li key={item.path}>
                    <Link
                    onClick={() => setActiveItem( item.label === "DASHBOARD" ? " My Account " : item.label)}
                      to={item.path}
                      style={{
                        fontWeight: "500",
                        fontSize: "14px",
                        lineHeight: "50px",
                        color: isActive ? "#C32929" : "#222",
                      }}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DashboardItems;
