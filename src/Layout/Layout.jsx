import React from "react";
import Header from "../Components/Shared/Header/Header";
import Footer from "../Components/Shared/Footer/Footer";
import { Outlet, useNavigation } from "react-router";

const Layout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div>
      <Header />
      {isLoading && (
        <div className="flex flex-col items-center justify-center">
          <img
            src="/logo.png"
            alt="Loading..."
            className="w-20 h-20 animate-spin-slow"
            style={{ animation: "spin 2s linear infinite" }}
          />
        </div>
      )}

      <main className={isLoading ? "blur-sm pointer-events-none" : ""}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
