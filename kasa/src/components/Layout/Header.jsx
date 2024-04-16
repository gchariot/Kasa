import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo-kasa.png';

const Header = () => {
    // Fonction pour obtenir la classe de NavLink en fonction de l'état actif
    const getNavLinkClass = isActive => 
        `header_nav_link_navlink ${isActive ? 'header_nav_link_active' : 'header_nav_link_inactive'}`;

    return (
        <header className='header'>
            <div className='header_logo'>
                <img src={logo} alt='Logo de Kasa' className='header_logo_img' />
            </div>
            <nav className='header_nav'>
                <ul>
                    <li className='header_nav_link'>
                        <NavLink
                            className={({ isActive }) => getNavLinkClass(isActive)}
                            title='Accueil'
                            end to='/home'
                        >
                            Accueil
                        </NavLink>
                    </li>
                    <li className='header_nav_link'>
                        <NavLink
                            className={({ isActive }) => getNavLinkClass(isActive)}
                            title='À propos'
                            end to='/about'
                        >
                            À propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;