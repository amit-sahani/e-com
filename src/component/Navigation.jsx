import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  const {isAuthenticated, loginWithRedirect, logout}  = useAuth0()
  const userAuthentication = () => {
    if(!isAuthenticated){
      loginWithRedirect()
    }else{
      logout()
    }
  }
  return (
    <div>
        <nav style={{display:'flex'}}>
            <div style={{marginLeft:'40px'}}><NavLink to={'/'}>Home</NavLink></div>
            <div style={{marginLeft:'40px'}}><NavLink to={'/products'}>Products</NavLink></div>
            <div style={{marginLeft:'40px'}}><NavLink to={'/carts'}>Carts</NavLink></div>
            <button style={{marginLeft:'40px'}} onClick={userAuthentication}>{isAuthenticated?'Logout':'Login'}</button>
        </nav>
    </div>
  )
}

export default Navigation