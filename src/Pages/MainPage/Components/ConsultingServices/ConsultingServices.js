import React from 'react';
import '../../../../Assets/Styles/style.css'; // Import the CSS file
import CompanyLogo1 from "../../../../Assets/Images/company 1.png";
import CompanyLogo2 from "../../../../Assets/Images/company 2.png";
import CompanyLogo3 from "../../../../Assets/Images/company 3.png";
import CompanyLogo4 from "../../../../Assets/Images/company 4.png";
import CompanyLogo5 from "../../../../Assets/Images/company 5.png";
import ConsultingPhoto from "../../../../Assets/Images/image consulting.png";

function ConsultingServices() {
  return (
    <section className="consulting-services">
      <div className="container">
        <div className="consulting-content">
          <div className="consulting-text">
            <h2>We offer energy consulting services</h2>
            <p>
              Here, in the Hi-Tech Group of companies, we sincerely believe that new technologies and solutions, new green projects will help preserve and enhance the world in which we live. We fully understand that it is only in our power to leave our descendants a clean green planet.
            <br />
            <br />
              We have the necessary knowledge and experience that will allow us to offer our customers comprehensive solutions for the development, implementation and project management in the renewable energy industry.
            </p>
          </div>
          <div className="consulting-image">
            <img src={ConsultingPhoto} alt="Solar Panels" />
          </div>
          <div className="trusted-by">
            <p>Trusted by Industry Experts</p>
            <div className="logos">
              <div className="logo-container">
              <img src={CompanyLogo1} alt="Risen" />
                <img src={CompanyLogo2} alt="SEPCO" />
                <img src={CompanyLogo3} alt="TBEA" />
                <img src={CompanyLogo4} alt="Huawei" />
                <img src={CompanyLogo5} alt="Huawei" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConsultingServices;
