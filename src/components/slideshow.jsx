import { useState, useEffect } from "react";
import img1 from "../assets/Electric/SD & ATS.webp";
import img2 from "../assets/Electric/P3.webp";
import img3 from "../assets/Electric/FL1.webp";
import img4 from "../assets/Electric/FL5.webp";
import img5 from "../assets/Network/1.webp";
import img6 from "../assets/Network/6.webp";
import img7 from "../assets/SC1.webp";
import "../slideshow.css";

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
    {
      img: img4,
    },
    {
      img: img5,
    },
    {
      img: img6,
    },
    {
      img: img7,
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
