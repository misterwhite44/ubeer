import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/cart.css";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => { //charge le panier
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    
    const updatedCart = storedCart.map(item => ({
      ...item,
      quantity: item.quantity || 1, 
    }));

    setCartItems(updatedCart);
  }, []);

  // Mettre à jour la quantité dans le panier
  const updateQuantity = (beerId, quantity) => {
    const updatedCart = cartItems.map((item) =>
      item.id === beerId ? { ...item, quantity: Math.max(1, parseInt(quantity, 10)) } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Supprimer une bière du panier
  const removeFromCart = (beerId) => {
    const updatedCart = cartItems.filter((item) => item.id !== beerId);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => {
        const itemPrice = parseFloat(item.price); 
        const itemQuantity = parseInt(item.quantity, 10); 
  
        if (!isNaN(itemPrice) && !isNaN(itemQuantity)) {
          return total + (itemPrice * itemQuantity); 
        } else {
          return total; 
        }
      }, 0) 
      .toFixed(2); // Retourner un total avec 2 décimales
  };

  return (
    <div className="cart-container">
      <h1>Mon Panier</h1>

      {cartItems.length === 0 ? (
        <p>Votre panier est vide. <Link to="/">Retour au catalogue</Link></p>
      ) : (
        <>
          <ul className="cart-list">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <div className="cart-item-details">
                  <div className="cart-item-info">
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                    <p>Prix : {item.price} €</p>
                  </div>
                  <div className="cart-item-quantity">
                    <label htmlFor={`quantity-${item.id}`}>Quantité :</label>
                    <input
                      type="number"
                      id={`quantity-${item.id}`}
                      value={item.quantity || 1}
                      min="1"
                      onChange={(e) => updateQuantity(item.id, e.target.value)}
                      className="quantity-input"
                    />
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="remove-button"
                >
                  Supprimer
                </button>
              </li>
            ))}
          </ul>

          <div className="order-section">
            <h2>Total : {calculateTotal()} €</h2>
            <h2>Passer Commande</h2>
            <Link to="/order">
              <button>Commander</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
