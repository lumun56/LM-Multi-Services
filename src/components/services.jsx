import React from "react";

export default function Services() {
  return (
    <section id="services" className="services-grid">
      <div className="card">
        <h3 className="item-title">Electrical (Primary)</h3>
        <p className="lead">
          Residential & commercial wiring, fault finding, panels & protection.
        </p>
      </div>
      <div className="card">
        <h3 className="item-title">IT & Device Support (Secondary)</h3>
        <p className="lead">
          Computer & phone repair, network setup, remote tech support.
        </p>
      </div>
      <div className="card">
        <h3 className="item-title">Handyman & Plumbing</h3>
        <p className="lead">
          General repairs, minor plumbing, appliance diagnostics.
        </p>
      </div>
    </section>
  );
}
