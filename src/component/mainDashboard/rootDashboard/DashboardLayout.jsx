import Container from "@/component/common/Container";
import React from "react";
import { Outlet } from "react-router-dom";
import DashborardItems from "../dashborarAllComponent/DashborardItems";

const DashboardLayout = () => {
  return (
    <section>
      <Container>
        <div className="grid grid-cols-4">
          <aside>
            <DashborardItems />
          </aside>
          {/* <main className="col-span-3">
            <Outlet />
          </main> */}
        </div>
      </Container>
    </section>
  );
};

export default DashboardLayout;
