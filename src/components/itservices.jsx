import "../App.css";
import "../index.css";
import itimg1 from "../assets/Network/2.webp";
import itimg2 from "../assets/Network/3.webp";
import itimg3 from "../assets/Network/4.webp";
import itimg4 from "../assets/Network/5.webp";
import itimg5 from "../assets/Network/1.webp";
import cimg1 from "../assets/SC1.webp";
import cimg2 from "../assets/SC2.webp";

export default function ITServices() {
  return (
    <>
      <h1>IT Services</h1>
      <h3>Network Wiring</h3>
      <div className="tiles">
        <div>
          <img src={itimg5} height={350} width={350}></img>
        </div>
        <div>
          <img src={itimg1} height={350} width={350}></img>
        </div>
        <div>
          <img src={itimg2} height={350} width={350}></img>
        </div>
        <div>
          <img src={itimg3} height={350} width={350}></img>
        </div>
        <div>
          <img src={itimg4} height={350} width={350}></img>
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
      </div>
    </>
  );
}
