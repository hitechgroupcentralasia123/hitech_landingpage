import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import client from "../../client";
import BlockContent from "@sanity/block-content-to-react";
import NewsSection from "../MainPage/Components/News/NewsSection";
import LoadingSpinner from "./LoadingSpinner"; // Импортируйте ваш компонент загрузки
import "../../Assets/Styles/style.css";

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"] {
          title,
          body,
          mainImage {
            asset -> {
              _id,
              url
            },
            alt
          },
          "authorName": author->name,
          "authorImage": author->image.asset->url,
          publishedAt
        }`
      )
      .then((data) => {
        setSinglePost(data[0]);
        setIsLoading(false);
      });
  }, [slug]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <section className="blog_section">
      <div className="container">
        <div className="header_title">
          <h1 className="blog_title">{singlePost.title}</h1>
          <div className="post_details">
            {singlePost.authorImage && (
              <img
                src={singlePost.authorImage}
                alt={singlePost.authorName}
                className="author_image"
              />
            )}
            <div className="dot_main"></div>
            <p className="author_name">{singlePost.authorName}</p>
            <div className="dot_main"></div>
            <span className="post_date">
              {new Date(singlePost.publishedAt).toLocaleDateString()}
            </span>
          </div>
        </div>
        {singlePost.mainImage && singlePost.mainImage.asset && (
          <img
            src={singlePost.mainImage.asset.url}
            alt={singlePost.title}
            title={singlePost.title}
            className="blog__image"
          />
        )}
        <div className="block__content">
          <BlockContent
            blocks={singlePost.body}
            projectId="ctrmv7z8"
            dataset="production"
          />
        </div>
      </div>
      <NewsSection />
    </section>
  );
}
