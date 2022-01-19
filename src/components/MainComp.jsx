import React from 'react'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

import Home from './HomeComp';
import ShowPerson from './ShowPersonComp';

/**
 * //// MAIN COMPONENT //////////////////////////////////////
 */
const Main = () => {
    return (
        <main role="main">
            <div className='container mt-4'>
                <div className='row bg-dark p-3 rounded'>
                    <div className="col">
                        {/* **** SHOW PERSON ************* */}
                        <Route path="/person/:id">
                            <ShowPerson />
                        </Route>
                        {/* **** HOME ROUTE ************** */}
                        <Route exact path="/">
                            <Home />
                        </Route>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main