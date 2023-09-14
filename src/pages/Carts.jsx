import React, { useContext } from 'react'
import { ProdContext } from '../contexts/ProductContext'
import CartItem from '../component/CartItem'
import Total from '../component/Total'
import { useAuth0 } from '@auth0/auth0-react'

const Carts = () => {
    const {cartProducts} = useContext(ProdContext)
    const noOfItems = Object.keys(cartProducts)
    const res = useAuth0()
    console.log(res)
    //{2: {…}, 3: {…}, 5: {…}}
    //[2, 3, 5]
  return (
    <div style={{marginTop:'60px'}}>
        {noOfItems !==0 ?  (
          Object.keys(cartProducts).map((id)=><CartItem key={id} product={cartProducts[id]}/>)
        ) : (
          <div>No Product Found!!!!</div>
        )}
        <Total/>
    </div>
  )
}

export default Carts