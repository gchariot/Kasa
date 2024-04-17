import React from 'react';
import { NavLink } from 'react-router-dom';

function Error() {
    return (
        <main role="main" aria-label="Page non trouvée">
            <section className="error-container">
                <h1 className='title-error'>404</h1>
                <p className='p-error'>
                    Oups! La page que vous demandez n'existe pas.
                </p>
                <NavLink className='link-error' end to="/home">
                    Retourner sur la page d'accueil
                </NavLink>
            </section>
        </main>
    );
};

export default Error;