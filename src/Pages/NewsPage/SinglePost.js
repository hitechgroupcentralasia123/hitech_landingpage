import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import client from "../../client"
import BlockContent from "@sanity/block-content-to-react"

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { slug } = useParams()

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
        }
      }`
      )
      .then((data) => setSinglePost(data[0]))
    setIsLoading(false)
  }, [slug])

  return (
    <>
      {isLoading ? (
        <h1 className="">
          Loading...
        </h1>
      ) : (
        <section className="blog_section">
        <div className="container">
          <h1 className="">
            {singlePost.title}
          </h1>
          {singlePost.mainImage && singlePost.mainImage.asset && (
            <img
              src={singlePost.mainImage.asset.url}
              alt={singlePost.title}
              title={singlePost.title}
              className="blog__image rounded-t"
            />
          )}
          <p>By Thomas Sankara</p>

          <div className="block__content">
            <BlockContent
              blocks={singlePost.body}
              projectId="o59ea1u0"
              dataset="production"
            />
          </div>

          <button>
            <Link
              to="/blog"
              className=""
            >
              Read more articles
            </Link>
          </button>
          </div>
        </section>
      )}
    </>
  )
}