import React from 'react'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

import Home from './HomeComp';
import ShowPerson from './ShowPersonComp';
import ShowPlanet from './ShowPlanetComp';
import Error from './ErrorComp';
import InputComp from './InputComp';

/**
 * //// MAIN COMPONENT //////////////////////////////////////
 */
const Main = () => {
    return (
        <main role="main">
            <div className='container mt-4'>
                <div className='row bg-dark p-3 rounded'>
                    <div className="col">
                        {/* **** INPUT FORM ************** */}
                        <InputComp />
                        {/* **** SHOW PERSON ************* */}
                        <Route path="/person/:id">
                            <ShowPerson />
                        </Route>
                        {/* **** SHOW PLANET ************* */}
                        <Route path="/planet/:id">
                            <ShowPlanet />
                        </Route>
                        {/* **** HOME ROUTE ************** */}
                        <Route exact path="/">
                            <Home />
                        </Route>
                        {/* **** ERROR ROUTE ************* */}
                        <Route exact path="/error">
                            <Error />
                        </Route>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main