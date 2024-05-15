import React from 'react';
import NewsItem from './NewsItem';

const news = [
  { title: 'News 1', content: '...' },
  { title: 'News 2', content: '...' },
  // добавьте остальные новости
];

function NewsSection() {
  return (
    <section className="news">
      <h2>News</h2>
      {news.map((item, index) => (
        <NewsItem key={index} news={item} />
      ))}
    </section>
  );
}

export default NewsSection;
