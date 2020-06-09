import React from 'react';
import Images from './Images.jsx';

const NavTab = ({info}) => {
    return (
        <div>
            <h3>{info.title}</h3>
            <Images img={info.images}/>
            <p>{info.descriptions}</p>
        </div>
    )
}

export default NavTab;