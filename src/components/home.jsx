import Slideshow from "./slideshow.jsx";
import "../slideshow.css";

export default function Home() {
  return (
    <div>
      <h1>Welcome to LM Multi-Services</h1>
      <div style={{ padding: "20px" }}>
        <Slideshow />
      </div>
    </div>
  );
}
