import React from 'react';
import Banner from '../Layout/Banner';
import aboutBanner from '../../assets/img/AboutBanner.jpeg'

const AboutBanner = () => {
    return(
        <Banner
            title='À propos'
            src={aboutBanner}
        />
    )
}

export default AboutBanner;