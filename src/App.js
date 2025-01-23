import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Student  from "./Components/Student/Student";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student" element={<Student />} />
        <Route path="/about" element={<About />} /> {/* Add About Route */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;