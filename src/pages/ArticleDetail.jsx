import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchArticleById, patchArticleVotes } from "../api/articles";
import CommentList from "../components/CommentList";

export default function ArticleDetail(currentUser) {
  const { article_id } = useParams();
  const [article, setArticles] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [votes, setVotes] = useState(0);
  const [voteError, setVoteError] = useState(null);
  const [isVoting, setIsVoting] = useState(false);

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

  useEffect(() => {
    if (article) {
      return setVotes(article.votes);
    }
  }, [article]);

  function handleVote(change) {
    setVotes((curr) => curr + change);
    setIsVoting(true);
    setVoteError(null);
    patchArticleVotes(article.article_id, change)
      .then((updatedArticle) => {
        setVotes(updatedArticle.votes);
        setIsVoting(false);
      })
      .catch(() => {
        setVotes((curr) => curr - change);
        setVoteError("Failed to vote, please retry later!");
        setIsVoting(false);
      });
  }

  if (isLoading) return <div>Loading article...</div>;
  if (error) return <div>{error}</div>;
  if (!article) return <div>No article found.</div>;

  return (
    <div
      style={{
        maxWidth: "580px",
        boxShadow: "0 4px 24px #51545d33",
        border: "0.3px solid  #51545d",
        borderTop: "1px solid #51545d",
        borderRadius: "10px",
        padding: "2rem",
        marginTop: "2rem",
        marginBottom: "3.5rem",
        margin: "3.8rem auto 3.5rem auto",
        textAlign: "left",
      }}
    >
      <h2>{article.title}</h2>
      <p>
        <b>By:</b>
        {article.author} | <b>Date:</b>{" "}
        {new Date(article.created_at).toLocaleDateString()}
      </p>
      <p>{article.body}</p>
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
        <button
          onClick={() => handleVote(1)}
          disabled={isVoting}
          style={{
            background: "none",
            border: "none",
            fontSize: "1.25rem",
            cursor: isVoting ? "not-allowed" : "pointer",
          }}
        >
          ▲
        </button>
        <span
          style={{
            fontWeight: "bold",
            fontSize: "1.1rem",
            minWidth: "2rem",
            textAlign: "center",
          }}
        >
          {votes}
        </span>
        <button
          onClick={() => handleVote(-1)}
          disabled={isVoting}
          style={{
            background: "none",
            border: "none",
            fontSize: "1.25rem",
            cursor: isVoting ? "not-allowed" : "pointer",
          }}
        >
          ▼
        </button>
        <span style={{ marginLeft: "1.2rem" }}>
          <b>💬 Comments:</b> {article.comment_count}
        </span>
      </div>
      {/* <div>
        <b>Likes:</b>
        {votes}
        <button onClick={() => handleVote(1)} disabled={isVoting}>
          💕
        </button>
        <button onClick={() => handleVote(-1)} disabled={isVoting}>
          💔
        </button>
        | <b>Comments:</b>
        {article.comment_count}
      </div> */}
      {voteError && <p style={{ color: "orange" }}>{voteError}</p>}

      <hr />
      <CommentList currentUser={currentUser} />
    </div>
  );
}
