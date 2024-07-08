import React from 'react';
import Hero from './Components/HeroSection/Hero';
import Projects from './Components/Projects/Projects';
import Services from './Components/Services/Services';
import Solutions from './Components/Solutions';
import Activities from './Components/Activities';
import ConsultingServices from './Components/ConsultingServices/ConsultingServices';
import News from './Components/News/NewsSection';
import BookingSection from './Components/BookingSection';

function MainPage() {
  return (
    <div>
      <Hero id="hero" />
      <Projects id="projects" />
      <Services id="services" />
      <Solutions id="solutions" />
      <Activities id="activities" />
      <ConsultingServices id="consulting-services" />
      <BookingSection id="booking" />
      <News id="news" />
      <div id="footer"></div>
    </div>
  );
}

export default MainPage;
