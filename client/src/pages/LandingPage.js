import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../index.css";

const LandingPage = () => {
  return (
      <>
      <div className="overlay"></div>
        <header id="landing-header">
        
        <div className="parksText">
          <Nav.Link as={Link} to="/home">
            <img
            src="https://i.imgur.com/ACg9toi.png" className="logo-animation"/>
          </Nav.Link>
            <h1>
              Parks for Rec 
            </h1>
          
          </div>
          </header>
        </>
  );
};

export default LandingPage;

