import React, { useEffect, useState } from "react";
import "./css/catalogue.css";

function Catalogue() {
  const [beers, setBeers] = useState([]); // Stockage des bières
  const [breweries, setBreweries] = useState([]); // Stockage des brasseries
  const [selectedBrewery, setSelectedBrewery] = useState(""); // Brasserie sélectionnée
  const [loading, setLoading] = useState(true); // Indicateur de chargement
  const [error, setError] = useState(null); // Gestion des erreurs

  // Appel API pour récupérer les bières et les brasseries
  useEffect(() => {
    const fetchData = async () => {
      try {
        const beerResponse = await fetch("http://127.0.0.1:5000/beers/");
        const breweryResponse = await fetch("http://127.0.0.1:5000/breweries/");
        
        if (!beerResponse.ok || !breweryResponse.ok) {
          throw new Error("Erreur lors du chargement des données.");
        }

        const beerData = await beerResponse.json();
        const breweryData = await breweryResponse.json();

        setBeers(beerData);
        setBreweries(breweryData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Gestion du changement de brasserie sélectionnée
  const handleBreweryChange = (e) => {
    setSelectedBrewery(e.target.value);
  };

  // Filtrer les bières par brasserie
  const filteredBeers = selectedBrewery
    ? beers.filter((beer) => beer.brewery_id === parseInt(selectedBrewery))
    : beers;

  return (
    <div className="catalogue-container">
      <h1>Notre Catalogue de Bières</h1>
      {loading && <p>Chargement en cours...</p>}
      {error && <p className="error">{error}</p>}

      {/* Menu déroulant pour sélectionner une brasserie */}
      <div className="filter-container">
        <label htmlFor="brewery-select">Filtrer par brasserie :</label>
        <select
          id="brewery-select"
          value={selectedBrewery}
          onChange={handleBreweryChange}
        >
          <option value="">Toutes les brasseries</option>
          {breweries.map((brewery) => (
            <option key={brewery.id} value={brewery.id}>
              {brewery.name}
            </option>
          ))}
        </select>
      </div>

      {/* Affichage des bières */}
      <div className="beer-grid">
        {filteredBeers.map((beer) => (
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
