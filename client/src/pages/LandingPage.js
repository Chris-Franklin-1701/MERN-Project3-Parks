import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const [state, setState] = useState({
    navigate: false,
    referrer: null,
  });

  const handleClick = () => {
    setState({ referrer: "/" });
  };

  const { referrer } = state;
  if (referrer) return <Redirect to={referrer} />;

  return (
      <header>
        <div className="intro-logo jumbo-bg">
          <h1 style={{textAlign: "center", alignItems: "center", display: "flex", flexDirection: "column", position: "absolute", fontSize: "1.8em,", fontWeight: "900", fontFamily: "Philosopher, sans-serif", top: "5em", bottom: "0", left: "0", right: "0",}}>Text explaining app goes here</h1>
          <Link className="btn btn-lg btn-info m-2" as={Link} to="/">Explore</Link>
          </div>
      </header>
    )
  };

export default LandingPage;
