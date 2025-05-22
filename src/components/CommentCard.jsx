export default function CommentCard({ comment }) {
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
    </div>
  );
}
