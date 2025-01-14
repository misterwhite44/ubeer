import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./css/catalogue.css";
import { FiShoppingCart } from "react-icons/fi";

function Catalogue() {
  const [beers, setBeers] = useState([]);
  const [breweries, setBreweries] = useState([]);
  const [selectedBrewery, setSelectedBrewery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [newBeer, setNewBeer] = useState({
    name: "",
    description: "",
    price: "",
    brewery_id: "",
  });
  const [editBeer, setEditBeer] = useState(null);

  // Charger les bières et les brasseries depuis l'API
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

  // Charger le compteur de panier depuis localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(storedCart.length);
  }, []);

  // Fonction pour ajouter une bière au panier
  const addToCart = (beer) => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = [...storedCart, beer];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartCount(updatedCart.length);
  };

  // Fonction pour modifier une bière
  const handleEditBeer = (beer) => {
    setEditBeer(beer);
    setShowForm(true);
    setNewBeer({
      name: beer.name,
      description: beer.description,
      price: beer.price,
      brewery_id: beer.brewery_id,
    });
  };

  // Fonction pour supprimer une bière
  const handleDeleteBeer = async (beerId) => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/beers/${beerId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        // Mettre à jour l'état local pour supprimer la bière de l'affichage
        setBeers((prevBeers) => prevBeers.filter((beer) => beer.id !== beerId));
      } else {
        throw new Error("Erreur lors de la suppression de la bière");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  // Fonction pour envoyer le formulaire d'ajout/édition de bière
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const url = editBeer ? `http://127.0.0.1:5000/beers/${editBeer.id}` : "http://127.0.0.1:5000/beers/";
    const method = editBeer ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBeer),
      });
      if (response.ok) {
        if (editBeer) {
          setBeers(
            beers.map((beer) =>
              beer.id === editBeer.id ? { ...beer, ...newBeer } : beer
            )
          );
        } else {
          const newBeerData = await response.json();
          setBeers([...beers, newBeerData]);
        }
        setShowForm(false);
        setEditBeer(null);
      } else {
        throw new Error("Erreur lors de l'ajout ou de la modification de la bière");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const handleBreweryChange = (e) => {
    setSelectedBrewery(e.target.value);
  };

  const filteredBeers = selectedBrewery
    ? beers.filter((beer) => beer.brewery_id === parseInt(selectedBrewery))
    : beers;

  return (
    <div className="catalogue-container">
      <nav className="navbar">
        <h1>Notre Catalogue de Bières</h1>
        <div className="left-container">
          <button className="add-beer-button" onClick={() => setShowForm(true)}>
            Ajouter une bière
          </button>
          <div className="cart-logo">
            <Link to="/cart">
              <FiShoppingCart size={24} />
              <span className="cart-count">{cartCount}</span>
            </Link>
          </div>
        </div>
      </nav>

      {loading && <p>Chargement en cours...</p>}
      {error && <p className="error">{error}</p>}

      {/* Formulaire d'ajout de bière */}
      {showForm && (
        <div className="beer-form-container">
          <h2>{editBeer ? "Modifier la bière" : "Ajouter une nouvelle bière"}</h2>
          <form onSubmit={handleFormSubmit}>
            <label>
              Nom de la bière :
              <input
                type="text"
                name="name"
                value={newBeer.name}
                onChange={(e) => setNewBeer({ ...newBeer, name: e.target.value })}
                required
              />
            </label>
            <label>
              Description :
              <textarea
                name="description"
                value={newBeer.description}
                onChange={(e) => setNewBeer({ ...newBeer, description: e.target.value })}
              />
            </label>
            <label>
              Prix :
              <input
                type="number"
                name="price"
                value={newBeer.price}
                onChange={(e) => setNewBeer({ ...newBeer, price: e.target.value })}
                step="0.01"
              />
            </label>
            <label>
              Brasserie :
              <select
                name="brewery_id"
                value={newBeer.brewery_id}
                onChange={(e) => setNewBeer({ ...newBeer, brewery_id: e.target.value })}
                required
              >
                <option value="">Sélectionnez une brasserie</option>
                {breweries.map((brewery) => (
                  <option key={brewery.id} value={brewery.id}>
                    {brewery.name}
                  </option>
                ))}
              </select>
            </label>
            <button type="submit">{editBeer ? "Mettre à jour la bière" : "Ajouter la bière"}</button>
            <button type="button" onClick={() => setShowForm(false)}>
              Annuler
            </button>
          </form>
        </div>
      )}

      {/* Filtre par brasserie */}
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
            <button className="add-to-cart-button" onClick={() => addToCart(beer)}>
              Ajouter au panier
            </button>
            <button className="edit-button" onClick={() => handleEditBeer(beer)}>
              Modifier
            </button>
            <button className="delete-button" onClick={() => handleDeleteBeer(beer.id)}>
              Supprimer
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalogue;
