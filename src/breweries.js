import React, { useEffect, useState } from "react";
import "./css/breweries.css";

const BASE_URL = "https://back-ubeers.onrender.com";

function Breweries() {
  const [breweries, setBreweries] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  const [newBrewery, setNewBrewery] = useState({
    name: "",
    description: "",
    location: "",
    image_url: "",
  }); 
  const [addError, setAddError] = useState(null); 

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBrewery({ ...newBrewery, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAddError(null);

    try {
      const response = await fetch(`${BASE_URL}/breweries/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBrewery),
      });

      if (!response.ok) throw new Error("Erreur lors de l'ajout de la brasserie.");

      const newBreweryResponse = await response.json();
      setBreweries((prevBreweries) => [...prevBreweries, newBreweryResponse]);
      setNewBrewery({
        name: "",
        description: "",
        location: "",
        image_url: "",
      });
    } catch (err) {
      setAddError(err.message);
    }
  };

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

      <h2>Ajouter une Brasserie</h2>
      <form onSubmit={handleSubmit} className="brewery-form">
        <div>
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            id="name"
            name="name"
            value={newBrewery.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={newBrewery.description}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="location">Localisation</label>
          <input
            type="text"
            id="location"
            name="location"
            value={newBrewery.location}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="image_url">URL de l'image</label>
          <input
            type="url"
            id="image_url"
            name="image_url"
            value={newBrewery.image_url}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Ajouter</button>
      </form>
      {addError && <p className="error">{addError}</p>}
    </div>
  );
}

export default Breweries;
