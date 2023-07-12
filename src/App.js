import React from "react";
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Farmers from "./Components/Farmers/Farmers";
import Login from "./Components/Nav/Login";
import Signup from "./Components/Nav/Signup";
import ForgetPass from "./Components/Pages/ForgetPass";
import AboutUs from "./Components/Home/AboutUs";
import ContactUs from "./Components/Home/ContactUs";

const App = () => {
  return (
    <Router>
      <div className="App bg-stone-950">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/farmers" element={<Farmers />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset" element={<ForgetPass />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
