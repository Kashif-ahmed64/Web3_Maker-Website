// import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Section2 from "./components/Section2";
import Future from "./components/Future";

function App() {
  return (
    <div>
      <Navbar />

      <HeroSection />
      <Section2 />
      <Future />
      <Footer />
    </div>
  );
}

export default App;
