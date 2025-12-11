import "../App.css";
import "../index.css";
import eimg1 from "../assets/IMG_20240930_173449_HDR.jpg";
import eimg2 from "../assets/IMG-20240930-WA0029.jpg";

export default function Electrical() {
  return (
    <>
      <h1>Electrical Services</h1>
      <div className="tiles">
        <div>
          <img src={eimg1} height={350} width={350}></img>
        </div>
        <div>
          <img src={eimg2} height={350} width={350}></img>
        </div>
      </div>
    </>
  );
}
