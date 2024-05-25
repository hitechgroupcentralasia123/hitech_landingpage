import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import client from "../../../../client";
import "../../../../Assets/Styles/style.css"; // Adjust path as necessary

function NewsSection() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

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

  const handleViewAllClick = () => {
    navigate("/blog");
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  const handleItemClick = (slug) => {
    navigate(`/blog/${slug}`);
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <section className="news">
      <div className="container">
        <h2 className="news_header">News</h2>
        <div className="news_content">
          {/* View all News item */}
          <div className="news_item first_news_item first_news" onClick={handleViewAllClick}>
            <div className="news_text_other">View all News</div>
          </div>
          {latestPosts.map((post, index) => (
            <NewsItem key={post.slug.current} news={post} isFirst={index === 0} handleClick={handleItemClick} />
          ))}
        </div>
      </div>
    </section>
  );
}

function NewsItem({ news, isFirst, handleClick }) {
  return (
    <div onClick={() => handleClick(news.slug.current)} className={`news_item ${isFirst ? "first_news_item" : ""}`}>
      <img src={news.mainImage.asset.url} alt={news.title} className="news_photo"/>
      <div className="news_title">{news.title}</div>
    </div>
  );
}

export default NewsSection;
