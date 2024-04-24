import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import housings from '../../data/Logements.json'; // Assurez-vous que le chemin d'accès est correct
import Slideshow from '../Layout/Slideshow';
import Collapse from '../Layout/Collapse';

const HostingContent = () => {
    const { id } = useParams(); // Utilisation de useParams pour récupérer l'id depuis l'URL
    const housing = housings.find((housing) => housing.id === id); // Trouver le logement correspondant par l'id

    if (!housing) { // Gestion du cas où aucun logement correspondant n'est trouvé
        return (
            <section className="error_page">
                <p className="error_page_subtitle">
                    Malheureusement, le logement que vous recherchez n'est plus disponible ou n'existe pas.
                </p>
                <NavLink to='/home' className="error_page_link">
                    Retourner sur la page d'accueil
                </NavLink> 
            </section>
        );
    }

    return (
        <section key={housing.id} className='housing_page'>
            <Slideshow
                slides={housing.pictures} 
            />  

            <header className='housing_page_header'>
                <article className='housing_page_header_infos'>
                    <h1 className='housing_page_header_infos_title'>{housing.title}</h1>
                    <h2 className='housing_page_header_infos_subtitle'>{housing.location}</h2>
                    <div className='housing_page_header_infos_tags'>
                        {housing.tags.map((tag, index) => (
                            <p key={index} className='housing_page_header_infos_tags_tag'>{tag}</p>
                        ))}
                    </div>
                </article>
            
                <article className='housing_page_header_hoster'>
                    <div className='housing_page_header_hoster_infos'>
                        <p className='housing_page_header_hoster_infos_name'>{housing.host.name}</p>
                        <img src={housing.host.picture} alt='host-cover' className='housing_page_header_hoster_infos_img'/>
                    </div>
                </article>
            </header>

            <article className='housing_page_collapses'>
                <div className='housing_page_collapses_content'>
                    <Collapse
                        title='Description'
                        content={housing.description}
                    />
                </div>
                <div className='housing_page_collapses_content'>
                    <Collapse
                        title='Équipements'
                        content={<ul>{housing.equipments.map((equipment, i) => (
                            <li key={i}>• {equipment}</li>
                        ))}</ul>}
                    />
                </div>
            </article>
        </section>
    );
};

export default HostingContent;