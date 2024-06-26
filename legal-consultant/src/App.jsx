import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Services from "./pages/Services";
import MoreServices from "./pages/MoreServices";

// Initialize AOS once the component mounts

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/legal-consultant" element={<Services />} />
          <Route path="/learn-more/:id" element={<MoreServices/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
