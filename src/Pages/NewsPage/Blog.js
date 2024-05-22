import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import client from "../../client";

export default function Blog() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] {
        title,
        slug,
        body,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt
        }
      }`
      )
      .then((data) => setPosts(data))
      .catch(console.error)
  }, [])

  return (
    <>
      <section className="blog_section">
      <div className="container">
        <h1 className="">
          Blog page
        </h1>

        <div className="">
          {posts.map((post) => (
            <article key={post.slug.current}>
              <img src={post.mainImage.asset.url} alt={post.title} />
              <h4 className="text-xl mt-2">{post.title}</h4>
                  <span className="post_date">{new Date(post.publishedAt).toLocaleDateString()}</span>
                
              <button className="mt-5 mb-10">
                <Link
                  to={`/blog/${post.slug.current}`}
                  className=""
                >
                  Read Full Article
                </Link>
              </button>
            </article>
          ))}
        </div>
        </div>
      </section>
    </>
  )
}