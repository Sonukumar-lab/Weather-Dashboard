import { motion } from "framer-motion";
import { Cloud } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="navbar card"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 30px",
        height: "80px"

      }}
    >
      {/* Logo */}
      <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Cloud />
          <h2 style={{ margin: 0 }}>SkyPulse</h2>
        </div>
      </a>

      {/* Navigation Links */}
      <div className="nav-links" style={{ display: "flex", gap: "15px" }}>
        <Link
          to="/"
          className={location.pathname === "/" ? "active" : ""}
        >
          Current
        </Link>

        <Link
          to="/historical"
          className={location.pathname === "/historical" ? "active" : ""}
        >
          Historical
        </Link>
      </div>
    </motion.div>
  );
};

export default Navbar;