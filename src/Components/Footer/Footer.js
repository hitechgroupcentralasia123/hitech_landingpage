import React from "react";
import { Link as RouterLink, useNavigate, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import CompanyLogo from "../../Assets/Images/logofooter.svg"; // Adjust the path to your logo image
import "../../Assets/Styles/style.css"; // Import the CSS file
import FacebookF from "../../Assets/Images/facebook.svg";
import Instagram from "../../Assets/Images/instagram.svg";
import Linkedin from "../../Assets/Images/linkedin.svg";

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  const [elementIdToScroll, setElementIdToScroll] = React.useState(null);

  React.useEffect(() => {
    if (elementIdToScroll) {
      const element = document.getElementById(elementIdToScroll);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setElementIdToScroll(null);
    } else {
      // Scroll to the top when navigating to a new page
      window.scrollTo(0, 0);
    }
  }, [location, elementIdToScroll]);

  const handleNavigation = (path, elementId) => {
    if (location.pathname !== path) {
      navigate(path);
      setElementIdToScroll(elementId);
    } else {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__left">
            <img
              src={CompanyLogo}
              alt="Company Logo"
              className="footer__logo"
            />
            <div className="footer__socials">
              <img src={FacebookF} alt="Facebook" className="footer__icon" />
              <img src={Instagram} alt="Instagram" className="footer__icon" />
              <img src={Linkedin} alt="LinkedIn" className="footer__icon" />
            </div>
          </div>
          <div className="footer__center">
            <p className="footer__info">
              <strong>Head office:</strong> Taraz, st. Tokbergenova, 90
            </p>
            <p className="footer__info">
              <strong>Phone:</strong> +7 (707) 908 00 00
            </p>
            <p className="footer__email">info@hi-techkz.com</p>
          </div>
          <div className="footer__right">
            <p>
              {location.pathname === "/" ? (
                <ScrollLink to="services" smooth={true} duration={500}>
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
            </p>
            <p>
              {location.pathname === "/" ? (
                <ScrollLink to="activities" smooth={true} duration={500}>
                  Activities
                </ScrollLink>
              ) : (
                <RouterLink
                  to="/"
                  onClick={() => handleNavigation("/", "activities")}
                >
                  Activities
                </RouterLink>
              )}
            </p>
            <p>
              {location.pathname === "/" ? (
                <ScrollLink to="projects" smooth={true} duration={500}>
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
            </p>
            <p>
              {location.pathname === "/" ? (
                <ScrollLink to="footer" smooth={true} duration={500}>
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
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
