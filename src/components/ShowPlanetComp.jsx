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

    /**
     * //// GET PLANET INFORMATION FROM SW API ///////////////////////////////////
     * Executes when the Component is First Loaded and when id state changes
     */
    useEffect(() => {
        axios.get('https://swapi.dev/api/planets/' + id)
            .then(response => {
                console.log("Response data for planet:", JSON.stringify(response.data));
                // Memorize the planet object data retrieved from swapi.dev
                setPlanet(response.data);
            })
            .catch(error => {
                console.log("*** ERROR FOUND *** when retrieving planets from swapi.dev")
                // Redirect to the error component if error occurs
                history.push("/error");
            }

            );
    } ,[id]);

    // //// OUTPUT //////////////////////////////////////////////////////////////
    return (
        <div >
            <h1>{ planet.name }</h1>
            {/* <p>Planet Object: { JSON.stringify(planet) }</p> */}
            <hr></hr>
            <p>Climate: { planet.climate }</p>
            <p>Terrain: { planet.terrain }</p>
            <p>Surface Water: { planet.surface_water }</p>
            <p>Population: { planet.population }</p>
        </div>
    );
};

export default ShowPlanet;