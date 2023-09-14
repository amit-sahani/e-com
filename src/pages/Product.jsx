import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const getProducts = async () => {
    try {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();
      console.log(data);
      setProduct(data);
    } catch (error) {
      setProduct({});
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div style={{ marginTop: "55px" }}>
        {Object.keys(product).length > 0 &&
          Object.keys(product).map((key) => (
            <div>
              <strong>{key}: </strong>
              <span>{product[key]}</span>
            </div>
          ))}
      </div>
  );
};

export default Product;
