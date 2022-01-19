import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';


/**
 * //// SHOW PLANET COMPONENT ////////////////////////////////////////////////////
 * @returns HTML to Show a Planet from SW API
 */
const ShowPlanet = () => {
    // //// FIELDS ///////////////////////////////////////////////////////////////
    const [planet, setPlanet] = useState({});
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        axios.get('https://swapi.dev/api/planets/' + id)
            .then(response => {
                console.log("Response data for planet:", JSON.stringify(response.data));
                setPlanet(response.data);
            })
            .catch(error => {
                console.log("ERROR FOUND")
                history.push("/error");
            }

            );
    } ,[]);

    // //// OUTPUT ///////////////////////////////////////////////////////////////
    return (
        <div >
            <h1>{ planet.name }</h1>
            <p>Planet: { JSON.stringify(planet) }</p>
            <hr></hr>
            <p>Climate: { planet.climate }</p>
            <p>Terrain: { planet.terrain }</p>
            <p>Surface Water: { planet.surface_water }</p>
            <p>Population: { planet.population }</p>
        </div>
    );
};

export default ShowPlanet;