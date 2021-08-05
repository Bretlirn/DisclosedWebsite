import React from 'react'
import GetStartedParticipantLanding from '../components/GetStartedParticipantLandingComponent/GetStartedParticipantLanding';
import GetStartedParticipantSteps from '../components/GetStartedParticipantStepsComponent/GetStartedParticipantSteps';
function Participant(){
    return(
        <div>
            <GetStartedParticipantLanding />
            <GetStartedParticipantSteps />
        </div>
    );
}

export default Participant;