import React, { useState } from "react";
import { Link as RouterLink, useNavigate, useLocation } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import NavLogo from "../../Assets/Images/image 5.svg";
import Burger from "../../Assets/Images/menu_hamburger.svg";
import XIcon from "../../Assets/Images/x.png"; // Assuming this is the close icon
import '../../Assets/Styles/style.css'; // Import your CSS file

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path, elementId) => {
    if (location.pathname !== "/") {
      navigate(path);
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
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
          <div className={`navbar__content ${location.pathname === '/blog' || '/blog/:slug' ? 'navbar-news' : 'navbar-main'}`}>
            <div className="navbar_left">
              <img src={NavLogo} className="navbar__logo" alt="Logo" />
            </div>
            <div className="navbar_right">
              <div className={`navbar__menu-container ${isMenuOpen ? "open" : ""}`}>
                <ul className="navbar__menu">
                  <li>
                    <ScrollLink to="about" smooth={true} duration={500} onClick={() => handleNavigation("/", "about")}>About us</ScrollLink>
                  </li>
                  <li>
                    <ScrollLink to="projects" smooth={true} duration={500} onClick={() => handleNavigation("/", "projects")}>Projects</ScrollLink>
                  </li>
                  <li>
                    <RouterLink to="/blog">News</RouterLink>
                  </li>
                  <li>
                    <ScrollLink to="contacts" smooth={true} duration={500} onClick={() => handleNavigation("/", "contacts")}>Contacts</ScrollLink>
                  </li>
                </ul>
                <button className="navbar__button" onClick={() => handleNavigation("/", "footer")}>Contact us</button>
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
