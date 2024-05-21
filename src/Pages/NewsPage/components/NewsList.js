import React from "react";
import newsImage1 from "../../../Assets/Images/NewsList/Rectangle 31.png";
import newsImage2 from "../../../Assets/Images/NewsList/Rectangle 31 (1).png";
import "../../../Assets/Styles/style.css";

function NewsList() {
  return (
    <section className="news_list">
      <div className="container">
        <div className="news_inner">
          <div className="news__content">
            <div className="news_list_item">
              <img src={newsImage1} alt="Solar Panels" className="news_image" />
              <div className="news_list_content">
                <h2>What Is A Solar Panel?</h2>
                <p>
                  In the last two decades, the contribution of solar energy to
                  the world's total energy supply has grown significantly.
                </p>
                <div className="news_list_meta">
                  <span className="author">Анна Калинина</span>
                  <span className="date">6 мая 2023</span>
                </div>
              </div>
            </div>
            <div className="news_list_item">
              <img
                src={newsImage2}
                alt="Solar Panels"
                className="news_list_image"
              />
              <div className="news_list_content">
                <h2>What Is A Solar Panel?</h2>
                <p>
                  In the last two decades, the contribution of solar energy to
                  the world's total energy supply has grown significantly.
                </p>
                <div className="news_list_meta">
                  <span className="author">Анна Калинина</span>
                  <span className="date">6 мая 2023</span>
                </div>
              </div>
            </div>
            <div className="pagination">
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
              <span>6</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsList;
