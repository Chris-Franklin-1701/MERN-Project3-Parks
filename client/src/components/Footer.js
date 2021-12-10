import React from "react";

function Footer() {
return (
    <div className="footer">
    <footer class="py-5 bg-dark fixed-bottom">
        <div class="container">
        <p class="m-0 text-center text-white">
        <Link className="btn btn-lg btn-info m-2" to="/portfolio">Portfolios</Link>
        <Link className="btn btn-lg btn-info m-2" to="/contact">Contact</Link>
        <Link className="btn btn-lg btn-info m-2" to="/github">Github</Link>
        </p>
        </div>
    </footer>
    </div>
);
}

export default Footer;