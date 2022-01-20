import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

/**
 * //// PLANET BUTTON COMPONENT //////////////////////////////////////////////////
 * @returns HTML button for a Planet from SW API
 */
const PlanetBtn = (props) => {
    // //// FIELDS ///////////////////////////////////////////////////////////////
    const [planet, setPlanet] = useState({});
    const {  searchField} = props;
    const history = useHistory();
    console.log("Props searchField: ", JSON.stringify(props.searchField))
    
    /**
     * //// GET PLANET FROM SW API ///////////////////////////////////////////////
     */
    useEffect(() => {
        axios.get(searchField)
            .then(response => {
                console.log("Response data for planet BUTTON:", JSON.stringify(response.data));
                setPlanet(response.data);
            })
            .catch(error => {
                console.log("ERROR FOUND")
            }

            );
    }, []);

    // //// OUTPUT ///////////////////////////////////////////////////////////////
    return (
        <button className='btn btn-sm round btn-success'>{planet.name}</button>
    );
};

export default PlanetBtn