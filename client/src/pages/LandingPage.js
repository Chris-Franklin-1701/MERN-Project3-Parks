import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

const LandingPage = () => {
  
  return (
    <header>
        <div className="overlay" />
              <div className="intro-logo jumbo-bg">
                  { 
                  <h1 style={{color: 'white', textAlign: "center", alignItems: "center", display: "inline-flex", flexDirection: "column", position: "absolute", fontSize: '4em', fontWeight: "700", fontFamily: "avanta garde", top: "5em", bottom: "0", left: "0", right: "0", filter: 'drop-shadow(3px 2px 2px black', textDecoration: ''}}>
                    Parks for Rec</h1> }
              </div>
        <div className="outter-circle" />
        <div className="inner-circle">
          <Link to="/home">
            <img className="home-btn"
              src="https://www.worldatlas.com/r/w768/upload/54/6c/e9/compass-rose-daniel-tadevosyan.jpg"
              style={{
                width: "100%",
                height: "100%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></img>  
          </Link>
        </div>
      <body>  
      </body>
    </header>
  );
};

export default LandingPage;