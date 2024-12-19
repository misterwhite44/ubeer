// src/Home.js

import React from "react";

function Home() {
  return (
    <div className="home">
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
    </div>
  );
}

export default Home;
