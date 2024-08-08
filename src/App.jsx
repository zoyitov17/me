import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import AboutMe from "./pages/AboutMe";

function App() {
  return (
    <Router>
      <div className="relative max-w-[880px] min-h-screen mx-auto">
        <img
          src="/my-moto.jpg"
          alt="background-img"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        <div className="relative z-10 flex items-center justify-center w-full h-full">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/aboutme" element={<AboutMe />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
