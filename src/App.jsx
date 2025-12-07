import { useState } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/header";
import ContactForm from "./components/ContactForm";
import Footer from "./components/footer";
import Portfolio from "./components/about";
import home from "./pages/home";

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
          <Route path="/" element={<home />} />
          <Route path="/about" element={<Portfolio />} />
          <Route path="/ContactForm" element={<ContactForm />} />
        </Routes>
      </main>
      <Footer />
      <section id="contactus"></section>
    </div>
  );
}

export default App;
