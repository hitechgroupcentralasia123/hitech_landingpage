import React from "react";
import "../../../../Assets/Styles/style.css"; // Adjust path as necessary
import newsImage from "../../../../Assets/Images/news photo 1.png";
import newsImage1 from "../../../../Assets/Images/news photo.png";
import newsImage2 from "../../../../Assets/Images/news photo2.png";

function NewsSection() {
  return (
    <section className="news">
      <div className="container">
        <h2 className="news_header">News</h2>
        <div className="news_content">
          {/* News item 1 */}
          <div className="news_item first_news_item">
            <img src={newsImage} alt="Anderson Optimization" />
            <div className="news_text_other">View all News</div>
          </div>

          {/* News item 2 */}
          <div className="news_item">
            <img src={newsImage2} alt="Anderson Optimization" />
            <div className="news_text">Anderson Optimization</div>
          </div>

          {/* News item 3 */}
          <div className="news_item">
            <img src={newsImage1} alt="Anderson Optimization" />
            <div className="news_text">Anderson Optimization</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsSection;
