import "../App.css";
import "../index.css";
import eimg1 from "../assets/Electric/FL2.jpg";
import eimg2 from "../assets/Electric/FL3.jpg";
import eimg3 from "../assets/Electric/FL4.jpg";
import eimg4 from "../assets/Electric/MP & SP.jpeg";
import eimg5 from "../assets/Electric/P1.jpg";
import eimg6 from "../assets/Electric/P2.jpg";

export default function Electrical() {
  return (
    <>
      <h1>Electrical Services</h1>
      <div className="tiles">
        <div>
          <img src={eimg1} height={400} width={350}></img>
        </div>
        <div>
          <img src={eimg2} height={400} width={350}></img>
        </div>
        <div>
          <img src={eimg3} height={400} width={350}></img>
        </div>
        <div>
          <img src={eimg4} height={650} width={350}></img>
        </div>
        <div>
          <img src={eimg5} height={700} width={350}></img>
        </div>
        <div>
          <img src={eimg6} height={700} width={350}></img>
        </div>
      </div>
    </>
  );
}
