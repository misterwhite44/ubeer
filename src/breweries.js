import React, { useEffect, useState } from "react";
import "./css/breweries.css";

const BASE_URL = "http://127.0.0.1:5000"; // URL de base de ton API

function Breweries() {
  const [breweries, setBreweries] = useState([]); // Stockage des brasseries
  const [loading, setLoading] = useState(true); // Indicateur de chargement
  const [error, setError] = useState(null); // Gestion des erreurs

  // Appel API pour récupérer les brasseries
  useEffect(() => {
    const fetchBreweries = async () => {
      try {
        const response = await fetch(`${BASE_URL}/breweries/`);
        if (!response.ok) throw new Error("Erreur lors du chargement des brasseries.");
        
        const data = await response.json();
        console.log(data); // Vérifie les données retournées par l'API

        setBreweries(data); // Met à jour la liste des brasseries
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBreweries();
  }, []);

  return (
    <div className="breweries-container">
      <h1>Notre Liste de Brasseries</h1>
      {loading && <p>Chargement en cours...</p>}
      {error && <p className="error">{error}</p>}

      {/* Affichage des brasseries */}
      <div className="brewery-grid">
        {breweries.length > 0 ? (
          breweries.map((brewery) => (
            <div key={brewery.id} className="brewery-card">
              <h3>{brewery.name}</h3>
              <p>Description : {brewery.description}</p>
              <p>Localisation : {brewery.location}</p>
              {/* Affichage de l'image */}
              <img
                src={brewery.image_url ? brewery.image_url : "https://via.placeholder.com/150"}
                alt={brewery.name}
                className="brewery-image"
              />
              <button className="details-button">Voir Détails</button>
            </div>
          ))
        ) : (
          <p>Aucune brasserie trouvée.</p>
        )}
      </div>
    </div>
  );
}

export default Breweries;
