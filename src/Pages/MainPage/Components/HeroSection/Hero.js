import React from "react";
import "../../../../Assets/Styles/style.css";
import BackGroundPhoto from "../../../../Assets/Images/BackGroundPhoto.png";
import ArrowIcon from "../../../../Assets/Images/arrow_downward.svg";
import ExperienceCircles from "./CounterButton";

function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${BackGroundPhoto})` }}
    >
      <div className="container">
      <div className="hero_inner">
        <div className="hero__content">
          <div className="hero_main_text">
            <p className="hero_text_p">For a better world</p>
            <h1 className="hero_text_h1">To create green solutions</h1>
            <p className="hero_textfull_p">
              Market leader in renewable energy sources in Central Asia Hi-Tech
              Group of Companies has a professional team with unique knowledge
              and experience in the development, construction and operation and
              maintenance of renewable energy projects.
            </p>
            <button className="hero__button_mobile">
            Contact us
          </button>
          <div className="hero_counter">
            <p>Our experience</p>
            <ExperienceCircles />
            </div>
          </div>
          <div className="hero__experience">
            <div className="hero_buttonpart">
              <button className="hero__button">
                Find out more <img src={ArrowIcon} />
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
