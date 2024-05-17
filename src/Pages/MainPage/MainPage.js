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
      <Hero />
      <Projects />
      <Solutions />
      <Activities />
      <ConsultingServices />
      <BookingSection />
      {/*  <Services />
      <ConsultingServices />
      <News /> */}
    </div>
  );
}

export default MainPage;
