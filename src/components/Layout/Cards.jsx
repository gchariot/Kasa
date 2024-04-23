import React from 'react';
import PropTypes from 'prop-types'; 

const Card = ({ id, title, cover }) => {
    // Utilisation de template literals pour construire l'URL de manière plus lisible
    const url = `/hosting/${id}`;

    return (
        <li className='hosting'>
            <a href={url}>
                <figure className='hosting_figure'>
                    <img 
                        src={cover} 
                        alt={title} 
                        className='hosting_figure_cover'
                        loading="lazy" 
                    />
                    <figcaption className='hosting_figure_figcaption'>
                        <h2 className='hosting_figure_figcaption_title'>{title}</h2>
                    </figcaption>
                </figure>
            </a>
        </li>
    );
}

// Ajout de PropTypes pour une meilleure validation des types de props
Card.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired
};

export default Card;