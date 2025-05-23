import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchTopics } from "../api/topics";

export default function TopicsList() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetchTopics()
      .then((topics) => {
        console.log("topics:", topics);
        setTopics(topics);
      })
      .catch((err) => {
        console.error("Failed to fetch topics", err);
      });
  }, []);

  return (
    <div style={{ padding: "1.5rem", marginTop: "1.2rem" }}>
      <h2 style={{ marginBottom: "1rem", fontWeight: 700, color: "#51545D" }}>
        PICK YOUR FAVOURITE TOPIC!
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1.1rem",
        }}
      >
        {topics.map((topic) => (
          <Link
            to={`/topics/${topic.slug}`}
            key={topic.slug}
            style={{ textDecoration: "none" }}
          >
            <div
              style={{
                background: "#f5f6fa",
                marginTop: "2rem",
                borderRadius: "12px",
                minHeight: "180px",
                minWidth: "300px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                fontSize: "1.12rem",
                color: "#51545d",
                boxShadow: "0 3px 14px #51545d18",
                border: "1.2px solid #dedede",
                transition: "box-shadow 0.12s",
              }}
            >
              {topic.slug.charAt(0).toUpperCase() + topic.slug.slice(1)}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
