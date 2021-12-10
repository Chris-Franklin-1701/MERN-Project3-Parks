import React, { useState } from "react";
import { Redirect } from "react-router-dom";

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
      <div className="header">
        <span className="header-title">Parks for Rec</span>
      </div>
    </header>
  );
};

export default LandingPage;
