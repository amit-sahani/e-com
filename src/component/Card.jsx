import React, { useContext } from "react";
import { ProdContext } from "../contexts/ProductContext";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ product }) => {
  const { id, thumbnail, price, title } = product;
  const { cartProducts, setCartProducts } = useContext(ProdContext);
  const navigate = useNavigate()
  const [added, setAdded] = useState(false);
  const removeFromCart = (e) => {
    e.stopPropagation()
    delete cartProducts[id];
    setCartProducts(cartProducts)
    setAdded(false)
  };

  const addToCart = (e) => {
    e.stopPropagation()
    setCartProducts({...cartProducts, [id]: {count:1, details: { id, thumbnail, price, title }}});
    setAdded(true)
  };

  useEffect(()=>{
    if(cartProducts[id]){
        setAdded(true)
    }
  }, [cartProducts, id])

  return (
    <div
      id={id}
      style={{
        height: "120px",
        width: "100px",
        border: "1px solid",
        padding: "8px",
      }}
      onClick={()=>{
        navigate(`product/${id}`) // it is considered as relative path
        //navigate('/product') // it is considered as absolute path
      }}
    >
      <div>
        <img src={thumbnail} alt={title} height={"60px"} width={"96px"} />
      </div>
      <div>
        <strong style={{ fontSize: "12px" }}>{title.toUpperCase()}</strong>
        <div
          style={{
            fontSize: "10px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>Price: {price}</span>
          {added ? (
            <button style={{ fontSize: "10px" }} onClick={removeFromCart}>
              Remove from cart
            </button>
          ) : (
            <button style={{ fontSize: "10px" }} onClick={addToCart}>
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
