import React from 'react'
import GetStartedHiringManagerSteps from '../components/GetStartedHiringManagerStepsComponent/GetStartedHiringManagerSteps';
import GetStartedLanding from '../components/GetStartedLandingComponent/GetStartedLanding';
function HiringManager(){
    const titleArray = ["Gain exclusive access to Disclosed speaker events", "Pay your advice forward", "Connect with other mentors"]
    return(
        <div>
            <GetStartedLanding titles = {titleArray} />
            <GetStartedHiringManagerSteps />
        </div>
    );
}

export default HiringManager;