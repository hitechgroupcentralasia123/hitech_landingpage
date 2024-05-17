import React from 'react';
import './ConsultingServices.css'; // Import the CSS file

function ConsultingServices() {
  return (
    <section className="consulting-services">
      <div className="container">
        <div className="consulting-content">
          <div className="consulting-text">
            <h2>We offer energy consulting services</h2>
            <p>
              Here, in the Hi-Tech Group of companies, we sincerely believe that new technologies and solutions, new green projects will help preserve and enhance the world in which we live. We fully understand that it is only in our power to leave our descendants a clean green planet.
            </p>
            <p>
              We have the necessary knowledge and experience that will allow us to offer our customers comprehensive solutions for the development, implementation and project management in the renewable energy industry.
            </p>
          </div>
          <div className="consulting-image">
            <img src="path/to/your/image.png" alt="Solar Panels" />
          </div>
          <div className="trusted-by">
            <p>Trusted by Industry Experts</p>
            <div className="logos">
              <img src="path/to/risen.png" alt="Risen" />
              <img src="path/to/sepco.png" alt="SEPCO" />
              <img src="path/to/tbea.png" alt="TBEA" />
              <img src="path/to/huawei.png" alt="Huawei" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConsultingServices;
