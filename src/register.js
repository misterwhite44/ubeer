import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/login.css";

function Register() {
  const [pseudo, setPseudo] = useState(""); // Etat pour le pseudo
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState(""); // Etat pour l'adresse
  const [phoneNumber, setPhoneNumber] = useState(""); // Etat pour le numéro de téléphone
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    const requestData = {
      pseudo,
      email,
      password,
      address,
      phone_number: phoneNumber,
    };

    console.log("Données envoyées à l'API :", requestData); // Debugging des données

    try {
      const response = await fetch("http://127.0.0.1:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      // Vérification de la réponse
      if (!response.ok) {
        throw new Error("Inscription échouée");
      }

      const data = await response.json();
      console.log("Réponse de l'API :", data); // Debugging de la réponse de l'API

      if (data.message === "Utilisateur créé avec succès") {
        navigate("/login"); // Redirige vers la page de connexion
      } else {
        setError(data.error || "Une erreur est survenue.");
      }
    } catch (err) {
      console.error("Erreur lors de la soumission :", err); // Affiche l'erreur dans la console
      setError("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  return (
    <div className="auth-container">
      <h2>Inscription</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Pseudo :
          <input
            type="text"
            value={pseudo}
            onChange={(e) => setPseudo(e.target.value)}
            required
          />
        </label>
        <label>
          Email :
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Mot de passe :
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <label>
          Confirmer le mot de passe :
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        <label>
          Numéro de téléphone :
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </label>
        <label>
          Adresse :
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
        <button type="submit">S'inscrire</button>
      </form>
      {/* Lien vers la page de connexion si l'utilisateur a déjà un compte */}
      <div className="login-link">
        <p>Vous avez déjà un compte ? <a href="/login">Se connecter</a></p>
      </div>
    </div>
  );
}

export default Register;
