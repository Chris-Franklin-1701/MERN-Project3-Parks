import React from "react";
import { Link } from "react-router-dom"

function Footer() {
return (
    <div className="footer">
    <footer class="py-5 bg-dark fixed-bottom">
        <div class="container">
        <p class="m-0 text-center text-white" style={{display: "flex", justifyContent: "space-evenly"}}>
        <Link className="btn btn-lg btn-info m-2" to="/portfolio">Portfolios</Link>
        <Link className="btn btn-lg btn-info m-2" to="/contact">Contact</Link>
        <a className="btn btn-lg btn-info m-2" href="https://github.com/Chris-Franklin-1701/MERN-Project3-Parks">Github</a>
        </p>
        </div>
    </footer>
    </div>
);
}

export default Footer;