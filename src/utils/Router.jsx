import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Products from "../pages/Products";
import Carts from "../pages/Carts";
import Product from "../pages/Product";
import Layout from "../component/Layout";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<HomePage/>}/>
        <Route path="products" element={<Products />}/>
        {/* :id i the path parameter */}
        <Route path="products/product/:id" element={<Product/>}/>
         <Route path="carts" element={<Carts />} />
      </Route>
    </Routes>
  );
};

export default Router;
