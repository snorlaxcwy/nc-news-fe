export default function ArticleCard({ article }) {
  const shortDesc = article.body
    ? article.body.split(" ").slice(0, 40).join(" ") +
      (article.body.split(" ").length > 40 ? "..." : "")
    : "No description avaliable.";
  return (
    <div
      className="article-card"
      style={{
        boder: "1px dashed #51545d",
        borderRadius: "10px",
        padding: "1rem",
        margin: "0.5rem",
      }}
    >
      <h2>{article.title}</h2>
      <p>
        <b>By:</b>
        {article.author} | <b>Date:</b>
        {new Date(article.created_at).toLocaleDateString()}
      </p>
      <p>{shortDesc}</p>
      <p>
        <b>Likes:</b> {article.votes} | <b>Comments:</b>
        {article.comment_count}
      </p>
    </div>
  );
}
