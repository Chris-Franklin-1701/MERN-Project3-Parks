import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import USAMap from "react-usa-map";
import '../index.css';

import Auth from '../utils/auth'

const Home = () => {
    // Do we need useParams and check for profile?
 if (!Auth.loggedIn()) {
        return (
            <h4>
                You need to be logged in to see this.
            </h4>
        );
    } 

    const mapHandler = (event) => {
        window.location.assign(`/state/${event.target.dataset.name}`)
    };

    /* optional customization of filling per state and calling custom callbacks per state */
    const statesCustomConfig = () => {
        return {
            "NJ": {
                clickHandler: (event) => console.log('Custom handler for NJ', event.target.dataset),
                
            },
            "NY": {
            }
        };
    };

    return (
        <div id="home" className="App">
            <USAMap customize={statesCustomConfig()} onClick={mapHandler} />
        </div>
    );
}

export default Home;