import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchArticleById } from "../api/articles";

export default function ArticleDetail() {
  const { article_id } = useParams();
  const [article, setArticles] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetchArticleById(article_id)
      .then((data) => {
        setArticles(data);
        setIsLoading(false);
      })
      .catch(() => {
        setError("Failed to load article");
        setIsLoading(false);
      });
  }, [article_id]);

  if (isLoading) return <div>Loading article...</div>;
  if (error) return <div>{error}</div>;
  if (!article) return <div>No article found.</div>;

  return (
    <div>
      <h2>{article.title}</h2>
      <p>
        <b>By:</b>
        {article.author} | <b>Date:</b>{" "}
        {new Date(article.created_at).toLocaleDateString()}
      </p>
      <p>{article.body}</p>
      <p>
        <b>Likes:</b>
        {article.votes} | <b>Comments:</b>
        {article.conmment_count}
      </p>
    </div>
  );
}
