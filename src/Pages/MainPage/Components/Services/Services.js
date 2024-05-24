import React, { useRef } from "react";
import "../../../../Assets/Styles/style.css";
import Photo4 from "../../../../Assets/Images/services/photo.jpg";
import Photo2 from "../../../../Assets/Images/services/photo1716289340 (1).jpeg";
import Photo1 from "../../../../Assets/Images/services/photo1716289340 (2).jpeg";
import Photo5 from "../../../../Assets/Images/services/photo1716289340 (3).jpeg";
import Photo3 from "../../../../Assets/Images/services/photo1716289340.jpeg";

const services = [
  {
    name: "Our role",
    details:
      "Hi-Tech Group is a seasoned team with a decade of expertise  in executing renewable energy projects across Central Asia.",
    image: Photo1,
  },
  {
    name: "Owner’s Engineer Service",
    details:
      "We facilitate communication among clients, EPC contractors, subcontractors, banks, governmental bodies, and consultancies. We monitor construction activities on-site to ensure quality, compliance with local laws, and adherence to safety and environmental standards. We also provide monthly independent reports detailing the progress and status of the construction, and recommend preventive actions to mitigate risks associated with construction timelines and quality.",
    image: Photo2,
  },
  {
    name: "Construction Service",
    details:
      "Our services include landscaping, earthworks, road construction, civil structures, assembly and installation operations, and electrical works, including AC installations.",
    image: Photo3,
  },
  {
    name: "Commissioning and Grid Connection",
    details:
      "We guide and oversee the grid connection process, including preparing testing programs for ASKUE, coordinating approvals for pilot industrial tests with grid operators, supporting the pilot testing and commissioning phase, addressing any malfunctions, and assisting in the certification of the Commercial Accounting Scheme.",
    image: Photo4,
  },
  {
    name: "Operation and Maintenance",
    details:
      "We evaluate the operational performance of PV plant components, maintain them according to manufacturers' guidelines, conduct hardware tests to ensure reliability, inspect overall plant conditions, analyze operational data to preemptively identify issues, and verify the accuracy of data from various plant components as part of ongoing maintenance services.",
    image: Photo5,
  },
  // add more services as needed
];

function Services() {
  const servicesContentRef = useRef(null);

  const handleHover = (index) => {
    const serviceItem = servicesContentRef.current.children[index];
    serviceItem.classList.add("hover");
  };

  const handleMouseLeave = (index) => {
    const serviceItem = servicesContentRef.current.children[index];
    serviceItem.classList.remove("hover");
  };

  return (
    <section className="services">
      <div className="container">
        <div className="services_inner">
          <div className="services__content" ref={servicesContentRef}>
            {services.map((service, index) => (
              <div
                key={index}
                className="service-item"
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <img src={service.image} alt={service.name} />
                <div className="service-title">{service.name}</div>
                <div className="service-text">
                  <p className="service-details">{service.details}</p>
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
