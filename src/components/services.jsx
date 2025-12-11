import "../index.css";
import "../App.css";
import { NavLink, Outlet } from "react-router-dom";

// Style function for active links
const navLinkStyles = ({ isActive }) => ({
  color: isActive ? "#d9f82aff" : "#00ff04ff",
  textDecoration: isActive ? "none" : "underline",
  fontWeight: isActive ? "bold" : "normal",
  padding: "5px 10px",
});

export default function Services() {
  return (
    <>
      <section id="services" className="services-grid">
        <div className="card">
          <h3 className="item-title">
            <NavLink to="./electrical" style={navLinkStyles}>
              Electrical
            </NavLink>{" "}
          </h3>
          <p className="lead">
            Residential wiring, repair & rewiring, service panels installations
            & upgrade.
          </p>
        </div>
        <div className="card">
          <h3 className="item-title">
            <NavLink to="./itservices" style={navLinkStyles}>
              IT Services
            </NavLink>{" "}
          </h3>
          <p className="lead">
            Computer & Devices: repair & support; Network wiring & setup;
            Security Camera installation; Tech Support.
          </p>
        </div>
        <div className="card">
          <h3 className="item-title">Handyman Services</h3>
          <p className="lead">
            General Works, Plumbing, Appliance Diagnostics.
          </p>
        </div>
      </section>
      <Outlet />
    </>
  );
}
