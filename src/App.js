// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./css/App.css";
import Header from "./header";
import Footer from "./footer";
import Catalogue from "./catalogue";
import Breweries from "./breweries";
import Login from "./login";
import Home from "./home";
import Panier from "./cart";
import Order from "./order";
import Profile from "./userProfile";


function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/home" element={<Home />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/breweries" element={<Breweries />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Panier />} />
          <Route path="/order" element={<Order />} />
          <Route path="/userProfile" element={<Profile />} />

        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
