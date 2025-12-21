import "../App.css";
import "../index.css";
import WAicon from "../assets/whatsapp-icon.png";

export default function Contact() {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <h3>
        For inquiries,
        <br />
        Or to request a service,
        <br />
        please reach out to us:
      </h3>
      <br />
      <h4>
        Call or Text:
        <br />
        (+501) 615-3090
      </h4>
      <br />
      <h4>
        Whatsapp:{" "}
        <a
          href="https://wa.me/5016153090"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={WAicon} width={15} height={15}></img>
          <br /> <br />
          (+501) 615-3090
        </a>
      </h4>
      <br />
      <h4>
        Email:
        <br /> <a href="mailto:lu.mun.56@gmail.com">lu.mun.56@gmail.com</a>
        <br /> <br />
        Or:
        <br /> <a href="mailto:lu.mun.56@outlook.com">lu.mun.56@outlook.com</a>
      </h4>
    </div>
  );
}
