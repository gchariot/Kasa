import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <header>
        <ul>
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/">A Propos</NavLink>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Navigation;
