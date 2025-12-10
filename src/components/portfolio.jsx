import "../App.css";
import "../index.css";
import ecp from "../assets/IMG-20240930-WA0029.jpg";
import nwimage from "../assets/29.jpg";
import scimage from "../assets/33.jpg";

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio card">
      <div className="tiles">
        <div className="tile">
          Electrical
          <br></br>
          <img src={ecp} height={160} width={160}></img>
        </div>
        <div className="tile">
          Network Setup<br></br>
          <img src={nwimage} height={160} width={160}></img>
        </div>
        <div className="tile">
          Security Camera installation<br></br>
          <img src={scimage} height={160} width={160}></img>
        </div>
        <div className="tile">Device Repair — Laptop/Phone</div>
      </div>
    </section>
  );
}
