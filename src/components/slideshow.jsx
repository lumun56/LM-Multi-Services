import { useState, useEffect } from "react";
import img1 from "../assets/Electric/SD & ATS.jpg";
import img2 from "../assets/Electric/P3.jpg";
import img3 from "../assets/Electric/FL1.jpg";
import img4 from "../assets/Electric/FL5.jpg";
import img5 from "../assets/Network/1.jpg";
import img6 from "../assets/Network/6.jpg";
import img7 from "../assets/SC1.jpg";
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
