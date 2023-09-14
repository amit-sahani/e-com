import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header style={{position:"fixed", top:"0", width:'100vw', borderBottom:'1px solid', padding:'16px'}}>
        <Navigation />
      </header>
      <Outlet/>
      <footer style={{position:"fixed", bottom:"0", width:'100vw', borderTop:'1px solid', padding:'16px'}}>
        <Footer />
      </footer>

    </div>
  );
};

export default Layout;
