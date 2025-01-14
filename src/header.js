import React from "react";
import { Link } from "react-router-dom";
import "./css/header.css";
import LoginButton from "./login";

function Header() {
  return (
    <header className="header">
      <h1>Ubeers</h1>
      <nav>
        <ul>
          <li>
            <Link to="/home">Accueil</Link>
          </li>
          <li>
            <Link to="/catalogue">Catalogue</Link>
          </li>
          <li>
            <Link to="/breweries">Brasseries</Link> {/* Nouveau bouton pour Brasseries */}
          </li>
          <li>
            <Link to="/login">Connexion</Link>
          </li>
          <li>
            <Link to="/userProfile">Profil</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
