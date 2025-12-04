import React from "react";
import SampleImage from "../assets/lmms_f.png";

export default function Header() {
  return (
    <header className="site-header">
      <div className="brand">
        <div className="logo">
          <img src={SampleImage} alt="" height={50} width={50} />
        </div>
        <div className="brand-text">
          <div className="brand-title">LM Multi-Services</div>
          <div className="brand-sub">
            Crafting Solutions Beyond the Expected
          </div>
        </div>
      </div>

      <nav className="nav">
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
