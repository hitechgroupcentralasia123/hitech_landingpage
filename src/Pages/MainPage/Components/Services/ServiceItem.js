import React from 'react';

function ServiceItem({ service }) {
  return (
    <div className="service-item">
      <h3>{service.name}</h3>
      <p>{service.details}</p>
    </div>
  );
}

export default ServiceItem;
