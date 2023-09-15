import React from 'react'
import { useContext } from 'react'
import { ProdContext } from '../contexts/ProductContext'
import { useState } from 'react'
import { useEffect } from 'react'

const Total = () => {
    const {cartProducts} = useContext(ProdContext)
    const [total, setTotal] = useState({count: 0, totalPrice: 0})

    const calculateTotal = () => {
        total.count = 0
        total.totalPrice = 0
        Object.keys(cartProducts).forEach((key)=>{
            console.log(cartProducts[key].count + total.count)
            total.count = cartProducts[key].count + total.count

            total.totalPrice = cartProducts[key].count * cartProducts[key].details.price +  total.totalPrice
        });
        setTotal({...total})
    }

    useEffect(()=>{
        calculateTotal()
    }, [cartProducts, calculateTotal])
    
  return (
    <div style={{display:'flex', justifyContent: 'space-between'}}>
        <div>Total</div>
        <div>Quantity: {total.count}</div>
        <div>Price: {total.totalPrice }</div>
        <div><button>Checkout</button></div>
    </div>
  )
}

export default Total