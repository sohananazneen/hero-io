import React from "react";
import Header from "../Components/Shared/Header/Header";
import Footer from "../Components/Shared/Footer/Footer";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
