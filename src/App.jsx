import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Services from "./components/services";
import ContactForm from "./components/ContactForm";
import Footer from "./components/footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-root">
      <Header />
      <main className="container">
        <section className="hero card">
          <div>
            <h1>Electrical mastery with modern systems & smart support</h1>
            <p className="lead">
              Primary: Electrical services — installations, troubleshooting, and
              system upgrades. Secondary: IT & device support. Tertiary:
              Handyman & minor plumbing.
            </p>
            <div className="actions">
              <a className="btn" href="#contact">
                Request a Quote
              </a>
            </div>
          </div>
          <aside className="aside">
            <div className="quick">Phone / WhatsApp</div>
            <div className="contact-strong">+501 [your number]</div>
          </aside>
        </section>

        <Services />

        <section id="portfolio" className="portfolio card">
          <h2>Portfolio</h2>
          <div className="tiles">
            <div className="tile">Electrical — Before & After</div>
            <div className="tile">Network Setup — Small Business</div>
            <div className="tile">Device Repair — Laptop/Phone</div>
          </div>
        </section>

        <section id="contact" className="card contact-section">
          <h2>Book a Service</h2>
          <ContactForm />
        </section>
      </main>
      <Footer />
    </div>
    // <>
    //   <h1>Welcome to LM Multi-Services</h1>
    //   <h6>CRAFTING SOLUTIONS BEYOND THE EXPECTED.</h6>
    //   <p>Page under construction</p>
    //   <h3>About</h3>
    //   <p>
    //     LM Multi-Services is a hands-on hub of innovation and repair — part
    //     digital artistry, part tech surgery, part electrical expertise, and
    //     all-around fixing. From reviving appliances and tweaking motorcycles to
    //     handling electrical systems and creative design work, this multifaceted
    //     workshop crafts solutions beyond the expected. Blending mechanical
    //     repairs, experimental innovation, and practical handyman skills, LM
    //     Multi-Services turns curiosity into creativity and broken things into
    //     better things.
    //   </p>
    // </>
  );
}

export default App;
