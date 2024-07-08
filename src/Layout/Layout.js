// src/components/Layout/Layout.js
import React from "react";
import Footer from "../Components/Footer/Footer";
import NavbarContainer from "../Components/Header/index";
import "../Assets/Styles/style.css";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <NavbarContainer />
      </header>
      {children} {/* This is where the page-specific content will go */}
      <Footer />
    </>
  );
};

export default Layout;
