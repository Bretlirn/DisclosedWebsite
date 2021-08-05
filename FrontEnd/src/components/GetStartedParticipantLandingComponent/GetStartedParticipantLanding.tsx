import React from 'react';
import './GetStartedParticipantLanding.css';

const GetStartedParticipantLanding = () => {
    const GetStartedParticipantLandingBoxes = ({title}:{
        title: string;
    }) => {
        return(
            <div className = 'get-started-participant-landing-boxes'>{title}</div>
        );
    }

    return(
        <div className = 'get-started-participant-landing-container'>
            <div className = 'get-started-participant-landing-title'>
                Are you ready to...
            </div>
            <div className = 'get-started-participant-landing-boxes-container'>
                <GetStartedParticipantLandingBoxes title = "Invest in your career" />
                <GetStartedParticipantLandingBoxes title = "Get direct feedback from your hiring managers" />
                <GetStartedParticipantLandingBoxes title = "Join a community" />
            </div>
        </div>
    );
}
export default GetStartedParticipantLanding;