import React from 'react';
import './GetStartedHiringManagerLanding.css';

const GetStartedHiringManagerLanding = () => {
    const GetStartedHiringManagerLandingBoxes = ({title}:{
        title: string;
    }) => {
        return(
            <div className = 'get-started-hiring-manager-landing-boxes'>{title}</div>
        );
    }

    return(
        <div className = 'get-started-hiring-manager-landing-container'>
            <div className = 'get-started-hiring-manager-landing-title'>
                Are you ready to...
            </div>
            <div className = 'get-started-hiring-manager-landing-boxes-container'>
                <GetStartedHiringManagerLandingBoxes title = "Gain exclusive access to Disclosed speaker events" />
                <GetStartedHiringManagerLandingBoxes title = "Pay your advice forward" />
                <GetStartedHiringManagerLandingBoxes title = "Connect with other mentors" />
            </div>
        </div>
    );
}
export default GetStartedHiringManagerLanding;