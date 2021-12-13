import React from "react";
import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <header>
      <section className="s5">
        <div className="overlay" />
        <div className="outter-circle" />
        <div className="inner-circle">
          <Link to="/home">
            <img
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
      </section>
      <body>
        <h3>welcome</h3>
      </body>
    </header>
  );
};

export default LandingPage;