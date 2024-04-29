import React, { useState } from 'react';
import vector from '../../assets/img/vectorBas.svg'; // Utilisez un seul vecteur qui représente la flèche.

const Collapse = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapse">
            <div 
                className={`collapse__header ${isOpen ? "expanded" : ""}`}
                onClick={toggleCollapse}
            >
                <h2 className="collapse__header__title">{props.title}</h2>
                <img 
                    src={vector}
                    alt="Toggle collapse"
                    className="collapse__header__icon"
                />
            </div>
            <div 
                className={`collapse__content ${isOpen ? "expanded" : ""}`}
            >
                {props.content}
            </div>
        </div>
    );
}

export default Collapse;