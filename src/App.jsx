import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { GlobalStyles } from "@mui/material";

import Home from "./views/Home";
import Contact from "./views/Contact";
import Aboutme from "./views/Aboutme";
import Skills from "./views/Skills";
import Experience from "./views/Experience";

function App() {
  return (
    <BrowserRouter>
      {/* 👇 เพิ่ม GlobalStyles ที่นี่ */}
      <GlobalStyles
        styles={{
          html: { margin: 0, padding: 0, backgroundColor: "#0D0D0D" },
          body: {
            margin: 0,
            padding: 0,
            backgroundColor: "#0D0D0D",
            color: "white",
          },
          "*": { boxSizing: "border-box" },
        }}
      />

      {/* 👇 Routes ของคุณ */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<Aboutme />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work" element={<Experience />} />
        {/* <Route path="/register" element={<PageC />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
