import React from "react";
import "../../../../Assets/Styles/style.css"; // Import the CSS file
import {Logo1, Logo2, Logo3, Logo4, Logo5, Logo6} from "../../../../Assets/Images/company/index";
import ConsultingPhoto from "../../../../Assets/Images/ConsultingPhoto.png";

function ConsultingServices() {
  return (
    <section className="consulting-services">
      <div className="container">
        <div className="consulting-content">
          <div className="consulting-text">
            <h2>We offer energy consulting services</h2>
            <p>
              Here, in the Hi-Tech Group of companies, we sincerely believe that
              new technologies and solutions, new green projects will help
              preserve and enhance the world in which we live. We fully
              understand that it is only in our power to leave our descendants a
              clean green planet.
              <br />
              <br />
              We have the necessary knowledge and experience that will allow us
              to offer our customers comprehensive solutions for the
              development, implementation and project management in the
              renewable energy industry.
            </p>
          </div>
          <div className="consulting-image">
            <img src={ConsultingPhoto} alt="Solar Panels" />
          </div>
          <div className="trusted-by">
            <p>Trusted by Industry Experts</p>
            <div className="logos">
              <div className="logo-container">
                <img src={Logo1} alt="Risen" />
                <img src={Logo2} alt="SEPCO" />
                <img src={Logo3} alt="TBEA" />
                <img src={Logo4} alt="Huawei" />
                <img src={Logo5} alt="Huawei" />
                <img src={Logo6} alt="Huawei" />
              </div>
              <div className="logo-container">
                <img src={Logo1} alt="Risen" />
                <img src={Logo2} alt="SEPCO" />
                <img src={Logo3} alt="TBEA" />
                <img src={Logo4} alt="Huawei" />
                <img src={Logo5} alt="Huawei" />
                <img src={Logo6} alt="Huawei" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConsultingServices;
