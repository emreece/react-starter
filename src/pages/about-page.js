import React from 'react';
import { UserContext } from '../contexts/UserContext';

const AboutPage = (props) => {
    const value = React.useContext(UserContext); 
    return <div>
                <h2>About</h2><h3>{value}</h3>
            </div>;
}
export default AboutPage