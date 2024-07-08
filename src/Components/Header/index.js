import React, { useState, useEffect } from "react";
import { Link as RouterLink, useNavigate, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import NavLogo from "../../Assets/Images/image 5.svg";
import Burger from "../../Assets/Images/menu_hamburger.svg";
import XIcon from "../../Assets/Images/x.png"; // Assuming this is the close icon
import "../../Assets/Styles/style.css"; // Import your CSS file

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [elementIdToScroll, setElementIdToScroll] = useState(null);

  useEffect(() => {
    if (elementIdToScroll) {
      const element = document.getElementById(elementIdToScroll);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setElementIdToScroll(null);
    }
  }, [location, elementIdToScroll]);

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
          <div
            className={`navbar__content ${
              location.pathname === "/blog" ||
              location.pathname.startsWith("/blog/")
                ? "navbar-news"
                : "navbar-main"
            }`}
          >
            <div className="navbar_left">
              <RouterLink to="/" onClick={() => setIsMenuOpen(false)}>
                <img src={NavLogo} className="navbar__logo" alt="Logo" />
              </RouterLink>
            </div>
            <div className="navbar_right">
              <div
                className={`navbar__menu-container ${isMenuOpen ? "open" : ""}`}
              >
                <ul className="navbar__menu">
                  <li>
                    {location.pathname === "/" ? (
                      <ScrollLink
                        to="services"
                        smooth={true}
                        duration={500}
                        onClick={toggleMenu}
                      >
                        About us
                      </ScrollLink>
                    ) : (
                      <RouterLink
                        to="/"
                        onClick={() => handleNavigation("/", "services")}
                      >
                        About us
                      </RouterLink>
                    )}
                  </li>
                  <li>
                    {location.pathname === "/" ? (
                      <ScrollLink
                        to="projects"
                        smooth={true}
                        duration={500}
                        onClick={toggleMenu}
                      >
                        Projects
                      </ScrollLink>
                    ) : (
                      <RouterLink
                        to="/"
                        onClick={() => handleNavigation("/", "projects")}
                      >
                        Projects
                      </RouterLink>
                    )}
                  </li>
                  <li>
                    <RouterLink to="/blog">News</RouterLink>
                  </li>
                  <li>
                    {location.pathname === "/" ? (
                      <ScrollLink
                        to="footer"
                        smooth={true}
                        duration={500}
                        onClick={toggleMenu}
                      >
                        Contacts
                      </ScrollLink>
                    ) : (
                      <RouterLink
                        to="/"
                        onClick={() => handleNavigation("/", "footer")}
                      >
                        Contacts
                      </RouterLink>
                    )}
                  </li>
                  <li>
                    {location.pathname === "/" ? (
                      <ScrollLink
                        className="navbar__button"
                        to="booking"
                        smooth={true}
                        duration={500}
                        onClick={toggleMenu}
                        style={{ color: "white" }}
                      >
                        Contact us
                      </ScrollLink>
                    ) : (
                      <RouterLink
                        className="navbar__button"
                        to="/"
                        onClick={() => handleNavigation("/", "booking")}
                        style={{ color: "white" }}
                      >
                        Contact us
                      </RouterLink>
                    )}
                  </li>
                </ul>
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
