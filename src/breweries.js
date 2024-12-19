import React, { useEffect, useState } from "react";
import "./css/breweries.css"; // Assure-toi de créer ce fichier pour le style

function Breweries() {
  const [breweries, setBreweries] = useState([]); // Stockage des brasseries
  const [loading, setLoading] = useState(true); // Indicateur de chargement
  const [error, setError] = useState(null); // Gestion des erreurs

  // Appel API pour récupérer les brasseries
  useEffect(() => {
    const fetchBreweries = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/breweries/"); // URL de ton API Flask pour breweries
        if (!response.ok) throw new Error("Erreur lors du chargement des brasseries.");

        const data = await response.json();
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
              <img
                src={brewery.image_url || "http://placekitten.com/200/300"} // Utilise une image par défaut si image_url est vide
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
