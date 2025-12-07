// import React from "react";
import { NavLink } from "react-router-dom";
import SampleImage from "../assets/lmms_f.png";

// Style function for active links
const navLinkStyles = ({ isActive }) => ({
  color: isActive ? "#007bff" : "#00ff04ff",
  textDecoration: isActive ? "none" : "underline",
  fontWeight: isActive ? "bold" : "normal",
  padding: "5px 10px",
});

export default function Header() {
  return (
    <header className="site-header">
      <div className="brand">
        <div className="logo">
          <img src={SampleImage} alt="" height={25} width={25} />
        </div>
        <div className="brand-text">
          <div className="brand-title">LM Multi-Services</div>
          <div className="brand-sub">
            Crafting Solutions Beyond the Expected
          </div>
        </div>
      </div>

      <nav style={{ marginBottom: "20px" }}>
        <NavLink to="/" style={navLinkStyles}>
          Home
        </NavLink>{" "}
        |{" "}
        <NavLink to="/about" style={navLinkStyles}>
          About
        </NavLink>{" "}
        |{" "}
        <NavLink to="/ContactForm" style={navLinkStyles}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
}
