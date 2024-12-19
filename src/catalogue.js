import React, { useEffect, useState } from "react";
import "./catalogue.css";

function Catalogue() {
  const [beers, setBeers] = useState([]); // Stockage des bières
  const [loading, setLoading] = useState(true); // Indicateur de chargement
  const [error, setError] = useState(null); // Gestion des erreurs

  // Appel API pour récupérer les bières
  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/beers/"); // URL de ton API Flask
        if (!response.ok) throw new Error("Erreur lors du chargement des bières.");

        const data = await response.json();
        setBeers(data); // Met à jour la liste des bières
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBeers();
  }, []);

  return (
    <div className="catalogue-container">
      <h1>Notre Catalogue de Bières</h1>
      {loading && <p>Chargement en cours...</p>}
      {error && <p className="error">{error}</p>}

      {/* Affichage des bières */}
      <div className="beer-grid">
        {beers.map((beer) => (
          <div key={beer.id} className="beer-card">
            <h3>{beer.name}</h3>
            <p>Type : {beer.type}</p>
            <p>Brasserie : {beer.brewery}</p>
            <p>Quantité : {beer.quantity}</p>
            <p>Taux d'alcool : {beer.abv}%</p>
            <button className="order-button">Commander</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalogue;
