import ArticleCard from "./ArticleCard";
import { useEffect, useState } from "react";
import { fetchArticles } from "../api/articles";

export default function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetchArticles()
      .then((articles) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((err) => {
        setError("Failed to load articles");
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <div>Loading articles...</div>;
  if (error) return <div>{error}</div>;

  return (
    <main style={{ marginBottom: "10rem", marginTop: "3rem" }}>
      {articles.map((article) => (
        <ArticleCard key={article.article_id} article={article} />
      ))}
    </main>
  );
}
