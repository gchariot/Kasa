import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo-kasa.png';

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <img src={logo} alt="Logo de Kasa" className="header__logo-img" />
            </div>
            <nav className="header__nav">
                <ul className="header__nav-list">
                    <li className="header__nav-item">
                        <NavLink
                            to="/home"
                            end
                            className={({ isActive }) =>
                                isActive
                                    ? "header__nav-link header__nav-link--active"
                                    : "header__nav-link"
                            }
                            title="Accueil"
                        >
                            Accueil
                        </NavLink>
                    </li>
                    <li className="header__nav-item">
                        <NavLink
                            to="/about"
                            end
                            className={({ isActive }) =>
                                isActive
                                    ? "header__nav-link header__nav-link--active"
                                    : "header__nav-link"
                            }
                            title="À propos"
                        >
                            A Propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;