import React from "react";
import { Link } from "react-router-dom"

function Footer() {
return (
    <div className="footer">
    <footer className="bg-dark fixed-bottom">
        <div className="container">
        <p className="m-0 text-center text-white">
        <Link className="btn btn-lg btn-link m=2 text-light"to="/portfolio">Portfolios</Link>
        <Link className="btn btn-lg btn-link m=2 text-light" to="/contact">Contact</Link>
        <a className="btn btn-lg btn-link m=2 text-light" href="https://github.com/Chris-Franklin-1701/MERN-Project3-Parks">Github</a>
        </p>
        </div>
    </footer>
    </div>
);
}

export default Footer;