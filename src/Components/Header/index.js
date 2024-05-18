import React, { useState } from "react";
import NavLogo from "../../Assets/Images/image 5.svg";
import Burger from "../../Assets/Images/menu_hamburger.svg";
import XIcon from "../../Assets/Images/x.png"; // Assuming this is the close icon

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__inner">
          <div className="navbar__content">
            <div className="navbar_left">
              <img src={NavLogo} className="navbar__logo" alt="Logo" />
            </div>
            <div className="navbar_right">
              <div className={`navbar__menu-container ${isMenuOpen ? "open" : ""}`}>
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
              <button className="navbar__burger" onClick={toggleMenu}>
                <img src={isMenuOpen ? XIcon : Burger} alt="Menu" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
