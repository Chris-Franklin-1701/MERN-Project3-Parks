import React from "react";
import { Link } from "react-router-dom"
import "../index.css";

function Footer() {
return (
    <div className="footer">
    <footer className="bg-dark fixed-bottom">
        <div className="container">
        <p className="m-0 text-center text-white">
        <Link className="btn btn-lg btn-link m=2 text-light"to="/portfolio"><img src = 'https://i.imgur.com/jBk4CCe.png'></img></Link>
        <Link className="btn btn-lg btn-link m=2 text-light" to="/contact"><img src = 'https://i.imgur.com/X5PRHtt.png'></img></Link>
        <a className="btn btn-lg btn-link m=2 text-light" href="https://github.com/Chris-Franklin-1701/MERN-Project3-Parks"><img src = 'https://i.imgur.com/Ze9kryd.png'></img></a>
        </p>
        </div>
        
    </footer>
    </div>
    
);
}

export default Footer;


