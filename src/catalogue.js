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
        const response = await fetch("https://api.example.com/beers"); // Remplace par ton URL API
        if (!response.ok) throw new Error("Erreur lors du chargement des bières.");
        
        const data = await response.json();
        setBeers(data); // Mettre à jour les bières
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
            <img src={beer.image_url} alt={beer.name} className="beer-image" />
            <h3>{beer.name}</h3>
            <p>{beer.description}</p>
            <p className="beer-price">{beer.price}€</p>
            <button className="order-button">Commander</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalogue;
