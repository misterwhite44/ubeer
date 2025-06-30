import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./css/order.css";

function Orders() {
  const [cartItems, setCartItems] = useState([]);
  const [userId, setUserId] = useState("");
  const [address, setAddress] = useState("");
  const [deliveryDateToShow, setDeliveryDateToShow] = useState(""); 
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);

    //recupere l'url de la variable d'environnement
    //fetch("REACT_APP_API_URL_PROD/users/")
    fetch("https://back-ubeers.onrender.com/users/")

      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setUsers(data);
        } else {
          console.error("Les utilisateurs ne sont pas dans un tableau :", data);
        }
      })
      .catch((error) => console.error("Erreur lors du chargement des utilisateurs", error));
  }, []);

  const generateRandomDeliveryDate = () => {
    const today = new Date();
    const randomDays = Math.floor(Math.random() * 7) + 1; 
    today.setDate(today.getDate() + randomDays);
    return today.toISOString().slice(0, 16);  //retourner la date au bon format
  };

  const determineStatus = (deliveryDate) => {
    const currentDate = new Date();
    const deliveryDateObj = new Date(deliveryDate);

    if (currentDate >= deliveryDateObj) {
      return "Delivered";
    }
    return "Pending";
  };

  const handleOrderSubmit = async (e) => {
    e.preventDefault();

    if (!userId || !address) {
      alert("Veuillez sélectionner un utilisateur et entrer une adresse.");
      return;
    }

    const generatedDeliveryDate = generateRandomDeliveryDate(); 
    const orderStatus = determineStatus(generatedDeliveryDate); 

    setDeliveryDateToShow(generatedDeliveryDate);

    setTimeout(() => {
      setDeliveryDateToShow(""); 
      localStorage.removeItem("cart"); 
      navigate("/"); 
    }, 5000);

    for (let item of cartItems) {
      const deliveryData = {
        beer_id: item.id,
        quantity: item.quantity,
        delivery_address: address,
        delivery_date: generatedDeliveryDate, 
        status: orderStatus, 
        user_id: userId,
      };

      try {
        //const response = await fetch("https://back-ubeers.onrender.com/deliveries/", {
        const response = await fetch("https://back-ubeers.onrender.com/deliveries/", {

          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(deliveryData),
        });

        if (!response.ok) {
          throw new Error("Erreur lors de la validation de la commande.");
        }
      } catch (error) {
        console.error("Erreur lors de la soumission de la commande", error);
        alert("Erreur lors de la validation de la commande.");
        return;
      }
    }

    alert("Commande validée avec succès !");
  };

  return (
    <div className="orders-container">
      <h1>Passer une commande</h1>

      <form onSubmit={handleOrderSubmit} className="order-form">
        <label htmlFor="user-select">Sélectionnez un utilisateur :</label>
        <select
          id="user-select"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
        >
          <option value="">-- Sélectionnez un utilisateur --</option>
          {users.length > 0 ? (
            users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.pseudo} (ID: {user.id})
              </option>
            ))
          ) : (
            <option value="">Aucun utilisateur disponible</option>
          )}
        </select>

        <label htmlFor="address">Adresse de livraison :</label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />

        <h3>Articles dans le panier :</h3>
        {cartItems.length === 0 ? (
          <p>Votre panier est vide.</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index}>
              <p>{item.name} - {item.quantity} x {item.price} €</p>
            </div>
          ))
        )}

        <button type="submit">Valider la commande</button>
      </form>

      {deliveryDateToShow && (
        <div className="delivery-date-display">
          <h2>Date de livraison: {deliveryDateToShow}</h2>
        </div>
      )}
    </div>
  );
}

export default Orders;
