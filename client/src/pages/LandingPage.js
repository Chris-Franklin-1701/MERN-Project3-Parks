import React from 'react';
import { Redirect } from 'react-router-dom';

const LandingPage = () => {

    return(
      <header>
        <div className='header'>
            <span className='header-title'>Parks for Rec</span>
        </div>
    </header>
    );
  }
  
  class LandingPage extends Component {
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
