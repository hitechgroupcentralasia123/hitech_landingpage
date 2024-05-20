import React from 'react';
import heroImage from '../../../Assets/Images/NewsList/Rectangle 30.png'; // Adjust path as necessary
import "../../../Assets/Styles/style.css";

function MainNews() {
  return (
    <section className="newsmain_section">
        <div className="container">
      <img src={heroImage} alt="Solar Panels" className="newsmain_image" />
      <div className="newsmain_text">
        <h1>What Is A Solar Panel?</h1>
        <p>In the last two decades, the contribution of solar energy to the world's total energy supply has grown significantly.</p>
        <div className="newsmain_meta">
          <span className="author">Анна Калинина</span>
          <span className="date">6 мая 2023</span>
        </div>
      </div>
    </div>
    </section>
  );
}

export default MainNews;
