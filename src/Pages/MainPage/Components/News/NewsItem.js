import React from "react";

function NewsItem({ news }) {
  if (!news.image) {
    return (
      <div className=" news_item view_all">
        <p>View all News</p>
        <button className="view_all_button">
          <div className="button_circle">→</div>
        </button>
      </div>
    );
  }
  return (
    <div className="news_item">
      <img src={news.image} alt={news.title} />
      <div className="news_title">{news.title}</div>
    </div>
  );
}

export default NewsItem;
