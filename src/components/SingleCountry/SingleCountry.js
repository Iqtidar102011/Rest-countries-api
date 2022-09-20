import React from 'react';
import './SingleCountry.css'

const SingleCountry = (props) => {
    const { name, population, area, flags } = props.country
    const { common } = name
    return (
        <div className='country'>
            <h2>Country Name:{common}</h2>
            <p>Population:{population}</p>
            <p>Area:{area}</p>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default SingleCountry;