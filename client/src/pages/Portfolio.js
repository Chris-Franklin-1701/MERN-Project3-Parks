import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

const PortfolioPage = () => {
    return (
        <div className="Portfolio" style={{textAlign: "center", alignItems: "center", display: "flex", flexDirection: "column",}}>
            <h1 style={{textAlign: "center", alignItems: "center",padding: "75px 25px 65px 25px"}}>Please visit our team's portfolios:</h1>
                <a href="https://alexcwik.github.io/my_portfolio/" target="blank" style={{padding: "25px"}}>Alex Cwiklinski</a>
                <a href="https://christopherfranklin.dev" target="blank" style={{padding: "25px"}}>Christopher Franklin</a>
                <a href="https://seancraig.me" target="blank" style={{padding: "25px"}}>Sean Craig</a>
                <a href="https://stewsabatino.github.io//" target="blank" style={{padding: "25px"}}>Stew Sabatino</a>
        </div>
    )


};


export default PortfolioPage;