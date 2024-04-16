import React from 'react';
import PropTypes from 'prop-types';

const Banner = ({ title, src }) => {
    return (
        <div className="banner">
            <h1 className="banner_title">{title}</h1>
            <img src={src} alt="Bannière de Kasa" className='banner_img' loading="lazy" />
        </div>
    )
}

Banner.propTypes = {
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
};

export default Banner;