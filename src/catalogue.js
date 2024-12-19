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
            {beer.image_url && (
              <img
                src={beer.image_url}
                alt={beer.name}
                className="beer-image"
              />
            )}
            <p><strong>Description :</strong> {beer.description || "Non spécifiée"}</p>
            <p><strong>Prix :</strong> {beer.price ? `${beer.price} €` : "Non spécifié"}</p>
            <p><strong>Brasserie ID :</strong> {beer.brewery_id || "Non spécifié"}</p>
            <p><strong>ID :</strong> {beer.id}</p>
            <button className="order-button">Commander</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalogue;
