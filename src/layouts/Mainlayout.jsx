import React from "react";
import  Navbar  from "../components/Navbar";
import { Outlet } from "react-router";

const Mainlayout = () => {
  return (
    <div>
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Mainlayout;
