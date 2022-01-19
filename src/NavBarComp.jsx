import React from 'react'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

/**
 * NAVIGATION BAR COMPONENT ////////////////////////////////////
 * @returns HTML for a Navigation Bar
 */
const NavBar = () => {
    return (
        <header>
            <div className='navbar navbar-dark bg-dark box-shadow'>
                <div className='container d-flex justify-content-between'>
                    <div className='text-warning'>
                        <h2>
                            <strong>Luke API Walker ✨</strong>
                        </h2>
                    </div>
                    <Link to="/">
                        <button className='btn btn-secondary round'><strong>Root</strong></button>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default NavBar