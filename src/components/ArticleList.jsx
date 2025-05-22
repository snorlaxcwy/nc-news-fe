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
    <main
      style={{
        maxWidth: "680px",
        boxShadow: "0 4px 24px #51545d33",
        alignItems: "center",
        border: "0.3px solid  #51545d",
        borderTop: "1px solid #51545d",
        borderRadius: "10px",
        padding: "0rem 2rem 0rem 2rem",
        marginTop: "2.2rem",
        marginBottom: "3.5rem",
        margin: "3.8rem auto 3.5rem auto",
        textAlign: "left",
      }}
    >
      {articles.map((article) => (
        <ArticleCard key={article.article_id} article={article} />
      ))}
    </main>
  );
}
