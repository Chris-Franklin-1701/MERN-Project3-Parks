import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import "../index.css";


const ContactPage = () => {
    return (
    <div className="overlay">
        <div id="contact" className="contact">
            <h1>Contact Information:</h1>
                <div className="contact-name">
                    <h3>Alex Cwiklinski</h3>
                    <a className="Icons">
                        <a href="mailto:alexcwik1490@gmail.com"><FontAwesomeIcon icon={faEnvelope} className="fa-2x"></FontAwesomeIcon></a>
                        <a href="http://www.linkedin.com/in/alexander-cwiklinski-7b4955186"><FontAwesomeIcon icon={faLinkedin} className="fa-2x"></FontAwesomeIcon></a>
                        <a href="https://github.com/alexcwik"><FontAwesomeIcon icon={faGithub} className="fa-2x"></FontAwesomeIcon></a>
                    </a>
                </div>
                <div className="contact-name">
                    <h3>Christopher Franklin</h3>
                    <a className="Icons">
                        <a href="mailto:contact@christopherfranklin.dev"><FontAwesomeIcon icon={faEnvelope} className="fa-2x"></FontAwesomeIcon></a>
                        <a href="https://www.linkedin.com/in/christopher-franklin-a44957a4/"><FontAwesomeIcon icon={faLinkedin} className="fa-2x"></FontAwesomeIcon></a>
                        <a href="https://github.com/Chris-Franklin-1701"><FontAwesomeIcon icon={faGithub} className="fa-2x"></FontAwesomeIcon></a>
                    </a>
                </div>
                <div className="contact-name">
                    <h3>Sean Craig</h3>
                    <a className="Icons">
                        <a href="mailto:seancraig21@gmail.com"><FontAwesomeIcon icon={faEnvelope} className="fa-2x"></FontAwesomeIcon></a>
                        <a href="https://www.linkedin.com/in/sean-craig-bb219861/"><FontAwesomeIcon icon={faLinkedin} className="fa-2x"></FontAwesomeIcon></a>
                        <a href="https://github.com/seanscraig"><FontAwesomeIcon icon={faGithub} className="fa-2x"></FontAwesomeIcon></a>
                    </a>
                </div>
                <div className="contact-name">
                    <h3>Stew Sabatino</h3>
                    <a className="Icons">
                        <a href="mailto:stewsabatino@gmail.com"><FontAwesomeIcon icon={faEnvelope} className="fa-2x"></FontAwesomeIcon></a>
                        <a href="https://www.linkedin.com/in/stew-sabatino-62358a220/"><FontAwesomeIcon icon={faLinkedin} className="fa-2x"></FontAwesomeIcon></a>
                        <a href="https://github.com/stewsabatino"><FontAwesomeIcon icon={faGithub} className="fa-2x"></FontAwesomeIcon></a>
                    </a>
                </div>
        </div>
    </div>
    )
};


export default ContactPage;