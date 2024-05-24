import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import client from "../../client";
import "../../Assets/Styles/style.css";
import LogoFull from "../../Assets/Images/NewsList/Frame.svg";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] | order(publishedAt desc) {
          title,
          slug,
          body,
          mainImage {
            asset -> {
              _id,
              url
            },
            alt
          },
          author -> {
            name,
            image {
              asset -> {
                url
              }
            }
          },
          publishedAt
        }`
      )
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);

  if (!posts.length) return null;

  const latestPost = posts[0];
  const otherPosts = posts.slice(1);

  const truncateText = (text, length) => {
    if (text.length <= length) {
      return text;
    }
    return text.slice(0, length) + "...";
  };

  const getFirstSentence = (text) => {
    const match = text.match(/[^.!?]+[.!?]+/);
    return match ? match[0] : text;
  };

  return (
    <section className="blog_section">
      <div className="container">
        <h1 className="blog_header">News</h1>
        <div className="latest_post">
          <Link to={`/blog/${latestPost.slug.current}`}>
            <img
              src={latestPost.mainImage.asset.url}
              alt={latestPost.title}
              className="post_image"
            />
            <div className="post_content">
              <div className="post_text">
                <h2 className="post_title">{latestPost.title}</h2>
                <p className="post_body">
                  {truncateText(latestPost.body[0].children[0].text, 100)}
                </p>
              </div>
              <div className="post_footer">
                <img
                  src={latestPost.author.image.asset.url}
                  alt={latestPost.author.name}
                  className="author_image"
                />
                <span className="author_name">{latestPost.author.name}</span>
                <div className="dot_main"></div>
                <span className="post_date">
                  {new Date(latestPost.publishedAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          </Link>
        </div>
        <div className="other_posts">
          {otherPosts.map((post) => (
            <article key={post.slug.current} className="post_row">
              <img
                src={post.mainImage.asset.url}
                alt={post.title}
                className="row_post_image"
              />
              <div className="row_post_content">
                <Link to={`/blog/${post.slug.current}`}>
                  <h4 className="row_post_title">{post.title}</h4>
                  <p className="row_post_body">
                    {getFirstSentence(post.body[0].children[0].text)}
                  </p>
                  <div className="row_post_footer">
                    <img
                      src={post.author.image.asset.url}
                      alt={post.author.name}
                      className="author_image"
                    />
                    <span className="author_name">{post.author.name}</span>
                    <div className="dot_main"></div>
                    <span className="post_date">
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </span>
                  </div>
                </Link>
              </div>
              <button className="read_more_button">
                <Link to={`/blog/${post.slug.current}`} className="arrow_link">
                  <img src={LogoFull} className="logo_fullart" />
                </Link>
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
