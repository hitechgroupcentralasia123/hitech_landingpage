import React from "react";
import NavLogo from "../../Assets/Images/image 5.svg";

function Navbar() {
  return (
    <nav className="navbar">
        <div className="container">
        <div className="navbar__inner">
            
        <div className="navbar__content">
          <div className="navbar_left">
            <img src={NavLogo} className="navbar__logo" />
          </div>
          <div className="navbar_right">
            <ul className="navbar__menu">
              <li>
                <a href="#about">About us</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#news">News</a>
              </li>
              <li>
                <a href="#contacts">Contacts</a>
              </li>
            </ul>
            <button className="navbar__button">Contact us</button>
          </div>
          </div>
        </div>
        </div>
    </nav>
  );
}

export default Navbar;
