import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const ContactPage = () => {
    return (
        <div className="Contact" style={{textAlign: "center", alignItems: "center", display: "flex", flexDirection: "column",backgroundImage: `url("https://www.stefanbaumann.com/wp-content/uploads/2014/07/Crater-Lake.jpg")`, backgroundRepeat: "no-repeat", backgroundSize: "cover",}}>
            <h1 style={{textAlign: "center", alignItems: "center",padding: "75px 25px 45px 25px"}}>Contact Information:</h1>
                <div className="Alex" style={{padding: " 0px 15px 15px 15px"}}>
                    <h3 style={{padding: "15px 15px 0px 15px", marginBottom: "0px"}}>Alex Cwiklinski</h3>
                    <a className="Icons">
                        <a href="mailto:alexcwik1490@gmail.com" style={{padding: "10px"}}><FontAwesomeIcon icon={faEnvelope} className="fa-2x"></FontAwesomeIcon></a>
                        <a href="http://www.linkedin.com/in/alexander-cwiklinski-7b4955186" style={{padding: "10px"}}><FontAwesomeIcon icon={faLinkedin} className="fa-2x"></FontAwesomeIcon></a>
                        <a href="https://github.com/alexcwik" style={{padding: "10px"}}><FontAwesomeIcon icon={faGithub} className="fa-2x"></FontAwesomeIcon></a>
                    </a>
                </div>
                <div className="Chris" style={{padding: "15px"}}>
                    <h3 style={{padding: "15px 15px 0px 15px", marginBottom: "0px"}}>Christopher Franklin</h3>
                    <a className="Icons">
                        <a href="mailto:contact@christopherfranklin.dev" style={{padding: "10px"}}><FontAwesomeIcon icon={faEnvelope} className="fa-2x"></FontAwesomeIcon></a>
                        <a href="https://www.linkedin.com/in/christopher-franklin-a44957a4/" style={{padding: "10px"}}><FontAwesomeIcon icon={faLinkedin} className="fa-2x"></FontAwesomeIcon></a>
                        <a href="https://github.com/Chris-Franklin-1701" style={{padding: "10px"}}><FontAwesomeIcon icon={faGithub} className="fa-2x"></FontAwesomeIcon></a>
                    </a>
                </div>
                <div className="Sean" style={{padding: "15px"}}>
                    <h3 style={{padding: "15px 15px 0px 15px", marginBottom: "0px"}}>Sean Craig</h3>
                    <a className="Icons">
                        <a href="mailto:seancraig21@gmail.com" style={{padding: "10px"}}><FontAwesomeIcon icon={faEnvelope} className="fa-2x"></FontAwesomeIcon></a>
                        <a href="https://www.linkedin.com/in/sean-craig-bb219861/" style={{padding: "10px"}}><FontAwesomeIcon icon={faLinkedin} className="fa-2x"></FontAwesomeIcon></a>
                        <a href="https://github.com/seanscraig" style={{padding: "10px"}}><FontAwesomeIcon icon={faGithub} className="fa-2x"></FontAwesomeIcon></a>
                    </a>
                </div>
                <div className="Stew" style={{padding: "15px"}}>
                    <h3 style={{padding: "15px 15px 0px 15px", marginBottom: "0px"}}>Stew Sabatino</h3>
                    <a className="Icons">
                        <a href="mailto:stewsabatino@gmail.com" style={{padding: "10px"}}><FontAwesomeIcon icon={faEnvelope} className="fa-2x"></FontAwesomeIcon></a>
                        <a href="https://www.linkedin.com/in/stew-sabatino-62358a220/" style={{padding: "10px"}}><FontAwesomeIcon icon={faLinkedin} className="fa-2x"></FontAwesomeIcon></a>
                        <a href="https://github.com/stewsabatino" style={{padding: "10px"}}><FontAwesomeIcon icon={faGithub} className="fa-2x"></FontAwesomeIcon></a>
                    </a>
                </div>
        </div>
    )
};


export default ContactPage;