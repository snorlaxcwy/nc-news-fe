import { useState } from "react";
import { deleteComment } from "../api/comments";

export default function CommentCard({ comment, currentUser, onDelete }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState(null);

  function handleDelete() {
    setIsDeleting(true);
    setDeleteError(null);
    deleteComment(comment.comment_id)
      .then(() => {
        onDelete(comment.comment_id);
      })
      .catch(() => {
        setDeleteError("Delete failed. Please retey later.");
        setIsDeleting(false);
      });
  }

  return (
    <div
      style={{
        border: "0.5px dashed #51545d",
        borderRadius: "8px",
        margin: "0.3rem",
        padding: "0.3rem",
        background: "#ffffff",
        textAlign: "left",
      }}
    >
      <small>
        {comment.author} | {new Date(comment.created_at).toLocaleString()}
      </small>
      <p>{comment.body}</p>

      <div>
        <b>Votes: </b>
        {comment.votes}
      </div>
      <button
        onClick={handleDelete}
        disabled={isDeleting}
        style={{
          color: "#fff",
          background: "#d90429",
          border: "none",
          borderRadius: "4px",
          padding: "0.2em 1.1em",
          fontWeight: "bold",
          cursor: isDeleting ? "not-allowed" : "pointer",
          position: "absolute",
          right: 12,
          top: 12,
        }}
      >
        {isDeleting ? "Deleting..." : "Delete"}
      </button>
      {deleteError && <div style={{ color: orange }}>{deleteError}</div>}
    </div>
  );
}
