import React from "react";
import CompanyLogo from "../../Assets/Images/image 5.svg"; // Adjust the path to your logo image
import "../../Assets/Styles/style.css"; // Import the CSS file
import FacebookF from "../../Assets/Images/facebook.svg";
import Instagram from "../../Assets/Images/instagram.svg";
import Linkedin from "../../Assets/Images/linkedin.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__left">
            <img src={CompanyLogo} alt="Company Logo" className="footer__logo" />
            <div className="footer__socials">
              <img src={FacebookF} alt="Facebook" className="footer__icon" />
              <img src={Instagram} alt="Instagram" className="footer__icon" />
              <img src={Linkedin} alt="LinkedIn" className="footer__icon" />
            </div>
          </div>
          <div className="footer__center">
            <p className="footer__info"><strong>Head office:</strong> Taraz, st. Tokbergenova, 90</p>
            <p className="footer__info"><strong>Phone:</strong> +7 (707) 908 00 00</p>
            <p className="footer__email">info@hi-techkz.com</p>
          </div>
          <div className="footer__right">
            <p>About us</p>
            <p>Activities</p>
            <p>Projects</p>
            <p>Contacts</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
