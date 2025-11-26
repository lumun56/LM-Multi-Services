import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Welcome to LM Multi-Services</h1>
      <h6>CRAFTING SOLUTIONS BEYOND THE EXPECTED.</h6>
      <p>Page under construction</p>
      <h3>About</h3>
      <p>
        LM Multi-Services is a hands-on hub of innovation and repair — part
        digital artistry, part tech surgery, part electrical expertise, and
        all-around fixing. From reviving appliances and tweaking motorcycles to
        handling electrical systems and creative design work, this multifaceted
        workshop crafts solutions beyond the expected. Blending mechanical
        repairs, experimental innovation, and practical handyman skills, LM
        Multi-Services turns curiosity into creativity and broken things into
        better things.
      </p>
    </>
  );
}

export default App;
