import React from 'react'
import GetStartedHiringManagerLanding from '../components/GetStartedHiringManagerLandingComponent/GetStartedHiringManagerLanding';
import GetStartedHiringManagerSteps from '../components/GetStartedHiringManagerStepsComponent/GetStartedHiringManagerSteps';
function HiringManager(){
    return(
        <div>
            <GetStartedHiringManagerLanding />
            <GetStartedHiringManagerSteps />
        </div>
    );
}

export default HiringManager;