import React from 'react';
import Hero from './Components/Hero';
import Projects from './Components/Projects/Projects';
import Services from './Components/Services/Services';
import Solutions from './Components/Solutions';
import Activities from './Components/Activities';
import ConsultingServices from './Components/ConsultingServices';
import News from './Components/News/NewsSection';

function MainPage() {
  return (
    <div>
      <Hero />
      <Projects />
      <Services />
      <Solutions />
      <Activities />
      <ConsultingServices />
      <News />
    </div>
  );
}

export default MainPage;
