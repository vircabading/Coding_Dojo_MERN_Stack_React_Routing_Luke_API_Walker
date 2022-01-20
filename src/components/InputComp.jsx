import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

/**
 * //// INPUT COMPONENT /////////////////////////////////////////////
 * Used to create a route to search a specific planet or person from star wars API
 * @returns HTML for Inputing Search Options
 */
const InputComp = () => {
    // //// FIELDS //////////////////////////////////////////////////
    const [id, setId] = useState("1");                  // id of planet or person to be queried
    const [category, setCategory] = useState("person"); // Category of query to swapi: person or planet
    const history = useHistory();                       // History, used for loading (pushing) a route

    /**
     * //// HANDLE SUBMIT ///////////////////////////////////////////
     * @param {object} e : event 
     */
    const handleSubmit = (e) => {
        e.preventDefault();                         // Prevent WebPage from reloading after submitting a form
        console.log("*** Input submitted: ID:", id, " | Category:", category);
        history.push("/" + category + "/" + id);    // Load the Component which will execute the SWAPI query and display result
        // **** Reset Serach Category and ID states ********
        setCategory("person")
        setId("1");
    }

    // //// OUTPUT //////////////////////////////////////////////////
    return (
        <div>
            <h3>Enter a query to Star Wars API 💫:</h3>
            {/* **** FORM *************************************** */}
            <form className="row p-3" onSubmit={e => handleSubmit(e)}>
                {/* **** Select type Input for Category of Query to SW API ******** */}
                <select value={category} onChange={e => setCategory(e.target.value)}>
                    <option key="1" value="person">Person</option>
                    <option key="2" value="planet">Planet</option>
                </select>
                {/* **** Input for ID of Query to SW API ******** */}
                <input className="col-md-9 rounded-left border-0" type="number" min="1"
                    onChange={e => setId(e.target.value)}
                    value={id} />
                {/* **** Button to ubmit the Form ******** */}
                <button className='col-md-3 bg-warning rounded-right btn'><strong>Query SW API</strong></button>
            </form>
        </div>
    );
};

export default InputComp;
