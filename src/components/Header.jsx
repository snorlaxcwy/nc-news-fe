import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header
      style={{
        display: "flex",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#fff",
        color: "#51545D",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "56px",
        zIndex: 100,
        boxShadow: "0 2px 16px #51545d33",
      }}
    >
      <Link to={`/`} style={{ textDecoration: "none", color: "inherit" }}>
        <h2>Northcoders News</h2>
      </Link>
    </header>
  );
}
