import React from 'react'
import GetStartedParticipantLanding from '../components/GetStartedParticipantLandingComponent/GetStartedParticipantLanding';
import GetStartedParticipantSteps from '../components/GetStartedParticipantStepsComponent/GetStartedParticipantSteps';
import GetStartedParticipantVolunteer from '../components/GetStartedParticipantVolunteerComponent/GetStartedParticipantVolunteer';
function Participant(){
    return(
        <div>
            <GetStartedParticipantLanding />
            <GetStartedParticipantSteps />
            <GetStartedParticipantVolunteer />
        </div>
    );
}

export default Participant;