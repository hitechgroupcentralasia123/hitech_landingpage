import React from "react";
import NewsItem from "./NewsItem";
import '../../../../Assets/Styles/style.css'; // Import the CSS file
import newsImage1 from "../../../../Assets/Images/news photo.png"; // Adjust the path to your image
import newsImage2 from "../../../../Assets/Images/news photo2.png" // Adjust the path to your image

const news = [
  { title: "View all News", content: "", image: null },
  { title: "Anderson Optimization", content: "", image: newsImage1 },
  { title: "Anderson Optimization", content: "", image: newsImage2 },
];

function NewsSection() {
  return (
    <section className="news">
      <div className="container">
        <div className="news_inner">
          <h2 className="news_header">News</h2>
          <div className="news_content">
            {news.map((item, index) => (
              <NewsItem key={index} news={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsSection;
