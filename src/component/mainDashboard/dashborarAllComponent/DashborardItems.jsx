



import { Link, Outlet, useLocation } from 'react-router-dom';


const menuItems = [
  { label: "DASHBOARD",       path: "/dashboard" },
  { label: "ORDERS",          path: "order" },
  { label: "DOWNLOADS",       path: "downloads" },
  { label: "ADDRESSES",       path: "address" },
  { label: "ACCOUNT DETAILS", path: "account-details" },
  { label: "WISHLIST",        path: "wishlist" },
  { label: "LOGOUT",          path: "logout" },
];


const DashboardItems = () => {
  const location = useLocation();


  return (
    <div className="container">
      <div className="flex gap-12 pt-22.5 pb-25">


        {/* Sidebar */}
        <div className="w-60 shrink-0">
          <h2 className="font-bold text-[35px] text-[rgb(34,34,34)] mb-9">
            MY ACCOUNT
          </h2>
          <ul className="flex flex-col gap-3.5">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <Link
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


        {/* Active page render here */}
        <div className="flex-1 pt-2">
          <Outlet />
        </div>


      </div>
    </div>
  );
};


export default DashboardItems;


