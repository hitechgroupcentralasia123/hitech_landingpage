import React from 'react';

function NewsItem({ news }) {
  return (
    <div className="news-item">
      <h3>{news.title}</h3>
      <p>{news.content}</p>
    </div>
  );
}

export default NewsItem;
