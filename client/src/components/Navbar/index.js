import React from 'react';
import { Link } from 'react-router-dom'

import Auth from '../../utils/auth'

const Header = () => {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };

    return (
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
              <Link className="btn btn-lg btn-info m-2" to="/navigation">
                Navigation
              </Link>
              <button className="btn btn-lg btn-info m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <p>Please login in or sign up to use our application!</p>
            </>
          )}
        </div>
      </div>
    </header>
    )
}

export default Header;