import React, { useState } from 'react'
import './Navbar.css'
// import logo from '../Assets/logo.png'
// import cart_icon from '../Assets/cart_icon.png'
import { NavLink } from 'react-router-dom';
function Navbar() {
  // const [menu,setMenu]= useState("shop");
  return (
    <div className="navbar">
      <div className="nav-logo">
        {/* <img src={logo} alt="Logo" /> */}
        <p>MyShop</p>
      </div>
      <ul className="nav-menu">
        <li><NavLink to={"/shop"}>Shop </NavLink></li>
        <li ><NavLink to={"/men"}>Men </NavLink></li>
        <li><NavLink to={"/women"}>Women </NavLink></li>
      </ul>
      <div className="nav-login-cart">
      <NavLink to={"/login"}> <button >Login</button></NavLink>
        {/* <img src={cart_icon} alt="Cart"  /> */}
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar



// <li onClick={()=> setMenu("shop")}><NavLink to={"/shop"}>Shop {menu==="shop"?<hr />:<></>}</NavLink></li>
//         <li onClick={()=> setMenu("men")}><NavLink>Men {menu==="men"?<hr />:<></>}</NavLink></li>
//         <li onClick={()=> setMenu("women")}><NavLink>Women {menu==="women"?<hr />:<></>}</NavLink></li>
//         <li onClick={()=> setMenu("kids")}><NavLink>Kids {menu==="kids"?<hr />:<></>}</NavLink></li>