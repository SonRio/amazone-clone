import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import "./css/header.css";
import logo from "./images/logo.png";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {

  const [{ basket, user}] = useStateValue();

  const login = () => {
    if(user) {
      auth.signOut();
    }
  }

  return (
    <div className="header">
      {/* logo amôzn */}
      <Link to="/">
        <img className="header__logo" src={logo} alt="logo" />
      </Link>
      {/* search box */}
      <div className="header__search">
        <input className="header__searchInput" placeholder="Search..." />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        {/* link 1  */}
        
        {/* link 2  */}
        <Link to ={!user && "/login"} className="header__link">
          <div onClick={login} className="header__Option">
            <span className="header__OptionRowOne">Hello {user?.email}</span>
            <span className="header__OptionRowTwo">{user ? 'Sign Out' : 'Sign in'}</span>
          </div>
        </Link>
        {/* link 3  */}
        <Link className="header__link">
          <div className="header__Option">
            <span className="header__OptionRowOne">Return</span>
            <span className="header__OptionRowTwo">& Order</span>
          </div>
        </Link>
        {/* link 4  */}
        <Link to='/checkout' className="header__link">
          <div className="header__OptionBasket">
            <ShoppingBasketIcon />
            <span className="header__OptionBasketRowTwo">{basket?.length}</span>
          </div>
        </Link>
      </div>
      
    </div>
  );
}

export default Header;
