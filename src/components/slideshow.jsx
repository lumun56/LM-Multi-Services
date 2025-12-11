import React, { useState, useEffect } from "react";
import img1 from "../assets/IMG-20240930-WA0029.jpg";
import img2 from "../assets/29.jpg";
import img3 from "../assets/31.jpg";
// import "../slideshow.css";

export default function Slideshow() {
  const slides = [
    {
      img: img1,
    },
    {
      img: img2,
    },
    {
      img: img3,
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
