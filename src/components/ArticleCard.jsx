import { Link } from "react-router-dom";

export default function ArticleCard({ article }) {
  const shortDesc = article.body
    ? article.body.split(" ").slice(0, 20).join(" ") +
      (article.body.split(" ").length > 20 ? "..." : "")
    : "No description avaliable.";
  return (
    <Link
      to={`/articles/${article.article_id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div
        className="article-card"
        style={{
          border: "1px solid #51545d",
          borderRadius: "10px",
          padding: "1.5rem",
          margin: "2rem 0",
          background: "#fff",
        }}
      >
        <h2>{article.title}</h2>
        <p>
          <b>By:</b> {article.author} | <b>Date:</b>{" "}
          {new Date(article.created_at).toLocaleDateString()}
        </p>
        <p>{shortDesc}</p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
            background: "#f5f6fa",
            borderRadius: "1.5rem",
            padding: "0.3rem 0.9rem",
            margin: "1rem 0",
            textAlign: "left",
          }}
        >
          <span
            style={{
              fontWeight: "bold",
              fontSize: "0.9rem",
              minWidth: "2rem",
              textAlign: "center",
            }}
          >
            ▲ votes ▼ {article.votes}
          </span>
          <span style={{ marginLeft: "1.2rem", fontSize: "0.9rem" }}>
            <b>💬 Comments:</b> {article.comment_count}
          </span>
        </div>
      </div>
    </Link>
  );
}
