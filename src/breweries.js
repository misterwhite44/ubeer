import React, { useEffect, useState } from "react";
import "./css/breweries.css";
import { FiPlus } from "react-icons/fi";

//const BASE_URL = "https://back-ubeers.onrender.com";
const BASE_URL = process.env.REACT_APP_API_URL_PROD;

function Breweries() {
  const [breweries, setBreweries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [showForm, setShowForm] = useState(false); // Afficher/Masquer le formulaire
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

  const handleFormSubmit = async (e) => {
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
      setBreweries([...breweries, newBreweryResponse]);
      setShowForm(false); // Masquer le formulaire après succès
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
      <nav className="navbar">
        <h1>Notre Liste de Brasseries</h1>
        <button className="add-beer-button" onClick={() => setShowForm((prev) => !prev)}>
        Ajouter une brasserie
        </button>

      </nav>
      {loading && <p>Chargement en cours...</p>}
      {error && <p className="error">{error}</p>}

      {showForm && (
        <div className="brewery-form-container">
          <h2>Ajouter une Nouvelle Brasserie</h2>
          <form onSubmit={handleFormSubmit}>
            <label>
              Nom :
              <input
                type="text"
                name="name"
                value={newBrewery.name}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Description :
              <textarea
                name="description"
                value={newBrewery.description}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Localisation :
              <input
                type="text"
                name="location"
                value={newBrewery.location}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              URL de l'image :
              <input
                type="url"
                name="image_url"
                value={newBrewery.image_url}
                onChange={handleInputChange}
              />
            </label>
            <button type="submit">Ajouter</button>
          </form>
          {addError && <p className="error">{addError}</p>}
        </div>
      )}

      <div className="brewery-grid">
        {breweries.map((brewery) => (
          <div key={brewery.id} className="brewery-card">
            <h3>{brewery.name}</h3>
            <p>Description : {brewery.description}</p>
            <p>Localisation : {brewery.location}</p>
            <img
              src={brewery.image_url || "https://via.placeholder.com/150"}
              alt={brewery.name}
              className="brewery-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Breweries;
