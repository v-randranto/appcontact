import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-primary mb-3 py-0">
        <div className="container">
          <a href="/" className="navbar-brand">
            AppContact
          </a>
          <ul className="navbar-nav d-inline-block ">
            <li className="nav-item d-inline-block mr-3">
              <Link className="" to="/" className="nav-link">
                Accueuil
              </Link>
            </li>
            <li className="nav-item d-inline-block mr-3">
              <Link to="/about" className="nav-link">
                À propos
              </Link>
            </li>
            <li className="nav-item d-inline-block mr-3">
              <Link to="/add" className="nav-link">
                Ajout contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
