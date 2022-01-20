import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

/**
 * //// INPUT COMPONENT /////////////////////////////////////////////
 * @returns HTML for Inputting Search Options
 */
const InputComp = () => {
    // //// FIELDS //////////////////////////////////////////////////
    const [id, setId] = useState("1");
    const [category, setCategory] = useState("person");
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("ID:", id)
        history.push("/person/" + id);
        setCategory("person")
        setId("1");
    }

    return (
        <div>
            <h1>Input Component</h1>
            <form className="row p-3" onSubmit={e => handleSubmit(e)}>
                <input className="col-md-9 rounded-left border-0" type="text"
                    onChange={e => setId(e.target.value)}
                    value={id} />
                <button className='col-md-3 bg-primary rounded-right btn'>Add Item</button>
            </form>
        </div>
    );
};

export default InputComp;
