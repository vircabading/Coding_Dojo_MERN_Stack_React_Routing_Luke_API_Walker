import React, { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

/**
 * //// SHOW PERSON COMPONENT ////////////////////////////////////////////////////
 * @returns HTML to Show a Person from SW API
 */
const ShowPerson = () => {
    // //// FIELDS ///////////////////////////////////////////////////////////////
    const [person, setperson] = useState({});   // Person Object to be retrieved from SW API
    const [planet, setPlanet] = useState({});   // Planet of the Person Retrieved from SW API
    const { id } = useParams();                 // Id to be used for Query on SW API
    const history = useHistory();               // History to be used to load Error component if swapi query catches an error

    /**
     * //// QUERY THE SWAPI TO RETRIEVE THE PERSON OBJECT ////////////////////////
     * useEffect will execute after Component Loads, and after a change of state of id
     */
    useEffect(() => {
        axios.get('https://swapi.dev/api/people/' + id)
            .then(response => {
                console.log("Response Person data:", JSON.stringify(response.data));
                setperson(response.data);
                // **** Query swapi to get the home planet of the person retrieved from swapi ********
                axios.get(response.data.homeworld)
                    .then(response => {
                        console.log("Response homeworld data:", JSON.stringify(response.data));
                        setPlanet(response.data);
                    })
                    // **** Catch An Error if Planet Query is unsuccessful ****
                    .catch(error => {
                        console.log("*** ERROR FOUND when looking for planet")
                    });
            })
            // **** Catch an Error and Navigate to the Error Component if Person Query is unsuccessful ********
            .catch(error => {
                console.log("*** ERROR FOUND when looking for person")
                history.push("/error");     // Navigates to the Error Component
            });
    }, [id]);

    // //// OUTPUT ///////////////////////////////////////////////////////////////
    return (
        <div >
            {/* **** Person Header ******************************************** */}
            <h1>{person.name}</h1>
            {/* <p>id: { id }</p>
            <p>Person: {JSON.stringify(person)}</p> */}
            <hr></hr>
            {/* Person Information ******************************************** */}
            <p>Height: {person.height}</p>
            <p>Mass: {person.mass}</p>
            <p>Hair Color: {person.hair_color}</p>
            <p>Eye Color: {person.eye_color}</p>
            <p>Planet: {planet.name}</p>
        </div>
    );
};

export default ShowPerson;