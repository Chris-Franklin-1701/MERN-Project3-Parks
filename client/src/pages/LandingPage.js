import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const [state, setState] = useState({
    navigate: false,
    referrer: null,
  });
  
  const [offset, setOffset] = useState(0);

  console.log(offset); 

  const handleClick = () => {
    setState({ referrer: "/" });
  };

  const { referrer } = state;
  if (referrer) return <Redirect to={referrer} />;

  return (
      <header>
        <div className="">
          <h1 style={{textAlign: "center", alignItems: "center", display: "flex", flexDirection: "column", position: "absolute", fontSize: '2.5em', fontWeight: "700", fontFamily: "Philosopher, sans-serif", top: "5em", bottom: "0", left: "0", right: "0",}}>Plan Your Trip to Our Nations Many National Parks. <div>Click the Compass to Begin your Adventure!</div> </h1>
          <div className="text-center">
          <Link className="shadow-lg p-6 text-muted mb-5 rounded btn btn-lg m-4  enable-button-pointers" style={{ opacity: '0.69', flexDirection: "column", position: "absolute",top: "20em", left: "59em",}} as={Link} to="/home"><img src= 'https://media.istockphoto.com/vectors/vintage-compass-vector-id142289062' style ={{maxHeight: '7em',}}></img></Link>
          <img src= 'https://www.stefanbaumann.com/wp-content/uploads/2014/07/Crater-Lake.jpg' style ={{ width: '160em'}}></img>
          </div>
          </div>
      </header>
    )
  };
  

export default LandingPage;

