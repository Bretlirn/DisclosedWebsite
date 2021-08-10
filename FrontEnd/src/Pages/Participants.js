import React from 'react';
import GetStartedParticipantSteps from '../components/GetStartedParticipantStepsComponent/GetStartedParticipantSteps';
import GetStartedParticipantVolunteer from '../components/GetStartedParticipantVolunteerComponent/GetStartedParticipantVolunteer';
import GetStartedLanding from '../components/GetStartedLandingComponent/GetStartedLanding';
function Participant(){
    const titleArray = ["Invest in your career", "Get direct feedback from your hiring managers", "Join a community"]
    return(
        <div>
            <GetStartedLanding titles = {titleArray} />
            <GetStartedParticipantSteps />
            <GetStartedParticipantVolunteer />
        </div>
    );
}

export default Participant;