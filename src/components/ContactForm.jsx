import React, { useState } from "react";
import "../App.css";
import "../index.css";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    // local-only demo submission
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  }
  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <input name="name" placeholder="Your name" required />
      <input name="contact" placeholder="Phone" required />
      <select name="service" required>
        <option value="">Choose service</option>
        <option>Electrical Services</option>
        <option>Professional IT Support Services</option>
        <option>Other Handyman Services</option>
      </select>
      <textarea
        name="details"
        rows="4"
        placeholder="Details, location, best time"
      />
      <div style={{ display: "flex", gap: 10 }}>
        <button className="btn" type="submit">
          Submit Request
        </button>
        <button
          type="button"
          onClick={(e) => e.target.closest("form").reset()}
          style={{
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.04)",
            color: "#9fb3bd",
            padding: "10px",
            borderRadius: 10,
          }}
        >
          Clear
        </button>
      </div>
      {sent && (
        <div style={{ color: "#0ea5a3", fontWeight: 800, marginTop: 8 }}>
          Request prepared locally — add backend to submit.
        </div>
      )}
    </form>
  );
}
