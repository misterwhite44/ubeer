// src/App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./css/App.css";
import Header from "./header";
import Footer from "./footer";
import Catalogue from "./catalogue";
import Breweries from "./breweries";
import Login from "./login";
import Register from "./register";
import Home from "./home"; // Assurez-vous d'importer le fichier Home

function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        <Routes>
          {/* Page d'accueil */}
          <Route path="/" element={<Login />} /> {/* Page de connexion par défaut */}
          <Route path="/home" element={<Home />} /> {/* Ajouter la route pour Home */}

          {/* Page Catalogue */}
          <Route path="/catalogue" element={<Catalogue />} />

          {/* Page Breweries */}
          <Route path="/breweries" element={<Breweries />} />

          {/* Page d'inscription */}
          <Route path="/register" element={<Register />} />

          {/* Page de connexion */}
          <Route path="/login" element={<Login />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
