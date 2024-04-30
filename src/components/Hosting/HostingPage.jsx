import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import housings from '../../data/Logements.json';
import Slideshow from '../Layout/Slideshow';
import Collapse from '../Layout/Collapse';
import Rating from '../Layout/Rate';

const HostingContent = () => {
    const { id } = useParams(); // Utilisation de useParams pour récupérer l'id depuis l'URL
    const navigate = useNavigate();
    const housing = housings.find((housing) => housing.id === id); // Trouver le logement correspondant par l'id

    useEffect(() => {
        if (!housing) {
            navigate('/error404');
        }
    }, [housing, navigate]); // Dépendances de l'effet pour éviter les appels excessifs

    // Condition pour ne rien rendre si housing est undefined
    if (!housing) {
        return null;
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
                    <Rating score={parseInt(housing.rating)} /> {}
                    
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