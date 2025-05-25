import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // after submission direct to the ArticleDetail page
import { postArticle } from "../api/articles"; //Post date to the backend

export default function AddArticle({ currentUser, topics }) {
  // props: topics limited the user to choose by select menu

  const [title, setTitle] = useState("");
  const [topic, setTopic] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [error, setError] = useState(null);

  //redirect user to the newly posted Article
  const navigate = useNavigate();

  //default the first topic
  useEffect(() => {
    if (topics && topics.length > 0) {
      setTopic(topics[0].slug);
    }
  }, [topics]);

  // Prevent use sumbit empty data
  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim() || !body.trim() || !topic) {
      setError("All fields are required.");
      return;
    }
    // condition
    setIsPosting(true);
    setError(null);
    // execute the function
    postArticle({
      title,
      topic,
      author: currentUser,
      body,
      article_img_url: image,
    })
      // after submission redirect to ArticelDetail
      .then((newArticle) => {
        setIsPosting(false);
        navigate(`/articles/${newArticle.article_id}`);
      })
      //error handling
      .catch(() => {
        setIsPosting(false);
        setError("Failed to post the news. Please retry!");
      });
  }
  return (
    <div
      style={{
        minWidth: "480px",
        maxWidth: "780px",
        textAlign: "left",
        justifyContent: "left",
      }}
    >
      <h2>Create Post!</h2>
      {/* {form} */}
      <form onSubmit={handleSubmit}>
        {/* Title */}
        <div>
          <label>
            News Title: <br />
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{ width: "100%", marginBottom: "1rem" }}
              disabled={isPosting}
            />
          </label>
        </div>
        {/* Topic */}
        <div>
          <label>
            Topic: <br />
            {topics && topics.length > 0 && (
              <select
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                style={{ width: "100%", marginBottom: "1rem" }}
                disabled={isPosting}
              >
                {/* dropdown menu option */}
                {topics.map((t) => (
                  <option value={t.slug} key={t.slug}>
                    {t.slug.charAt(0).toUpperCase() +
                      t.slug.slice(1).toLowerCase()}
                  </option>
                ))}
              </select>
            )}
          </label>
        </div>
        {/* Description */}
        <div>
          <label>
            Description: <br />
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows={6}
              style={{ width: "100%", marginBottom: "1rem" }}
              disabled={isPosting}
            />
          </label>
        </div>
        <div>
          <label>
            Image URL (optional):
            <br />
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              style={{ width: "100%", marginBottom: "1rem" }}
              disabled={isPosting}
            />
          </label>
        </div>
        {/* Post Button */}
        <button
          className="post-btn"
          type="submit"
          disabled={isPosting}
          style={{
            margin: "1rem 1rem 1rem 0",
            padding: "0.5em 1.5em",
            borderRadius: "12px",
            background: "#ffffff",
            fontWeight: "bold",
            border: "1px solid #51545d",
            cursor: isPosting ? "not-allowed" : "pointer",
          }}
        >
          {isPosting ? "Posting..." : "Post!"}
        </button>
        {/* Posting Error Handling */}
        {error && (
          <div style={{ color: "orange", marginTop: "1rem" }}>{error}</div>
        )}
      </form>
    </div>
  );
}
