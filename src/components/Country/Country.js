import React, { useEffect, useState } from 'react';
import SingleCountry from '../SingleCountry/SingleCountry';
import './country.css';

const Country = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    return (
        <div >
            <h2 className='title'>Countries :{countries.length}</h2>
            <div className='countries_container'>
                {
                    countries.map(country => <SingleCountry
                        country={country}
                        key={country.cca3}
                    ></SingleCountry>)
                }
            </div>
        </div>
    );
};

export default Country;