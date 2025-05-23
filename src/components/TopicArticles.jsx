import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchTopicsByArticleId } from "../api/articles";
import { fetchTopics } from "../api/topics";
import ArticleList from "./ArticleList";

export default function TopicArticles() {
  const { topic_slug } = useParams();
  const [articles, setArticles] = useState([]);
  const [topic, setTopic] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTopics().then((topics) => {
      const found = topics.find((t) => t.slug === topic_slug);
      setTopic(found);
    });
  }, [topic_slug]);

  useEffect(() => {
    setIsLoading(true);
    fetchTopicsByArticleId(topic_slug)
      .then((data) => {
        setArticles(data);
        setIsLoading(false);
      })
      .catch(() => {
        setError("Failed to load articles.");
        setIsLoading(false);
      });
  }, [topic_slug]);

  if (isLoading) return <div>Loading articles...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div
      style={{
        padding: "0.5rem 0.5rem 0.5rem 0.5rem",
        maxWidth: 680,
        margin: "2rem auto",
      }}
    >
      <div
        style={{
          background: "#f6f8fc",
          borderRadius: "18px",
          minHeight: "80px",
          marginBottom: "1.5rem",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          padding: "1.2rem",
          boxShadow: "0 3px 18px #51545d11",
          border: "1.2px solid #dedede",
          fontSize: "1.25rem",
          fontWeight: 700,
          color: "#514545d",
        }}
      >
        {topic ? (
          <>
            {topic.img_url && (
              <img
                src={topic.img_url}
                alt={topic.slug}
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  objectFit: "cover",
                  marginRight: 18,
                }}
              />
            )}
            <span>
              {topic.slug.charAt(0).toUpperCase() + topic.slug.slice(1)}
              <br />
              <span
                style={{ fontWeight: 400, fontSize: "1rem", color: "#888" }}
              >
                {topic.description}
              </span>
            </span>
          </>
        ) : (
          <span>{topic_slug}</span>
        )}
      </div>
      <ArticleList topic={topic_slug} />
    </div>
  );
}
