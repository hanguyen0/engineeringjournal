import React from 'react';
import styled from 'styled-components';



const Images = ({ img }) => {
    // console.log(img);
    return (
        <div>
            {img.map((image, idx) => 
              <img src={image} key={idx + image}></img>    
            )}
        </div>
    )
}

export default Images;