import React from 'react';
import Images from './Images.jsx';

const NavTab = ({info}) => {
    return (
        <div className="show-info">
            <h3>{info.title}</h3>
            {info.images ? 
            <Images img={info.images}/> : <div></div>}
            <p>{info.descriptions}</p>
        </div>
    )
}

export default NavTab;