import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./Header";
import Home from "./pages/Home";
import About from "./pages/About";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
