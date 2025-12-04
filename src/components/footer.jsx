import React from "react";
import WAicon from "../assets/whatsapp-icon.png";

export default function Footer() {
  return (
    <footer>
      © {new Date().getFullYear()} LM Multi-Services • Crafting Solutions Beyond
      the Expected <br></br> Call or WhatsApp:
      <a href="https://wa.me/5016153090">
        <img src={WAicon} width={15} height={15}></img> (+501) 615-3090
      </a>
    </footer>
  );
}
