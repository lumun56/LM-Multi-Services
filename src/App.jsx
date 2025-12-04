import { useState } from "react";
import "./App.css";
import ecp from "./assets/IMG-20240930-WA0029.jpg";
import nwimage from "./assets/29.jpg";
import Header from "./components/header";
import Services from "./components/services";
import ContactForm from "./components/ContactForm";
import Footer from "./components/footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <Header />
      <main className="container">
        <section className="hero card">
          <div>
            <h1>Electrical mastery with modern systems & smart support</h1>
            <p className="lead">
              Electrical services — installations, troubleshooting, and system
              upgrades. <br></br> IT & device support. <br></br> Other Handyman
              Services.
            </p>
          </div>
        </section>

        <Services />

        <section id="portfolio" className="portfolio card">
          <h2>Portfolio</h2>
          <div className="tiles">
            <div className="tile">
              Electrical<br></br>
              <img src={ecp} height={160} width={160}></img>
            </div>
            <div className="tile">
              Network Setup<br></br>
              <img src={nwimage} height={160} width={160}></img>
            </div>
            <div className="tile">Device Repair — Laptop/Phone</div>
          </div>
        </section>

        <section id="contact" className="card contact-section">
          <h2>Book a Service</h2>
          <ContactForm />
        </section>
      </main>
      <Footer />
      <section id="contactus"></section>
    </div>
  );
}

export default App;
