import React, { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * //// SHOW PERSON COMPONENT ////////////////////////////////////////////////////
 * @returns HTML to Show a Person from SW API
 */
const ShowPerson = () => {
    // //// FIELDS ///////////////////////////////////////////////////////////////
    const [person, setperson] = useState({});

    // //// OUTPUT ///////////////////////////////////////////////////////////////
    return (
        <div >
            <h1>Show Person Component</h1>
            <p>Person: { JSON.stringify(person) }</p>
        </div>
    );
};

export default ShowPerson;