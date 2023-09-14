import React, { createContext, useState } from 'react'

export const ProdContext = createContext([]);
const ProductContext = ({children}) => {
    const [cartProducts, setCartProducts] = useState({})
  return (
    <ProdContext.Provider value={{cartProducts, setCartProducts}}>
        {children}
    </ProdContext.Provider>
  )
}

export default ProductContext