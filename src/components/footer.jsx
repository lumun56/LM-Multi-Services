import WAicon from "../assets/whatsapp-icon.png";
import FBicon from "../assets/facebook-icon.png";
import IGicon from "../assets/instagram-icon.png";
import TTicon from "../assets/tiktok-icon.png";
import YTicon from "../assets/youtube-icon.png";

export default function Footer() {
  return (
    <footer>
      © {new Date().getFullYear()} LM Multi-Services • Crafting Solutions Beyond
      the Expected
      <br /> <br />
      Call or WhatsApp:{" "}
      <a
        href="https://wa.me/5016153090"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={WAicon} width={15} height={15}></img> (+501) 615-3090
      </a>
      <br />
      <br />
      <div ClassName="flex flex">
        Like & Follow on:{"  "}
        <a
          href="https://www.facebook.com/Sir.O.See.Production"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={FBicon} width={30} height={30}></img>
        </a>
        {"  "}
        <a
          href="https://www.instagram.com/siroseemms/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={IGicon} width={30} height={30}></img>
        </a>
        {"  "}
        <a
          href="https://www.tiktok.com/@siroseemms"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={TTicon} width={30} height={30}></img>
        </a>
        {"  "}
        <a
          href="https://www.youtube.com/@luismunoz78"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={YTicon} width={30} height={30}></img>
        </a>
      </div>
    </footer>
  );
}
