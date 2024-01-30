import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar, Footer } from "./index";

export const Nav = () => {
  return (
    <>
      <NavBar />
      <div id="main_box">
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
};
