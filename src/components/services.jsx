import "../index.css";
import "../App.css";
import { NavLink } from "react-router-dom";

// Style function for active links
const navLinkStyles = ({ isActive }) => ({
  color: isActive ? "#007bff" : "#00ff04ff",
  textDecoration: isActive ? "none" : "underline",
  fontWeight: isActive ? "bold" : "normal",
  padding: "5px 10px",
});

export default function Services() {
  return (
    <section id="services" className="services-grid">
      <div className="card">
        <h3 className="item-title">
          <nav style={{ marginBottom: "20px" }}>
            <NavLink to="/electrical" style={navLinkStyles}>
              Electrical
            </NavLink>{" "}
          </nav>
        </h3>
        <p className="lead">
          Residential wiring, repair & rewiring, service panels installations &
          upgrade.
        </p>
      </div>
      <div className="card">
        <h3 className="item-title">IT & Device Support</h3>
        <p className="lead">
          Computer & phone repair & support, network wiring & setup, tech
          support.
        </p>
      </div>
      <div className="card">
        <h3 className="item-title">Handyman Services</h3>
        <p className="lead">
          General repairs, plumbing, appliance diagnostics.
        </p>
      </div>
    </section>
  );
}
