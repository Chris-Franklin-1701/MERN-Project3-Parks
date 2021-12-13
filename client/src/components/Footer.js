import React from "react";
import { Link } from "react-router-dom"

function Footer() {
return (
    <div className="footer">
    <footer className="bg-dark">
        <div className="container">
        <p className="m-0 text-center text-white">
        <Link className="btn btn-lg btn-link m=2 text-light"to="/portfolio"style ={{fontSize:'1.5em'}}><img src = 'https://i.imgur.com/jBk4CCe.png' style={{width: '7em',height:'6em'}}></img></Link>
        <Link className="btn btn-lg btn-link m=2 text-light" to="/contact"style ={{fontSize:'1.5em'}}><img src = 'https://i.imgur.com/X5PRHtt.png' style={{width: '7em',height:'6em'}}></img></Link>
        <a className="btn btn-lg btn-link m=2 text-light" href="https://github.com/Chris-Franklin-1701/MERN-Project3-Parks"style ={{fontSize:'1.5em'}}><img src = 'https://i.imgur.com/Ze9kryd.png' style={{width: '7em',height:'6em'}}></img></a>
        </p>
        </div>
        
    </footer>
    </div>
);
}

export default Footer;
