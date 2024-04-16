import React from 'react';
import logoFooter from '../../assets/img/logo-kasa-footer.png';

const Footer = ({ text = "© 2020 Kasa. All rights reserved" }) => {
    return (
        <footer className='footer'>
            <img src={logoFooter} alt='logo-kasa' className='footer_logo' />
            <p className='footer_text'>{text}</p>
        </footer>
    );
}

export default Footer;