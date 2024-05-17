import React from 'react';
import ServiceItem from './ServiceItem';



const services = [
  { name: 'Owner\'s Engineer Service', details: '...' },
  { name: 'Construction Service', details: '...' },
  // добавьте остальные сервисы
];

function Services() {
  return (
    <section className="services">
      {services.map((service, index) => (
        <ServiceItem key={index} service={service} />
      ))}
    </section>
  );
}

export default Services;
