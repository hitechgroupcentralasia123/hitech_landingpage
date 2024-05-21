import React, { useState, useEffect } from "react";
import heroImage from "../../../Assets/Images/NewsList/Rectangle 30.png"; // Adjust path as necessary
import "../../../Assets/Styles/style.css";

const MainNews = () => {
  return (
    <section className="newsmain_section">
      <div className="container">
        <div className="newsmain__text_header">
          <h1 className="newsmain__header">News</h1>
        </div>
        <div className="newsmain_inner">
          <div className="newsmain__content">
            <img
              src={heroImage}
              alt="Solar Panels"
              className="newsmain_image"
            />
            <div className="newsmain_text">
              <div className="newsmain_text_main">
                <h1 className="newsmain_text_h1">What Is A Solar Panel?</h1>
                <p className="newsmain_text_p">
                  In the last two decades, the contribution of solar energy to
                  the world's total energy supply has grown significantly.
                </p>
              </div>
              <div className="newsmain_meta">
                <span className="author">Анна Калинина</span>
                <div className="dot_main">.</div>
                <span className="date">6 мая 2023</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainNews;
