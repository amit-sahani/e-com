import React from "react";
import { useContext } from "react";
import { ProdContext } from "../contexts/ProductContext";

const CartItem = ({ product }) => {
  const {count,  details: {id, thumbnail, title, price}} = product;
  const {cartProducts, setCartProducts} = useContext(ProdContext)
  const increment = () =>{
    cartProducts[id] = {...cartProducts[id], count:cartProducts[id].count + 1 }
    setCartProducts({...cartProducts})
  }
  const decrement = () => {
    if(cartProducts[id].count>0){
      cartProducts[id] = {...cartProducts[id], count:cartProducts[id].count - 1 }
      if(cartProducts[id].count===0){
        delete cartProducts[id]
        setCartProducts({...cartProducts})
      }else{setCartProducts({...cartProducts})}
    
    }
    
  }
  return (
    <div
      id={id}
      style={{
        height: "120px",
        border: "1px solid",
        padding: "8px",
        display:'flex',
        justifyContent:'space-evenly'
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
        </div>
      </div>
      <div>
          <button onClick={decrement}>-</button>
          <p>{count}</p>
          <button onClick={increment}>+</button>
          <button onClick={()=>{ 
            delete cartProducts[id]
            setCartProducts({...cartProducts})
          }}>Remove</button>
        </div>
    </div>
  );
};

export default CartItem;
