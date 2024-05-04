import "./Nav.css";
import React from "react";

function Nav(){
    return(
        <nav className="nav">    
            <ul>
                <li><a href="/home">Home</a></li>        
                <li><a href="/about">About</a></li>
                <li><a href="/blog">Menu</a></li>  
                <li><a href="/blog">Reservations</a></li>  
                <li><a href="/blog">Order Online</a></li>  
                <li><a href="/blog">Login</a></li>  
            </ul>
        </nav>
        )
}

export default Nav;