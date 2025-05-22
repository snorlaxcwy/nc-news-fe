import { Link, useLocation } from "react-router-dom";
import { AiFillHome, AiOutlinePlusCircle } from "react-icons/ai";
import { MdTopic } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

export default function Footer() {
  const location = useLocation();
  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "space-around",
        padding: "0.3rem 0",
        background: "#51545d",
        borderTop: "1px dashed #ffffff",
        color: "#ffffff",
        position: "fixed",
        width: "100%",
        bottom: 0,
        left: 0,
        zIndex: 100,
      }}
    >
      <Link to="/" className={location.pathname === "/" ? "active" : ""}>
        <AiFillHome size={28} />
      </Link>
      <Link
        to="/topics"
        className={location.pathname === "/topics" ? "active" : ""}
      >
        <MdTopic size={28} />
      </Link>
      <Link to="/add" className={location.pathname === "/add" ? "active" : ""}>
        <AiOutlinePlusCircle size={28} />
      </Link>
      <Link
        to="/login"
        className={location.pathname === "/login" ? "active" : ""}
      >
        <FaUserCircle size={28} />
      </Link>
    </footer>
  );
}
