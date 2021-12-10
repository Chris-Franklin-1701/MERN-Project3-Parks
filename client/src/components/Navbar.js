import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import SignUpForm from '../SignupForm';
import LoginForm from '../LoginForm';

import Auth from '../../utils/auth'

const Navbar = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
                <div className="container flex-row justify-space-between-lg justify-center align-center">
                    <div>
                        <Link className="text-light" to="/">
                            <h1 className="m-0">Parks for Rec</h1>
                        </Link>
                        <p className="m-0">Plan and Pin your next National Park trip</p>
                    </div>
                    <div>
                        {Auth.loggedIn() ? (
                            <>
                                <span>Hey there, {Auth.getProfile().data.username}!</span>
                                <Link className="btn btn-lg btn-info m-2" to="/trip">
                                    Trip
                                </Link>
                                <Link className="btn btn-lg btn-info m-2" to="/state">
                                    State
                                </Link>
                                <Link className="btn btn-lg btn-info m-2" to="/home">
                                    Navigation
                                </Link>
                                <button className="btn btn-lg btn-info m-2" onClick={Auth.logout}>
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Nav.Link onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>
                            </>
                        )}
                    </div>
                </div>
            </header>
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

export default Navbar;