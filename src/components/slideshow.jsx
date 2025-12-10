import React, { useState, useEffect } from "react";
// import "../slideshow.css";

export default function Slideshow() {
  const slides = [
    {
      img: "../assets/IMG-20240930-WA0029.jpg",
    },
    {
      img: "../assets/29.jpg",
    },
    {
      img: "../assets/31.jpg",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div>
      <div className="slideshow-container">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`mySlides fade`}
            style={{ display: i === index ? "block" : "none" }}
          >
            <div className="numbertext">
              {i + 1} / {slides.length}
            </div>

            <img src={slide.img} style={{ width: "100%" }} />
          </div>
        ))}
      </div>

      <br />

      <div style={{ textAlign: "center" }}>
        {slides.map((_, i) => (
          <span key={i} className={`dot ${i === index ? "active" : ""}`}></span>
        ))}
      </div>
    </div>
  );
}
