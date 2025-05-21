import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-around",
        background: "#ffffff",
        color: "#51545D",
        position: "fixed",
        width: "100%",
        height: "12%",
        left: 0,
        zIndex: 100,
        top: 0,
      }}
    >
      <Link to={`/`} style={{ textDecoration: "none", color: "inherit" }}>
        <h2>Northcoders News</h2>
      </Link>
    </header>
  );
}
