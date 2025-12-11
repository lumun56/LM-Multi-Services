import "../App.css";
import "../index.css";
import itimg1 from "../assets/27.jpg";
import itimg2 from "../assets/26.jpg";
import itimg3 from "../assets/1.jpg";
import cimg1 from "../assets/32.jpeg";
import cimg2 from "../assets/33.jpg";
import cimg3 from "../assets/34.jpg";

export default function ITServices() {
  return (
    <>
      <h1>IT Services</h1>
      <h3>Network Wiring</h3>
      <div className="tiles">
        <div>
          <img src={itimg1} height={350} width={350}></img>
        </div>
        <div>
          <img src={itimg2} height={350} width={350}></img>
        </div>
        <div>
          <img src={itimg3} height={350} width={350}></img>
        </div>
      </div>
      <h3>Security Camera Installation</h3>
      <div className="tiles">
        <div>
          <img src={cimg1} height={350} width={350}></img>
        </div>
        <div>
          <img src={cimg2} height={350} width={350}></img>
        </div>
        <div>
          <img src={cimg3} height={350} width={350}></img>
        </div>
      </div>
    </>
  );
}
