import React from 'react';
import hosting from '../../data/Logements.json';
import Cards from '../Layout/Cards';

const HomeCards = () => {
    return(
        <section className='hosting_container'>
            <ul className='hosting_list'>
                {hosting.map(({ id, title, cover }) => (
                    <Cards
                        key={id}
                        id={id}
                        title={title}
                        cover={cover}
                    />
                ))}
            </ul>
        </section>
    )
}

export default HomeCards;