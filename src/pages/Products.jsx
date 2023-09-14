import React, { useEffect, useState } from "react";
import Card from "../component/Card";
import SearchBox from "../component/SearchBox";
import { useSearchParams } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState(null);
  const [searchParams] = useSearchParams()
 // console.log(searchParams.entries())
//  [[param1, value1], [param2, value2], [[aram3. value3]]]
 for(const params of searchParams.entries()){
  console.log(params)
 }
  const getProducts = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products);
    } catch (error) {
      setProducts([]);
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div style={{marginTop:'60px'}}>
      <div>
        <SearchBox/>
      </div>
      <div
        style={{
          border: "1px solid",
          backgroundColor: "grey",
          minHeight: "90vh",
          display: "flex",
          flexWrap: "wrap",
          margin: "20px",
          justifyContent: "space-around",
          marginTop: "20px",
        }}
      >
        {products !== null ? (
          products.length > 0 ? (
            products.map((product) => (
              <Card key={product.id} product={product} />
            ))
          ) : (
            <div>No Product Found!!!!</div>
          )
        ) : (
          <div>Loading .....</div>
        )}
      </div>
    </div>
  );
};

export default Products;
