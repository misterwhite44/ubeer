import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <h1>Bière Express</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/catalogue">Catalogue</Link>
          </li>
          <li>
            <Link to="/breweries">Brasseries</Link> {/* Nouveau bouton pour Brasseries */}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
