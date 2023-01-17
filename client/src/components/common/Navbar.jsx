import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="header">
      <div className="container d_flex">
        <div className="categories d_flex">
          <span className="fa-solid fa-border-all" />
          <h4>
            Catégories <i className="fa-solid fa-chevron-down" />
          </h4>
        </div>
        <div className="navLink">
          <ul className="link f_flex capitalize">
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/articles">Articles</Link>
            </li>
            <li>
              <Link to="/connexion">Connexion</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
