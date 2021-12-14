import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

const LandingPage = () => {
  return (
      <>
      <div className="overlay"></div>
        <header
        style={{display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
        overflow: 'hidden'
        
        }}>
          

          {/* <img
            src="https://www.worldatlas.com/r/w768/upload/54/6c/e9/compass-rose-daniel-tadevosyan.jpg"
            style={{
              width: "100px",
              height: "100px",
              position: 'relative',
              zIndex: '1',
            }}
          /> */}
        
        <div className="parksText">
          
            <img
            src="https://i.imgur.com/ACg9toi.png" className="logo-animation"
            style={{
              width: "500px",
              height: "auto",
              position: 'relative',
              zIndex: '1',
              

            }}
          />
            <h1
              style={{
                color: "white",
                textAlign: "center",
                alignItems: "center",
                fontSize: "4em",
                fontWeight: "700",
                fontFamily: "avanta garde",
                marginTop: "1em",
                marginBottom: "0",
                marginLeft: 'auto',
                marginRight: 'auto',
                justifySelf: "center",
                filter: "drop-shadow(3px 2px 2px black",
                textDecoration: "",
    
              }}
            >
              
              Parks for Rec 
            </h1>
          
          </div>
          </header>
        </>
  );
};

export default LandingPage;
