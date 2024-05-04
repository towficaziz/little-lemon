import React from "react";
import logo from './images/logo.jpg';
import Nav from "./Nav";
import "./Header.css";

function Header(){
    return(
    <header className="header">
      {/* Vertical logo on the left */}
      <div className="logo">
        <img src={logo} alt="Little Lemon Logo" />
      </div>
      {/* Navigation on the right */}
        <Nav />
    </header>
    )
    
}

export default Header;