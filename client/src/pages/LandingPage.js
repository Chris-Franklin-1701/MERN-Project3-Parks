import React, { components } from 'react';
import { Redirect } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import Navbar from './components/Navbar/';


const LandingPage = () => {

    return(
      <header>
        <div className='header'>
            <span className='header-title'>Parks for Rec</span>
        </div>
    </header>
    );
  }
  
  class LandingPage extends components {
    constructor(props) {
        super(props);
        this.state = {
            navigate: false,
            referrer: null,
        };
    }

    handleClick = () => {
        this.setState({referrer: '/'});
    }
    render() {
        const {referrer} = this.state;
        if (referrer) return <Redirect to={referrer} />;
    }
}

export default LandingPage;
