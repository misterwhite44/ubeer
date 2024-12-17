import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <h1>Bière Express</h1>
        <nav>
          <ul>
            <li><a href="#home">Accueil</a></li>
            <li><a href="#services">Nos services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h2>Livraison de bière à domicile en un clic !</h2>
        <p>Profitez d'une sélection de bières artisanales livrées directement chez vous, rapidement et facilement.</p>
        <button className="cta-button">Commandez Maintenant</button>
      </section>

      {/* About Section */}
      <section className="about">
        <h3>Pourquoi choisir Bière Express ?</h3>
        <p>
          Nous proposons un large choix de bières locales et internationales, livrées en moins d'une heure. Parfait pour vos soirées entre amis ou vos moments de détente.
        </p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Bière Express - Tous droits réservés</p>
      </footer>
    </div>
  );
}

export default App;
