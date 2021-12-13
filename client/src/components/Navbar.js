import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import SignUpForm from './SignupForm';
import LoginForm from './LoginForm';
import "../index.css";

import Auth from '../utils/auth'

const AppNavbar = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <Navbar id='navbar-background' bg='dark' variant='dark' expand='lg'>
                <Container fluid>
                    <Navbar.Brand as={Link} to='/'>
                    <img id='navbar-img' src = 'https://i.imgur.com/ScrFDBm.png'></img>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='navbar'/>
                    <Navbar.Collapse id='navbar'style={{justifyContent: "flex-end"}}>
                        <Nav className='ml-auto'>
                            {/* if user is logged in show saved books and logout */}
                            {Auth.loggedIn() ? (
                                <>
                                    <span>Hey there, {Auth.getProfile().data.username}!</span>
                                    <Nav.Link className="btn btn-lg btn-info m-2" as={Link} to="/trip">
                                        Trip
                                    </Nav.Link>
                                    <Nav.Link className="btn btn-lg btn-info m-2" as={Link} to="/visited">
                                        Prev Visited
                                    </Nav.Link>
                                    <Nav.Link className="btn btn-lg btn-info m-2" as={Link} to="/home">
                                        US Map
                                    </Nav.Link>
                                    <button className="btn btn-lg btn-info m-2" onClick={Auth.logout}>
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <>
                                    <Nav.Link className="btn btn-lg btn-link m=2 text-light" onClick={() => setShowModal(true)}>
                                        Login/Sign Up 
                                    </Nav.Link>
                                </>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Modal
                size='lg'
                show={showModal}
                onHide={() => setShowModal(false)}
                aria-labelledby='signup-modal'>
                {/* tab container to do either signup or login component */}
                <Tab.Container defaultActiveKey='login'>
                    <Modal.Header closeButton>
                        <Modal.Title id='signup-modal'>
                            <Nav variant='pills'>
                                <Nav.Item>
                                    <Nav.Link eventKey='login'>Login</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Tab.Content>
                            <Tab.Pane eventKey='login'>
                                <LoginForm handleModalClose={() => setShowModal(false)} />
                            </Tab.Pane>
                            <Tab.Pane eventKey='signup'>
                                <SignUpForm handleModalClose={() => setShowModal(false)} />
                            </Tab.Pane>
                        </Tab.Content>
                    </Modal.Body>
                </Tab.Container>
            </Modal>
        </>
    )
}

export default AppNavbar;