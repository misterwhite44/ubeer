import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./header";
import Footer from "./footer";
import Catalogue from "./catalogue";
import Breweries from "./breweries"; // Assurez-vous d'importer Breweries ici

function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        <Routes>
          {/* Page d'accueil */}
          <Route
            path="/"
            element={
              <>
                {/* Hero Section */}
                <section className="hero">
                  <h2>Livraison de bière à domicile en un clic !</h2>
                  <p>
                    Profitez d'une sélection de bières artisanales livrées directement chez vous,
                    rapidement et facilement.
                  </p>
                  <button className="cta-button">Commandez Maintenant</button>
                </section>

                {/* About Section */}
                <section className="about">
                  <h3>Pourquoi choisir Bière Express ?</h3>
                  <p>
                    Nous proposons un large choix de bières locales et internationales, livrées en
                    moins d'une heure. Parfait pour vos soirées entre amis ou vos moments de
                    détente.
                  </p>
                </section>
              </>
            }
          />

          {/* Page Catalogue */}
          <Route path="/catalogue" element={<Catalogue />} />

          {/* Page Breweries */}
          <Route path="/breweries" element={<Breweries />} /> {/* Ajouter la route pour Breweries */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
