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
    <div className="intro-logo jumbo-bg">
      <h1 style={{textAlign: "center", alignItems: "center", display: "flex", flexDirection: "column", position: "absolute", fontSize: '2.5em', fontWeight: "700", fontFamily: "Kailasa, sans-serif", top: "5em", bottom: "0", left: "0", right: "0",}}>Plan Your Trip to Our Nations Many National Parks. <div>Click the Compass to Begin your Adventure!</div> </h1>
      <div className="text-center">
      <Link className="btn btn-lg m-4" style={{flexDirection: "column", position: "absolute",top: "8em", left: "25em",}} as={Link} to="/home"><img src= 'https://i.imgur.com/89SLPRE.png' style ={{maxHeight: '40em',}}></img></Link>
      <img src= 'https://www.stefanbaumann.com/wp-content/uploads/2014/07/Crater-Lake.jpg' style ={{ width: '100%', height: "100%", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover",}}></img>
      </div>
      </div>
      </header>
    )
  };
  

export default LandingPage;

