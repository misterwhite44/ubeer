import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/login.css";

function Register() {
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Ajout d'un état pour le chargement
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Vérification si les mots de passe correspondent
    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    // Données à envoyer à l'API
    const requestData = {
      pseudo,
      email,
      password,
      address,
      phone_number: phoneNumber,
    };

    setIsLoading(true); // Active le chargement
    setError(null); // Réinitialise les erreurs

    try {
      const response = await fetch("http://127.0.0.1:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      // Vérification de la réponse de l'API
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Inscription échouée.");
      }

      const data = await response.json();
      console.log("Réponse de l'API :", data);

      // Vérification du message de réussite
      if (data.message === "Utilisateur créé avec succès") {
        navigate("/login"); // Redirige l'utilisateur vers la page de connexion
      } else {
        setError(data.error || "Une erreur est survenue.");
      }
    } catch (err) {
      console.error("Erreur lors de la soumission :", err);
      setError(err.message || "Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsLoading(false); // Désactive le chargement
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
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Inscription en cours..." : "S'inscrire"}
        </button>
      </form>
      <div className="login-link">
        <p>
          Vous avez déjà un compte ? <a href="/login">Se connecter</a>
        </p>
      </div>
    </div>
  );
}

export default Register;

