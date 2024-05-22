import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import client from "../../../../client";
import "../../../../Assets/Styles/style.css"; // Adjust path as necessary

function NewsSection() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] | order(publishedAt desc) {
          title,
          slug,
          mainImage {
            asset -> {
              _id,
              url
            },
            alt
          },
          publishedAt
        }`
      )
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);

  if (!posts.length) return null;

  const latestPosts = posts.slice(0, 2);

  return (
    <section className="news">
      <div className="container">
        <h2 className="news_header">News</h2>
        <div className="news_content">
          {/* View all News item */}
          <Link to="/blog" className="news_item first_news_item first_news">
            <div className="news_text_other">View all News</div>
          </Link>

          {latestPosts.map((post, index) => (
            <NewsItem key={post.slug.current} news={post} isFirst={index === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

function NewsItem({ news, isFirst }) {
  return (
    <Link to={`/blog/${news.slug.current}`} className={`news_item ${isFirst ? "first_news_item" : ""}`}>
      <img src={news.mainImage.asset.url} alt={news.title} className="news_photo"/>
      <div className="news_title">{news.title}</div>
    </Link>
  );
}

export default NewsSection;
