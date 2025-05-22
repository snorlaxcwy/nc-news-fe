import { useState } from "react";
import { postComment } from "../api/comments";

export default function AddComment({ article_id, commentSuccess }) {
  const [comment, setComment] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [error, setError] = useState(null);

  //no login page now, assume weegembump
  const username = "weegembump";

  function handleSubmit(e) {
    e.preventDefault();
    if (!comment.trim()) {
      return setError("Please enter a comment!");
    }
    //if posting
    setIsPosting(true);
    setError(null);
    postComment(article_id, { username, body: comment })
      //if posted successfullt
      .then((newComment) => {
        setComment(""); //clear body
        setIsPosting(false);
        commentSuccess(newComment); // laod to comment list
      })
      // if post failed
      .catch(() => {
        setError("Failed to post comment, please try again!");
        setIsPosting(false);
      });
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <b>Add your comement 💬 </b>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={4}
          style={{ width: "100%", marginTop: "0.3rem", resize: "vertical" }}
          disabled={isPosting}
        />
      </label>
      <br />
      <button
        type="submit"
        disabled={isPosting || !comment.trim()}
        style={{
          marginTop: "0.4rem",
          padding: "0.45em 1.5em",
          borderRadius: "1.2em",
          background: "#51545d",
          color: "#fff",
          fontWeight: "bold",
          border: "none",
          cursor: isPosting ? "not-allowed" : "pointer",
        }}
      >
        {isPosting ? "Sending..." : "Send"}
      </button>
      {error && <div>{error}</div>}
    </form>
  );
}
