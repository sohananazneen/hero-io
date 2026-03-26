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
            className="w-16 h-16 animate-spin"
            alt="Loading"
          />
          <p className="mt-4 text-gray-500">Loading...</p>
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
