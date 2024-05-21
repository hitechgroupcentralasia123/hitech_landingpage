import React from 'react';
import '../../../../Assets/Styles/style.css';
import Photo4 from "../../../../Assets/Images/services/photo.jpg";
import Photo2 from "../../../../Assets/Images/services/photo1716289340 (1).jpeg";
import Photo1 from "../../../../Assets/Images/services/photo1716289340 (2).jpeg";
import Photo5 from "../../../../Assets/Images/services/photo1716289340 (3).jpeg";
import Photo3 from "../../../../Assets/Images/services/photo1716289340.jpeg";

const services = [
  { name: 'Owner\'s Engineer Service', details: '...', image: Photo1 },
  { name: 'Construction Service', details: '...', image: Photo2 },
  { name: 'Owner\'s Engineer Service', details: '...', image: Photo3 },
  { name: 'Construction Service', details: '...', image: Photo4 },
  { name: 'Owner\'s Engineer Service', details: '...', image: Photo5 },
  // add more services as needed
];

function Services() {
  return (
    <section className="services">
      <div className="container">
        <div className="services_inner">
          <div className="services__content">
            {services.map((service, index) => (
              <div key={index} className="service-item">
                <img src={service.image} alt={service.name} />
                <div className="service-text">
                  <h3>{service.name}</h3>
                  <p>{service.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
