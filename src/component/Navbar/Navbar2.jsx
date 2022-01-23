import React from 'react';
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Navbar2.scss";
import { AiOutlineMenu, AiOutlineLogin, AiOutlineUserAdd, AiOutlineShoppingCart } from "react-icons/ai"
import { useState } from 'react';



const Navbar2 = () => {
  const state = useSelector((state) => state.handleCart)
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    if (window.innerWidth < 1200) {
      setShowMenu(!showMenu);
    } else {
      setShowMenu(false);
    }

  }




  return (
    <div className="navigationContainer">
      <div className="menuIcon" onClick={handleShowMenu}>
        <AiOutlineMenu />
      </div>

      <div className={`navigation ${" "} ${showMenu ? ' mobileNavigation' : ' hideMobileNavigation'}`}>
        <div>
          <NavLink className="logo" to="/" onClick={handleShowMenu}>
            LA COLLECTION
          </NavLink>
        </div>

        <div className="links" >
          <ul className="linksUl">
            <li className="">
              <NavLink className="" to="/" onClick={handleShowMenu}>
                Home
              </NavLink>
            </li>
            <li className="">
              <NavLink className="" to="/products" onClick={handleShowMenu}>
                Products
              </NavLink>
            </li>
            <li className="">
              <NavLink className="" to="/" onClick={handleShowMenu}>
                About
              </NavLink>
            </li>
            <li className="">
              <NavLink className="" to="/" onClick={handleShowMenu}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="buttons-container">

          <NavLink to="/" className="button" onClick={handleShowMenu}>
            <AiOutlineLogin /> Login</NavLink>

          <NavLink to="/" className="button" onClick={handleShowMenu}>
            <AiOutlineUserAdd /> Register</NavLink>

          <NavLink to="/cart" className="button" onClick={handleShowMenu}>
            <AiOutlineShoppingCart /> Cart ({state.length})</NavLink>



        </div>




      </div>
    </div>

  )
};

export default Navbar2;
