import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchCommentsByArticle } from "../api/comments";
import CommentCard from "./CommentCard";

export default function CommentList() {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetchCommentsByArticle(article_id)
      .then((comments) => {
        setComments(comments);
        setIsLoading(false);
      })
      .catch(() => {
        setError("Failed to load comments");
        setIsLoading(false);
      });
  }, [article_id]);

  if (isLoading) return <div>Loading comments...</div>;
  if (error) return <div>{error}</div>;
  if (comments.length === 0)
    return <div>No comments yet. Be the first one now!</div>;

  return (
    <div
      style={{
        border: "2px dashed # 51545d",
        borderRadius: "8px",
        margainTop: "0.5rem",
        marginBottom: "3rem",
        padding: "1rem",
      }}
    >
      <h4>Comments</h4>
      {comments.map((comment) => (
        <CommentCard key={comment.comment_id} comment={comment} />
      ))}
    </div>
  );
}
