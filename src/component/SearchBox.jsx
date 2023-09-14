import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';

const SearchBox = () => {
    const [productName, setProductName] = useState('')
    //const navigate = useNavigate();
    const [, setSearchParams] = useSearchParams()
  return (
    <div>
        <input value={productName} onChange={(e)=>{setProductName(e.target.value)}}/>
        {/* <button onClick={()=>{navigate('/products?name=iphone&brand=iphone')}}>Search</button> */}
        <button onClick={()=>{setSearchParams({name:productName})}}>Search</button>
    </div>
  )
}

export default SearchBox