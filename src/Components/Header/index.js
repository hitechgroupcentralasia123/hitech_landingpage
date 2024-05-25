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
    if (location.pathname !== path) {
      navigate(path);
      setTimeout(() => {
        scrollToElement(elementId);
      }, 100);
    } else {
      scrollToElement(elementId);
    }
    setIsMenuOpen(false); // Close menu after navigation
  };

  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__inner">
          <div className={`navbar__content ${location.pathname === '/blog' || location.pathname.startsWith('/blog/') ? 'navbar-news' : 'navbar-main'}`}>
            <div className="navbar_left">
              <img src={NavLogo} className="navbar__logo" alt="Logo" />
            </div>
            <div className="navbar_right">
              <div className={`navbar__menu-container ${isMenuOpen ? "open" : ""}`}>
                <ul className="navbar__menu">
                  <li>
                    {location.pathname === "/" ? (
                      <ScrollLink to="services" smooth={true} duration={500} onClick={toggleMenu}>About us</ScrollLink>
                    ) : (
                      <RouterLink to="/" onClick={() => handleNavigation("/", "services")}>About us</RouterLink>
                    )}
                  </li>
                  <li>
                    {location.pathname === "/" ? (
                      <ScrollLink to="projects" smooth={true} duration={500} onClick={toggleMenu}>Projects</ScrollLink>
                    ) : (
                      <RouterLink to="/" onClick={() => handleNavigation("/", "projects")}>Projects</RouterLink>
                    )}
                  </li>
                  <li>
                    <RouterLink to="/blog">News</RouterLink>
                  </li>
                  <li>
                    {location.pathname === "/" ? (
                      <ScrollLink to="footer" smooth={true} duration={500} onClick={toggleMenu}>Contacts</ScrollLink>
                    ) : (
                      <RouterLink to="/" onClick={() => handleNavigation("/", "footer")}>Contacts</RouterLink>
                    )}
                  </li>
                </ul>
                {location.pathname === "/" ? (
                  <ScrollLink className="navbar__button" to="booking-section" smooth={true} duration={500} onClick={toggleMenu}>Contact us</ScrollLink>
                ) : (
                  <RouterLink className="navbar__button" to="/" onClick={() => handleNavigation("/", "booking-section")}>Contact us</RouterLink>
                )}
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
