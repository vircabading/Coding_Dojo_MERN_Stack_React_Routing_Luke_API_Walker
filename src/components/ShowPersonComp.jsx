import React, { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import axios from 'axios';


/**
 * //// SHOW PERSON COMPONENT ////////////////////////////////////////////////////
 * @returns HTML to Show a Person from SW API
 */
const ShowPerson = () => {
    // //// FIELDS ///////////////////////////////////////////////////////////////
    const [person, setperson] = useState({});
    const [planet, setPlanet] = useState({});
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        axios.get('https://swapi.dev/api/people/' + id)
            .then(response => {
                console.log("Response Person data:", JSON.stringify(response.data));
                setperson(response.data);
                axios.get(response.data.homeworld)
                    .then(response => {
                        console.log("Response homeworld data:", JSON.stringify(response.data));
                        setPlanet(response.data);
                    })
                    .catch(error => {
                        console.log("ERROR FOUND")
                    });
            })
            .catch(error => {
                console.log("ERROR FOUND")
                history.push("/error");
            });
    }, [id]);

    // //// OUTPUT ///////////////////////////////////////////////////////////////
    return (
        <div >
            <h1>{person.name}</h1>
            {/* <p>id: { id }</p>
            <p>Person: {JSON.stringify(person)}</p> */}
            <hr></hr>
            <p>Height: {person.height}</p>
            <p>Mass: {person.mass}</p>
            <p>Hair Color: {person.hair_color}</p>
            <p>Eye Color: {person.eye_color}</p>
            <p>Planet: {planet.name}</p>

        </div>
    );
};

export default ShowPerson;