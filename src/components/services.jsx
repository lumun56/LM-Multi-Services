import React from "react";

export default function Services() {
  return (
    <section id="services" className="services-grid">
      <div className="card">
        <h3 className="item-title">Electrical</h3>
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
