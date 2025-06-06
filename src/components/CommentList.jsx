import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchCommentsByArticle } from "../api/comments";
import CommentCard from "./CommentCard";
import AddComment from "./AddComment";

export default function CommentList({ currentUser }) {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // delete comment of current user, filter out non comment_id user
  function handleDelete(comment_id) {
    setComments((curr) => curr.filter((c) => c.comment_id != comment_id));
  }

  //add the new posted comment to the top
  function handleNewComment(newComment) {
    console.log(
      "[Add] newComment.author:",
      newComment.author,
      "currentUser:",
      currentUser,
      typeof currentUser
    );
    setComments((curr) => [newComment, ...curr]);
  }
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

  return (
    <div
      style={{
        border: "2px dashed #51545d",
        borderRadius: "10px",
        padding: "1rem",
        background: "#fafbfc",
        marginTop: "1.8rem",
        marginBottom: "2rem",
      }}
    >
      <h4
        style={{
          marginTop: 0,
          marginBottom: "1.3rem",
          fontWeight: 700,
          color: "#51545d",
          fontSize: "1.2rem",
          letterSpacing: "1px",
        }}
      >
        Comments
      </h4>
      {comments.length === 0 && (
        <div>No comments yet. Be the first one now!</div>
      )}
      {comments.map((comment) => (
        <CommentCard
          key={comment.comment_id}
          comment={comment}
          currentUser={currentUser}
          onDelete={handleDelete}
        />
      ))}
      <AddComment article_id={article_id} commentSuccess={handleNewComment} />
    </div>
  );
}
