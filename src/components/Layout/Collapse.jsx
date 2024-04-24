import React, { useState } from 'react';
import vectorDown from '../../assets/img/vectorBas.svg';
import vectorUp from '../../assets/img/vectorHaut.svg';

const Collapse = (props) => {
    const [openTab, setOpenTab] = useState(false);

    const toggleCollapse = () => {
        setOpenTab(!openTab);
    };

    return (
        <>
            <div onClick={toggleCollapse} className="collapse_header">
                <h2 className="collapse_header_title">{props.title}</h2>
                <img 
                    src={openTab ? vectorUp : vectorDown}
                    alt={openTab ? "Collapse" : "Expand"} 
                    className={`collapse_header_icon ${openTab ? "icon-up" : "icon-down"}`}
                />
            </div>
            {openTab && 
                <div className="collapse_content">
                    {props.content}
                </div>
            }
        </>
    );
}

export default Collapse;