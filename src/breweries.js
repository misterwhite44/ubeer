import React, { useEffect, useState } from "react";
import "./css/breweries.css";

const BASE_URL = "http://127.0.0.1:5000"; 

function Breweries() {
  const [breweries, setBreweries] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchBreweries = async () => {
      try {
        const response = await fetch(`${BASE_URL}/breweries/`);
        if (!response.ok) throw new Error("Erreur lors du chargement des brasseries.");
        
        const data = await response.json();
        console.log(data); 

        setBreweries(data); 
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

      <div className="brewery-grid">
        {breweries.length > 0 ? (
          breweries.map((brewery) => (
            <div key={brewery.id} className="brewery-card">
              <h3>{brewery.name}</h3>
              <p>Description : {brewery.description}</p>
              <p>Localisation : {brewery.location}</p>
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
