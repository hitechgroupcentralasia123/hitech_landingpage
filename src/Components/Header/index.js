import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavLogo from "../../Assets/Images/image 5.svg";
import Burger from "../../Assets/Images/menu_hamburger.svg";
import XIcon from "../../Assets/Images/x.png"; // Assuming this is the close icon
import '../../Assets/Styles/style.css'; // Import your CSS file

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path, elementId) => {
    if (path) {
      navigate(path);
    }
    if (elementId) {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false); // Close menu after navigation
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
                    <a href="#about" onClick={() => handleNavigation(null, 'about')}>About us</a>
                  </li>
                  <li>
                    <a href="#projects" onClick={() => handleNavigation(null, 'projects')}>Projects</a>
                  </li>
                  <li>
                    <Link to="/news" onClick={() => handleNavigation('/news')}>News</Link>
                  </li>
                  <li>
                    <a href="#contacts" onClick={() => handleNavigation(null, 'contacts')}>Contacts</a>
                  </li>
                </ul>
                <button className="navbar__button" onClick={() => handleNavigation(null, 'footer')}>Contact us</button>
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
