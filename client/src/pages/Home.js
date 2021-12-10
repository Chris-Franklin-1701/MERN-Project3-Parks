import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import USAMap from "react-usa-map";

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
        // alert(event.target.dataset.name);
    };

    /* optional customization of filling per state and calling custom callbacks per state */
    const statesCustomConfig = () => {
        return {
            "NJ": {
                fill: "navy",
                clickHandler: (event) => console.log('Custom handler for NJ', event.target.dataset),
                
            },
            "NY": {
                fill: "#CC0000"
            }
        };
    };

    return (
        <div className="App">
            <USAMap customize={statesCustomConfig()} onClick={mapHandler} />
        </div>
    );
}

export default Home;