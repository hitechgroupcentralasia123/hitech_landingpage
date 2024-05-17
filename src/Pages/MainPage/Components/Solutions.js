import React, { useEffect, useState } from "react";
import "../../../Assets/Styles/style.css"; // Import your styles

function Solutions() {
  const [years, setYears] = useState(0);
  const [projects, setProjects] = useState(0);
  const [megawatts, setMegawatts] = useState(0);

  useEffect(() => {
    const duration = 5000; // 1 second
    const frameDuration = 1000 / 60; // 60 frames per second
    const totalFrames = Math.round(duration / frameDuration);

    const easeOutQuad = (t) => t * (2 - t);

    const animateCount = (countTo, setState) => {
      let frame = 0;
      const count = setInterval(() => {
        frame++;
        const progress = easeOutQuad(frame / totalFrames);
        setState(Math.round(countTo * progress));
        if (frame === totalFrames) {
          clearInterval(count);
        }
      }, frameDuration);
    };

    animateCount(10, setYears);
    animateCount(9, setProjects);
    animateCount(1041, setMegawatts);
  }, []);

  return (
    <section className="solutions">
      <div className="container">
        <div className="solutions_inner">
          <div className="solutions__content">
            <div className="solutions__text">
              <h2>Solutions in renewable energy</h2>
              <p>
                The Hi-Tech Group of Companies is one of the leaders in the
                Central Asian market in the renewable energy industry. Our group
                has more than 10 years of experience in the development,
                construction, commissioning and maintenance of solar power
                plants.
              </p>
            </div>
            <div className="solutions__stats">
              <div className="stat">
                <h3>{years}</h3>
                <span>years</span>
              </div>
              <div className="stat">
                <h3>{projects}+</h3>
                <span>projects</span>
              </div>
              <div className="stat">
                <h3>{megawatts}</h3>
                <span>Megawatts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solutions;
