import ArticleCard from "./ArticleCard";
import { useEffect, useState } from "react";
import { fetchArticles } from "../api/articles";

export default function ArticleList({ topic }) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("desc");

  useEffect(() => {
    setIsLoading(true);
    fetchArticles({ sort_by: sortBy, order, topic })
      .then((articles) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((err) => {
        setError("Failed to load articles");
        setIsLoading(false);
      });
  }, [sortBy, order, topic]);

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
      {/* Button Group */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          margin: "1rem 0",
        }}
      >
        <button
          onClick={() => setSortBy("created_at")}
          style={{
            background: sortBy === "created_at" ? "#51545d" : "#eee",
            color: sortBy === "created_at" ? "#fff" : "#51545d",
            border: "none",
            padding: "0.5em 1em",
            borderRadius: "1em",
            fontWeight: 600,
          }}
        >
          Date
        </button>
        <button
          onClick={() => setSortBy("votes")}
          style={{
            background: sortBy === "votes" ? "#51545d" : "#eee",
            color: sortBy === "votes" ? "#fff" : "#51545d",
            border: "none",
            padding: "0.5em 1em",
            borderRadius: "1em",
            fontWeight: 600,
          }}
        >
          Votes
        </button>
        <button
          onClick={() => setSortBy("comment_count")}
          style={{
            background: sortBy === "comment_count" ? "#51545d" : "#eee",
            color: sortBy === "comment_count" ? "#fff" : "#51545d",
            border: "none",
            padding: "0.5em 1em",
            borderRadius: "1em",
            fontWeight: 600,
          }}
        >
          Comments
        </button>
        {/* Order icon button */}
        <button
          onClick={() => setOrder(order === "asc" ? "desc" : "asc")}
          title={order === "asc" ? "oldest" : "newest"}
          style={{
            background: "#fff",
            border: "1.2px solid #eee",
            padding: "0.4em 1em",
            borderRadius: "1em",
            fontWeight: 700,
            marginLeft: "0.8rem",
            cursor: "pointer",
            fontSize: "1.25rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          {order === "asc" ? "↑" : "↓"}
        </button>
      </div>
      {articles.map((article) => (
        <ArticleCard key={article.article_id} article={article} />
      ))}
    </main>
  );
}
