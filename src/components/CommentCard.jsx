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
  console.log(
    "comment.author:",
    comment.author,
    "currentUser:",
    currentUser,
    typeof currentUser
  );
  console.log(
    "[CommentCard] comment.author:",
    comment.author,
    "currentUser:",
    currentUser,
    typeof currentUser
  );
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
        {comment.author === currentUser && (
          <>
            {" "}
            |{" "}
            <span
              onClick={handleDelete}
              style={{
                color: "orange",
                textDecoration: "underline",
                cursor: isDeleting ? "not-allowed" : "pointer",
                opacity: isDeleting ? 0.5 : 1,
              }}
              role="button"
              tabIndex={0}
              aria-disabled={isDeleting}
            >
              {isDeleting ? "Deleting..." : "Delete"}
            </span>
            {deleteError && (
              <div style={{ color: "orange " }}>{deleteError}</div>
            )}
          </>
        )}
      </small>
      <p>{comment.body}</p>

      <div>
        <b>Votes: </b>
        {comment.votes}
      </div>
    </div>
  );
}
