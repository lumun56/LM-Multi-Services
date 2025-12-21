import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Home from "./components/home";
import Services from "./components/services";
import About from "./components/about";
import Electrical from "./components/electrical";
import ITServices from "./components/itservices";

// Style function for active links
const navLinkStyles = ({ isActive }) => ({
  color: isActive ? "#007bff" : "#333",
  textDecoration: isActive ? "none" : "underline",
  fontWeight: isActive ? "bold" : "normal",
  padding: "5px 10px",
});

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <Header />

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />}>
            <Route path="electrical" element={<Electrical />} />
            <Route path="itservices" element={<ITServices />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
