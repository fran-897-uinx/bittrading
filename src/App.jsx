import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Career from "./Career";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/careers" element={<Career />} />
    </Routes>
  );
}

export default App;
