import React from 'react';
import Banner from '../Layout/Banner';
import HomeBanner from '../../assets/img/BannerMain.jpeg';

const HomeBanner = () => {
    return(
        <Banner
            title='Chez vous, partout et ailleurs'
            src={HomeBanner}
        />
    )
}

export default HomeBanner;